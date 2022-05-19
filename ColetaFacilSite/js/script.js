var navList = document.getElementById("navList")

function abrirMenu(){
    const sideMenu = document.querySelector('.side-menu');
    const navList = document.querySelector('.nav-list');
    navList.classList.toggle('nav-toggle');
    sideMenu.classList.toggle('fa-times');
 }

 function fecharMenu(){
     navLinks.style.transform = translateX(900);
 }

//  Ativar menu
const navLink = document.querySelectorAll('.nav-link')

function linkAction(){
    navLink.forEach(n => n.classList.remove('active'))
    this.classList.add('active')

    const navMenu = document.getElementById('nav-list')
    navMenu.classList.remove('show')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

var swiper = new Swiper('.blog-slider', {
    spaceBetween: 30,
    effect: 'fade',
    loop: true,
    mousewheel: {
      invert: false,
    },
    pagination: {
      el: '.blog-slider__pagination',
      clickable: true,
    }
  });

// Drop-down central de ajuda

const accordion = document.getElementsByClassName('card');

for (i = 0; i < accordion.length; i++){
  accordion[i].addEventListener('click', function(){
    this.classList.toggle('active')
  })
}

// Label animation

const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});


//teste

const section = document.querySelectorAll('section');
const link = document.querySelectorAll('.nav-link')

window.onscroll = function(){
  section.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 120;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');
  
    if(top>offset && top < offset+height){
      link.forEach(link => {
        link.classList.remove('active');
        document.querySelector('.nav-link[href*='+id+']').classList.add('active')
      })
    }
  })
}