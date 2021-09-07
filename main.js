const nav = document.querySelector('#nav');
const menu = document.querySelector('.menu');
const menuList = document.querySelector('.menu-list');

//toggle nav
menu.addEventListener('click',()=>{
    nav.classList.toggle('fixed');
})

//scroll effect
window.addEventListener('scroll',()=>{
    nav.classList.remove('fixed');
})

window.addEventListener('scroll',()=>{
    let scroll = document.documentElement.scrollTop;

    if(scroll > 10){
        nav.classList.add('active');
    }else{
        nav.classList.remove('active');
    }
})

