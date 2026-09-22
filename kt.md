# KIẾN THỨC NỀN — GIA SƯ TOÁN 9 "KẾT NỐI TRI THỨC VỚI CUỘC SỐNG"

File này là **nguồn kiến thức** cho chatbot: chương trình học, ngân hàng lỗi sai và ngân hàng bài tập mẫu. Cách ứng xử, giọng điệu và các quy tắc dẫn dắt học sinh nằm ở file `tc.md`, không lặp lại ở đây.

Cách dùng: khi học sinh gửi một bài toán hoặc mô tả chỗ mình bị sai, đối chiếu với ngân hàng lỗi sai và ngân hàng bài tập mẫu bên dưới để xác định đúng chương, đúng mã lỗi (nếu có), rồi áp dụng cơ chế bốn cấp gợi ý theo `tc.md`. Nếu bài không trùng khớp bài mẫu nào, vẫn áp dụng đúng logic tương tự (chẩn đoán đúng chỗ sai, không giải hộ) cho bài đó, dựa trên kiến thức Toán học thông thường.

## Phạm vi và giới hạn kiến thức

- **Phạm vi:** toàn bộ nội dung trong file này chỉ lấy từ **sách giáo khoa (SGK) Toán 9, bộ "Kết nối tri thức với cuộc sống"** — đúng chương trình 10 chương, 32 bài như liệt kê bên dưới. Không dùng kiến thức nâng cao, đề chuyên, hay của các bộ sách khác (Cánh Diều, Chân trời sáng tạo...).
- **Giới hạn hiện tại — sách bài tập (SBT):** file này **hiện chưa có** nội dung trích từ SBT Toán 9 (do dữ liệu số hoá trước đó bị lỗi, không đọc được). Khi học sinh hỏi đúng một bài trong SBT, chatbot không có sẵn đề bài hay đáp án của bài đó để đối chiếu — cần dựa vào đề bài do chính học sinh cung cấp (gõ lại hoặc chụp ảnh) để hỗ trợ, tuyệt đối không tự bịa nội dung bài SBT. Giáo viên nên bổ sung dữ liệu SBT vào file này khi có bản số hoá sạch, để nâng phạm vi tra cứu lên đầy đủ SGK + SBT như mục tiêu đề ra.
- Ngân hàng lỗi sai và ngân hàng bài tập mẫu bên dưới được xây dựng bám theo cấu trúc chương trình SGK này; mọi việc gắn mã lỗi, chọn bài luyện tương tự đều phải quy chiếu về đúng chương/bài trong bảng cấu trúc dưới đây.

---

# Cấu trúc chương trình Toán 9 — Bộ sách "Kết nối tri thức với cuộc sống"

Nguồn: SGK Toán 9 Tập 1 & Tập 2, NXB Giáo dục Việt Nam (theo Quyết định 1551/QĐ-BGDĐT).
Dùng file này làm khung tham chiếu duy nhất về "bài nào thuộc chương nào" khi gắn mã lỗi, chọn bài tập, hoặc định tuyến câu hỏi của học sinh.

## TẬP 1 (Đại số + Hình học)

### Chương I. Phương trình và hệ hai phương trình bậc nhất hai ẩn
- Bài 1. Khái niệm phương trình và hệ hai phương trình bậc nhất hai ẩn
- Bài 2. Giải hệ hai phương trình bậc nhất hai ẩn
- Bài 3. Giải bài toán bằng cách lập hệ phương trình

### Chương II. Phương trình và bất phương trình bậc nhất một ẩn
- Bài 4. Phương trình quy về phương trình bậc nhất một ẩn
- Bài 5. Bất đẳng thức và tính chất
- Bài 6. Bất phương trình bậc nhất một ẩn

### Chương III. Căn bậc hai và căn bậc ba
- Bài 7. Căn bậc hai và căn thức bậc hai
- Bài 8. Khai căn bậc hai với phép nhân và phép chia
- Bài 9. Biến đổi đơn giản và rút gọn biểu thức chứa căn thức bậc hai
- Bài 10. Căn bậc ba và căn thức bậc ba

### Chương IV. Hệ thức lượng trong tam giác vuông
- Bài 11. Tỉ số lượng giác của góc nhọn
- Bài 12. Một số hệ thức giữa cạnh, góc trong tam giác vuông và ứng dụng

### Chương V. Đường tròn
- Bài 13. Mở đầu về đường tròn
- Bài 14. Cung và dây của một đường tròn
- Bài 15. Độ dài của cung tròn. Diện tích hình quạt tròn và hình vành khuyên
- Bài 16. Vị trí tương đối của đường thẳng và đường tròn
- Bài 17. Vị trí tương đối của hai đường tròn

## TẬP 2 (Đại số + Thống kê & Xác suất + Hình học)

### Chương VI. Hàm số y = ax² (a≠0). Phương trình bậc hai một ẩn
- Bài 18. Hàm số y = ax² (a≠0)
- Bài 19. Phương trình bậc hai một ẩn
- Bài 20. Định lí Viète và ứng dụng
- Bài 21. Giải bài toán bằng cách lập phương trình

### Chương VII. Tần số và tần số tương đối
- Bài 22. Bảng tần số và biểu đồ tần số
- Bài 23. Bảng tần số tương đối và biểu đồ tần số tương đối
- Bài 24. Bảng tần số, tần số tương đối ghép nhóm và biểu đồ

### Chương VIII. Xác suất của biến cố trong một số mô hình xác suất đơn giản
- Bài 25. Phép thử ngẫu nhiên và không gian mẫu
- Bài 26. Xác suất của biến cố liên quan tới phép thử

### Chương IX. Đường tròn ngoại tiếp và đường tròn nội tiếp
- Bài 27. Góc nội tiếp
- Bài 28. Đường tròn ngoại tiếp và đường tròn nội tiếp của một tam giác
- Bài 29. Tứ giác nội tiếp
- Bài 30. Đa giác đều

### Chương X. Một số hình khối trong thực tiễn
- Bài 31. Hình trụ và hình nón
- Bài 32. Hình cầu

---

## Quy ước mã chương (dùng xuyên suốt các file khác)
| Mã | Chương |
|---|---|
| C1 | Phương trình và hệ hai phương trình bậc nhất hai ẩn |
| C2 | Phương trình và bất phương trình bậc nhất một ẩn |
| C3 | Căn bậc hai và căn bậc ba |
| C4 | Hệ thức lượng trong tam giác vuông |
| C5 | Đường tròn |
| C6 | Hàm số y=ax² và phương trình bậc hai một ẩn |
| C7 | Tần số và tần số tương đối |
| C8 | Xác suất |
| C9 | Đường tròn ngoại tiếp, nội tiếp |
| C10 | Hình khối trong thực tiễn |

