/* html読み込み直後
-------------------------------------------------- */
document.addEventListener('DOMContentLoaded', function(){
  // ページの表示
  var html = document.querySelector("body");
  html.style.opacity = "1";
});

/* スライダー
-------------------------------------------------- */
var gallerySlide = new Swiper ('.sec3__slider', {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  autoplay: { delay: 4000 },
  loop: true,
  centeredSlides: true,
  slidesPerView: 1.55,
  spaceBetween: 90,
  breakpoints: {
    679: {
      slidesPerView: 1.4,
      spaceBetween: 30,
    }
  }
});

var gallerySlide = new Swiper ('.sec5__slider', {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  autoplay: { delay: 4000000 },
  loop: true,
  centeredSlides: true,
  slidesPerView: 1.8,
  spaceBetween: 120,
  breakpoints: {
    767: {
      slidesPerView: 1.2,
      spaceBetween: 15,
    },
    1210: {
      slidesPerView: 1.4,
      spaceBetween: 60,
    }
  }
});
