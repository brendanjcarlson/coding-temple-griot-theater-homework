const navToggler = document.querySelector('.nav__primary__toggle');
const navList = document.querySelector('.nav__primary__list');
navToggler.addEventListener('click', toggleNav);

function toggleNav(e) {
    e.preventDefault();
    if (navList.style.visibility === 'hidden') {
        navList.style.visibility = 'visible';
    } else {
        navList.style.visibility = 'hidden';
    }
}