---

# Ngân hàng lỗi sai — Toán 9 (Kết nối tri thức)

Mỗi lỗi có: **Mã lỗi** (dùng để gắn vào `error_types`/`submission_errors` trong DB) — **Dạng bài** — **Biểu hiện lỗi** (học sinh thường làm gì) — **Nguyên nhân gốc** (để AI chẩn đoán đúng loại, không chỉ đúng/sai) — **Mức độ** (Nhẹ = bất cẩn/kĩ thuật, Nặng = hổng khái niệm) — **Hướng dẫn 4 cấp gợi ý** (cấp 1 hỏi mở → cấp 4 ví dụ tương tự, KHÔNG giải hộ).

Quy tắc đặt mã: `<Mã chương>-<số thứ tự 2 chữ số>`.

---

## CHƯƠNG I — Phương trình và hệ hai phương trình bậc nhất hai ẩn

**C1-01 | Nhận diện phương trình bậc nhất hai ẩn**
- Biểu hiện: Cho `0x + 0y = 3` hoặc phương trình có bậc cao hơn 1 vẫn nhận là "phương trình bậc nhất hai ẩn".
- Nguyên nhân: Chưa nắm điều kiện `a≠0 hoặc b≠0`.
- Mức độ: Nặng (hổng khái niệm).
- Gợi ý cấp 1: "Định nghĩa phương trình bậc nhất hai ẩn cần điều kiện gì với a và b?"
- Cấp 2: "Em thử kiểm tra xem a và b trong phương trình này có đồng thời bằng 0 không."
- Cấp 3: "Ở đây a = 0 và b = 0 nên không thoả điều kiện — vì vậy đây không phải PT bậc nhất hai ẩn."
- Cấp 4: Đưa ví dụ khác tương tự (không phải bài đang làm) để đối chiếu.

**C1-02 | Giải hệ bằng phương pháp thế/cộng đại số — sai dấu khi chuyển vế hoặc nhân hệ số**
- Biểu hiện: Nhân một phương trình với hệ số để khử ẩn nhưng quên đổi dấu, hoặc chuyển vế không đổi dấu.
- Nguyên nhân: Lỗi kĩ thuật đại số, không phải lỗi hiểu phương pháp.
- Mức độ: Nhẹ.
- Gợi ý cấp 1: "Em thử thay lại nghiệm vào phương trình ban đầu xem có đúng không?"
- Cấp 2: "Kiểm tra lại bước nhân hệ số — dấu của các hạng tử có giữ nguyên không?"
- Cấp 3: Chỉ đúng dòng/bước bị sai dấu.
- Cấp 4: Làm mẫu một phép khử ẩn tương tự với số khác.

**C1-03 | Kết luận sai số nghiệm của hệ (hệ vô nghiệm/vô số nghiệm)**
- Biểu hiện: Sau khi khử ẩn ra `0 = 0` hoặc `0 = k (k≠0)`, học sinh vẫn cố tìm x, y cụ thể.
- Nguyên nhân: Chưa hiểu ý nghĩa hình học (hai đường thẳng song song/trùng nhau).
- Mức độ: Nặng.
- Gợi ý cấp 1: "Khi biến mất hết mà còn lại `0=0` thì điều đó nói lên điều gì về hai phương trình?"
- Cấp 2: Nhắc lại ý nghĩa hình học: hệ số ẩn tỉ lệ → 2 đường thẳng song song hoặc trùng nhau.
- Cấp 3: Chỉ ra dòng biến mất ẩn và hỏi học sinh so sánh với 3 trường hợp đã học.
- Cấp 4: Ví dụ khác có `0=0` để học sinh tự đối chiếu.

**C1-04 | Giải bài toán bằng cách lập hệ phương trình — đặt ẩn/điều kiện ẩn sai**
- Biểu hiện: Không đặt điều kiện cho ẩn (số người, số tuổi phải nguyên dương) hoặc đặt ẩn không đúng đại lượng đề hỏi.
- Nguyên nhân: Kỹ năng đọc hiểu đề, chuyển bài toán thực tế → mô hình toán.
- Mức độ: Nặng.
- Gợi ý cấp 1: "Đề bài hỏi tìm cái gì cuối cùng? Em thử gọi đại lượng đó là ẩn trước."
- Cấp 2: "Đại lượng em vừa gọi có cần điều kiện gì không (nguyên, dương,...)?"
- Cấp 3: Chỉ rõ câu trong đề bị bỏ sót khi lập phương trình.
- Cấp 4: Ví dụ lập hệ với một bài toán tương tự khác.

---

## CHƯƠNG II — Phương trình và bất phương trình bậc nhất một ẩn

**C2-01 | Nhân/chia hai vế bất phương trình với số âm mà không đổi chiều**
- Biểu hiện: `-2x > 4` suy ra `x > -2` (sai, đúng phải là `x < -2`).
- Nguyên nhân: Áp dụng máy móc quy tắc của phương trình sang bất phương trình.
- Mức độ: Nặng — đây là lỗi khái niệm rất phổ biến.
- Gợi ý cấp 1: "Khi chia hai vế bất phương trình cho một số âm, chiều bất đẳng thức có thay đổi không? Em thử với ví dụ số: -2 < 3 nhưng nhân cả hai vế với -1 thì sao?"
- Cấp 2: Nhắc lại tính chất bất đẳng thức khi nhân/chia với số âm.
- Cấp 3: Chỉ đúng bước chia cho số âm mà học sinh quên đổi chiều.
- Cấp 4: Ví dụ số cụ thể minh hoạ quy tắc đổi chiều.

**C2-02 | Phương trình chứa ẩn ở mẫu — quên điều kiện xác định (ĐKXĐ)**
- Biểu hiện: Giải ra nghiệm nhưng không kiểm tra nghiệm có làm mẫu bằng 0 không.
- Nguyên nhân: Bỏ bước đặt ĐKXĐ trước khi quy đồng/khử mẫu.
- Mức độ: Nặng.
- Gợi ý cấp 1: "Trước khi giải phương trình có mẫu chứa ẩn, bước đầu tiên bắt buộc là gì?"
- Cấp 2: "Mẫu số ở đây bằng 0 khi x bằng bao nhiêu? Nghiệm em tìm được có trùng giá trị đó không?"
- Cấp 3: Chỉ ra nghiệm bị loại vì vi phạm ĐKXĐ.
- Cấp 4: Ví dụ khác có nghiệm ngoại lai để đối chiếu cách loại nghiệm.

