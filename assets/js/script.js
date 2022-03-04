// bont do volume
var btnMute = document.querySelector('.mute');
var btnNoMute = document.querySelector('.nomute');

btnMute.addEventListener('click', function(){
    var vid = document.getElementById("play-video");
    vid.muted = false;

    btnMute.style.display = "none";
    btnNoMute.style.display = "flex";
});

btnNoMute.addEventListener('click', function(e){
    e.preventDefault();

    var vid = document.getElementById("play-video");
    vid.muted = true;

    btnMute.style.display = "flex";
    btnNoMute.style.display = "none";
});

$(window).scroll(function(){
    if(this.scrollY > 20){
        $('.menu').addClass("sticky");
    }else{
        $('.menu').removeClass("sticky");
    }
});

$(".carousel").owlCarousel({
    spaceBetween: 5,
    slidesPerView: 2,
    loop: true,
    items: 7,
    freeMode: true,
    loopAdditionalSlides: 6,
    speed: 8000,
    interval : 100,
    nav: true,
    navText: ["Prev","Next"],
    responsive:{
      0:{
        items:1,
        nav: false
      },
      600:{
        items:2,
        nav: false
      },
      1000:{
        items:3,
        nav: false
      }
    },
  });

var btnNext = document.querySelector('.next');
var btnPrev = document.querySelector('.prev');
const carousel = document.querySelector('.carousel');

btnNext.addEventListener('click', function(){
  $('.carousel').trigger('next.owl.carousel' , [500]);
});
btnPrev.addEventListener('click', function(){
  $('.carousel').trigger('prev.owl.carousel' , [500]);
});

const search = document.getElementById('search');

search.addEventListener('click', function(e){
  e.preventDefault();
  var containerSearch = document.querySelector('.container-search');
  containerSearch.classList.toggle('active');
});