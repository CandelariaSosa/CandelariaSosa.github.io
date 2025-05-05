document.addEventListener("DOMContentLoaded", () => {
    const swiper = new Swiper('.swiper', {
        // spaceBetween: 25,
        breakpoints: {
            0: {
                slidesPerView: 1
            },
            350: {
                slidesPerView: 2
            },
            500: {
                slidesPerView: 3
            },
            800: {
                slidesPerView: 4
            },
            1200: {
                slidesPerView: 5
            }
        },
        autoplay: {
            delay: 1000
        },
        loop: true,
    });
});