**C2-03 | Biểu diễn tập nghiệm bất phương trình trên trục số bị sai chiều mũi tên / đóng-mở ngoặc**
- Biểu hiện: Vẽ nhầm tia, hoặc dùng ngoặc vuông cho bất đẳng thức chặt (`<`,`>`).
- Nguyên nhân: Nhầm lẫn kí hiệu ≤/< khi biểu diễn hình học.
- Mức độ: Nhẹ.
- Gợi ý cấp 1: "Dấu bất đẳng thức ở đây có bao gồm dấu bằng không? Điều đó ảnh hưởng gì đến việc vẽ ngoặc tròn hay vuông?"
- Cấp 2: Nhắc quy ước: `<,>` → ngoặc tròn (không lấy điểm mút); `≤,≥` → ngoặc vuông.
- Cấp 3: Chỉ đúng chỗ vẽ sai trên trục số của học sinh.
- Cấp 4: Ví dụ khác minh hoạ cả hai trường hợp.

---

## CHƯƠNG III — Căn bậc hai và căn bậc ba

**C3-01 | Sai điều kiện xác định của căn thức**
- Biểu hiện: Với `√(2x-4)`, học sinh quên yêu cầu `2x-4 ≥ 0` hoặc giải sai bất phương trình điều kiện.
- Nguyên nhân: Chưa liên kết được "biểu thức dưới căn phải không âm" với bất phương trình bậc nhất một ẩn (liên hệ Chương II).
- Mức độ: Nặng.
- Gợi ý cấp 1: "Biểu thức trong dấu căn cần thoả điều kiện gì để căn thức có nghĩa?"
- Cấp 2: "Em hãy viết bất phương trình điều kiện đó ra rồi giải như bài bất phương trình đã học."
- Cấp 3: Chỉ đúng bước thiếu điều kiện.
- Cấp 4: Ví dụ căn thức khác để luyện lại kỹ năng đặt điều kiện.

**C3-02 | Rút gọn sai vì hiểu nhầm `√(a²) = a` (quên trị tuyệt đối)**
- Biểu hiện: `√((-3)²) = -3` thay vì `3`.
- Nguyên nhân: Chưa nắm công thức `√(a²) = |a|`.
- Mức độ: Nặng.
- Gợi ý cấp 1: "√(a²) luôn bằng a hay có trường hợp khác? Em thử với a = -3 xem."
- Cấp 2: Nhắc công thức `√(a²) = |a|`.
- Cấp 3: Chỉ đúng chỗ áp dụng sai.
- Cấp 4: Ví dụ số khác để luyện.

**C3-03 | Trục căn thức ở mẫu — nhân sai biểu thức liên hợp**
- Biểu hiện: Với mẫu `√a + b`, học sinh nhân với `√a - b` sai dấu hoặc quên nhân cả tử.
- Nguyên nhân: Chưa thành thạo kỹ thuật nhân liên hợp / hằng đẳng thức hiệu hai bình phương.
- Mức độ: Nhẹ→Trung bình.
- Gợi ý cấp 1: "Để làm mất căn ở mẫu dạng `√a + b`, em cần nhân với biểu thức nào để dùng được hằng đẳng thức?"
- Cấp 2: Nhắc lại hằng đẳng thức `(x+y)(x-y) = x²-y²`.
- Cấp 3: Chỉ ra bước nhân thiếu ở tử hoặc sai dấu ở mẫu.
- Cấp 4: Ví dụ trục căn thức khác.

**C3-04 | Nhầm lẫn căn bậc hai và căn bậc ba khi rút gọn dấu**
- Biểu hiện: Áp dụng `∛(a³) = a` (đúng, không cần trị tuyệt đối) giống như quy tắc căn bậc hai (sai áp dụng ngược).
- Nguyên nhân: Nhầm tính chất giữa hai loại căn.
- Mức độ: Trung bình.
- Gợi ý cấp 1: "Căn bậc ba của một số âm có xác định không? Khác gì so với căn bậc hai?"
- Cấp 2: So sánh song song hai bảng tính chất căn bậc hai / căn bậc ba.
- Cấp 3: Chỉ đúng chỗ áp dụng nhầm.
- Cấp 4: Ví dụ đối chiếu cả hai loại căn trên cùng một số.

---

## CHƯƠNG IV — Hệ thức lượng trong tam giác vuông

**C4-01 | Nhầm cạnh đối/cạnh kề khi tính tỉ số lượng giác**
- Biểu hiện: Tính `sin` bằng cạnh kề/huyền thay vì cạnh đối/huyền (hoặc ngược lại với `cos`).
- Nguyên nhân: Chưa xác định đúng góc đang xét trước khi gọi tên cạnh.
- Mức độ: Nặng — lỗi nền tảng của cả chương.
- Gợi ý cấp 1: "Em đang tính tỉ số lượng giác của góc nào? Với góc đó, cạnh nào là cạnh đối, cạnh nào là cạnh kề?"
- Cấp 2: Nhắc câu "thần chú" SOH-CAH-TOA / sin-đối-huyền, cos-kề-huyền, tan-đối-kề.
- Cấp 3: Chỉ đúng cạnh học sinh gọi nhầm.
- Cấp 4: Ví dụ một tam giác vuông khác, đổi vị trí góc, để luyện xác định lại.

**C4-02 | Dùng sai hệ thức cạnh-góc-đường cao trong tam giác vuông**
- Biểu hiện: Nhầm giữa hệ thức liên quan đường cao (`h² = b'.c'`) và hệ thức liên quan cạnh góc vuông (`b² = a.b'`).
- Nguyên nhân: Có nhiều hệ thức dễ nhầm, chưa vẽ hình rõ để xác định đúng đoạn thẳng.
- Mức độ: Trung bình.
- Gợi ý cấp 1: "Em vẽ lại hình và đánh dấu rõ đường cao, hình chiếu — hệ thức em đang cần liên quan đến đoạn nào?"
- Cấp 2: Liệt lại bảng hệ thức lượng đã học kèm hình minh hoạ.
- Cấp 3: Chỉ đúng hệ thức bị dùng nhầm.
- Cấp 4: Bài tương tự với số liệu khác.

