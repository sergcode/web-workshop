function activeMenu() {

  var $elem = $('#nav-menu li a');

  $elem.click(function () {
    var bgMenu = $('.bg__menu');
    var hamburger = $('.hamburger');
    var htmlLand = $('html');
    var menuNavbar = $('.nav-menu__collapse');
    var widthHeader = $('.main').toggleClass('width');
    var activeMain = $('.main, .footer').toggleClass('show');
    $elem.each(function () {
      $(this).removeClass('active');
      $(bgMenu).removeClass('active');
      $(hamburger).removeClass('is-active');
      $(htmlLand).removeClass('modal-open');
      $(menuNavbar).removeClass('open');
      $(widthHeader).removeClass('width');
      $(activeMain).removeClass('show');

    });

    $(this).addClass('active');

  })

}


$(document).ready(function () {
  activeMenu();
});