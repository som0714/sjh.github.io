window.addEventListener('scroll',function(){
  let value = window.scrollY
  console.log("screenY", value);
});

/*p1-스크롤이미지 나타남*/
let p1Ttl = document.querySelector(".p1-ttl")

window.addEventListener('scroll',function(){
  let value = window.scrollY
  console.log("screenY", value);

  if (value > 53) {
    p1Ttl.style.animation="p1-ttl 1.5s ease-out";
  }
});
let p1T = document.querySelector(".p1-t")

window.addEventListener('scroll',function(){
  let value = window.scrollY
  console.log("screenY", value);

  if (value > 143) {
    p1T.style.animation="p1-t 1.5s ease-out";
  }
});

/*p3-스크롤이미지 나타남*/
let p3T1 = document.querySelector(".p3-txt1")

window.addEventListener('scroll',function(){
  let value = window.scrollY
  console.log("screenY", value);

  if (value > 1237) {
    p3T1.style.animation="p3-txt1 1.5s ease-out";
  }
});
let p3T2 = document.querySelector(".p3-txt2")

window.addEventListener('scroll',function(){
  let value = window.scrollY
  console.log("screenY", value);

  if (value > 1401) {
    p3T2.style.animation="p3-txt2 1.5s ease-out";
  }
});
let p3T3 = document.querySelector(".p3-txt3")

window.addEventListener('scroll',function(){
  let value = window.scrollY
  console.log("screenY", value);

  if (value > 1895) {
    p3T3.style.animation="p3-txt3 1.5s ease-out";
  }
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