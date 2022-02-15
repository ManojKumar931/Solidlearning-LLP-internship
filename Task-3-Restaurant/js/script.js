// header section starts 

let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('header .navbar');

menu.onclick = () =>{
   // menu.classList.toggle('fa-times');
   navbar.classList.toggle('active');
};

window.onscroll = () =>{
   // menu.classList.remove('fa-times');
   navbar.classList.remove('active');
};

// header section ends

// menu section starts 

var swiper = new Swiper(".menu-slider", {
    grabCursor:true,
    loop:true,
    autoHeight:true,
    centeredSlides:true,
    spaceBetween: 20,
    pagination: {
       el: ".swiper-pagination",
       clickable: true,
    },
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
 });

// menu section ends 

// feedback section starts 

let slide=document.querySelectorAll('.feedback .container .slide');
let index=0;

function next(){
    slide[index].classList.remove('active');
    index=(index+1)%slide.length;
    slide[index].classList.add('active');
}

function prev(){
    slide[index].classList.remove('active');
    index=(index-1+slide.length)%slide.length;
    slide[index].classList.add('active');
}

// feedback section ends 