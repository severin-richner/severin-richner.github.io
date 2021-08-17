const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')


menu.addEventListener('click', function () {
    // toggle between open and closed menu
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
})