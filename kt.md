# KIẾN THỨC NỀN — GIA SƯ TOÁN 9 "KẾT NỐI TRI THỨC VỚI CUỘC SỐNG"

File này là **nguồn kiến thức** cho chatbot: chương trình học, ngân hàng lỗi sai và ngân hàng bài tập mẫu. Cách ứng xử, giọng điệu và các quy tắc dẫn dắt học sinh nằm ở file `tc.md`, không lặp lại ở đây.

Cách dùng: khi học sinh gửi một bài toán hoặc mô tả chỗ mình bị sai, đối chiếu với ngân hàng lỗi sai và ngân hàng bài tập mẫu bên dưới để xác định đúng chương, đúng mã lỗi (nếu có), rồi áp dụng cơ chế bốn cấp gợi ý theo `tc.md`. Nếu bài không trùng khớp bài mẫu nào, vẫn áp dụng đúng logic tương tự (chẩn đoán đúng chỗ sai, không giải hộ) cho bài đó, dựa trên kiến thức Toán học thông thường.

## Phạm vi và giới hạn kiến thức

- **Phạm vi:** toàn bộ nội dung trong file này bám sát **Bộ sách giáo khoa Thống Nhất (Sách giáo khoa và Sách bài tập Toán 9 Tập 1 & Tập 2 — Kết nối tri thức với cuộc sống)** — đầy đủ **10 chương, 32 bài học** (tương ứng 20 tệp tài liệu chuẩn trong thư mục `TOAN9/SGK/` và `TOAN9/SBT/`). Không dùng kiến thức nâng cao ngoài chương trình THCS, đề thi chuyên, hay các bộ sách khác.
- **Tích hợp SGK + SBT:** cấu trúc 32 bài học, hệ thống công thức, bài tập rèn luyện và ngân hàng mã lỗi bên dưới bao quát toàn bộ kiến thức từ Chương I đến Chương X (cả Tập 1 và Tập 2). Nếu học sinh hỏi một bài tập cụ thể trong SBT chưa trích nguyên văn đề bài, chatbot đề nghị học sinh gõ lại hoặc chụp ảnh đề bài để chẩn đoán lỗi và dẫn dắt theo 4 cấp gợi ý, tuyệt đối không tự bịa đề bài.
- Ngân hàng lỗi sai và ngân hàng bài tập mẫu bên dưới được xây dựng bám theo cấu trúc chương trình 10 chương – 32 bài này; mọi việc gắn mã lỗi, chọn bài luyện tương tự đều phải quy chiếu về đúng mã lỗi và đúng chương/bài trong bảng cấu trúc dưới đây.

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

# Ngân hàng lỗi sai — Toàn bộ chương trình Toán 9 (10 Chương – 32 Bài, 55 Mã lỗi)

Mỗi lỗi có: **Mã lỗi** (`<Mã chương>-<số thứ tự 2 chữ số>`) — **Bài học** — **Nhóm lỗi (A–F)** — **Biểu hiện lỗi** (học sinh thường làm gì) — **Nguyên nhân gốc** — **Mức độ** (Nhẹ / Trung bình / Nặng) — **Hướng dẫn 4 cấp gợi ý** (Cấp 1 hỏi mở → Cấp 4 ví dụ tương tự, KHÔNG giải hộ).

---

## CHƯƠNG I — Phương trình và hệ hai phương trình bậc nhất hai ẩn (Bài 1–3)

**C1-01 | Nhận diện phương trình bậc nhất hai ẩn** *(Bài 1 • Nhóm A)*
- Biểu hiện: Cho `0x + 0y = 3` hoặc phương trình có bậc cao hơn 1, chứa tích `xy` vẫn nhận là "phương trình bậc nhất hai ẩn".
- Nguyên nhân: Chưa nắm điều kiện `a ≠ 0 hoặc b ≠ 0` và bậc của mỗi ẩn bằng 1.
- Mức độ: Nặng (hổng khái niệm).
- Gợi ý cấp 1: "Định nghĩa phương trình bậc nhất hai ẩn $ax + by = c$ cần điều kiện gì với $a$ và $b$?"
- Cấp 2: "Em thử kiểm tra xem $a$ và $b$ trong phương trình này có đồng thời bằng $0$ không, và bậc của $x, y$ là bao nhiêu."
- Cấp 3: "Ở đây $a = 0$ và $b = 0$ (hoặc có hạng tử bậc khác 1) nên không thoả điều kiện — vì vậy đây không phải PT bậc nhất hai ẩn."
- Cấp 4: Đưa ví dụ khác tương tự (không phải bài đang làm) để đối chiếu.

**C1-02 | Giải hệ bằng phương pháp thế/cộng đại số — sai dấu khi chuyển vế hoặc nhân hệ số** *(Bài 2 • Nhóm B)*
- Biểu hiện: Nhân một phương trình với hệ số để khử ẩn nhưng quên nhân vế phải, quên đổi dấu khi chuyển vế hoặc khi trừ vế theo vế.
- Nguyên nhân: Lỗi kĩ thuật đại số, không phải lỗi hiểu phương pháp.
- Mức độ: Nhẹ.
- Gợi ý cấp 1: "Em thử thay cặp $(x; y)$ vừa tìm được vào cả hai phương trình ban đầu xem có đúng không?"
- Cấp 2: "Kiểm tra lại bước chuyển vế hoặc nhân hệ số — vế phải đã nhân cùng hệ số chưa, dấu của các hạng tử khi trừ hai vế có đổi đủ không?"
- Cấp 3: Chỉ đúng dòng/bước bị sai dấu hoặc nhân thiếu.
- Cấp 4: Làm mẫu một phép khử ẩn tương tự với số khác.

**C1-03 | Kết luận sai số nghiệm của hệ (hệ vô nghiệm / vô số nghiệm)** *(Bài 1–2 • Nhóm A)*
- Biểu hiện: Sau khi khử ẩn ra `0 = 0` hoặc `0 = k (k ≠ 0)`, học sinh lúng túng hoặc vẫn cố tìm $x, y$ cụ thể.
- Nguyên nhân: Chưa hiểu ý nghĩa hình học (hai đường thẳng song song hoặc trùng nhau).
- Mức độ: Nặng.
- Gợi ý cấp 1: "Khi biến mất hết ẩn mà còn lại đẳng thức đúng `0 = 0` (hoặc vô lý `0 = k`) thì điều đó nói lên điều gì về nghiệm của hệ?"
- Cấp 2: Nhắc lại: `0 = 0` (luôn đúng) → hệ vô số nghiệm; `0 = k (k ≠ 0)` (vô lý) → hệ vô nghiệm.
- Cấp 3: Chỉ ra dòng biến mất ẩn và hỏi học sinh đối chiếu 3 trường hợp nghiệm của hệ.
- Cấp 4: Ví dụ khác có `0 = 0` và `0 = 5` để học sinh tự đối chiếu.

**C1-04 | Giải bài toán bằng cách lập hệ phương trình — đặt ẩn/điều kiện ẩn sai** *(Bài 3 • Nhóm C)*
- Biểu hiện: Không đặt điều kiện cho ẩn (số người/đồ vật phải thuộc $\mathbb{N}^*$, vận tốc $> 0$, chữ số $0 \le x \le 9$...) hoặc đặt ẩn sai đại lượng đề hỏi, quên đối chiếu điều kiện trước khi kết luận.
- Nguyên nhân: Kỹ năng chuyển bài toán thực tế sang mô hình toán còn thiếu bước kiểm tra miền giá trị.
- Mức độ: Nặng.
- Gợi ý cấp 1: "Đề bài hỏi tìm đại lượng nào? Đại lượng em vừa gọi là ẩn có cần điều kiện nguyên, dương hay giới hạn gì không?"
- Cấp 2: "Nhớ nêu rõ đơn vị và điều kiện của $x, y$ ngay khi gọi ẩn, cuối bài phải đối chiếu điều kiện rồi mới kết luận."
- Cấp 3: Chỉ rõ đại lượng hoặc điều kiện bị bỏ sót khi gọi ẩn / kết luận.
- Cấp 4: Ví dụ lập ẩn và điều kiện cho một bài toán thực tế tương tự khác.

**C1-05 | Biểu diễn nghiệm tổng quát và đường thẳng nghiệm của PT bậc nhất hai ẩn** *(Bài 1 • Nhóm F)*
- Biểu hiện: Với $ax + by = c$ ở dạng khuyết ($0x + by = c$ hoặc $ax + 0y = c$), học sinh không biết biểu diễn nghiệm $(x; y)$ hoặc vẽ sai đường thẳng song song với trục $Ox$/$Oy$; hoặc rút sai $y$ theo $x$.
- Nguyên nhân: Chưa thành thạo viết công thức nghiệm tổng quát khi có một hệ số bằng 0.
- Mức độ: Trung bình.
- Gợi ý cấp 1: "Trong phương trình $ax + by = c$ khi $a=0$ thì giá trị $y$ có thay đổi theo $x$ không, hay $x$ nhận giá trị tuỳ ý?"
- Cấp 2: Nhắc: nếu $0x + by = c \Rightarrow y = \frac{c}{b}$ với mọi $x \in \mathbb{R}$ (đường thẳng song song/trùng $Ox$); tương tự khi $b=0$.
- Cấp 3: Chỉ đúng chỗ rút ẩn hoặc cặp nghiệm tổng quát viết sai.
- Cấp 4: Ví dụ vẽ và viết nghiệm tổng quát của `0x + 2y = 6` và `3x + 0y = 6`.

**C1-06 | Lập sai phương trình mô tả quan hệ chuyển động, năng suất hoặc phần trăm** *(Bài 3 • Nhóm C)*
- Biểu hiện: Cộng nhầm vận tốc xuôi dòng/ngược dòng ($v_{\text{xuôi}} = v_{\text{thực}} + v_{\text{nước}}$, $v_{\text{ngược}} = v_{\text{thực}} - v_{\text{nước}}$), cộng trực tiếp thời gian hoàn thành thay vì năng suất ($\frac{1}{x} + \frac{1}{y}$), hoặc không đổi phút sang giờ.
- Nguyên nhân: Hiểu nhầm bản chất các đại lượng tỉ lệ nghịch/tổng hợp và không đồng nhất đơn vị đo.
- Mức độ: Trung bình→Nặng.
- Gợi ý cấp 1: "Các đại lượng thời gian, quãng đường, vận tốc trong bài đã cùng đơn vị chưa? Trong 1 giờ thì mỗi đối tượng làm được bao nhiêu phần công việc?"
- Cấp 2: Nhắc lại công thức $S = v\cdot t$, vận tốc xuôi/ngược dòng và công thức năng suất $N = \frac{1}{t}$.
- Cấp 3: Chỉ ra câu giả thiết trong đề bị chuyển thành phương trình sai.
- Cấp 4: Ví dụ lập bảng tóm tắt dữ kiện cho một bài toán chuyển động hoặc làm chung công việc khác.

