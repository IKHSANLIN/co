const toogleMenu = document.querySelector('nav .toggle-menu');
const navMenu = document.querySelector(' nav .nav-menu');

toogleMenu.addEventListener('click', function() {
    navMenu.classList.toggle('show');

    if (navMenu.classList.contains('show')) {
        this.classList.replace('bx-menu', 'bx-x');

    } else {
        this.classList.replace('bx-x', 'bx-menu');
    }

});