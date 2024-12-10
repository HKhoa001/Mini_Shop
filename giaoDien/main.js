const swiper = new Swiper('.swiper', {
  loop: true, // Tạo hiệu ứng lặp vô hạn
  autoplay: {
    delay: 1000, // Thời gian giữa mỗi lần chuyển slide (1 giây)
    disableOnInteraction: false, // Không dừng khi người dùng tương tác
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true, // Cho phép nhấp vào pagination để chọn slide
  },
});