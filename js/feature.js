document.addEventListener('DOMContentLoaded', function () {
    var mySwiper = new Swiper('.swiper-container', {
        direction: 'horizontal',
        loop: true,
        slidesPerView: 1,
        spaceBetween: 30,
        navigation: {
            nextEl: '.left',
            prevEl: '.Right ',
        },
    });
});




function prevCard() {
  var owl = $('#owl-demo');
  owl.trigger('prev.owl.carousel');
}

function nextCard() {
  var owl = $('#owl-demo');
  owl.trigger('next.owl.carousel');
}




