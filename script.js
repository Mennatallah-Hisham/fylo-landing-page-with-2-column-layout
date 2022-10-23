
const iconClose =document.querySelector(".icon-close");

const iconOpen=document.querySelector(".icon-open");

const btnNav= document.querySelector(".btn-mobile-nav");
const html =document.querySelector("html");
const headerEl =document.querySelector(".header");


btnNav.addEventListener('click',()=>{

    iconClose.classList.toggle("hide");
    iconOpen.classList.toggle("hide");
    html.classList.toggle("hide-overflowY");
    headerEl.classList.toggle("open-nav")
})