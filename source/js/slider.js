"use strict";
var slider = document.querySelector('.slider');

if (slider) {
    var btnBefore = slider.querySelector('.slider__button--before');
    var btnAfter = slider.querySelector('.slider__button--after');

    btnBefore.addEventListener('click', function () {
        slider.classList.remove('slider--after');
        slider.classList.add('slider--before');
    });
    btnAfter.addEventListener('click', function () {
        slider.classList.remove('slider--before');
        slider.classList.add('slider--after');
    });

    var docWidth = document.body.clientWidth;
    var tabletWidth = 768;

    if (docWidth >= tabletWidth) {
        var imageBefore = slider.querySelector('.slider__illustration--before');
        var imageAfter = slider.querySelector('.slider__illustration--after');
        var scale = slider.querySelector('.slider__progress-bar');
        var range = scale.querySelector('.slider__range');

        range.addEventListener('input', function() {
            imageBefore.style.width = (100 - range.value) + '%';
            imageAfter.style.width = range.value + '%';
        });

        btnBefore.addEventListener('click', function () {
            imageBefore.style.width = '100%';
            imageAfter.style.width = '0%';
            range.value = 0;
        });

        btnAfter.addEventListener('click', function () {
            imageBefore.style.width = '0%';
            imageAfter.style.width = '100%';
            range.value = 100;
        });
    }
}

