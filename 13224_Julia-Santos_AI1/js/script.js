//Init AOS plugin
AOS.init();

var window_width = $(window).width();
var window_height = $(window).height();

//INTRO

$('#intro-title').fadeIn(1500, function () {
    $('#intro-title2').fadeIn(2000, function () {
        $("#scroll").fadeIn(2000);
    });
});

$("#landing").mousemove(function (e) {

    var x = e.screenX;
    var y = e.screenY;

    $("#hero-heart").css({ "margin-left": (window_width / 2 - x) / -45, 'margin-top': (window_height / 2 - x) / -45, 'margin-top': (window_height / 2 - y) / -30 });
    $("#intro-circle").css({ "margin-left": (window_width / 2 - x) / 45, 'margin-top': (window_height / 2 - y) / 30 });
    $("#intro-circle2").css({ "margin-left": (window_width / 2 - x) / -45, 'margin-top': (window_height / 2 - y) / 30 });
    $("#intro-circle3").css({ "margin-left": (window_width / 2 - x) / -45, 'margin-top': (window_height / 2 - y) / 30 });
    $("#intro-circle4").css({ "margin-left": (window_width / 2 - x) / 45, 'margin-top': (window_height / 2 - x) / 30 });
})


//QUIZ

//ir para o quiz button

$("#button").click(function () {

    document.getElementById('quiz-section').style.display = 'block';

    $('html, body').animate({
        scrollTop: $("#quiz-section").offset().top
    }, 1000);
});

// mudar perguntas
var indice_actual = 0;
var quiz_total = $('.quiz').length;

//direita
$('#next').click(function () {
    if (indice_actual < quiz_total - 1) {
        var proximo_indice = indice_actual + 1;
    } else {
        var proximo_indice = indice_actual;
    }

    $('.quiz').eq(indice_actual).stop().animate({ 'left': '-100%' });

    $('.quiz').eq(proximo_indice).stop().css('left', '100%');

    $('.quiz').eq(proximo_indice).stop().animate({ 'left': '0' });

    indice_actual = proximo_indice;
});

//esquerda

$('#back').click(function () {


    if (indice_actual > 0) {

        var proximo_indice = indice_actual - 1;
    } else {
        var proximo_indice = 0;
    }


    $('.quiz').eq(indice_actual).stop().animate({ 'left': '100%' });

    $('.quiz').eq(proximo_indice).stop().css('left', '-100%');

    $('.quiz').eq(proximo_indice).animate({ 'left': '0' });

    indice_actual = proximo_indice;

});

//PAGINA

$(".pagina").mousemove(function (e) {

    var x = e.screenX;
    var y = e.screenY;


    $(".img1").css({ "margin-left": (window_width / 2 - x) / -45, 'margin-top': (window_height / 2 - x) / -45, 'margin-top': (window_height / 2 - y) / -30 });
    $(".img2").css({ "margin-left": (window_width / 2 - x) / 45, 'margin-top': (window_height / 2 - y) / 30 });
});

//PAGINA MENU

$('#menu a').click(function () {

    document.getElementById('paginas').style.display = 'block';

    $('html, body').animate({
        scrollTop: $("#paginas").offset().top
    }, 1000);

    var indice_activo = $('.active-menu').index();

    var indice_seguinte = $(this).index();

    if (indice_activo != indice_seguinte) {

        $('.active-menu').removeClass('active-menu');
        $(this).addClass('active-menu');

        $('.pagina').eq(indice_activo).fadeOut(500);
        $('.pagina').eq(indice_seguinte).fadeIn(500);

    }
});
