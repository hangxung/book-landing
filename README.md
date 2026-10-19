# Web Từ Con Số 0 — Trang giới thiệu sách

Trang web tĩnh giới thiệu cuốn sách *Web Từ Con Số 0*, xây dựng bằng **HTML, CSS và Bootstrap 5**, responsive trên điện thoại, máy tính bảng và máy tính.

## Các phần của trang

| Phần | id | Nội dung |
|---|---|---|
| Header + Book Overview | `#top`, `#overview` | Navbar cố định, hero với bìa sách vẽ bằng CSS 3D, mô tả sách và mục lục dạng accordion |
| Author | `#author` | Ảnh, tiểu sử, trích dẫn và số liệu về tác giả |
| Features | `#features` | 6 điểm nổi bật dạng card |
| Prices | `#prices` | 3 gói giá (Ebook, Sách in, Combo) |
| Download | `#download` | Form nhận bản đọc thử (kiểm tra email bằng JS) + nút tải ứng dụng |
| Reader's Say | `#reviews` | Carousel cảm nhận bạn đọc |
| Footer | `footer` | Liên kết, liên hệ, mạng xã hội, nút lên đầu trang |

## Cấu trúc thư mục

```
├── index.html
├── css/
│   ├── style.css        # giao diện chính
│   └── responsive.css   # media query cho từng kích thước màn hình
├── js/
│   └── main.js          # navbar khi cuộn, đóng menu mobile, xử lý form
└── assets/images/       # logo và ảnh tác giả (SVG)
```

## Kỹ thuật sử dụng

- Bootstrap 5.3: grid, navbar collapse, accordion, carousel, scrollspy, form
- Bootstrap Icons, Google Fonts (Lora, Be Vietnam Pro)
- CSS custom properties, Flexbox, transform 3D cho bìa sách
- Media query tại các breakpoint 1200 / 992 / 768 / 576px

## Chạy thử

Mở `index.html` bằng trình duyệt (cần kết nối Internet để tải Bootstrap từ CDN).
