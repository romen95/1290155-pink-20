const nav = document.querySelector('.nav');
const toggle = nav.querySelector('.nav__toggle');
const header = document.querySelector('.page-header__block');

nav.classList.remove('nav--no-js');
header.classList.remove('page-header__block--no-js');

toggle.addEventListener('click', function () {
header.classList.toggle('page-header__block--grey');
nav.classList.toggle('nav--opened');
});
