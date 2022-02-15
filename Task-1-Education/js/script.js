// header section starts 

let menu=document.querySelector('#menu-bar');
let navbar=document.querySelector('header .navbar');

menu.onclick=()=>{
    navbar.classList.toggle('active');
};

window.onscroll=()=>{
    navbar.classList.remove('active');
};

// header section ends

// review section starts 

var swiper = new Swiper(".review", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop:true,
  });


//   review section ends 