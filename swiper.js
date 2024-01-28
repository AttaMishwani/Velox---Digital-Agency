






// swiper js ---- testimonials

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  grabCursor:true,
  autoplay:{
    delay:3000,
    disableOnInteraction:false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints:{
    767:{
      slidesPerView:2
    }
  }

});


// Swiper js Blogss
var newSwiper = new Swiper(".blog-mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  grabCursor:true,
  autoplay:{
    delay:3000,
    disableOnInteraction:false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints:{
    767:{
      slidesPerView:3,
   
    }
  }
});