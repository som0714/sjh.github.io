/*p1-화살표*/
$(function(){
  $('.p1-slide').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    prevArrow:"<i class='fa-regular fa-circle-left'></i>",  //이전 화살표 모양 설정
    nextArrow:"<i class='fa-regular fa-circle-right'></i>", //다음 화살표 모양 설정 
  });     
});
/*p1-하트토글버튼*/
function heartBtn(x) {
  x.classList.toggle("fa-solid");
}
/*p2-스크롤이미지 나타남*/
let p2Ttl = document.querySelector(".p2-ttl")

window.addEventListener('scroll',function(){
  let value = window.scrollY
  console.log("screenY", value);

  if (value > 461) {
    p2Ttl.style.animation="ttl-slide 1.5s ease-out";
  }
});

let p2Txt = document.querySelector(".p2-desc")

window.addEventListener('scroll',function(){
  let value = window.scrollY
  console.log("screenY", value);

  if (value > 530) {
    p2Txt.style.animation="txt-slide 1.5s ease-out";
  }
});

/*p3-스크롤이미지 나타남*/
let p3Img = document.querySelector(".p3-img")

window.addEventListener('scroll',function(){
  let value = window.scrollY
  console.log("screenY", value);

  if (value > 887) {
    p3Img.style.animation="p3_img_slide 1.5s ease-out";
  }
});

let p3Txt = document.querySelector(".p3-txtbox")

window.addEventListener('scroll',function(){
  let value = window.scrollY
  console.log("screenY", value);

  if (value > 926) {
    p3Txt.style.animation="p3_txt_slide 1.5s ease-out";
  }
});

/*p4이미지 슬라이드*/
$('.p4-slide').slick({
  autoplay:true,
  autoplaySpeed:3000,
  speed:2000,
  pauseOnHover:false,
  slidesToShow:1,
  slidesToScroll:1,
  dots:true,
  dotsClass:'custom-dots',
  arrows:false,
  infinite:true
});

/*top btutton*/
let topbutton = document.getElementById("topBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topbutton.style.display = "block";
  } else {
    topbutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
