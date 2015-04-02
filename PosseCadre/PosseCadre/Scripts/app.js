/// <reference path="jquery-1.10.2.min.js" />
/// <reference path="jquery-scrollto.js" />


$(function () {

    $scroll = $('#scroll');

    $scroll.click(function () {
        $('#about').ScrollTo({
            duration: 2000,
            easing: 'linear'
        });
    });

});