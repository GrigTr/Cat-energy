'use strict';

var nav = document.querySelector('.main-nav');
var burger = document.querySelector('.main-nav__toggle');


var closeMenu = function () {
    nav.classList.remove('main-nav--open');
    nav.classList.add('main-nav--closed');
    burger.classList.add('main-nav__toggle--off');
};

var openMenu = function () {
    nav.classList.add('main-nav--open');
    nav.classList.remove('main-nav--closed');
    burger.classList.remove('main-nav__toggle--off');
};

burger.addEventListener('click', function() {
    if (nav.classList.contains('main-nav--open')) {
        closeMenu();
    } else {
        openMenu();
    }
});
