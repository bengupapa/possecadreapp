/// <reference path="jquery-1.10.2.min.js" />
/// <reference path="jquery-scrollto.js" />
/// <reference path="script/main-index-slider.js" />
/// <reference path="script/nivo-lightbox.min.js" />
/// <reference path="script/owl.carousel.min.js" />


$(function () {

    innerHtml_1 = "We engage with clients throughout the project development life-cycle to provide an application tailored to business requirements.We specialize in automating business processes, including employee leave management, corporate travel, facility & material management, accounting & reporting. We build Enterprice Resource Planning (ERP) systems tailored to your business. We provide accounting system integration, including SAP and Xero."
    innerHtml_2 = "While websites give you online presence, web applications enable you to conduct your business online. Through our web applications service we provide products such as discussion forums/blogs, e-commerce sites, communications apps, files sharing systems, online booking systems and much more. All you have to do is to get in touch with us."
    innerHtml_3 = "The world has really gone digital. Your online presence is indeed crucial for you to be easily found by fans, ordinary people, potential employer, contractors, business partners, potential employees, clients and many more. Websites help extend you reach, and potentially increase your customer base. We offer all sorts of websites. Anything from static personal website to dynamic database-driven web 2.0 corporate website. Every natural and jusritic person can have a website. Let us make one for you."
    innerHtml_4 = "Mobile application We engage with clients throughout the project development life-cycle to provide an application tailored to business requirements.We specialize in automating business processes, including employee leave management, corporate travel, facility &"
    innerHtml_5 = "informationsystem consulting We engage with clients throughout the project development life-cycle to provide an application tailored to business requirements.We specialize in automating business processes, including employee leave management, corporate travel, facility &"
    innerHtml_6 = "Ad-hoc applications We engage with clients throughout the project development life-cycle to provide an application tailored to business requirements.We specialize in automating business processes, including employee leave management, corporate travel, facility &"

    var htmlArr = new Array();
    var newvalue = "";

    htmlArr[0] = innerHtml_1;
    htmlArr[1] = innerHtml_2;
    htmlArr[2] = innerHtml_3;
    htmlArr[3] = innerHtml_4;
    htmlArr[4] = innerHtml_5;
    htmlArr[5] = innerHtml_6;

    for (var r = 0; r <= 5; r++) {

        var fvalue = r + 1;

        if ($('#' + fvalue).hasClass('col-md-6')) {

            newvalue = htmlArr[r];

            $('#' + fvalue).children('.cont').children('.acontent').children('p').empty().html(newvalue);

        } else {

            newvalue = htmlArr[r].substr(0, 132) + ' ' + '<span class="tag">read more</span>';
            
            $('#' + fvalue).children('.cont').children('.acontent').children('p').empty().html(newvalue);
        }

    };


    $(".aboutussummary").owlCarousel({
        autoPlay: false,
        autoHeight: true,
        singleItem: true,
        navigation: false,
        itemsDesktop: [1000, 1],
        itemsDesktopSmall: [900, 1],
        itemsTablet: [600, 1],
        itemsMobile: false,
        pagination: false
    });

    $(".aboutPosseCadre").owlCarousel({
        autoPlay: true,
        autoHeight: true,
        singleItem: true,
        navigation: false,
        itemsDesktop: [1000, 1],
        itemsDesktopSmall: [900, 1],
        itemsTablet: [600, 1],
        itemsMobile: false,
        pagination: true
    });

    $('#_contacts').addClass('slideInContacts');
    $('#_services').addClass('slideInServices');
    $('#_aboutus').addClass('slideInAboutus');

    $('.navmenu').children('.navmain').addClass('inactiveclass');

    carousel = $('#owl-cont');

    $('.slideInContacts').click(function () {
        $('#owl-cont').show(600, function () { });
        carousel.trigger('owl.goTo', 1);
    });

    $('.slideInAboutus').click(function () {
        $('#owl-cont').show(600, function () { });
        carousel.trigger('owl.goTo', 2);
    });

    $('.slideInServices').click(function () {
        $('#owl-cont').show(600, function () { });
        carousel.trigger('owl.goTo', 3);
    });


});

$('.navmenuicon').click(function () {

    $('#sidemenuwrapper').slideToggle();
});


$('.home').click(function () {

    carousel.owlCarousel().trigger('owl.goTo', 0);
    $('#headerwrapper').ScrollTo({
        duration: 2000,
        easing: 'linear',
        callback: function () {

        }
    });

});

