# Portfolio CV - Lê Văn Lượng

## Mô tả

Trang portfolio cá nhân giới thiệu Lê Văn Lượng, định hướng Frontend Developer. Website trình bày thông tin giới thiệu, kỹ năng, một số dự án tiêu biểu và các kênh liên hệ. Giao diện được thiết kế responsive để sử dụng trên máy tính, máy tính bảng và điện thoại.

## Chức năng

- Điều hướng nhanh đến các phần Giới thiệu, Kỹ năng, Dự án và Liên hệ.
- Trình bày kỹ năng, dự án mẫu và thông tin liên hệ.
- Hiệu ứng xuất hiện khi cuộn trang.
- Bố cục thích ứng với nhiều kích thước màn hình.
- Cung cấp liên kết email, GitHub, Facebook và số điện thoại.

## Công nghệ

- HTML5: cấu trúc và nội dung trang.
- CSS3: giao diện responsive, Flexbox, Grid và hiệu ứng.
- JavaScript thuần (ES6+): hiệu ứng khi cuộn trang bằng `IntersectionObserver`.
- Nginx (tùy chọn): phục vụ website tĩnh khi chạy bằng Docker.

Dự án không sử dụng framework, không cần cài thư viện JavaScript và không có bước biên dịch.

## Yêu cầu môi trường

- Trình duyệt hiện đại như Chrome, Edge, Firefox hoặc Safari.
- Để chạy bằng máy chủ cục bộ: Python 3.
- Để chạy bằng Docker: Docker Engine hoặc Docker Desktop đang hoạt động.
- Để tải mã nguồn bằng Git: Git (hoặc tải mã nguồn ZIP từ GitHub).

## Cài đặt

### Tải mã nguồn bằng Git

```bash
git clone https://github.com/luonght/CV.git
cd CV
```

Nếu đã có thư mục dự án trên máy, mở terminal tại thư mục chứa `index.html` và bỏ qua bước tải mã nguồn.

## Cấu hình

Website không cần file `.env`, cơ sở dữ liệu hay cấu hình máy chủ bắt buộc. Có thể tùy chỉnh trực tiếp các tệp sau:

- `index.html`: nội dung, dự án, đường dẫn hình ảnh và thông tin liên hệ.
- `assets/css/styles.css`: màu sắc, kiểu chữ, bố cục và responsive.
- `assets/js/main.js`: hành vi và hiệu ứng JavaScript.
- `assets/img/`: hình ảnh được trang sử dụng.

Nếu đổi tên hoặc di chuyển tệp hình ảnh, hãy cập nhật đường dẫn tương ứng trong `index.html`. Khi công khai website, hãy kiểm tra email, số điện thoại và các liên kết mạng xã hội trước khi triển khai.

## Chạy thử

### Windows

Mở PowerShell tại thư mục dự án (thư mục có `index.html`), sau đó chạy:

```powershell
py -m http.server 8000
```

Mở <http://localhost:8000> trong trình duyệt. Nếu lệnh `py` không có sẵn, cài Python 3 hoặc thử `python -m http.server 8000`.

### macOS

Mở Terminal tại thư mục dự án và chạy:

```bash
python3 -m http.server 8000
```

Mở <http://localhost:8000> trong trình duyệt.

### Linux

Mở terminal tại thư mục dự án và chạy:

```bash
python3 -m http.server 8000
```

Mở <http://localhost:8000> trong trình duyệt. Trên một số bản phân phối, cần cài Python 3 trước nếu lệnh chưa có sẵn.

Để dừng máy chủ ở cả ba hệ điều hành, nhấn `Ctrl+C` trong terminal đang chạy máy chủ.

### Docker

Cài và khởi động Docker trước khi chạy. Các lệnh dưới đây gắn thư mục dự án vào Nginx ở chế độ chỉ đọc; lần chạy đầu tiên cần kết nối Internet để tải image `nginx:alpine`.

**Windows PowerShell** (chạy tại thư mục dự án):

```powershell
docker run --rm -d --name portfolio-cv -p 8080:80 -v "${PWD}:/usr/share/nginx/html:ro" nginx:alpine
```

**macOS hoặc Linux** (chạy tại thư mục dự án):

```bash
docker run --rm -d --name portfolio-cv -p 8080:80 -v "$PWD:/usr/share/nginx/html:ro" nginx:alpine
```

Mở <http://localhost:8080> để xem trang. Dừng container bằng:

```bash
docker stop portfolio-cv
```

Nếu cổng `8080` đang được sử dụng, thay `8080` ở vế trái của `-p 8080:80` bằng một cổng trống, ví dụ `8081`, rồi truy cập cổng mới đó.

## Thông tin liên hệ

- **Tác giả:** Lê Văn Lượng
- **Email:** [vle155693@gmail.com](mailto:vle155693@gmail.com)
- **GitHub:** [github.com/luonght](https://github.com/luonght)
- **Facebook:** [facebook.com/vanluong.le.16940](https://www.facebook.com/vanluong.le.16940)
- **Điện thoại:** 0384742834