//Element
const homeSection = document.getElementById('home-content');
const menuSection = document.getElementById('menu-content');
const contactSection = document.getElementById('contact-content');

function show1(){
    homeSection.style.display = 'block';
    menuSection.style.display = 'none';
    contactSection.style.display = 'none';
}

function show2(){
    homeSection.style.display = 'none';
    menuSection.style.display = 'block';
    contactSection.style.display = 'none';
}

function show3(){
    homeSection.style.display = 'none';
    menuSection.style.display = 'none';
    contactSection.style.display = 'block';