$('#scroll').click(function () {

    $('#about').ScrollTo({
        duration: 2000,
        easing: 'linear'
    });


});

$(document).scroll(function () {

    if ($('head').offset().top > 1) {
        

        $('#scrollicon').removeClass('fa-chevron-down').addClass('fa-chevron-up');
        $('#scrolltext').hide();
        $('#owl-cont').hide(500, function () { });

        if ($('head').offset().top > 600) {

            $('#secNav').removeClass('transparent').addClass('tred');
            $('#cadre').removeClass('red').addClass('tgray');

            $('#_contacts').removeClass('slideInContacts').addClass('oncontact');
            $('#_services').removeClass('slideInServices').addClass('onservices');
            $('#_aboutus').removeClass('slideInAboutus').addClass('onabout');

            $('.navmain').removeClass('inactiveclass').addClass('activeclass');



        } else {

            $('#secNav').removeClass('tred').addClass('transparent');
            $('#cadre').removeClass('tgray').addClass('red');


            $('#_contacts').removeClass('oncontact').addClass('slideInContacts');
            $('#_services').removeClass('onservices').addClass('slideInServices');
            $('#_aboutus').removeClass('onabout').addClass('slideInAboutus');

            $('.navmain').removeClass('activeclass').addClass('inactiveclass');


        }

    } else {
        $('#scrollicon').removeClass('fa-chevron-up').addClass('fa-chevron-down');
        $('#scrolltext').show();

    }

});


//Handling of scrolling between sections

$(document).on('click', '.onabout', null, function () {

    $('#sidemenuwrapper').slideToggle();
    $('#about').ScrollTo({
        duration: 2000,
        easing: 'linear'
    });
});

$(document).on('click', '.onservices', null, function () {

    $('#sidemenuwrapper').slideToggle();
    $('#services').ScrollTo({
        duration: 2000,
        easing: 'linear',

    });

});

$(document).on('click', '.oncontact', null, function () {

    $('#sidemenuwrapper').slideToggle();
    $('#contacts').ScrollTo({
        duration: 2000,
        easing: 'linear'
    });

});

function work() {

    $('#work').ScrollTo({
        duration: 2000,
        easing: 'linear'
    });

};

function expertise() {

    $('#expertise').ScrollTo({
        duration: 2000,
        easing: 'linear'
    });
};


function gcontacts() {

    $('#contacts').ScrollTo({
        duration: 2000,
        easing: 'linear'
    });
};


//Controlling blocks in header services slide

$('#1').click(function () {
    resize(1);
});

$('#2').click(function () {
    resize(2);
});

$('#3').click(function () {
    resize(3);
});

$('#4').click(function () {
    resize(4);
});

$('#5').click(function () {
    resize(5);
});

$('#6').click(function () {
    resize(6);
});

function getText(val) {

    var aText;
    switch (val) {

        case 1:
            aText = innerHtml_1;
            break;
        case 2:
            aText = innerHtml_2;
            break;
        case 3:
            aText = innerHtml_3;
            break;
        case 4:
            aText = innerHtml_4;
            break;
        case 5:
            aText = innerHtml_5;
            break;
        case 6:
            aText = innerHtml_6;
            break;
    };

    return aText;
};


