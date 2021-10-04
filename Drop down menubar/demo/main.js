const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const arrows = $$('.arrow');

arrows.forEach(arrow => {
    arrow.addEventListener("click",(e)=>{
        let arrowParent = e.target.parentElement.parentElement;
        arrowParent.classList.toggle('showMenu');
    } )
});


const sidebar = $('.sidebar');
const sidebarBtn = $('.bx-menu');

sidebarBtn.addEventListener("click",()=>{
    sidebar.classList.toggle('close');
})