**C4-03 | Giải tam giác — quên đơn vị góc hoặc bấm máy tính sai chế độ (Deg/Rad)**
- Biểu hiện: Kết quả số đo góc rất lệch với thực tế hình học (vd góc > 180°).
- Nguyên nhân: Máy tính đang ở chế độ Radian thay vì Degree.
- Mức độ: Nhẹ (kỹ thuật) nhưng cần lưu ý vì học sinh dễ không tự phát hiện.
- Gợi ý cấp 1: "Kết quả góc em tính có hợp lý với hình vẽ không? Em kiểm tra lại đơn vị đo góc trên máy tính xem."
- Cấp 2: Hướng dẫn kiểm tra chế độ Deg trên máy tính cầm tay.
- Cấp 3: Chỉ rõ bước bấm máy bị sai chế độ.
- Cấp 4: —

---

## CHƯƠNG V — Đường tròn

**C5-01 | Nhầm lẫn dây cung, cung và góc ở tâm khi so sánh độ dài/số đo**
- Biểu hiện: Cho rằng dây lớn hơn thì cung nhỏ hơn, hoặc áp dụng sai chiều quan hệ "dây lớn hơn ⇔ cung lớn hơn ⇔ góc ở tâm lớn hơn".
- Nguyên nhân: Chưa nắm quan hệ tương ứng 1-1 giữa 3 đại lượng trong cùng một đường tròn.
- Mức độ: Trung bình.
- Gợi ý cấp 1: "Trong một đường tròn, dây càng lớn thì cung căng bởi nó càng lớn hay càng nhỏ? Em thử liên hệ với góc ở tâm."
- Cấp 2: Nhắc định lý liên hệ dây – cung – góc ở tâm.
- Cấp 3: Chỉ rõ chỗ suy luận ngược chiều.
- Cấp 4: Ví dụ minh hoạ bằng hình vẽ khác.

**C5-02 | Xác định sai vị trí tương đối của đường thẳng và đường tròn dựa vào khoảng cách d và bán kính R**
- Biểu hiện: Nhầm điều kiện `d < R` (cắt nhau), `d = R` (tiếp xúc), `d > R` (không giao nhau).
- Nguyên nhân: Học thuộc không gắn với hình ảnh trực quan.
- Mức độ: Trung bình.
- Gợi ý cấp 1: "Em thử vẽ phác 3 trường hợp d<R, d=R, d>R xem tương ứng đường thẳng cắt, tiếp xúc hay không giao đường tròn."
- Cấp 2: Nhắc lại bảng 3 trường hợp.
- Cấp 3: Chỉ ra trường hợp học sinh đang nhầm.
- Cấp 4: Bài tương tự với số liệu d, R khác.

**C5-03 | Tính độ dài cung tròn / diện tích hình quạt — nhầm công thức hoặc quên đổi độ sang radian (hoặc ngược lại)**
- Biểu hiện: Dùng nhầm công thức chu vi đường tròn thay vì công thức độ dài cung `l = (πRn)/180`.
- Nguyên nhân: Nhớ nhầm công thức, hoặc quên n là số đo cung theo độ.
- Mức độ: Nhẹ→Trung bình.
- Gợi ý cấp 1: "Công thức tính độ dài cả đường tròn và công thức tính độ dài một cung có gì khác nhau?"
- Cấp 2: Viết lại công thức và giải thích từng ký hiệu (R, n).
- Cấp 3: Chỉ đúng chỗ thế số nhầm công thức.
- Cấp 4: Bài tương tự với số đo cung khác.

**C5-04 | Chứng minh tiếp tuyến — thiếu bước chỉ ra bán kính vuông góc tại tiếp điểm**
- Biểu hiện: Kết luận "là tiếp tuyến" nhưng không chứng minh đường thẳng vuông góc với bán kính tại điểm thuộc đường tròn.
- Nguyên nhân: Bỏ sót điều kiện đủ của định nghĩa tiếp tuyến trong bài trình bày.
- Mức độ: Trung bình (lỗi trình bày/logic chứng minh).
- Gợi ý cấp 1: "Để chứng minh một đường thẳng là tiếp tuyến của đường tròn, ta cần chỉ ra điều gì theo định nghĩa?"
- Cấp 2: Nhắc dấu hiệu nhận biết tiếp tuyến (vuông góc với bán kính tại điểm thuộc đường tròn ở đầu mút).
- Cấp 3: Chỉ ra bước còn thiếu trong bài chứng minh của học sinh.
- Cấp 4: Sơ đồ chứng minh mẫu của một bài tương tự (không phải bài đang làm).

---

## CHƯƠNG VI — Hàm số y = ax² và phương trình bậc hai một ẩn

**C6-01 | Tính delta (Δ) sai dấu hoặc sai công thức**
- Biểu hiện: `Δ = b² - 4ac` bị nhầm thành `b² + 4ac` hoặc tính sai khi b âm (quên bình phương làm mất dấu âm).
- Nguyên nhân: Lỗi kĩ thuật thay số, đặc biệt khi hệ số âm.
- Mức độ: Nhẹ nhưng rất phổ biến, ảnh hưởng dây chuyền đến toàn bộ bài.
- Gợi ý cấp 1: "Em thử thay từng giá trị a, b, c cẩn thận vào công thức Δ = b² - 4ac, chú ý dấu của b khi bình phương."
- Cấp 2: Nhắc `b²` luôn không âm dù b âm hay dương.
- Cấp 3: Chỉ đúng bước thay số bị sai dấu.
- Cấp 4: Ví dụ tính Δ với hệ số âm khác.

**C6-02 | Kết luận số nghiệm sai theo dấu của Δ**
- Biểu hiện: Δ < 0 nhưng vẫn cố "tìm nghiệm" bằng công thức nghiệm.
- Nguyên nhân: Chưa liên hệ dấu Δ với số nghiệm/vô nghiệm của phương trình.
- Mức độ: Nặng.
- Gợi ý cấp 1: "Δ vừa tính ra âm hay dương? Điều đó cho biết phương trình có bao nhiêu nghiệm?"
- Cấp 2: Nhắc lại bảng: Δ>0 → 2 nghiệm phân biệt; Δ=0 → nghiệm kép; Δ<0 → vô nghiệm.
- Cấp 3: Chỉ ra học sinh đang bỏ qua kết quả Δ.
- Cấp 4: —

**C6-03 | Áp dụng định lí Viète sai dấu tổng/tích nghiệm**
- Biểu hiện: Viết `x1+x2 = b/a` (quên dấu trừ) hoặc `x1.x2 = -c/a` (thừa dấu trừ).
- Nguyên nhân: Nhớ nhầm công thức Viète.
- Mức độ: Trung bình.
- Gợi ý cấp 1: "Em nhắc lại công thức Viète: tổng hai nghiệm bằng gì, tích hai nghiệm bằng gì, theo a, b, c?"
- Cấp 2: Viết lại chính xác `x1+x2 = -b/a`, `x1.x2 = c/a`.
- Cấp 3: Chỉ đúng chỗ sai dấu trong bài làm.
- Cấp 4: Bài luyện Viète khác.

