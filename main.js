let search = document.querySelector('.search-box');

document.querySelector('#search-icon').onclick = () => {
    search.classList.toggle('active');
};



let header = document.querySelector('header');

window.addEventListener('scroll' , () => {
    header.classList.toggle('shadow',window.scrollY > 0);
});

let menuIcon = document.querySelector('#menu-icon');
let nav = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    nav.classList.toggle('active');
};
