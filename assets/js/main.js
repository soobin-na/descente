$(function(){

  const mainSlide = new Swiper(".main-slide",{
    navigation: {
      nextEl: ".next",
      prevEl: ".prev",
    },
  });

  const prdSlide1 = new Swiper(".prd-slide1",{
    slidesPerView:2,
    spaceBetween:10,
    scrollbar: {
      el: ".swiper-scrollbar",
    },
  });

  const prdSlide2 = new Swiper(".prd-slide2",{
    slidesPerView:3,
    spaceBetween:10,
  });
  
  const prdSlide3 = new Swiper(".prd-slide3",{
    slidesPerView:4,
    spaceBetween:10,
  });

  roll1 = gsap.to('.roll1 li',10,{
    xPercent:-100,
    repeat:-1,
    ease:'none'
  })

  roll2 = gsap.to('.roll2 li',10,{
    xPercent:100,
    repeat:-1,
    ease:'none'
  })

$('.sc-experience ul').hover(function(){
  if($(this).hasClass('roll1')){
    roll1.pause();
  }else{
    roll2.pause();
  }
},function(){
  roll1.play();
  roll2.play();
})



})