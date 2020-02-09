$(document).ready(function() {
    $('#nav-menu a[href^="#"]').click(function () {

        var target = $(this).attr('href');

        $('html, body').animate({scrollTop: $(target).offset().top - 72 }, 600);

        return false;
    });
});