**C6-04 | Vẽ đồ thị y = ax² — lập bảng giá trị sai hoặc nhận diện sai chiều bề lõm**
- Biểu hiện: Với `a<0` vẫn vẽ parabol quay bề lõm lên trên.
- Nguyên nhân: Chưa liên hệ dấu của a với hướng bề lõm của parabol.
- Mức độ: Trung bình.
- Gợi ý cấp 1: "Khi a âm, các giá trị y (trừ tại đỉnh) sẽ dương hay âm? Điều đó cho biết đồ thị nằm phía nào của trục hoành?"
- Cấp 2: Nhắc quy tắc a>0: bề lõm quay lên; a<0: bề lõm quay xuống.
- Cấp 3: Chỉ ra điểm trong bảng giá trị bị tính/vẽ sai.
- Cấp 4: Ví dụ khác với a âm.

---

## CHƯƠNG VII — Tần số và tần số tương đối

**C7-01 | Nhầm tần số và tần số tương đối (quên đổi ra phần trăm hoặc tỉ số)**
- Biểu hiện: Báo cáo tần số tương đối bằng số nguyên (vd "5") thay vì tỉ lệ/phần trăm (vd "25%").
- Nguyên nhân: Chưa phân biệt hai khái niệm: tần số (số lần xuất hiện) và tần số tương đối (tỉ lệ so với tổng số).
- Mức độ: Trung bình.
- Gợi ý cấp 1: "Tần số tương đối là tỉ lệ so với cái gì? Em thử tính lại theo công thức."
- Cấp 2: Nhắc công thức `tần số tương đối = tần số / tổng số lần quan sát`.
- Cấp 3: Chỉ đúng dòng bị nhầm đơn vị.
- Cấp 4: —

**C7-02 | Ghép nhóm dữ liệu sai (sai độ rộng nhóm hoặc trùng/thiếu giá trị biên)**
- Biểu hiện: Các khoảng ghép nhóm chồng lấn nhau (vd `[0-10]` và `[10-20]` đều chứa giá trị 10) hoặc bỏ sót dữ liệu ở biên.
- Nguyên nhân: Chưa quy ước rõ nửa khoảng đóng/mở khi ghép nhóm.
- Mức độ: Trung bình.
- Gợi ý cấp 1: "Giá trị đúng bằng 10 sẽ thuộc nhóm nào trong hai nhóm em vừa chia? Có bị đếm hai lần không?"
- Cấp 2: Nhắc quy ước dùng nửa khoảng, ví dụ `[0;10)` và `[10;20)`.
- Cấp 3: Chỉ đúng nhóm bị chồng lấn.
- Cấp 4: —

---

## CHƯƠNG VIII — Xác suất của biến cố

**C8-01 | Đếm sai số phần tử của không gian mẫu**
- Biểu hiện: Bỏ sót hoặc đếm trùng các kết quả có thể xảy ra khi liệt kê không gian mẫu.
- Nguyên nhân: Thiếu phương pháp liệt kê có hệ thống (vd không dùng bảng/cây).
- Mức độ: Nặng — ảnh hưởng trực tiếp đến kết quả xác suất.
- Gợi ý cấp 1: "Em đã liệt kê tất cả các trường hợp có thể xảy ra theo một trật tự nào đó chưa (vd theo bảng)? Thử liệt kê lại có hệ thống."
- Cấp 2: Gợi ý dùng bảng hoặc sơ đồ cây để liệt kê không sót không trùng.
- Cấp 3: Chỉ ra trường hợp bị đếm thiếu/thừa cụ thể.
- Cấp 4: Ví dụ liệt kê không gian mẫu của một phép thử tương tự.

**C8-02 | Nhầm biến cố và số phần tử thuận lợi cho biến cố**
- Biểu hiện: Tính xác suất bằng cách lấy tổng số phần tử không gian mẫu chia cho số phần tử thuận lợi (ngược tử số – mẫu số).
- Nguyên nhân: Nhớ nhầm công thức `P(A) = số kết quả thuận lợi / số kết quả có thể`.
- Mức độ: Trung bình.
- Gợi ý cấp 1: "Công thức tính xác suất, tử số là số kết quả nào, mẫu số là số kết quả nào?"
- Cấp 2: Viết lại công thức `P(A) = n(A)/n(Ω)`.
- Cấp 3: Chỉ ra học sinh đang để ngược tử/mẫu.
- Cấp 4: —

---

## CHƯƠNG IX — Đường tròn ngoại tiếp và nội tiếp

**C9-01 | Nhầm lẫn góc nội tiếp và góc ở tâm cùng chắn một cung**
- Biểu hiện: Cho rằng góc nội tiếp bằng góc ở tâm (thay vì bằng nửa góc ở tâm).
- Nguyên nhân: Chưa nắm định lý góc nội tiếp.
- Mức độ: Nặng — định lý nền tảng của cả chương.
- Gợi ý cấp 1: "Góc nội tiếp và góc ở tâm cùng chắn một cung có quan hệ gì về số đo?"
- Cấp 2: Nhắc định lý: góc nội tiếp bằng nửa góc ở tâm cùng chắn một cung.
- Cấp 3: Chỉ đúng chỗ học sinh cho hai góc bằng nhau.
- Cấp 4: Ví dụ hình khác minh hoạ định lý.

**C9-02 | Chứng minh tứ giác nội tiếp — chọn sai dấu hiệu nhận biết**
- Biểu hiện: Dùng dấu hiệu "tổng hai góc đối bằng 180°" trong khi dữ kiện bài cho lại phù hợp với dấu hiệu "hai đỉnh kề nhìn cạnh dưới góc bằng nhau", dẫn đến chứng minh không thực hiện được hoặc sai.
- Nguyên nhân: Chưa phân loại 4 dấu hiệu nhận biết tứ giác nội tiếp để chọn đúng dấu hiệu phù hợp dữ kiện.
- Mức độ: Trung bình (kỹ năng chọn chiến lược chứng minh).
- Gợi ý cấp 1: "Dữ kiện bài cho liên quan đến góc đối hay đến hai điểm cùng nhìn một đoạn thẳng dưới góc bằng nhau?"
- Cấp 2: Liệt lại 4 dấu hiệu nhận biết tứ giác nội tiếp đã học.
- Cấp 3: Gợi ý đúng dấu hiệu nên dùng cho bài này (không giải hộ).
- Cấp 4: Ví dụ áp dụng dấu hiệu đó cho một tứ giác khác.

