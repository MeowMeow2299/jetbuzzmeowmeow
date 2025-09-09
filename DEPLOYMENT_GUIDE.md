# 🚀 Hướng dẫn Deploy lên jeetbuzzgames.com

## 📁 Files cần upload

### 1. Thư mục `dist/` chứa:
- `index.html` - File chính
- `assets/` - Folder chứa JS/CSS đã build
- `photo/` - Folder chứa tất cả ảnh
- `.htaccess` - File cấu hình Apache

## 🔧 Các bước thực hiện

### Bước 1: Backup website hiện tại
- Tải xuống toàn bộ website hiện tại từ cPanel/File Manager
- Lưu backup ở nơi an toàn

### Bước 2: Upload files
1. **Vào cPanel** của hosting jeetbuzzgames.com
2. **Mở File Manager**
3. **Vào thư mục public_html** (hoặc www)
4. **Xóa tất cả files cũ** (trừ backup)
5. **Upload toàn bộ nội dung thư mục `dist/`**

### Bước 3: Cấu hình DNS (nếu cần)
- Đảm bảo domain trỏ đúng về hosting
- A record: `@` → IP hosting
- CNAME: `www` → `jeetbuzzgames.com`

### Bước 4: Cấu hình SSL
- Kích hoạt SSL certificate (Let's Encrypt miễn phí)
- Redirect HTTP → HTTPS

### Bước 5: Kiểm tra
- Truy cập https://jeetbuzzgames.com
- Kiểm tra tất cả chức năng hoạt động
- Test responsive trên mobile

## ⚠️ Lưu ý quan trọng

1. **Backup trước khi thay thế**
2. **Kiểm tra hosting hỗ trợ SPA**
3. **Cấu hình .htaccess đúng**
4. **Test kỹ trước khi go-live**

## 🆘 Nếu gặp lỗi

### Lỗi 404 khi refresh trang:
- Kiểm tra .htaccess đã upload chưa
- Kiểm tra mod_rewrite đã enable chưa

### Lỗi ảnh không hiển thị:
- Kiểm tra đường dẫn ảnh trong code
- Kiểm tra quyền truy cập folder photo/

### Lỗi JavaScript:
- Kiểm tra console browser
- Kiểm tra file assets đã upload đầy đủ

## 📞 Hỗ trợ
Nếu cần hỗ trợ, liên hệ với thông tin lỗi cụ thể!
