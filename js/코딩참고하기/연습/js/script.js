$(function(){
  $('.your-class').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    prevArrow:"<i class='prev-arrow fa-solid fa-circle-chevron-left'></i>",  //이전 화살표 모양 설정
    nextArrow:"<i class='next-arrow fa-solid fa-circle-chevron-right'></i>", //다음 화살표 모양 설정 
  });
});