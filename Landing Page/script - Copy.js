var swiper = new Swiper(".swiper", {
    effect: "coverflow",
    grabCursor: true,
    centerSlides: true,
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 3,
        slideShadows: true,
    },
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        640: {
            slidePerView: 2
        },
        768: {
            slidePerView: 1
        },
        1024: {
            slidePerView: 2
        },
        1560: {
            slidePerView: 3
        },
    }
});