**C9-03 | Tính diện tích/chu vi đa giác đều — nhầm bán kính đường tròn ngoại tiếp và nội tiếp (R và r)**
- Biểu hiện: Dùng R (ngoại tiếp) trong công thức cần r (nội tiếp/apothem) hoặc ngược lại.
- Nguyên nhân: Chưa phân biệt rõ hai loại bán kính trong đa giác đều.
- Mức độ: Trung bình.
- Gợi ý cấp 1: "R và r trong đa giác đều, cái nào là khoảng cách tâm đến đỉnh, cái nào là khoảng cách tâm đến cạnh?"
- Cấp 2: Vẽ hình minh hoạ 2 bán kính.
- Cấp 3: Chỉ đúng công thức bị dùng nhầm bán kính.
- Cấp 4: —

---

## CHƯƠNG X — Một số hình khối trong thực tiễn

**C10-01 | Nhầm công thức diện tích xung quanh và diện tích toàn phần**
- Biểu hiện: Tính diện tích toàn phần hình trụ/hình nón nhưng quên cộng diện tích đáy, hoặc ngược lại cộng thừa khi đề chỉ hỏi xung quanh.
- Nguyên nhân: Chưa đọc kỹ đề hỏi "xung quanh" hay "toàn phần".
- Mức độ: Nhẹ→Trung bình.
- Gợi ý cấp 1: "Đề bài hỏi diện tích xung quanh hay diện tích toàn phần? Hai đại lượng này khác nhau ở chỗ nào?"
- Cấp 2: Nhắc công thức: `Toàn phần = Xung quanh + diện tích (các) đáy`.
- Cấp 3: Chỉ đúng phần bị thiếu/thừa trong bài làm.
- Cấp 4: —

**C10-02 | Nhầm lẫn bán kính và đường kính khi thế số vào công thức**
- Biểu hiện: Đề cho đường kính nhưng học sinh thế thẳng vào công thức cần bán kính (thiếu bước chia 2).
- Nguyên nhân: Đọc đề vội, không phân biệt rõ đại lượng đề cho.
- Mức độ: Nhẹ nhưng rất phổ biến.
- Gợi ý cấp 1: "Đề cho đường kính hay bán kính? Công thức em dùng cần đại lượng nào?"
- Cấp 2: Nhắc `R = d/2`.
- Cấp 3: Chỉ đúng bước thế số nhầm.
- Cấp 4: —

**C10-03 | Nhầm đơn vị thể tích/diện tích khi đổi đơn vị đo**
- Biểu hiện: Đổi cm sang m cho cạnh nhưng quên rằng thể tích phải đổi theo luỹ thừa 3 (không phải nhân 1 lần hệ số đổi).
- Nguyên nhân: Chưa nắm quy tắc đổi đơn vị cho đại lượng diện tích (luỹ thừa 2) và thể tích (luỹ thừa 3).
- Mức độ: Trung bình.
- Gợi ý cấp 1: "Khi đổi 1m = 100cm, thì 1m³ đổi ra cm³ có phải nhân 100 hay nhân 100³?"
- Cấp 2: Nhắc quy tắc đổi đơn vị diện tích (bình phương hệ số dài), thể tích (lập phương hệ số dài).
- Cấp 3: Chỉ đúng bước đổi đơn vị sai.
- Cấp 4: Ví dụ đổi đơn vị khác để luyện lại.

---

## Bảng tổng hợp phân loại lỗi theo NHÓM (dùng để thống kê cho đề tài NCKH)

| Nhóm lỗi | Mô tả | Ví dụ mã |
|---|---|---|
| A. Lỗi khái niệm | Chưa hiểu bản chất định nghĩa/định lý | C1-01, C1-03, C2-01, C3-02, C6-02, C9-01 |
| B. Lỗi kỹ năng tính toán/kĩ thuật | Hiểu đúng hướng nhưng thao tác sai (dấu, số) | C1-02, C6-01, C10-02 |
| C. Lỗi đọc hiểu đề / mô hình hoá | Hiểu sai yêu cầu đề, đặt ẩn/điều kiện sai | C1-04, C10-01 |
| D. Lỗi thiếu điều kiện / thiếu bước lập luận | Bỏ sót bước bắt buộc (ĐKXĐ, chứng minh) | C2-02, C3-01, C5-04 |
| E. Lỗi chọn sai chiến lược/công thức | Có nhiều công thức/dấu hiệu, chọn nhầm cái phù hợp | C4-02, C9-02, C9-03 |
| F. Lỗi trình bày/đơn vị | Đúng bản chất nhưng sai đơn vị, kí hiệu, chế độ máy tính | C4-03, C7-01, C10-03 |

Bảng nhóm này chính là cột "loại lỗi" bạn dùng để vẽ biểu đồ thống kê trong phần "Kết quả thực nghiệm" của đề tài — vì nhóm A/D/E phản ánh năng lực khái niệm–tư duy, còn nhóm B/F phản ánh kỹ năng thao tác, giúp phân tích sâu hơn "học sinh yếu ở đâu" thay vì chỉ báo tỉ lệ đúng/sai.

---

# Ngân hàng bài tập mẫu có lời giải từng bước — Toán 9 (KNTT)

Mỗi bài gồm: **Mã bài** — **Chương/Bài học** — **Mức độ** — **Đề bài** — **Lời giải từng bước** (đánh số, để AI so khớp bài làm học sinh theo từng bước) — **Mã lỗi liên quan** (tham chiếu `ngan-hang-loi-sai.md`) — **Bài luyện tương tự để đề xuất tiếp theo** (mô tả ngắn, dùng cho engine cá nhân hoá).

Định dạng lời giải từng bước là bắt buộc: đây là "đáp án chuẩn" mà engine chẩn đoán lỗi (Giai đoạn 3 trong kế hoạch tổng) dùng để so sánh với bài làm học sinh và xác định SAI Ở BƯỚC NÀO.

---

### BT-C1-01 | Chương I, Bài 2 — Giải hệ phương trình bậc nhất hai ẩn | Mức: Cơ bản
**Đề bài:** Giải hệ phương trình: `2x - y = 3` và `x + y = 3`.

