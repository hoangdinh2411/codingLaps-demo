const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

// show Sub menu
const menuItems = $$('.menu-item ')
const menubarIcon = $('.home-content i')
const siderbar = $('.siderbar')
menuItems.forEach(menuItem => {
    menuItem.onclick = function(e){
        if(e.target.classList.value == 'icon-link' || 'arrow'){
            menuItem.classList.toggle('openSubMenu')
        }
    }
});

menubarIcon.addEventListener('click', function(){
    siderbar.classList.toggle('close')
})