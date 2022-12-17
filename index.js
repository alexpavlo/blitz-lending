let catalogBtn = document.querySelectorAll('.catalog__btn')

   Array.from(catalogBtn).forEach(item => {
      item.addEventListener("click", () => {
         let selected = document.getElementsByClassName("active");
         selected[0].className = selected[0].className.replace(" active", "");
         item.className += " active";
      });
   });

   $('.about__slider-big').slick({
    slidesToShow: 1,
    arrows: false,
    fade: true,
    cssEase: 'linear',
    autoplay: true,
    asNavFor: '.about__slider-small',
})
$('.about__slider-small').slick({
    slidesToShow: 4,
    arrows: false,
    asNavFor: '.about__slider-big',
    focusOnSelect: true,
    responsive: [{
        breakpoint: 1070,
        settings: {
            slidesToShow: 3
        }
    }, ]
});