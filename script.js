$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 30) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }
    })
})


burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
menu = document.querySelector('.v-class-res')
menu = document.querySelector('.slaid')

burger.addEventListener('click', ()=>{
    navbar.classList.toggle('h-nav');
    menu.classList.toggle('v-class-res');
    menu.classList.toggle('slaid')
})