**Lời giải từng bước:**
1. Cộng vế theo vế hai phương trình để khử y: `(2x - y) + (x + y) = 3 + 3` → `3x = 6`.
2. Giải ra `x = 2`.
3. Thế `x = 2` vào phương trình `x + y = 3` → `2 + y = 3` → `y = 1`.
4. Kết luận nghiệm của hệ: `(x; y) = (2; 1)`.
5. (Khuyến khích) Thử lại: `2(2) - 1 = 3` ✓ và `2 + 1 = 3` ✓.

**Mã lỗi liên quan:** C1-02 (sai dấu khi cộng/khử ẩn), C1-03 (nếu học sinh nhầm sang trường hợp vô nghiệm/vô số nghiệm dù hệ có nghiệm duy nhất).

**Bài luyện tương tự tiếp theo:** Hệ `3x + y = 7`, `x - y = 1` (cùng dạng, đổi hệ số, học sinh cần tự chọn cộng hay trừ để khử ẩn).

---

### BT-C2-01 | Chương II, Bài 6 — Bất phương trình bậc nhất một ẩn | Mức: Cơ bản
**Đề bài:** Giải bất phương trình: `-3x + 6 ≤ 0`.

**Lời giải từng bước:**
1. Chuyển vế: `-3x ≤ -6`.
2. Chia cả hai vế cho `-3` (số âm) → **đổi chiều bất đẳng thức**: `x ≥ 2`.
3. Kết luận tập nghiệm: `{x | x ≥ 2}`.
4. Biểu diễn trên trục số: tô đậm từ 2 trở đi, dùng dấu ngoặc vuông tại 2 (vì có dấu "=").

**Mã lỗi liên quan:** C2-01 (quên đổi chiều khi chia cho số âm — lỗi rất hay gặp ở bước 2), C2-03 (vẽ sai ngoặc ở bước 4).

**Bài luyện tương tự tiếp theo:** `-2x - 4 > 0` (vẫn có hệ số âm để tiếp tục củng cố lỗi C2-01 nếu học sinh còn sai; nếu đã đúng 2 lần liên tiếp thì chuyển sang bất phương trình có ẩn hai vế).

---

### BT-C3-01 | Chương III, Bài 9 — Rút gọn biểu thức chứa căn thức bậc hai | Mức: Trung bình
**Đề bài:** Rút gọn biểu thức `A = √(x-1) + √(4x-4)` với điều kiện `x ≥ 1`.

**Lời giải từng bước:**
1. Xác định điều kiện: biểu thức có nghĩa khi `x - 1 ≥ 0` và `4x - 4 ≥ 0`, tức là `x ≥ 1` (đề đã cho sẵn, học sinh cần đối chiếu).
2. Phân tích `4x - 4 = 4(x-1)`.
3. Viết `√(4x-4) = √(4(x-1)) = √4 . √(x-1) = 2√(x-1)` (vì `x-1 ≥ 0` nên không cần trị tuyệt đối ở đây).
4. Cộng: `A = √(x-1) + 2√(x-1) = 3√(x-1)`.

**Mã lỗi liên quan:** C3-01 (bỏ qua/làm sai điều kiện xác định ở bước 1), C3-02 (quên xử lý trị tuyệt đối đúng cách ở bước 3 khi điều kiện đổi dấu).

**Bài luyện tương tự tiếp theo:** `B = √(9x+9) - √(x+1)` với `x ≥ -1` (cùng kỹ thuật đưa thừa số ra ngoài dấu căn).

---

### BT-C4-01 | Chương IV, Bài 11 — Tỉ số lượng giác của góc nhọn | Mức: Cơ bản
**Đề bài:** Cho tam giác ABC vuông tại A, có `AB = 3cm`, `AC = 4cm`. Tính `sinB`, `cosB`, `tanB`.

**Lời giải từng bước:**
1. Tính cạnh huyền: `BC = √(AB² + AC²) = √(3² + 4²) = √25 = 5cm`.
2. Xác định với góc B: cạnh đối là AC, cạnh kề là AB, cạnh huyền là BC.
3. `sinB = đối/huyền = AC/BC = 4/5`.
4. `cosB = kề/huyền = AB/BC = 3/5`.
5. `tanB = đối/kề = AC/AB = 4/3`.

**Mã lỗi liên quan:** C4-01 (nhầm cạnh đối/kề — lỗi phổ biến nhất chương này, đặc biệt khi xác định sai góc đang xét).

**Bài luyện tương tự tiếp theo:** Cùng tam giác nhưng yêu cầu tính `sinC, cosC, tanC` (đổi góc xét → cạnh đối/kề đảo vai trò, kiểm tra học sinh có hiểu bản chất hay chỉ học vẹt công thức của góc B).

---

### BT-C5-01 | Chương V, Bài 16 — Vị trí tương đối của đường thẳng và đường tròn | Mức: Cơ bản
**Đề bài:** Cho đường tròn (O; 5cm). Đường thẳng d cách tâm O một khoảng `d(O,d) = 3cm`. Xác định vị trí tương đối của d và đường tròn (O).

**Lời giải từng bước:**
1. So sánh khoảng cách từ tâm đến đường thẳng (kí hiệu là h = 3cm) với bán kính R = 5cm.
2. Nhận thấy `h < R` (3 < 5).
3. Áp dụng định lý: nếu khoảng cách nhỏ hơn bán kính thì đường thẳng cắt đường tròn tại 2 điểm.
4. Kết luận: d cắt (O) tại hai điểm phân biệt.

**Mã lỗi liên quan:** C5-02 (nhầm chiều so sánh d và R dẫn tới kết luận ngược — vd cho là "không giao nhau").

**Bài luyện tương tự tiếp theo:** Đường tròn (O; 4cm), khoảng cách 4cm (trường hợp tiếp xúc) — buộc học sinh phân biệt được ranh giới `d = R`.

---

### BT-C6-01 | Chương VI, Bài 19 — Phương trình bậc hai một ẩn | Mức: Trung bình
**Đề bài:** Giải phương trình: `x² - 5x + 6 = 0`.

**Lời giải từng bước:**
1. Xác định hệ số: `a = 1, b = -5, c = 6`.
2. Tính `Δ = b² - 4ac = (-5)² - 4(1)(6) = 25 - 24 = 1`.
3. Vì `Δ = 1 > 0` nên phương trình có hai nghiệm phân biệt.
4. `x1 = (-b + √Δ)/2a = (5 + 1)/2 = 3`.
5. `x2 = (-b - √Δ)/2a = (5 - 1)/2 = 2`.
6. Kết luận: phương trình có hai nghiệm `x1 = 3, x2 = 2`.