---

## CHƯƠNG II — Phương trình và bất phương trình bậc nhất một ẩn (Bài 4–6)

**C2-01 | Nhân/chia hai vế bất phương trình với số âm mà không đổi chiều** *(Bài 5–6 • Nhóm A)*
- Biểu hiện: `-2x > 4` suy ra `x > -2` (sai, đúng phải là `x < -2`).
- Nguyên nhân: Áp dụng máy móc quy tắc của phương trình sang bất phương trình.
- Mức độ: Nặng — lỗi khái niệm rất phổ biến.
- Gợi ý cấp 1: "Khi nhân hoặc chia cả hai vế bất phương trình cho một số âm, chiều bất đẳng thức có giữ nguyên không? Em thử kiểm tra bằng $-2 < 3$ rồi nhân với $-1$ xem."
- Cấp 2: Nhắc lại tính chất liên hệ thứ tự và phép nhân: nhân/chia với $c < 0$ phải đổi chiều bất đẳng thức.
- Cấp 3: Chỉ đúng bước chia cho số âm mà học sinh quên đổi chiều.
- Cấp 4: Ví dụ số cụ thể minh hoạ quy tắc đổi chiều.

**C2-02 | Phương trình chứa ẩn ở mẫu — quên điều kiện xác định (ĐKXĐ)** *(Bài 4 • Nhóm D)*
- Biểu hiện: Giải ra nghiệm nhưng không đặt ĐKXĐ trước khi quy đồng khử mẫu, dẫn đến nhận cả nghiệm làm mẫu bằng $0$ (nghiệm ngoại lai).
- Nguyên nhân: Bỏ bước 1 (tìm ĐKXĐ) và bước 4 (đối chiếu ĐKXĐ).
- Mức độ: Nặng.
- Gợi ý cấp 1: "Trước khi quy đồng khử mẫu một phương trình có ẩn ở mẫu, bước đầu tiên bắt buộc là gì?"
- Cấp 2: "Mẫu số ở đây bằng $0$ khi $x$ bằng bao nhiêu? Nghiệm em vừa tìm được có vi phạm điều kiện đó không?"
- Cấp 3: Chỉ ra nghiệm bị loại vì làm mẫu thức bằng $0$.
- Cấp 4: Ví dụ khác có nghiệm ngoại lai để đối chiếu cách loại nghiệm.

**C2-03 | Biểu diễn tập nghiệm bất phương trình trên trục số sai chiều hoặc ngoặc** *(Bài 6 • Nhóm F)*
- Biểu hiện: Vẽ nhầm tia biểu diễn, hoặc dùng ngoặc vuông `[` / `]` cho bất đẳng thức chặt (`<`, `>`) và ngược lại.
- Nguyên nhân: Nhầm lẫn kí hiệu `≤, ≥` và `<, >` khi biểu diễn trên trục số.
- Mức độ: Nhẹ.
- Gợi ý cấp 1: "Dấu bất đẳng thức ở đây có bao gồm dấu bằng không? Điều đó quyết định dùng ngoặc tròn hay ngoặc vuông?"
- Cấp 2: Nhắc quy ước: `<, >` → ngoặc tròn `( )` (không lấy điểm mút); `≤, ≥` → ngoặc vuông `[ ]` (có lấy điểm mút).
- Cấp 3: Chỉ đúng chỗ vẽ sai chiều tia hoặc sai loại ngoặc trên trục số.
- Cấp 4: Ví dụ khác minh hoạ cả hai trường hợp ngoặc tròn và ngoặc vuông.

**C2-04 | Phương trình tích `(ax+b)(cx+d)=0` — tự ý chia cho nhân tử chứa ẩn làm mất nghiệm** *(Bài 4 • Nhóm D)*
- Biểu hiện: Khi thấy hai vế đều có $(x-1)$ (ví dụ $(x-1)(x+2) = 3(x-1)$), học sinh chia cả hai vế cho $(x-1)$ dẫn tới mất nghiệm $x = 1$; hoặc nhân bung thành bậc hai rồi lúng túng.
- Nguyên nhân: Chưa quen chuyển vế đặt nhân tử chung để đưa về dạng tích $A(x)\cdot B(x) = 0$.
- Mức độ: Nặng.
- Gợi ý cấp 1: "Nếu em chia cả hai vế cho một biểu thức chứa ẩn $x$, điều gì xảy ra khi biểu thức đó bằng $0$?"
- Cấp 2: Nhắc phương pháp: chuyển tất cả sang vế trái, đặt nhân tử chung để đưa về phương trình tích $A\cdot B = 0 \Leftrightarrow A=0$ hoặc $B=0$.
- Cấp 3: Chỉ đúng bước chia cho nhân tử chứa ẩn làm thiếu nghiệm.
- Cấp 4: Ví dụ tương tự giải phương trình `(x-2)(2x+1) = 5(x-2)` bằng cách đặt nhân tử chung.

**C2-05 | Áp dụng sai tính chất bất đẳng thức (cộng/trừ ngược chiều, thiếu tính bắc cầu)** *(Bài 5 • Nhóm A)*
- Biểu hiện: Từ $a > b$ suy ra $-2a > -2b$, hoặc trừ vế theo vế hai bất đẳng thức cùng chiều ($a > b$ và $c > d$ rồi suy ra $a - c > b - d$).
- Nguyên nhân: Chưa phân biệt quy tắc cộng cùng chiều (đúng) với phép trừ/nhân số âm.
- Mức độ: Trung bình→Nặng.
- Gợi ý cấp 1: "Có quy tắc nào cho phép trừ từng vế hai bất đẳng thức cùng chiều không? Em thử lấy ví dụ $5 > 1$ và $4 > -2$ xem hiệu vế trái so với vế phải thế nào."
- Cấp 2: Nhắc 3 tính chất cơ bản ở Bài 5: bắc cầu, liên hệ thứ tự–phép cộng, liên hệ thứ tự–phép nhân ($c>0$ và $c<0$).
- Cấp 3: Chỉ đúng bước suy luận sai chiều bất đẳng thức.
- Cấp 4: Ví dụ chứng minh bất đẳng thức tương tự bằng cách biến đổi từng bước qua phép cộng và phép nhân.

**C2-06 | Quy đồng khử mẫu phương trình/bất phương trình thiếu nhân tử ở số hạng tự do** *(Bài 4 & 6 • Nhóm B)*
- Biểu hiện: Khi bỏ mẫu số sau quy đồng, quên nhân mẫu thức chung với số hạng nguyên không có mẫu (ví dụ $\frac{x-1}{2} + 3 = \frac{x}{3}$ lại viết thành $3(x-1) + 3 = 2x$), hoặc khử mẫu chứa ẩn trong bất phương trình mà không biết dấu của mẫu.
- Nguyên nhân: Thao tác quy đồng vội vàng, quên quy tắc đồng bộ toàn bộ các hạng tử.
- Mức độ: Nhẹ→Trung bình.
- Gợi ý cấp 1: "Số hạng tự do ở đây đang có mẫu ngầm là $1$ — khi quy đồng mẫu chung thì tử của nó cần nhân với bao nhiêu?"
- Cấp 2: Nhắc kiểm tra lại từng hạng tử ở cả hai vế xem đã cùng mẫu chung trước khi khử mẫu chưa.
- Cấp 3: Chỉ đúng hạng tử bị quên nhân mẫu chung hoặc sai dấu ngoặc trước phân thức có dấu trừ.
- Cấp 4: Ví dụ quy đồng một phương trình/bất phương trình có dấu trừ đứng trước phân thức.

---

## CHƯƠNG III — Căn bậc hai và căn bậc ba (Bài 7–10)

**C3-01 | Sai điều kiện xác định của căn thức bậc hai** *(Bài 7 • Nhóm D)*
- Biểu hiện: Với $\sqrt{2x-4}$, học sinh quên yêu cầu $2x-4 \ge 0$, hoặc với $\frac{1}{\sqrt{2x-4}}$ lại đặt $\ge 0$ thay vì $> 0$, hoặc giải sai bất phương trình điều kiện.
- Nguyên nhân: Chưa liên kết điều kiện $\sqrt{A}$ có nghĩa ($A \ge 0$) với điều kiện mẫu khác $0$ và giải BPT Chương II.
- Mức độ: Nặng.
- Gợi ý cấp 1: "Biểu thức trong dấu căn bậc hai cần thoả điều kiện gì để có nghĩa? Nếu căn thức nằm dưới mẫu thì cần thêm điều kiện gì?"
- Cấp 2: "Em viết bất phương trình điều kiện ra ($A \ge 0$, và $>0$ nếu ở mẫu) rồi giải cẩn thận."
- Cấp 3: Chỉ đúng bước thiếu điều kiện hoặc giải sai dấu BPT điều kiện.
- Cấp 4: Ví dụ tìm ĐKXĐ của một căn thức ở tử và một căn thức ở mẫu.

**C3-02 | Rút gọn sai vì hiểu nhầm $\sqrt{A^2} = A$ (quên trị tuyệt đối $|A|$)** *(Bài 7 • Nhóm A)*
- Biểu hiện: Viết $\sqrt{(-3)^2} = -3$ thay vì $|-3| = 3$, hoặc $\sqrt{(1-\sqrt{2})^2} = 1-\sqrt{2}$ (sai vì $1-\sqrt{2} < 0$).
- Nguyên nhân: Quên hằng đẳng thức $\sqrt{A^2} = |A|$ và quên bước xét dấu biểu thức trong $|A|$.
- Mức độ: Nặng.
- Gợi ý cấp 1: "$\sqrt{A^2}$ luôn bằng $A$ hay bằng $|A|$? Em hãy kiểm tra dấu của biểu thức bên trong dấu giá trị tuyệt đối trước khi bỏ dấu."
- Cấp 2: Nhắc công thức $\sqrt{A^2} = |A| = A$ nếu $A \ge 0$, và bằng $-A$ nếu $A < 0$.
- Cấp 3: Chỉ đúng bước phá căn làm mất dấu giá trị tuyệt đối hoặc phá dấu ngoặc sai khi $A < 0$.
- Cấp 4: Ví dụ rút gọn $\sqrt{(2 - \sqrt{5})^2}$ để đối chiếu cách xét dấu.

