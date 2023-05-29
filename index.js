var hamburger = document.querySelector(".hamburger")
var one = document.querySelector(".one")
var two = document.querySelector(".two")
var three = document.querySelector(".three")
var items = document.querySelector(".items")

hamburger.addEventListener("click", (e) => {
    one.classList.toggle("toggle_one")
    two.classList.toggle("toggle_two")
    three.classList.toggle("toggle_three")
    console.log("clicked")
    items.classList.toggle("show_hide")
})
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 50,
        },
    },
});