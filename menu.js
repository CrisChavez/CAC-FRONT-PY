// Menu-nav

eventListeners();
function eventListeners() {
    const menuNav = document.querySelector('.menu-nav');

    menuNav.addEventListener('click', navegacionResponsive);
}

function navegacionResponsive() {
    const navegacion = document.querySelector('.navegacion-principal');

    navegacion.classList.toggle('mostrar');
}