**C3-03 | Trục căn thức ở mẫu — nhân sai biểu thức liên hợp hoặc thiếu tử** *(Bài 9 • Nhóm B)*
- Biểu hiện: Với mẫu $\sqrt{a} + b$, học sinh nhân sai biểu thức liên hợp, quên nhân cả tử số, hoặc nhầm $(\sqrt{a})^2 - b^2$ thành $a - b$.
- Nguyên nhân: Chưa thành thạo kỹ thuật nhân lượng liên hợp theo hằng đẳng thức $(X+Y)(X-Y) = X^2 - Y^2$.
- Mức độ: Trung bình.
- Gợi ý cấp 1: "Để làm mất căn ở mẫu dạng $\sqrt{a} + b$, em cần nhân cả tử và mẫu với biểu thức nào?"
- Cấp 2: Nhắc hằng đẳng thức $(X+Y)(X-Y) = X^2 - Y^2$, lưu ý bình phương đầy đủ cả hai hạng tử ở mẫu.
- Cấp 3: Chỉ ra bước nhân thiếu ở tử hoặc tính sai bình phương ở mẫu.
- Cấp 4: Ví dụ trục căn thức ở mẫu cho phân thức có mẫu $\sqrt{5} - 2$.

**C3-04 | Nhầm lẫn căn bậc hai và căn bậc ba khi rút gọn dấu** *(Bài 10 • Nhóm A)*
- Biểu hiện: Nghĩ $\sqrt[3]{-8}$ không xác định (nhầm sang căn bậc hai), hoặc viết nhầm $\sqrt[3]{a^3} = |a|$ thay vì $a$.
- Nguyên nhân: Nhầm lẫn điều kiện xác định và tính chất giữa căn bậc chẵn ($\sqrt{\cdot}$) và căn bậc lẻ ($\sqrt[3]{\cdot}$).
- Mức độ: Trung bình.
- Gợi ý cấp 1: "Mọi số thực (kể cả số âm) có căn bậc ba không? $\sqrt[3]{A^3}$ có cần dấu giá trị tuyệt đối không?"
- Cấp 2: So sánh song song: $\sqrt{A}$ cần $A \ge 0$ và $\sqrt{A^2} = |A|$; còn $\sqrt[3]{A}$ xác định với mọi $A \in \mathbb{R}$ và $(\sqrt[3]{A})^3 = \sqrt[3]{A^3} = A$.
- Cấp 3: Chỉ đúng chỗ áp dụng nhầm quy tắc giữa hai loại căn.
- Cấp 4: Ví dụ tính $\sqrt[3]{(-2)^3} + \sqrt{(-2)^2}$ để thấy rõ sự khác biệt.

**C3-05 | Khai căn phép nhân/chia cho số âm hoặc tách sai phép cộng dưới dấu căn** *(Bài 8 • Nhóm A)*
- Biểu hiện: Tách $\sqrt{(-4)(-9)} = \sqrt{-4}\cdot\sqrt{-9}$ (sai vì $\sqrt{-4}$ không có nghĩa), hoặc viết sai nghiêm trọng $\sqrt{a+b} = \sqrt{a} + \sqrt{b}$ (vd $\sqrt{9+16} = 3+4=7$).
- Nguyên nhân: Không kiểm tra điều kiện không âm $a \ge 0, b \ge 0$ trước khi khai phương tích/thương; ngộ nhận căn phân phối qua phép cộng.
- Mức độ: Nặng.
- Gợi ý cấp 1: "Quy tắc $\sqrt{a\cdot b} = \sqrt{a}\cdot\sqrt{b}$ cần điều kiện gì của $a, b$? Với $\sqrt{9+16}$ thì bằng $5$ hay bằng $3+4$?"
- Cấp 2: Nhắc: chỉ tách căn với tích/thương khi các thừa số không âm ($a \ge 0, b \ge 0$); tuyệt đối KHÔNG tách căn với phép cộng/trừ.
- Cấp 3: Chỉ đúng dòng học sinh tách căn sai phép cộng hoặc tách căn với số âm.
- Cấp 4: Ví dụ tính đúng $\sqrt{(-4)(-25)} = \sqrt{4\cdot 25}$ và so sánh $\sqrt{a^2+b^2} \neq a+b$.

**C3-06 | Đưa thừa số âm ra/vào dấu căn bị sai dấu** *(Bài 9 • Nhóm B)*
- Biểu hiện: Viết $-2\sqrt{3} = \sqrt{(-2)^2 \cdot 3} = \sqrt{12}$ (mất dấu trừ ở kết quả), hoặc khi đưa $x\sqrt{2}$ vào trong căn với $x < 0$ lại quên dấu trừ phía trước.
- Nguyên nhân: Quên giữ lại dấu âm bên ngoài căn khi bình phương thừa số âm đưa vào trong dấu căn.
- Mức độ: Trung bình.
- Gợi ý cấp 1: "Vế trái $-2\sqrt{3}$ là số âm hay số dương? Nếu em viết bằng $\sqrt{12}$ thì số đó âm hay dương?"
- Cấp 2: Nhắc quy tắc: với $A < 0, B \ge 0$ thì $A\sqrt{B} = -\sqrt{A^2 B}$ (giữ dấu âm ở ngoài căn).
- Cấp 3: Chỉ đúng bước đưa thừa số âm vào trong căn làm đổi dấu biểu thức.
- Cấp 4: Ví dụ đưa thừa số vào căn cho $x\sqrt{5}$ trong hai trường hợp $x \ge 0$ và $x < 0$.

---

## CHƯƠNG IV — Hệ thức lượng trong tam giác vuông (Bài 11–12)

**C4-01 | Nhầm cạnh đối, cạnh kề, cạnh huyền khi tính tỉ số lượng giác** *(Bài 11 • Nhóm A)*
- Biểu hiện: Tính $\sin$ bằng cạnh kề/huyền hoặc tính $\tan$ bằng cạnh kề/đối; xác định nhầm cạnh đối khi đổi góc nhọn trong cùng tam giác vuông.
- Nguyên nhân: Chưa xác định rõ góc vuông và góc nhọn đang xét trước khi gọi tên cạnh đối – cạnh kề.
- Mức độ: Nặng — lỗi nền tảng của cả chương.
- Gợi ý cấp 1: "Tam giác vuông tại đỉnh nào, đâu là cạnh huyền? Với góc nhọn em đang xét, cạnh nào nằm đối diện với góc đó?"
- Cấp 2: Nhắc quy tắc: $\sin = \frac{\text{đối}}{\text{huyền}}$, $\cos = \frac{\text{kề}}{\text{huyền}}$, $\tan = \frac{\text{đối}}{\text{kề}}$, $\cot = \frac{\text{kề}}{\text{đối}}$.
- Cấp 3: Chỉ đúng cạnh học sinh gọi nhầm vai trò đối/kề.
- Cấp 4: Ví dụ một tam giác vuông khác đổi sang góc nhọn còn lại để luyện xác định cạnh.

**C4-02 | Dùng sai hệ thức giữa cạnh và góc trong tam giác vuông** *(Bài 12 • Nhóm E)*
- Biểu hiện: Nhầm công thức tính cạnh góc vuông theo cạnh huyền ($b = a\sin B = a\cos C$) hoặc giữa hai cạnh góc vuông ($b = c\tan B = c\cot C$), dẫn đến nhân thành chia hoặc nhầm $\sin/\cos$.
- Nguyên nhân: Chưa vẽ hình đánh dấu góc B, góc C và viết tỉ số lượng giác gốc trước khi suy ra độ dài cạnh.
- Mức độ: Trung bình.
- Gợi ý cấp 1: "Em thử viết định nghĩa $\sin B$ hoặc $\tan B$ từ tam giác vuông trước rồi mới rút cạnh cần tìm xem nhân hay chia nhé."
- Cấp 2: Nhắc lại: mỗi cạnh góc vuông bằng cạnh huyền nhân $\sin$ góc đối (hoặc $\cos$ góc kề); bằng cạnh góc vuông kia nhân $\tan$ góc đối (hoặc $\cot$ góc kề).
- Cấp 3: Chỉ đúng hệ thức bị thế nhầm $\sin$/$\cos$ hoặc nhân/chia ngược.
- Cấp 4: Ví dụ giải một tam giác vuông tương tự biết một cạnh và một góc nhọn.

**C4-03 | Bấm máy tính cầm tay sai chế độ (Rad/Deg) hoặc bấm sai $\cot$** *(Bài 11–12 • Nhóm F)*
- Biểu hiện: Kết quả tính $\sin 30^\circ$, $\cos 45^\circ$ hoặc số đo góc ra giá trị vô lý (vd số âm hoặc lệch hẳn với thực tế hình vẽ).
- Nguyên nhân: Máy tính cầm tay đang ở chế độ Radian (`R`) thay vì Degree (`D`), hoặc bấm `cot` thành `1/cos` hay `tan^-1` nhầm cho góc.
- Mức độ: Nhẹ (kỹ thuật).
- Gợi ý cấp 1: "Kết quả em bấm có hợp lý với bảng giá trị đặc biệt hay hình vẽ không? Trên màn hình máy tính đang hiện chữ `D` hay `R`?"
- Cấp 2: Hướng dẫn chuyển máy tính về chế độ Độ (`D` / Degree) và nhắc $\cot\alpha = \frac{1}{\tan\alpha}$ (với góc từ tỉ số dùng `SHIFT tan` khi biết $\tan$).
- Cấp 3: Chỉ rõ bước bấm máy tính bị sai chế độ hoặc sai phím nghịch đảo.
- Cấp 4: —

**C4-04 | Nhầm quan hệ tỉ số lượng giác hai góc phụ nhau và giá trị đặc biệt** *(Bài 11 • Nhóm E)*
- Biểu hiện: Cho rằng $\sin(90^\circ - \alpha) = \sin\alpha$, hoặc nhớ nhầm giá trị lượng giác các góc $30^\circ, 45^\circ, 60^\circ$ (vd $\sin 30^\circ = \frac{\sqrt{3}}{2}$).
- Nguyên nhân: Học vẹt bảng giá trị lượng giác mà không kiểm tra bằng tam giác vuông cân / nửa tam giác đều.
- Mức độ: Trung bình.
- Gợi ý cấp 1: "Nếu $\alpha + \beta = 90^\circ$ trong tam giác vuông thì cạnh đối của góc $\alpha$ chính là cạnh gì của góc $\beta$?"
- Cấp 2: Nhắc: hai góc phụ nhau thì $\sin\alpha = \cos\beta$, $\tan\alpha = \cot\beta$; và quy tắc nhớ nhanh $\sin 30^\circ = \frac{1}{2}, \sin 45^\circ = \frac{\sqrt{2}}{2}, \sin 60^\circ = \frac{\sqrt{3}}{2}$.
- Cấp 3: Chỉ đúng giá trị lượng giác hoặc cặp góc phụ nhau bị đổi nhầm.
- Cấp 4: Ví dụ rút gọn biểu thức $\sin^2 25^\circ + \sin^2 65^\circ$ bằng cách đổi về góc phụ nhau.

