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