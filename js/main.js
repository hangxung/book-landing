// =========================================================
// main.js — tương tác cho trang giới thiệu sách
// =========================================================

document.addEventListener('DOMContentLoaded', function () {
    const nav = document.getElementById('mainNav');
    const navMenu = document.getElementById('navMenu');

    // 1. Đổi nền navbar khi cuộn trang
    function onScroll() {
        if (window.scrollY > 40) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    }
    onScroll();
    window.addEventListener('scroll', onScroll);

    // 2. Đóng menu (trên mobile) sau khi bấm vào một liên kết
    document.querySelectorAll('#navMenu .nav-link, #navMenu .btn').forEach(function (link) {
        link.addEventListener('click', function () {
            if (navMenu.classList.contains('show')) {
                bootstrap.Collapse.getOrCreateInstance(navMenu).hide();
            }
        });
    });

    // 3. Form tải bản đọc thử: kiểm tra email và hiện thông báo
    const form = document.getElementById('downloadForm');
    const email = document.getElementById('dlEmail');
    const msg = document.getElementById('downloadMsg');

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim());

        if (!isValid) {
            email.classList.add('is-invalid');
            msg.classList.add('d-none');
            email.focus();
            return;
        }

        email.classList.remove('is-invalid');
        const name = document.getElementById('dlName').value.trim() || 'bạn';
        const format = form.querySelector('input[name="format"]:checked').value;
        msg.textContent = 'Cảm ơn ' + name + '! Bản đọc thử (' + format + ') đã được gửi tới ' + email.value.trim() + '.';
        msg.classList.remove('d-none');
        form.reset();
    });

    email.addEventListener('input', function () {
        email.classList.remove('is-invalid');
    });

    // 4. Năm hiện tại ở footer
    document.getElementById('year').textContent = new Date().getFullYear();
});