**Mã lỗi liên quan:** C6-01 (tính sai Δ, đặc biệt hay quên `(-5)² = 25` chứ không phải `-25`), C6-02 (kết luận sai số nghiệm nếu tính nhầm Δ ra âm/dương).

**Bài luyện tương tự tiếp theo:** `2x² - 7x + 3 = 0` (hệ số a≠1, đòi hỏi cẩn thận hơn khi tính Δ và chia 2a).

---

### BT-C6-02 | Chương VI, Bài 20 — Định lí Viète và ứng dụng | Mức: Trung bình
**Đề bài:** Không giải phương trình, hãy tính tổng và tích hai nghiệm của phương trình `2x² - 7x + 3 = 0` (nếu có).

**Lời giải từng bước:**
1. Xác định `a = 2, b = -7, c = 3`.
2. Kiểm tra điều kiện có nghiệm: `Δ = (-7)² - 4(2)(3) = 49 - 24 = 25 > 0` → có 2 nghiệm phân biệt.
3. Áp dụng Viète: `x1 + x2 = -b/a = 7/2`.
4. `x1 . x2 = c/a = 3/2`.
5. Kết luận: tổng hai nghiệm là `7/2`, tích hai nghiệm là `3/2`.

**Mã lỗi liên quan:** C6-03 (sai dấu công thức tổng nghiệm — hay quên dấu trừ trước b/a), C6-02 (quên kiểm tra Δ trước khi áp dụng Viète).

**Bài luyện tương tự tiếp theo:** Bài toán ngược: "Tìm m để phương trình có tổng hai nghiệm bằng 5" (nâng độ khó, đòi hỏi lập phương trình theo m).

---

### BT-C8-01 | Chương VIII, Bài 26 — Xác suất của biến cố | Mức: Cơ bản
**Đề bài:** Gieo một con xúc xắc 6 mặt cân đối một lần. Tính xác suất để xuất hiện mặt có số chấm là số chẵn.

**Lời giải từng bước:**
1. Liệt kê không gian mẫu: `Ω = {1,2,3,4,5,6}`, có `n(Ω) = 6` kết quả có thể.
2. Xác định biến cố A: "xuất hiện mặt số chẵn" → `A = {2,4,6}`, có `n(A) = 3`.
3. Áp dụng công thức: `P(A) = n(A)/n(Ω) = 3/6 = 1/2`.
4. Kết luận: xác suất là `1/2`.

**Mã lỗi liên quan:** C8-01 (đếm thiếu/sai không gian mẫu — ít gặp ở bài đơn giản này nhưng phổ biến ở bài phức tạp hơn với 2 xúc xắc), C8-02 (để ngược tử/mẫu trong công thức ở bước 3).

**Bài luyện tương tự tiếp theo:** Gieo đồng thời 2 đồng xu, tính xác suất "có đúng 1 mặt ngửa" (không gian mẫu phức tạp hơn, cần liệt kê có hệ thống → rèn đúng lỗi C8-01).

---

### BT-C9-01 | Chương IX, Bài 27 — Góc nội tiếp | Mức: Trung bình
**Đề bài:** Cho đường tròn (O), góc ở tâm `AOB = 80°` chắn cung nhỏ AB. Tính số đo góc nội tiếp `ACB` (C thuộc cung lớn AB).

**Lời giải từng bước:**
1. Xác định góc nội tiếp ACB và góc ở tâm AOB cùng chắn cung nhỏ AB.
2. Áp dụng định lý góc nội tiếp: góc nội tiếp bằng nửa góc ở tâm cùng chắn một cung.
3. Tính: `ACB = AOB / 2 = 80° / 2 = 40°`.
4. Kết luận: `ACB = 40°`.

**Mã lỗi liên quan:** C9-01 (cho rằng góc nội tiếp bằng góc ở tâm, tức quên chia 2 — lỗi nền tảng nhất của chương).

**Bài luyện tương tự tiếp theo:** Bài ngược: cho góc nội tiếp, tính góc ở tâm (nhân 2 thay vì chia 2 — kiểm tra học sinh có hiểu chiều ngược lại không).

---

### BT-C10-01 | Chương X, Bài 31 — Hình trụ và hình nón | Mức: Cơ bản
**Đề bài:** Một hình trụ có bán kính đáy `r = 3cm`, chiều cao `h = 10cm`. Tính diện tích xung quanh và thể tích của hình trụ.

**Lời giải từng bước:**
1. Công thức diện tích xung quanh hình trụ: `Sxq = 2πrh`.
2. Thế số: `Sxq = 2π(3)(10) = 60π (cm²)`.
3. Công thức thể tích hình trụ: `V = πr²h`.
4. Thế số: `V = π(3²)(10) = 90π (cm³)`.

**Mã lỗi liên quan:** C10-01 (nhầm công thức xung quanh và toàn phần nếu đề đổi câu hỏi), C10-02 (nếu đề cho đường kính thay vì bán kính, học sinh quên chia 2 trước khi thế vào công thức).

**Bài luyện tương tự tiếp theo:** Hình nón có cùng bán kính đáy và chiều cao — so sánh công thức diện tích/thể tích giữa trụ và nón để tránh nhầm lẫn công thức giữa hai hình.

---

## Cách dùng file này trong hệ thống

1. **Engine chẩn đoán lỗi** (Giai đoạn 3): khi học sinh nộp bài trùng mã bài (vd BT-C6-01), hệ thống lấy đúng "Lời giải từng bước" ở trên làm chuẩn để AI so khớp, xác định học sinh dừng đúng ở bước mấy và tra "Mã lỗi liên quan" để phân loại.
2. **Engine cá nhân hoá** (Giai đoạn 4): trường "Bài luyện tương tự tiếp theo" của mỗi bài chính là gợi ý mặc định khi học sinh cần luyện thêm cùng dạng lỗi.
3. **Chatbot dẫn dắt** (Giai đoạn 5): các bước trong "Lời giải từng bước" là nguồn để sinh gợi ý cấp 3–4 (chỉ đúng bước sai / đưa ví dụ tương tự) — chatbot KHÔNG được đọc nguyên văn các bước này cho học sinh, chỉ dùng để diễn giải lại dưới dạng câu hỏi gợi mở.

> File này hiện có 10 bài mẫu (đại diện đủ 10 chương). Khi triển khai thật, giáo viên nên bổ sung 3–5 bài mỗi bài học (thay vì mỗi chương một bài) để ngân hàng đủ dày cho việc luyện tập đa dạng — cấu trúc mã và định dạng giữ nguyên như trên.