**C4-05 | Bài toán thực tế — xác định sai góc nâng/góc hạ hoặc làm tròn quá sớm** *(Bài 12 • Nhóm C)*
- Biểu hiện: Vẽ nhầm góc tạo bởi tia nhìn và phương thẳng đứng thay vì phương nằm ngang, hoặc làm tròn số thập phân ở bước trung gian rồi đem nhân chia tiếp gây sai lệch kết quả cuối.
- Nguyên nhân: Chưa nắm định nghĩa góc nâng/góc hạ (luôn đo so với phương nằm ngang) và thói quen làm tròn sớm.
- Mức độ: Trung bình.
- Gợi ý cấp 1: "Góc nâng hay góc hạ luôn được đo giữa tia nhìn và phương nào (nằm ngang hay thẳng đứng)?"
- Cấp 2: Nhắc: giữ nguyên biểu thức chính xác (hoặc giữ thêm 3–4 chữ số thập phân) ở các bước trung gian, chỉ làm tròn ở kết quả cuối cùng theo yêu cầu đề.
- Cấp 3: Chỉ ra vị trí đặt nhầm góc trên hình mô phỏng bài toán thực tế hoặc bước làm tròn sớm.
- Cấp 4: Ví dụ mô hình hoá một bài toán đo chiều cao tháp/cây có góc nâng.

---

## CHƯƠNG V — Đường tròn (Bài 13–17)

**C5-01 | Nhầm lẫn dây cung, cung và góc ở tâm; nhầm cung nhỏ và cung lớn** *(Bài 14 • Nhóm A)*
- Biểu hiện: Cho rằng dây lớn hơn thì cung nhỏ hơn; hoặc khi tính số đo cung lớn $\overgroup{AB}$ lại quên lấy $360^\circ - \text{sđ}\overgroup{AB}_{\text{nhỏ}}$.
- Nguyên nhân: Chưa nắm quan hệ đồng biến trong cùng một đường tròn (dây căng cung nhỏ lớn hơn $\Leftrightarrow$ góc ở tâm lớn hơn) và cách phân biệt cung nhỏ / cung lớn.
- Mức độ: Trung bình.
- Gợi ý cấp 1: "Điểm đang xét nằm trên cung nhỏ hay cung lớn? Tổng số đo cung nhỏ và cung lớn chung hai đầu mút bằng bao nhiêu độ?"
- Cấp 2: Nhắc: $\text{sđ}\overgroup{AB}_{\text{lớn}} = 360^\circ - \text{sđ}\overgroup{AB}_{\text{nhỏ}}$; với hai cung nhỏ trong một đường tròn, dây lớn hơn căng cung lớn hơn.
- Cấp 3: Chỉ rõ chỗ suy luận ngược chiều hoặc lấy nhầm số đo cung nhỏ thay cho cung lớn.
- Cấp 4: Ví dụ minh hoạ tính số đo cả cung nhỏ lẫn cung lớn khi biết góc ở tâm $\widehat{AOB}$.

**C5-02 | Xác định sai vị trí tương đối của đường thẳng và đường tròn** *(Bài 16 • Nhóm A)*
- Biểu hiện: Nhầm điều kiện giữa khoảng cách $d$ từ tâm $O$ đến đường thẳng và bán kính $R$: cho $d < R$ là không giao nhau hoặc nhầm $d$ với đường kính.
- Nguyên nhân: Học thuộc điều kiện không gắn với hình ảnh khoảng cách từ tâm tới đường thẳng.
- Mức độ: Trung bình.
- Gợi ý cấp 1: "Em thử vẽ nhanh một đường tròn tâm $O$ bán kính $R$ và kiểm tra xem khi khoảng cách từ $O$ đến đường thẳng nhỏ hơn $R$ thì đường thẳng đi qua bên trong hay bên ngoài đường tròn?"
- Cấp 2: Nhắc bảng 3 trường hợp: $d < R$ (cắt tại 2 điểm), $d = R$ (tiếp xúc tại 1 điểm), $d > R$ (không giao nhau).
- Cấp 3: Chỉ ra trường hợp học sinh đang so sánh hoặc kết luận ngược.
- Cấp 4: Bài tương tự với cặp số liệu $(d, R)$ khác.

**C5-03 | Nhầm công thức độ dài cung tròn, diện tích hình quạt tròn, hình vành khuyên** *(Bài 15 • Nhóm E)*
- Biểu hiện: Nhầm $l = \frac{n}{180}\pi R$ với $S_q = \frac{n}{360}\pi R^2$, nhầm diện tích hình vành khuyên $\pi(R^2-r^2)$ thành $\pi(R-r)^2$, hoặc tính diện tích hình viên phân quên trừ diện tích tam giác.
- Nguyên nhân: Có nhiều công thức gần giống nhau dễ lẫn giữa mẫu $180$ và $360$, giữa $(R^2-r^2)$ và $(R-r)^2$.
- Mức độ: Trung bình.
- Gợi ý cấp 1: "Cung tròn $n^\circ$ chiếm tỉ lệ $\frac{n}{360}$ cả đường tròn — nếu cả chu vi là $2\pi R$ và cả diện tích là $\pi R^2$ thì rút gọn tỉ lệ ấy ra công thức nào?"
- Cấp 2: Nhắc: $l = \frac{n}{180}\pi R$, $S_q = \frac{n}{360}\pi R^2 = \frac{lR}{2}$, và hình vành khuyên $S_v = \pi R^2 - \pi r^2 = \pi(R^2 - r^2)$.
- Cấp 3: Chỉ đúng chỗ thế nhầm công thức hoặc sai bình phương bán kính.
- Cấp 4: Ví dụ tính cả độ dài cung, diện tích quạt tròn và vành khuyên với số liệu khác.

**C5-04 | Chứng minh tiếp tuyến và dùng tính chất hai tiếp tuyến cắt nhau thiếu căn cứ** *(Bài 16 • Nhóm D)*
- Biểu hiện: Kết luận đường thẳng $d$ là tiếp tuyến khi mới chứng minh vuông góc với $OA$ mà quên chỉ ra $A$ thuộc đường tròn $(O; R)$; hoặc dùng $MA = MB$ nhưng chưa nêu tính chất hai tiếp tuyến cắt nhau.
- Nguyên nhân: Thiếu một trong hai vế của dấu hiệu nhận biết tiếp tuyến (đi qua 1 điểm thuộc đường tròn VÀ vuông góc với bán kính đi qua điểm đó).
- Mức độ: Trung bình→Nặng.
- Gợi ý cấp 1: "Để đường thẳng $d$ là tiếp tuyến của $(O)$ tại $A$, ta cần đủ cả hai điều kiện gì về điểm $A$ và góc?"
- Cấp 2: Nhắc 2 dấu hiệu tiếp tuyến và tính chất 2 tiếp tuyến cắt nhau ($MA = MB$, $MO$ là tia phân giác $\widehat{AMB}$, $OM$ là tia phân giác $\widehat{AOB}$).
- Cấp 3: Chỉ ra điều kiện còn thiếu trong bài chứng minh của học sinh.
- Cấp 4: Sơ đồ chứng minh mẫu một bài tiếp tuyến tương tự.

**C5-05 | Xác định vị trí điểm với đường tròn, tính đối xứng và độ dài dây lớn nhất** *(Bài 13–14 • Nhóm A)*
- Biểu hiện: Nhầm điều kiện điểm nằm trong ($OM < R$), nằm trên ($OM = R$), nằm ngoài ($OM > R$); cho rằng đường tròn chỉ có 2 trục đối xứng (thay vì vô số), hoặc quên định lí đường kính là dây lớn nhất.
- Nguyên nhân: Chưa nắm vững khái niệm mở đầu về đường tròn và tính đối xứng tâm/trục.
- Mức độ: Nhẹ→Trung bình.
- Gợi ý cấp 1: "Mọi đường thẳng đi qua tâm $O$ có phải đều là trục đối xứng của đường tròn $(O;R)$ không? Dây bất kì có thể dài hơn đường kính không?"
- Cấp 2: Nhắc: độ dài dây $AB \le 2R$ (dấu bằng xảy ra khi và chỉ khi $AB$ là đường kính); điểm $M$ nằm trong $(O) \Leftrightarrow OM < R$.
- Cấp 3: Chỉ ra kết luận sai về vị trí điểm hoặc độ dài dây so với đường kính.
- Cấp 4: Ví dụ xác định vị trí các đỉnh của hình chữ nhật đối với đường tròn ngoại tiếp nó.

