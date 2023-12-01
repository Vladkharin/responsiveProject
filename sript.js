const menuBtnOpen = document.querySelector('.menuOpen')
const menu = document.querySelector('.menu')
const menuBtnClose = document.querySelector('.menu__buttonClose')


menuBtnOpen.addEventListener('click', () => {
    menu.classList.add('flex');
    menu.classList.remove('none');
})

menuBtnClose.addEventListener('click', () => {
    menu.classList.remove('flex');
    menu.classList.add('none');
})