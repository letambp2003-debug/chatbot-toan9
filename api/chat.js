// api/chat.js
// Hàm serverless (Vercel) đóng vai trò "máy chủ trung gian":
// giữ (các) khoá Gemini API bí mật ở phía server (biến môi trường),
// học sinh chỉ gọi tới đây, KHÔNG bao giờ thấy khoá API.
//
// Cấu hình cần làm trên Vercel (Project Settings → Environment Variables):
//   GEMINI_API_KEYS = AIzaXXXX,AIzaYYYY,AIzaZZZZ   (nhiều khoá cách nhau bởi dấu phẩy, không có khoảng trắng)
// (chỉ có 1 khoá cũng được, vẫn ghi vào GEMINI_API_KEYS)

export const config = { runtime: "nodejs" };

function getKeys() {
  var raw = process.env.GEMINI_API_KEYS || process.env.GEMINI_API_KEY || "";
  return raw
    .split(/[,;\n]+/)
    .map(function (s) { return s.trim(); })
    .filter(Boolean);
}

// Xoay vòng đơn giản giữa các khoá trong bộ nhớ của tiến trình (đủ dùng cho quy mô lớp học;
// sẽ tự reset về 0 mỗi khi Vercel khởi động lại tiến trình — không ảnh hưởng gì tới người dùng).
var keyIdx = 0;

var ALLOWED_MODEL = /^[a-zA-Z0-9.\-]{3,60}$/;

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  var keys = getKeys();
  if (!keys.length) {
    res.status(500).json({
      error: "Server chưa được cấu hình khoá API. Quản trị viên cần thêm biến môi trường GEMINI_API_KEYS trong Vercel.",
    });
    return;
  }

  var payload = req.body || {};
  var systemPrompt = payload.systemPrompt;
  var contents = payload.contents;
  var model = payload.model;

  if (typeof systemPrompt !== "string" || !systemPrompt.trim() || !Array.isArray(contents) || !contents.length) {
    res.status(400).json({ error: "Thiếu dữ liệu gửi lên (systemPrompt hoặc contents)." });
    return;
  }
  if (!model || !ALLOWED_MODEL.test(model)) {
    model = "gemini-3.8-flash";
  }

  var lastErr = null;

  for (var attempt = 0; attempt < keys.length; attempt++) {
    var idx = (keyIdx + attempt) % keys.length;
    var key = keys[idx];
    try {
      var upstream = await fetch(
        "https://generativelanguage.googleapis.com/v1beta/models/" + model + ":generateContent?key=" + key,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            system_instruction: { parts: [{ text: systemPrompt }] },
            contents: contents,
            generationConfig: { temperature: 0.6, maxOutputTokens: 900 },
          }),
        }
      );

      var data = await upstream.json().catch(function () { return {}; });

      if (!upstream.ok) {
        var msg = (data.error && data.error.message) || ("Lỗi HTTP " + upstream.status);
        var isQuota = upstream.status === 429 || /RESOURCE_EXHAUSTED|quota/i.test(msg);
        if (isQuota && attempt + 1 < keys.length) {
          lastErr = msg;
          continue; // thử khoá kế tiếp
        }
        res.status(upstream.status).json({ error: msg });
        return;
      }

      keyIdx = (idx + 1) % keys.length; // lần gọi tới bắt đầu từ khoá kế tiếp, chia đều tải
      res.status(200).json(data);
      return;
    } catch (e) {
      lastErr = (e && e.message) || String(e);
    }
  }

  res.status(502).json({ error: lastErr || "Không gọi được Gemini API. Thử lại sau ít phút." });
}