function resize(val) {


    var inText;
    var nVal = val + 1;
    var pVal = val - 1;
    var nnVal = val + 2;
    var maxVal;
    var minVal;

    if (val <= 3) {
        maxVal = 3;
        minVal = 0;
    }
    else {
        maxVal = 6;
        minVal = 4;
    }

    var inText = getText(val);

    if ($('#' + val).hasClass('col-md-6')) {

        //switch column span/classes
        $('#' + val).removeClass('col-md-6').addClass('col-md-3');

        //Show a shorter text for clicked box
        var nuStr = inText.substr(0, 132) + ' ' + '<span class="tag">read more</span>';
        $('#' + val).children('.cont').children('.acontent').children('p').empty().html(nuStr);

        //Resize adjacent boxes
        for (var i = minVal; i <= val; i++) {

            var nuText = "";
            //nuText = getText(i)
            switch (i) {
                
                case 1:
                    nuText = innerHtml_1;
                    break;
                case 2:
                    nuText = innerHtml_2;
                    break;
                case 3:

                    nuText = innerHtml_3;
                    break;
                case 4:
                    nuText = innerHtml_4;
                    break;
                case 5:
                    nuText = innerHtml_5;
                    break;
                case 6:
                    nuText = innerHtml_6;
                    break;
            };

            var newStr = nuText.substr(0, 132) + ' ' + '<span class="tag">read more</span>';
            $('#' + i).children('.cont').children('.acontent').children('p').empty().html(newStr);

            $('#' + i).removeClass('col-md-6').addClass('col-md-3');

        }
        for (var i = nnVal; i <= maxVal; i++) {

            var nuoText = "";
            switch (i) {

                case 1:
                    nuoText = innerHtml_1;
                    break;
                case 2:
                    nuoText = innerHtml_2;
                    break;
                case 3:
                    nuoText = innerHtml_3;
                    break;
                case 4:
                    nuoText = innerHtml_4;
                    break;
                case 5:
                    nuoText = innerHtml_5;
                    break;
                case 6:
                    nuoText = innerHtml_6;
                    break;
            };

            console.log("B: " + nuoText); 

            var newoStr = nuoText.substr(0, 132) + ' ' + '<span class="tag">read more</span>';
            $('#' + i).children('.cont').children('.acontent').children('p').empty().html(newoStr);

            $('#' + i).removeClass('col-md-6').addClass('col-md-3');
        }

        //Control boxes at the end
        if (val == maxVal) {
           
            $('#' + pVal).removeClass('col-md-3').addClass('col-md-6');

            var nuoaText = "";
            switch (pVal) {

                case 1:
                    nuoaText = innerHtml_1;
                    break;
                case 2:
                    nuoaText = innerHtml_2;
                    break;
                case 3:
                    nuoaText = innerHtml_3;
                    break;
                case 4:
                    nuoaText = innerHtml_4;
                    break;
                case 5:
                    nuoaText = innerHtml_5;
                    break;
                case 6:
                    nuoaText = innerHtml_6;
                    break;
            };
          
            $('#' + pVal).children('.cont').children('.acontent').children('p').empty().html(nuoaText);
        
        }     
        else {

            $('#' + nVal).removeClass('col-md-3').addClass('col-md-6');

            var nuoabText = "";
            switch (nVal) {

                case 1:
                    nuoabText = innerHtml_1;
                    break;
                case 2:
                    nuoabText = innerHtml_2;
                    break;
                case 3:
                    nuoabText = innerHtml_3;
                    break;
                case 4:
                    nuoabText = innerHtml_4;
                    break;
                case 5:
                    nuoabText = innerHtml_5;
                    break;
                case 6:
                    nuoabText = innerHtml_6;
                    break;
            };

            $('#' + nVal).children('.cont').children('.acontent').children('p').empty().html(nuoabText);
        }
        
    }
    else {

        //switch classes/column span
        $('#' + val).addClass('col-md-6');

        //Show full text
        $('#' + val).children('.cont').children('.acontent').children('p').empty().html(inText);

        //Resize adjacent boxes
        for (var i = minVal; i < val; i++) {
            $('#' + i).removeClass('col-md-6').addClass('col-md-3');

            var nuoabsText = "";
            switch (i) {

                case 1:
                    nuoabsText = innerHtml_1;
                    break;
                case 2:
                    nuoabsText = innerHtml_2;
                    break;
                case 3:
                    nuoabsText = innerHtml_3;
                    break;
                case 4:
                    nuoabsText = innerHtml_4;
                    break;
                case 5:
                    nuoabsText = innerHtml_5;
                    break;
                case 6:
                    nuoabsText = innerHtml_6;
                    break;
            };


            var newoabsStr = nuoabsText.substr(0, 132) + ' ' + '<span class="tag">read more</span>';
            $('#' + i).children('.cont').children('.acontent').children('p').empty().html(newoabsStr);


        }
        for (var i = nVal; i <= maxVal; i++) {
            $('#' + i).removeClass('col-md-6').addClass('col-md-3');

            var nuoabssText = "";
            switch (i) {

                case 1:
                    nuoabssText = innerHtml_1;
                    break;
                case 2:
                    nuoabssText = innerHtml_2;
                    break;
                case 3:
                    nuoabssText = innerHtml_3;
                    break;
                case 4:
                    nuoabssText = innerHtml_4;
                    break;
                case 5:
                    nuoabssText = innerHtml_5;
                    break;
                case 6:
                    nuoabssText = innerHtml_6;
                    break;
            };


            var newoabssStr = nuoabssText.substr(0, 132) + ' ' + '<span class="tag">read more</span>';
            $('#' + i).children('.cont').children('.acontent').children('p').empty().html(newoabssStr);
        }
    }

};