**C5-06 | Xác định sai vị trí tương đối của hai đường tròn theo $OO'$ và $R, R'$** *(Bài 17 • Nhóm E)*
- Biểu hiện: Nhầm ranh giới tiếp xúc ngoài ($OO' = R + R'$) với cắt nhau ($R - R' < OO' < R + R'$), hoặc quên hiệu $|R - R'|$ khi xét tiếp xúc trong ($OO' = R - R'$ với $R > R'$) và đựng nhau ($OO' < R - R'$).
- Nguyên nhân: Chỉ so sánh $OO'$ với tổng $R+R'$ mà quên so sánh với hiệu $|R-R'|$.
- Mức độ: Trung bình.
- Gợi ý cấp 1: "Ngoài tổng $R + R'$, em cần so sánh khoảng cách hai tâm $OO'$ với giá trị nào nữa để phân biệt cắt nhau, tiếp xúc trong và đựng nhau?"
- Cấp 2: Nhắc đầy đủ 3 nhóm vị trí tương đối (cắt nhau, tiếp xúc trong/ngoài, không giao nhau — ở ngoài nhau / đựng nhau) theo $R + R'$ và $R - R'$ ($R \ge R'$).
- Cấp 3: Chỉ ra khoảng bất đẳng thức học sinh đang đối chiếu sai.
- Cấp 4: Ví dụ phân loại vị trí tương đối của $(O; 5)$ và $(O'; 3)$ khi $OO'$ nhận các giá trị $1, 2, 5, 8, 10$.

---

## CHƯƠNG VI — Hàm số $y = ax^2$ ($a \neq 0$). Phương trình bậc hai một ẩn (Bài 18–21)

**C6-01 | Tính $\Delta$ hoặc $\Delta'$ sai dấu, sai hệ số $a, b, c$** *(Bài 19 • Nhóm B)*
- Biểu hiện: Viết $\Delta = b^2 + 4ac$ thay vì $b^2 - 4ac$, tính $(-5)^2 = -25$, hoặc khi dùng $\Delta' = b'^2 - ac$ lại nhân thêm $4$ vào $ac$, hoặc bỏ sót dấu trừ của $b, c$.
- Nguyên nhân: Lỗi kĩ thuật thay số âm thiếu ngoặc đơn và lẫn lộn giữa công thức $\Delta$ và $\Delta'$.
- Mức độ: Nhẹ→Trung bình (rất dễ sai dây chuyền).
- Gợi ý cấp 1: "Em thử viết rõ từng hệ số $a = ?, b = ?, c = ?$ kèm dấu rồi thay vào ngoặc đơn trong công thức $\Delta = b^2 - 4ac$."
- Cấp 2: Nhắc: $(b)^2$ luôn không âm; nếu dùng $b' = b/2$ thì $\Delta' = b'^2 - ac$ (không nhân 4) và chia cho $a$ (không chia $2a$).
- Cấp 3: Chỉ đúng vị trí sai dấu hoặc nhầm giữa $\Delta$ và $\Delta'$.
- Cấp 4: Ví dụ tính $\Delta$ và $\Delta'$ trên cùng một phương trình có $b$ chẵn, âm.

**C6-02 | Kết luận sai số nghiệm theo dấu $\Delta$ hoặc quên xét $a = 0$ với tham số $m$** *(Bài 19 • Nhóm A)*
- Biểu hiện: Khi $\Delta < 0$ vẫn cố bấm căn hoặc ghi nghiệm; hoặc với phương trình $(m-1)x^2 + 2mx + 1 = 0$ lại mặc định là phương trình bậc hai mà quên xét riêng trường hợp $m - 1 = 0$.
- Nguyên nhân: Chưa liên kết dấu của $\Delta$ với số nghiệm và quên điều kiện $a \neq 0$ của phương trình bậc hai.
- Mức độ: Nặng.
- Gợi ý cấp 1: "Hệ số đi với $x^2$ có chứa tham số không? Nếu hệ số đó bằng $0$ thì phương trình trở thành bậc mấy?"
- Cấp 2: Nhắc: kiểm tra $a \neq 0$ trước khi lập $\Delta$; bảng dấu: $\Delta > 0$ (2 nghiệm phân biệt), $\Delta = 0$ (nghiệm kép), $\Delta < 0$ (vô nghiệm).
- Cấp 3: Chỉ ra học sinh đang bỏ qua kết quả dấu $\Delta$ hoặc thiếu trường hợp $a = 0$.
- Cấp 4: Ví dụ giải và biện luận một phương trình có hệ số $a$ chứa tham số $m$.

**C6-03 | Áp dụng định lí Viète sai dấu tổng/tích nghiệm hoặc quên điều kiện $\Delta \ge 0$** *(Bài 20 • Nhóm A)*
- Biểu hiện: Viết $x_1 + x_2 = \frac{b}{a}$ (quên dấu trừ) hoặc $x_1 x_2 = -\frac{c}{a}$, hoặc lao vào dùng Viète tìm $m$ mà quên đặt điều kiện $\Delta \ge 0$ (hoặc $\Delta > 0$ khi cần hai nghiệm phân biệt) nên nhận cả giá trị $m$ làm phương trình vô nghiệm.
- Nguyên nhân: Quên dấu của công thức Viète và quên điều kiện tồn tại nghiệm.
- Mức độ: Nặng.
- Gợi ý cấp 1: "Trước khi dùng hệ thức Viète cho $x_1, x_2$, phương trình cần thoả điều kiện gì để có nghiệm? Công thức $x_1 + x_2$ có dấu trừ không?"
- Cấp 2: Nhắc lại: cần $\Delta \ge 0$ (phân biệt thì $\Delta > 0$); khi đó $x_1 + x_2 = -\frac{b}{a}$ và $x_1 x_2 = \frac{c}{a}$.
- Cấp 3: Chỉ đúng chỗ sai dấu Viète hoặc thiếu điều kiện $\Delta \ge 0$.
- Cấp 4: Ví dụ tìm $m$ có đối chiếu điều kiện $\Delta \ge 0$ trước khi kết luận.

**C6-04 | Vẽ đồ thị $y = ax^2$ ($a \neq 0$) — sai chiều bề lõm, mất đối xứng hoặc nối gấp khúc** *(Bài 18 • Nhóm F)*
- Biểu hiện: Với $a < 0$ vẽ parabol quay bề lõm lên trên; tính sai giá trị $y$ khi $x$ âm (lỗi bình phương số âm); hoặc nối các điểm bằng đoạn thẳng gấp khúc thay vì đường cong trơn đi qua gốc $O(0;0)$.
- Nguyên nhân: Chưa nắm tính đối xứng qua $Oy$ và hình dạng chuẩn của parabol.
- Mức độ: Trung bình.
- Gợi ý cấp 1: "Khi $a < 0$, ngoài đỉnh $O(0;0)$ thì các giá trị $y$ khác âm hay dương? Hai điểm có hoành độ đối nhau $x$ và $-x$ có tung độ như thế nào?"
- Cấp 2: Nhắc: bảng giá trị gồm tối thiểu 5 điểm đối xứng qua $x = 0$; $a > 0$ bề lõm quay lên, $a < 0$ bề lõm quay xuống, nét vẽ cong đều qua đỉnh $O$.
- Cấp 3: Chỉ ra điểm sai trong bảng giá trị hoặc đoạn nối sai trên đồ thị.
- Cấp 4: Ví dụ lập bảng giá trị chuẩn cho $y = -\frac{1}{2}x^2$.

**C6-05 | Phương trình bậc hai khuyết — chia cho $x$ làm mất nghiệm $x=0$ hoặc thiếu nghiệm âm** *(Bài 19 • Nhóm D)*
- Biểu hiện: Với $2x^2 - 6x = 0$, học sinh chia hai vế cho $x$ được $2x - 6 = 0 \Rightarrow x = 3$ (mất nghiệm $x=0$); với $x^2 = 9$ chỉ viết $x = 3$ (thiếu $x = -3$).
- Nguyên nhân: Quên đưa dạng khuyết $c$ về phương trình tích $x(ax+b)=0$ và quên cả hai căn bậc hai số dương/âm khi giải $x^2 = k$ ($k>0$).
- Mức độ: Nặng.
- Gợi ý cấp 1: "Thay $x = 0$ vào $2x^2 - 6x = 0$ xem có thoả mãn không? Và số nào bình phương lên bằng $9$ ngoài số $3$?"
- Cấp 2: Nhắc: $ax^2 + bx = 0 \Leftrightarrow x(ax+b) = 0$; còn $x^2 = k \ (k > 0) \Leftrightarrow x = \pm\sqrt{k}$.
- Cấp 3: Chỉ ra nghiệm $x=0$ hoặc nghiệm âm $-\sqrt{k}$ bị bỏ sót.
- Cấp 4: Ví dụ giải nhanh hai phương trình $3x^2 + 6x = 0$ và $4x^2 - 9 = 0$.

**C6-06 | Nhầm nhẩm nghiệm $a \pm b + c = 0$, lập PT từ $(S, P)$ hoặc biến đổi biểu thức đối xứng** *(Bài 20 • Nhóm E)*
- Biểu hiện: Nhầm hai trường hợp $a+b+c=0$ ($x_1=1, x_2=\frac{c}{a}$) và $a-b+c=0$ ($x_1=-1, x_2=-\frac{c}{a}$); quên kiểm tra $S^2 - 4P \ge 0$ khi lập phương trình $X^2 - SX + P = 0$; biến đổi nhầm $x_1^2 + x_2^2 = (x_1+x_2)^2 + 2x_1x_2$ (sai dấu $-2x_1x_2$).
- Nguyên nhân: Chưa chắc hằng đẳng thức biến đổi về $S = x_1+x_2, P = x_1x_2$ và dấu của nghiệm nhẩm.
- Mức độ: Trung bình.
- Gợi ý cấp 1: "Em thử khai triển lại $(x_1+x_2)^2$ xem phải cộng hay trừ $2x_1x_2$ để còn đúng $x_1^2 + x_2^2$?"
- Cấp 2: Nhắc: $x_1^2+x_2^2 = S^2 - 2P$, $(x_1-x_2)^2 = S^2 - 4P$; hai số có tổng $S$, tích $P$ tồn tại khi $S^2 - 4P \ge 0$ và là nghiệm của $X^2 - SX + P = 0$.
- Cấp 3: Chỉ đúng công thức nhẩm nghiệm hoặc hằng đẳng thức biến đổi bị sai dấu.
- Cấp 4: Ví dụ biến đổi $x_1^2 + x_2^2 - x_1x_2$ theo $S$ và $P$.

**C6-07 | Giải bài toán bằng cách lập PT bậc hai — quên loại nghiệm không hợp lý** *(Bài 21 • Nhóm C)*
- Biểu hiện: Giải phương trình bậc hai ra hai nghiệm (ví dụ $x_1 = 12, x_2 = -4$ cho kích thước hoặc vận tốc), nhận cả hai nghiệm hoặc quên kiểm tra điều kiện ẩn ở mẫu/thực tế.
- Nguyên nhân: Chưa hình thành phản xạ đối chiếu nghiệm với điều kiện đặt ẩn ở đầu bài.
- Mức độ: Trung bình→Nặng.
- Gợi ý cấp 1: "Cả hai nghiệm em vừa giải ra có đều thoả mãn điều kiện thực tế (dương, nguyên, nhỏ hơn...) đặt ở đầu bài không?"
- Cấp 2: Nhắc quy trình 3 bước: gọi ẩn kèm ĐK → lập & giải PT → đối chiếu ĐK để nhận/loại nghiệm trước khi trả lời.
- Cấp 3: Chỉ đúng nghiệm đáng ra phải loại theo điều kiện bài toán.
- Cấp 4: Ví dụ bài toán tìm kích thước mảnh vườn dẫn đến phương trình bậc hai có một nghiệm âm bị loại.

---

## CHƯƠNG VII — Tần số và tần số tương đối (Bài 22–24)

**C7-01 | Nhầm tần số và tần số tương đối (quên đổi ra phần trăm hoặc sai cỡ mẫu $n$)** *(Bài 22–23 • Nhóm F)*
- Biểu hiện: Ghi tần số tương đối bằng số đếm (vd "5") thay vì tỉ lệ/phần trăm ($f_i = \frac{m_i}{n}\cdot 100\%$), hoặc cộng sai tổng cỡ mẫu $n$.
- Nguyên nhân: Chưa phân biệt giữa tần số $m_i$ (số lần xuất hiện) và tần số tương đối $f_i$ (tỉ lệ so với tổng số dữ liệu $n$).
- Mức độ: Trung bình.
- Gợi ý cấp 1: "Tần số cho biết số lần xuất hiện, còn tần số tương đối cho biết tỉ lệ (thường tính bằng %) so với đại lượng nào?"
- Cấp 2: Nhắc công thức $f_i = \frac{m_i}{n}\cdot 100\%$ và kiểm tra tổng $\sum m_i = n$, tổng $\sum f_i = 100\%$.
- Cấp 3: Chỉ đúng cột/dòng bị nhầm giữa tần số và tần số tương đối.
- Cấp 4: Ví dụ bảng tần số đơn giản có tính đầy đủ cả $m_i$ và $f_i$.

**C7-02 | Ghép nhóm dữ liệu sai (sai độ rộng nhóm hoặc trùng/thiếu giá trị biên)** *(Bài 24 • Nhóm A)*
- Biểu hiện: Chia các nhóm dùng khoảng đóng ở hai đầu như `[0; 10]` và `[10; 20]` làm giá trị $10$ xuất hiện ở hai nhóm, hoặc các nhóm có độ rộng không đều khi đề yêu cầu chia đều.
- Nguyên nhân: Chưa nắm quy ước nửa khoảng $[a_i; a_{i+1})$ (lấy đầu mút trái $a_i$, không lấy đầu mút phải $a_{i+1}$).
- Mức độ: Trung bình.
- Gợi ý cấp 1: "Nếu dữ liệu có giá trị đúng bằng $10$, theo cách viết khoảng của em thì số $10$ sẽ rơi vào nhóm nào — có bị trùng hoặc sót không?"
- Cấp 2: Nhắc quy ước chuẩn: dùng nửa khoảng $[a_i; a_{i+1})$ (gồm các giá trị $x$ thoả $a_i \le x < a_{i+1}$).
- Cấp 3: Chỉ đúng hai nhóm bị chồng lấn hoặc thiếu giá trị biên.
- Cấp 4: Ví dụ phân nhóm dãy số liệu mẫu vào các nửa khoảng `[0; 10)`, `[10; 20)`, `[20; 30)`.

**C7-03 | Đọc hoặc vẽ sai biểu đồ tần số dạng cột / biểu đồ đoạn thẳng** *(Bài 22 • Nhóm F)*
- Biểu hiện: Chia vạch trục tung không đều, đặt gốc trục tung không từ $0$ khiến tỉ lệ cột bị sai lệch; hoặc nối sai thứ tự các điểm trên biểu đồ đoạn thẳng tần số.
- Nguyên nhân: Chưa chú ý tỉ lệ chia trục và nhãn đơn vị khi đọc/vẽ biểu đồ.
- Mức độ: Nhẹ→Trung bình.
- Gợi ý cấp 1: "Em kiểm tra lại khoảng chia giữa các vạch trên trục đứng của biểu đồ xem đã đều nhau và bắt đầu từ $0$ chưa?"
- Cấp 2: Nhắc: trục tung biểu diễn tần số (bắt đầu từ $0$, chia đều); biểu đồ đoạn thẳng nối lần lượt các điểm theo thứ tự tăng dần trên trục hoành.
- Cấp 3: Chỉ đúng điểm đọc sai giá trị hoặc chia trục không đều trên biểu đồ.
- Cấp 4: Hướng dẫn cách đọc một biểu đồ tần số mẫu khác.

**C7-04 | Tính sai góc ở tâm biểu đồ hình quạt tròn hoặc tổng tỉ lệ $\neq 100\%$** *(Bài 23 • Nhóm B)*
- Biểu hiện: Dùng nguyên phần trăm làm số đo góc (vd 25% vẽ góc $25^\circ$ thay vì $25\% \cdot 360^\circ = 90^\circ$), hoặc cộng các $f_i$ đã làm tròn không khớp $100\%$.
- Nguyên nhân: Quên nhân tỉ lệ tần số tương đối với $360^\circ$ của cả hình tròn.
- Mức độ: Trung bình.
- Gợi ý cấp 1: "Cả hình tròn ứng với $100\%$ và bao nhiêu độ? Vậy một hình quạt chiếm $f_i\%$ sẽ có góc ở tâm bằng bao nhiêu độ?"
- Cấp 2: Nhắc công thức góc ở tâm: $\alpha_i = 360^\circ \cdot \frac{f_i}{100}$ (hay $360^\circ \cdot \frac{m_i}{n}$).
- Cấp 3: Chỉ đúng phép tính đổi từ `%` sang độ bị sai.
- Cấp 4: Ví dụ đổi bảng tần số tương đối gồm 3 mức (25%, 50%, 25%) sang số đo góc hình quạt.

**C7-05 | Bảng/biểu đồ ghép nhóm — tính sai giá trị đại diện hoặc vẽ cột tách rời** *(Bài 24 • Nhóm F)*
- Biểu hiện: Với nhóm $[a_i; a_{i+1})$ không lấy trung bình cộng $\frac{a_i+a_{i+1}}{2}$ làm giá trị đại diện; hoặc vẽ biểu đồ tần số ghép nhóm các cột cách rời nhau như biểu đồ cột thông thường thay vì liền kề nhau.
- Nguyên nhân: Nhầm biểu đồ cột đơn (rời rạc) với biểu đồ tần số ghép nhóm (dữ liệu liên tục, cột liền nhau).
- Mức độ: Nhẹ→Trung bình.
- Gợi ý cấp 1: "Với một nhóm $[10; 20)$, giá trị đại diện nằm chính giữa khoảng được tính thế nào? Các cột trong biểu đồ ghép nhóm vẽ sát nhau hay cách rời?"
- Cấp 2: Nhắc: giá trị đại diện là $c_i = \frac{a_i+a_{i+1}}{2}$; biểu đồ tần số ghép nhóm gồm các hình chữ nhật liền kề nhau trên trục hoành.
- Cấp 3: Chỉ đúng giá trị đại diện tính sai hoặc hình thức cột vẽ sai.
- Cấp 4: Ví dụ tính giá trị đại diện cho bảng dữ liệu chiều cao ghép nhóm khác.

---

## CHƯƠNG VIII — Xác suất của biến cố trong một số mô hình xác suất đơn giản (Bài 25–26)

**C8-01 | Đếm thiếu hoặc đếm trùng phần tử của không gian mẫu $\Omega$** *(Bài 25 • Nhóm C)*
- Biểu hiện: Khi liệt kê các kết quả của phép thử gồm 2 hành động (gieo 2 con xúc xắc, 2 đồng xu, rút 2 thẻ), học sinh bỏ sót cặp hoặc liệt kê trùng (ví dụ coi `(1;2)` và `(2;1)` là một khi có thứ tự).
- Nguyên nhân: Liệt kê tự phát, không dùng bảng hai chiều hoặc sơ đồ hình cây.
- Mức độ: Nặng — ảnh hưởng trực tiếp đến mẫu số xác suất.
- Gợi ý cấp 1: "Em đã liệt kê không gian mẫu $\Omega$ theo quy luật hàng–cột (bảng) hoặc sơ đồ cây chưa để chắc chắn không sót và không trùng?"
- Cấp 2: Gợi ý lập bảng hoặc sơ đồ cây; phân biệt rõ trường hợp có phân biệt thứ tự (đồng xu 1 – đồng xu 2, rút lần 1 – lần 2).
- Cấp 3: Chỉ ra cặp kết quả cụ thể bị đếm thiếu hoặc đếm trùng.
- Cấp 4: Ví dụ lập bảng không gian mẫu cho phép thử tung 1 đồng xu và 1 con xúc xắc.

**C8-02 | Tính sai công thức xác suất $P(E) = \frac{n(E)}{n(\Omega)}$ (ngược tử–mẫu hoặc $> 1$)** *(Bài 26 • Nhóm B)*
- Biểu hiện: Lấy $n(\Omega)$ chia cho $n(E)$ ra kết quả lớn hơn $1$, hoặc quên rút gọn phân số, nhầm kết quả thuận lợi của biến cố đối.
- Nguyên nhân: Nhớ ngược tử số và mẫu số, không kiểm tra tính chất $0 \le P(E) \le 1$.
- Mức độ: Trung bình.
- Gợi ý cấp 1: "Xác suất của một biến cố luôn nằm trong đoạn từ bao nhiêu đến bao nhiêu? Em kiểm tra lại tử số và mẫu số xem $n(E)$ có thể lớn hơn $n(\Omega)$ không?"
- Cấp 2: Viết lại công thức chuẩn $P(E) = \frac{n(E)}{n(\Omega)}$ với $0 \le n(E) \le n(\Omega)$, suy ra $0 \le P(E) \le 1$.
- Cấp 3: Chỉ ra bước đặt ngược tử và mẫu hoặc đếm nhầm số kết quả thuận lợi $n(E)$.
- Cấp 4: Ví dụ tính xác suất đơn giản khác có bước tự kiểm tra $0 \le P \le 1$.

**C8-03 | Nhầm phép thử có hoàn lại và không hoàn lại (hoặc đồng thời vs lần lượt)** *(Bài 25 • Nhóm C)*
- Biểu hiện: Rút lần lượt 2 viên bi **không hoàn lại** từ hộp 4 bi nhưng vẫn đếm cặp trùng $(A; A)$ (ra $4\times 4 = 16$ thay vì $4\times 3 = 12$); hoặc lấy đồng thời 2 viên cùng lúc nhưng lại phân biệt thứ tự `(A; B)` khác `(B; A)`.
- Nguyên nhân: Chưa phân tích kĩ mô tả phép thử "lấy đồng thời", "lấy lần lượt không hoàn lại" và "có hoàn lại".
- Mức độ: Nặng.
- Gợi ý cấp 1: "Trong phép thử này, sau khi lấy lần thứ nhất có bỏ lại vào hộp không? Kết quả có phân biệt thứ tự trước–sau hay chỉ lấy cùng lúc một cặp?"
- Cấp 2: Nhắc: không hoàn lại thì không có phần tử lặp $(A; A)$; lấy đồng thời thì cặp $\{A; B\}$ và $\{B; A\}$ là như nhau.
- Cấp 3: Chỉ rõ nhóm kết quả thừa hoặc trùng trong không gian mẫu học sinh vừa liệt kê.
- Cấp 4: Ví dụ so sánh $n(\Omega)$ của việc rút 2 thẻ từ $\{1, 2, 3\}$ theo cả 3 cách: đồng thời, lần lượt không hoàn lại, lần lượt có hoàn lại.

**C8-04 | Nhầm điều kiện đồng khả năng, biến cố chắc chắn ($P=1$) và biến cố không thể ($P=0$)** *(Bài 26 • Nhóm A)*
- Biểu hiện: Đếm số loại kết quả khác nhau thay vì đếm trên không gian mẫu đồng khả năng (vd tung 2 đồng xu chỉ tính 3 trường hợp "2 sấp, 2 ngửa, 1 sấp 1 ngửa" rồi cho xác suất mỗi loại là $\frac{1}{3}$); hoặc nhầm $P(\text{biến cố không thể}) = 0$.
- Nguyên nhân: Áp dụng công thức $\frac{n(E)}{n(\Omega)}$ cho các phần tử không đồng khả năng.
- Mức độ: Nặng.
- Gợi ý cấp 1: "Khi tung 2 đồng xu, khả năng ra '1 sấp 1 ngửa' (gồm SN và NS) có bằng khả năng ra '2 sấp' (chỉ có SS) không?"
- Cấp 2: Nhắc điều kiện dùng công thức $P(E) = \frac{n(E)}{n(\Omega)}$ là các kết quả trong $\Omega$ phải **đồng khả năng**; biến cố không thể có $P=0$, biến cố chắc chắn có $P=1$.
- Cấp 3: Chỉ ra các phần tử trong phép chia của học sinh chưa đồng khả năng.
- Cấp 4: Ví dụ phân tích bài tung 2 đồng xu bằng 4 kết quả đồng khả năng $\{SS, SN, NS, NN\}$.

---

## CHƯƠNG IX — Đường tròn ngoại tiếp và đường tròn nội tiếp (Bài 27–30)

**C9-01 | Nhầm lẫn góc nội tiếp và góc ở tâm cùng chắn một cung** *(Bài 27 • Nhóm A)*
- Biểu hiện: Cho góc nội tiếp bằng góc ở tâm (quên nhân/chia 2); hoặc quên hệ quả góc nội tiếp chắn nửa đường tròn bằng $90^\circ$ và hai góc nội tiếp cùng chắn một cung thì bằng nhau.
- Nguyên nhân: Chưa nắm vững định lý số đo góc nội tiếp $\widehat{ACB} = \frac{1}{2}\text{sđ}\overgroup{AB}$.
- Mức độ: Nặng — định lý nền tảng của cả chương.
- Gợi ý cấp 1: "Góc nội tiếp và góc ở tâm cùng chắn một cung có mối liên hệ gì về số đo? Góc nội tiếp chắn nửa đường tròn có số đo bao nhiêu?"
- Cấp 2: Nhắc định lý: góc nội tiếp bằng nửa số đo cung bị chắn (nửa góc ở tâm cùng chắn cung đó); góc nội tiếp chắn nửa đường tròn bằng $90^\circ$.
- Cấp 3: Chỉ đúng chỗ học sinh quên hệ số $\frac{1}{2}$ hoặc bỏ sót góc $90^\circ$ chắn nửa đường tròn.
- Cấp 4: Ví dụ hình khác tính góc nội tiếp khi biết góc ở tâm và ngược lại.

**C9-02 | Chứng minh tứ giác nội tiếp — nhầm tính chất góc đối $180^\circ$ hoặc chọn sai dấu hiệu** *(Bài 29 • Nhóm E)*
- Biểu hiện: Nhầm "tổng hai góc đối bằng $180^\circ$" thành "hai góc đối bằng nhau" hoặc cộng nhầm hai góc kề; hoặc lúng túng chọn dấu hiệu chứng minh dù đề đã cho sẵn hai góc $90^\circ$ đối diện/cùng nhìn 1 đoạn.
- Nguyên nhân: Chưa phân biệt tính chất hình bình hành với tứ giác nội tiếp, chưa nắm định lí và dấu hiệu nhận biết tứ giác nội tiếp.
- Mức độ: Trung bình→Nặng.
- Gợi ý cấp 1: "Trong một tứ giác nội tiếp, hai góc đối diện bằng nhau hay có tổng số đo bằng $180^\circ$? Dữ kiện đề bài đang cho cặp góc đối nào?"
- Cấp 2: Nhắc định lí: tổng số đo hai góc đối của tứ giác nội tiếp bằng $180^\circ$ (và trường hợp đặc biệt hình chữ nhật, hình vuông nội tiếp; 4 đỉnh cách đều 1 điểm).
- Cấp 3: Gợi ý cặp góc đối hoặc tâm đường tròn đi qua 4 đỉnh phù hợp với dữ kiện bài (không giải hộ).
- Cấp 4: Ví dụ chứng minh một tứ giác có hai góc vuông đối diện nội tiếp đường tròn.

**C9-03 | Nhầm bán kính đường tròn ngoại tiếp ($R$) và nội tiếp ($r$) trong tam giác / đa giác đều** *(Bài 28 & 30 • Nhóm E)*
- Biểu hiện: Dùng $R$ (bán kính ngoại tiếp, từ tâm đến đỉnh) thay cho $r$ (bán kính nội tiếp, từ tâm đến cạnh) và ngược lại; nhầm giao điểm 3 đường trung trực (tâm ngoại tiếp) với giao điểm 3 đường phân giác (tâm nội tiếp).
- Nguyên nhân: Chưa phân biệt định nghĩa và cách xác định tâm của hai đường tròn.
- Mức độ: Trung bình.
- Gợi ý cấp 1: "Tâm đường tròn ngoại tiếp tam giác là giao điểm 3 đường nào (trung trực hay phân giác)? $R$ và $r$, bán kính nào là khoảng cách từ tâm tới các đỉnh?"
- Cấp 2: Nhắc: ngoại tiếp (đi qua 3 đỉnh, tâm là giao 3 đường trung trực, bán kính $R$); nội tiếp (tiếp xúc 3 cạnh, tâm là giao 3 đường phân giác, bán kính $r$).
- Cấp 3: Chỉ đúng vị trí nhầm giữa $R$ và $r$ hoặc nhầm vị trí tâm.
- Cấp 4: Hình minh hoạ đối chiếu $R$ và $r$ của tam giác đều.

**C9-04 | Tính sai $R, r$ của tam giác vuông, tam giác đều hoặc diện tích qua bán kính nội tiếp** *(Bài 28 • Nhóm E)*
- Biểu hiện: Quên $R = \frac{BC}{2}$ đối với tam giác vuông tại $A$; nhầm công thức của tam giác đều cạnh $a$: $R = \frac{\sqrt{3}}{3}a$ và $r = \frac{\sqrt{3}}{6}a$; hoặc quên công thức liên hệ $S = \frac{1}{2}r(AB + BC + CA)$.
- Nguyên nhân: Chưa nhớ vị trí đặc biệt của tâm đường tròn ngoại tiếp tam giác vuông và tỉ lệ $\frac{2}{3}, \frac{1}{3}$ đường cao tam giác đều.
- Mức độ: Trung bình.
- Gợi ý cấp 1: "Trong tam giác vuông, tâm đường tròn ngoại tiếp nằm ở đâu trên cạnh huyền? Trong tam giác đều cạnh $a$, đường cao bằng bao nhiêu và tâm $O$ chia đường cao theo tỉ lệ nào?"
- Cấp 2: Nhắc: $\Delta$ vuông có $R = \frac{\text{cạnh huyền}}{2}$; $\Delta$ đều cạnh $a$ có đường cao $h = \frac{\sqrt{3}}{2}a$, suy ra $R = \frac{2}{3}h = \frac{\sqrt{3}}{3}a$, $r = \frac{1}{3}h = \frac{\sqrt{3}}{6}a$; mọi tam giác có $S = pr$ ($p$ là nửa chu vi).
- Cấp 3: Chỉ đúng công thức tính $R$ hoặc $r$ bị nhớ nhầm hệ số.
- Cấp 4: Ví dụ tính $R$ và $r$ cho tam giác đều cạnh $6\text{ cm}$.

**C9-05 | Đa giác đều và phép quay — nhầm góc quay giữ nguyên hình hoặc chiều quay** *(Bài 30 • Nhóm A)*
- Biểu hiện: Với đa giác đều $n$ cạnh tâm $O$, tính sai góc quay nhỏ nhất $\alpha^\circ = \frac{360^\circ}{n}$ biến đa giác thành chính nó (vd ngũ giác đều lấy $60^\circ$ thay vì $72^\circ$), hoặc xác định nhầm phép quay thuận/ngược chiều kim đồng hồ.
- Nguyên nhân: Chưa gắn đa giác đều với $n$ cung bằng nhau trên đường tròn ngoại tiếp và quy ước chiều quay.
- Mức độ: Nhẹ→Trung bình.
- Gợi ý cấp 1: "Đa giác đều $n$ cạnh chia đường tròn tâm $O$ thành mấy cung bằng nhau? Vậy góc ở tâm ứng với 1 cạnh bằng bao nhiêu độ?"
- Cấp 2: Nhắc: phép quay tâm $O$ góc $\alpha^\circ = k\cdot\frac{360^\circ}{n}$ (thuận hoặc ngược chiều kim đồng hồ) biến đa giác đều $n$ cạnh thành chính nó.
- Cấp 3: Chỉ đúng góc quay hoặc chiều quay xác định sai.
- Cấp 4: Ví dụ xác định ảnh của các đỉnh hình vuông hoặc lục giác đều qua phép quay tâm $O$ góc $90^\circ$ / $60^\circ$.

---

## CHƯƠNG X — Một số hình khối trong thực tiễn (Bài 31–32)

**C10-01 | Nhầm công thức diện tích xung quanh và diện tích toàn phần (hình trụ, hình nón)** *(Bài 31 • Nhóm C)*
- Biểu hiện: Tính diện tích toàn phần hình trụ/hình nón nhưng quên cộng diện tích (các) đáy (nhớ hình trụ có 2 đáy, hình nón có 1 đáy), hoặc ngược lại cộng thừa khi đề chỉ hỏi xung quanh hay hỏi chiếc xô không nắp.
- Nguyên nhân: Chưa đọc kỹ đề hỏi "xung quanh", "toàn phần" hay vật thể thực tế thiếu nắp đáy.
- Mức độ: Nhẹ→Trung bình.
- Gợi ý cấp 1: "Đề bài hỏi diện tích xung quanh, diện tích toàn phần, hay vật thể có mấy mặt đáy?"
- Cấp 2: Nhắc: hình trụ $S_{tp} = 2\pi Rh + 2\pi R^2$; hình nón $S_{tp} = \pi rl + \pi r^2$.
- Cấp 3: Chỉ đúng phần diện tích đáy bị thiếu hoặc cộng thừa trong bài làm.
- Cấp 4: Ví dụ tính diện tích vật liệu làm chiếc nón lá (chỉ xung quanh) đối chiếu với khối nón đặc (toàn phần).

**C10-02 | Nhầm lẫn bán kính ($R, r$) và đường kính ($d$) khi thế số vào công thức** *(Bài 31–32 • Nhóm B)*
- Biểu hiện: Đề cho đường kính đáy / đường kính hình cầu $d$ nhưng học sinh thế thẳng $d$ vào vị trí $R$ hoặc $r$ trong công thức tính diện tích, thể tích (quên chia 2).
- Nguyên nhân: Đọc đề vội, không ghi bước trung gian $R = \frac{d}{2}$.
- Mức độ: Nhẹ nhưng rất phổ biến.
- Gợi ý cấp 1: "Đề bài đang cho số đo **đường kính** hay **bán kính**? Công thức em viết đang dùng kí hiệu nào?"
- Cấp 2: Nhắc bước đầu tiên luôn kiểm tra và viết rõ $R = \frac{d}{2}$ nếu đề cho đường kính.
- Cấp 3: Chỉ đúng chỗ thế nhầm đường kính vào công thức bán kính.
- Cấp 4: —

**C10-03 | Nhầm đơn vị diện tích và thể tích khi đổi đơn vị đo** *(Bài 31–32 • Nhóm F)*
- Biểu hiện: Đổi từ $\text{cm}^3$ sang $\text{m}^3$ lại chỉ chia cho $100$ (hoặc đổi lít/$\text{dm}^3$ sai hệ số $10^3 = 1000$); đổi từ $\text{cm}^2$ sang $\text{m}^2$ chỉ chia $100$ thay vì $100^2$.
- Nguyên nhân: Chưa nắm quy tắc đổi đơn vị diện tích (luỹ thừa 2) và thể tích (luỹ thừa 3).
- Mức độ: Trung bình.
- Gợi ý cấp 1: "Biết $1\text{ m} = 100\text{ cm}$, vậy $1\text{ m}^2$ bằng bao nhiêu $\text{cm}^2$, và $1\text{ m}^3$ bằng bao nhiêu $\text{cm}^3$? Nhớ lại $1\text{ lít} = 1\text{ dm}^3$."
- Cấp 2: Nhắc quy tắc đổi: diện tích nhân/chia bình phương hệ số dài; thể tích nhân/chia lập phương hệ số dài.
- Cấp 3: Chỉ đúng bước đổi đơn vị bị thiếu luỹ thừa.
- Cấp 4: Ví dụ đổi $2500\text{ cm}^3$ sang $\text{dm}^3$ (lít) và $\text{m}^3$.

**C10-04 | Hình nón — nhầm đường sinh $l$ với chiều cao $h$, hoặc quên hệ số $\frac{1}{3}$ ở thể tích** *(Bài 31 • Nhóm E)*
- Biểu hiện: Thế chiều cao $h$ vào vị trí $l$ trong công thức $S_{xq} = \pi rl$ (hoặc thế $l$ vào $h$ trong thể tích $V = \frac{1}{3}\pi r^2 h$); hoặc quên hệ số $\frac{1}{3}$ làm ra thể tích hình trụ.
- Nguyên nhân: Chưa phân biệt đoạn thẳng đứng (chiều cao $h$) với đoạn nghiêng từ đỉnh xuống đường tròn đáy (đường sinh $l$), quên tam giác vuông $l^2 = r^2 + h^2$.
- Mức độ: Nặng.
- Gợi ý cấp 1: "Trong hình nón, đường sinh $l$ và chiều cao $h$ có bằng nhau không? Ba đoạn $r, h, l$ liên hệ với nhau theo định lí nào?"
- Cấp 2: Nhắc: $l^2 = r^2 + h^2$ (nên $l > h$); $S_{xq} = \pi rl$ dùng $l$, còn $V = \frac{1}{3}\pi r^2 h$ dùng $h$ và có hệ số $\frac{1}{3}$.
- Cấp 3: Chỉ đúng chỗ dùng nhầm $l$ cho $h$ hoặc thiếu hệ số $\frac{1}{3}$.
- Cấp 4: Ví dụ hình nón có $r = 3\text{ cm}, h = 4\text{ cm}$ → tìm $l = 5\text{ cm}$ trước khi tính $S_{xq}$ và $V$.

**C10-05 | Hình cầu — nhầm công thức diện tích mặt cầu và thể tích, hoặc bán kính mặt cắt** *(Bài 32 • Nhóm E)*
- Biểu hiện: Nhầm lẫn số mũ giữa diện tích mặt cầu $S = 4\pi R^2$ và thể tích hình cầu $V = \frac{4}{3}\pi R^3$ (vd viết $V = 4\pi R^3$ hay $V = \frac{4}{3}\pi R^2$), hoặc nhầm mặt cắt không qua tâm có bán kính bằng bán kính hình cầu $R$.
- Nguyên nhân: Nhớ lẫn hệ số $4$ và $\frac{4}{3}$, bậc $R^2$ (diện tích) và $R^3$ (thể tích).
- Mức độ: Trung bình.
- Gợi ý cấp 1: "Đơn vị diện tích là bậc mấy của độ dài, còn đơn vị thể tích là bậc mấy? Điều đó giúp em kiểm tra ngay $R^2$ hay $R^3$ ở hai công thức hình cầu."
- Cấp 2: Nhắc: mặt cầu $S = 4\pi R^2$; hình cầu $V = \frac{4}{3}\pi R^3$; mặt phẳng cắt hình cầu qua tâm tạo ra **đường tròn lớn** bán kính $R$.
- Cấp 3: Chỉ đúng công thức hình cầu bị nhầm hệ số hoặc số mũ của $R$.
- Cấp 4: Ví dụ tính cả diện tích và thể tích quả bóng hình cầu có $R = 3\text{ cm}$.

---

## Bảng tổng hợp phân loại lỗi theo NHÓM (Toàn bộ 55 mã lỗi — 10 Chương, 32 Bài)

| Nhóm lỗi | Mô tả bản chất | Danh sách mã lỗi đầy đủ (55 mã) |
|---|---|---|
| **A. Lỗi khái niệm** | Chưa hiểu bản chất định nghĩa, điều kiện, tính chất, định lý | `C1-01`, `C1-03`, `C2-01`, `C2-05`, `C3-02`, `C3-04`, `C3-05`, `C4-01`, `C5-01`, `C5-02`, `C5-05`, `C6-02`, `C6-03`, `C7-02`, `C8-04`, `C9-01`, `C9-05` |
| **B. Lỗi kỹ năng tính toán / kĩ thuật** | Hiểu đúng hướng nhưng thao tác biến đổi sai (dấu, hệ số, nhân liên hợp, góc quạt) | `C1-02`, `C2-06`, `C3-03`, `C3-06`, `C6-01`, `C7-04`, `C8-02`, `C10-02` |
| **C. Lỗi đọc hiểu đề / mô hình hoá** | Hiểu sai yêu cầu thực tế, đặt ẩn/lập phương trình sai, đếm thiếu mô hình phép thử | `C1-04`, `C1-06`, `C4-05`, `C6-07`, `C8-01`, `C8-03`, `C10-01` |
| **D. Lỗi thiếu điều kiện / bước lập luận** | Bỏ sót bước bắt buộc (ĐKXĐ, chia cho ẩn làm mất nghiệm, chứng minh tiếp tuyến) | `C2-02`, `C2-04`, `C3-01`, `C5-04`, `C6-05` |
| **E. Lỗi chọn sai chiến lược / công thức** | Nhớ nhầm hoặc chọn nhầm giữa các công thức/dấu hiệu gần nhau | `C4-02`, `C4-04`, `C5-03`, `C5-06`, `C6-06`, `C9-02`, `C9-03`, `C9-04`, `C10-04`, `C10-05` |
| **F. Lỗi trình bày / biểu đồ / đơn vị** | Sai đơn vị đo, kí hiệu trục số/đồ thị/biểu đồ, chế độ máy tính cầm tay | `C1-05`, `C2-03`, `C4-03`, `C6-04`, `C7-01`, `C7-03`, `C7-05`, `C10-03` |

Bảng nhóm này dùng để phân loại chuyên sâu theo năng lực (nhóm A/C/D/E phản ánh tư duy–khái niệm–mô hình hoá, nhóm B/F phản ánh kỹ năng thao tác–trình bày) trong mục Thống kê của hệ thống.

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

### BT-C7-01 | Chương VII, Bài 23 & 24 — Tần số tương đối và biểu đồ ghép nhóm | Mức: Cơ bản
**Đề bài:** Cho bảng tần số điểm kiểm tra của 20 học sinh: điểm 7 có 5 em, điểm 8 có 10 em, điểm 9 có 5 em. Tính tần số tương đối và số đo góc ở tâm tương ứng trên biểu đồ hình quạt tròn cho mỗi mức điểm.

**Lời giải từng bước:**
1. Kiểm tra cỡ mẫu: $n = 5 + 10 + 5 = 20$.
2. Tính tần số tương đối: điểm 7 là $\frac{5}{20}\cdot 100\% = 25\%$; điểm 8 là $\frac{10}{20}\cdot 100\% = 50\%$; điểm 9 là $\frac{5}{20}\cdot 100\% = 25\%$.
3. Kiểm tra tổng tần số tương đối: $25\% + 50\% + 25\% = 100\%$.
4. Tính góc ở tâm hình quạt tròn: điểm 7 ứng với $360^\circ \cdot 25\% = 90^\circ$; điểm 8 ứng với $360^\circ \cdot 50\% = 180^\circ$; điểm 9 ứng với $90^\circ$.

**Mã lỗi liên quan:** C7-01 (nhầm giữa tần số 5, 10 với tần số tương đối %), C7-04 (lấy nguyên số % làm độ góc ở tâm mà quên nhân với $360^\circ$).

**Bài luyện tương tự tiếp theo:** Ghép nhóm 20 số liệu chiều cao vào các nửa khoảng `[150; 155)`, `[155; 160)`, `[160; 165)` và tính giá trị đại diện mỗi nhóm (rèn lỗi C7-02, C7-05).

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

> File này hiện có **55 mã lỗi bao phủ đầy đủ 10 chương (32 bài học)** và **11 bài tập mẫu đại diện đủ 10 chương** (SGK & SBT Toán 9 Tập 1 & Tập 2 — Bộ sách giáo khoa Thống Nhất). Khi bổ sung thêm bài tập mới, giáo viên giữ nguyên cấu trúc mã và định dạng như trên.
