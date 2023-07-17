var lastScollTop=0,
navbar=document.getElementById('navbar');
window.addEventListener('scroll',function(){
    var scrollTop=window.pageYOffset || document
    .documentElement.scrollTop;
    if(scrollTop>lastScollTop){
        navbar.style.top='-100px';
    }
    else{
        navbar.style.top='0';
    }
    lastScollTop=scrollTop;
})

//
$(".nav-toggler").click(function(){
    $(".nav-items").toggleClass("show");
});

// Hero Slider
$('.hero-slider').owlCarousel({
    loop:true,
    nav:true,
    dots: true,
    items: 1,
    smartSpeed: 1000,
    navText: ["<i class='ri-arrow-left-line'></i>", "<i class='ri-arrow-right-line'></i>"],
    // responsive:{
    //     0:{
    //         items:1
    //     },
    //     600:{
    //         items:3
    //     },
    //     1000:{
    //         items:5
    //     }
    // }
})

// Porfolio Slider
$('.portfolio-slider').owlCarousel({
    loop:true,
    nav:true,
    dots: false,
    smartSpeed: 1000,
    margin: 24,
    navText: ["<i class='ri-arrow-left-line'></i>", "<i class='ri-arrow-right-line'></i>"],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        992:{
            items:3
        }
    }
})


// Reviews Slider
$('.reviews-slider').owlCarousel({
    loop:true,
    nav:true,
    dots: false,
    smartSpeed: 1000,
    margin: 24,
    navText: ["<i class='ri-arrow-left-line'></i>", "<i class='ri-arrow-right-line'></i>"],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        992:{
            items:2
        }
    }
})

// Scroll to top
const scrollToTop = document.querySelector('.scroll-to-top')
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTop.style.display = "grid"
    } else {
        scrollToTop.style.display = "none"
    }
})

// Slider
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 24,
    speed: 1000,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 3,
        }
    }
  });


//   Aos
AOS.init({
    duration: 1000,
    easing: "ease-in-out",
});
