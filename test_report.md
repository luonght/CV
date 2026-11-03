# Báo cáo kiểm thử

- **Ngày kiểm thử:** 2026-11-03
- **Phạm vi:** Website portfolio tĩnh (`index.html`, CSS, JavaScript và ảnh).
- **Môi trường:** Trình duyệt Chromium tích hợp; viewport desktop 1280 × 900 và mobile 390 × 844. Trang được mở trực tiếp bằng `file://`.
- **Cách kiểm thử:** Kiểm tra giao diện, DOM, liên kết điều hướng, tải ảnh và chiều rộng trang trên hai kích thước màn hình.

## Kết quả theo tiêu chí

| Tiêu chí | Trạng thái | Kết quả và minh chứng |
| --- | --- | --- |
| **Tính đúng đắn** | Đạt một phần | Trang mở được; 5/5 ảnh tải thành công và các liên kết điều hướng nội bộ đều có đích. Còn 4 liên kết “Xem chi tiết” trỏ tới `#`; liên kết email trỏ tới `emailcuaban@gmail.com` trong khi giao diện hiển thị `vle155693@gmail.com`. Ảnh: [desktop](docs/screenshots/desktop.png), [dự án](docs/screenshots/projects.png). |
| **UI/UX** | Đạt một phần | Ở viewport mobile không phát hiện tràn ngang; nội dung, ảnh và các thẻ liên hệ hiển thị được. Phần Dự án có tiêu đề chữ tối trên nền tối nên độ tương phản thấp. Trong Liên hệ có mũi tên rời và hai thẻ Facebook/Điện thoại nằm ngoài lưới, gây bố cục không đồng nhất. Ảnh: [mobile](docs/screenshots/mobile.png), [liên hệ](docs/screenshots/contact.png), [liên hệ mobile](docs/screenshots/mobile-contact.png). |
| **Khả năng vận hành - xử lý lỗi** | Đạt một phần | Hiệu ứng cuộn và nội dung hoạt động khi mở trong Chromium; toàn bộ ảnh tải được. JavaScript phụ thuộc `IntersectionObserver` nhưng chưa có kiểm tra hỗ trợ hoặc phương án dự phòng. Không có kiểm thử lỗi mạng/dịch vụ vì trang không gọi backend hay API trong mã được khảo sát. |
| **Bảo mật** | Chưa đủ cơ sở kết luận | Đây là website tĩnh, không thấy biểu mẫu nhận dữ liệu, backend, thông tin bí mật hoặc nội dung người dùng được đưa vào DOM. Liên kết ngoài mở tab mới có `rel="noopener noreferrer"`. Chưa quét lỗ hổng và chưa kiểm tra HTTPS, CSP hay các header bảo mật trên máy chủ triển khai. |
| **Chất lượng mã nguồn** | Đạt một phần | Có các vùng HTML ngữ nghĩa, mô tả `alt` cho ảnh và tách CSS/JavaScript thành tệp riêng. Cấu trúc HTML khu vực Liên hệ có thẻ đóng dư; trình duyệt đưa thẻ Facebook và Điện thoại ra ngoài `.contact-grid`. Chưa chạy validator, linter hoặc bộ kiểm thử tự động. |
| **Khả năng triển khai** | Đạt một phần | Không cần build hay dependency; có thể phục vụ thư mục như website tĩnh. Chỉ xác minh được bằng cách mở trực tiếp trong trình duyệt. Không kiểm thử HTTP hoặc Docker: Python không có sẵn và không tìm thấy lệnh Docker trong môi trường hiện tại. Chưa đánh giá cấu hình production như HTTPS, cache hoặc header bảo mật. |

## Ảnh minh chứng

Các ảnh được chụp từ trang đang chạy trong Chromium và lưu trong `docs/screenshots/`:

- [Giao diện desktop](docs/screenshots/desktop.png)
- [Khu vực dự án](docs/screenshots/projects.png)
- [Khu vực liên hệ desktop](docs/screenshots/contact.png)
- [Giao diện mobile](docs/screenshots/mobile.png)
- [Khu vực liên hệ mobile](docs/screenshots/mobile-contact.png)

## Kết luận

Các luồng hiển thị cơ bản hoạt động ở desktop và mobile, nhưng chưa nên xem là đạt hoàn toàn trước khi sửa liên kết email, thay các URL dự án mẫu, chỉnh cấu trúc lưới liên hệ và cải thiện độ tương phản ở khu vực Dự án. Kiểm thử triển khai qua HTTP/Docker và rà soát bảo mật trên máy chủ vẫn cần thực hiện trong môi trường có các công cụ tương ứng.