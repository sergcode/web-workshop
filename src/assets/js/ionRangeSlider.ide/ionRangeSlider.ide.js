$(function () {
  $(".js-range-slider").ionRangeSlider({
    skin: "big",
    min: 0,
    max: 100,
    from: 50,
    step: 5,
    grid: true
  });

  $('.irs-grid-text.js-grid-text-0').text('Не владею');
  $('.irs-grid-text.js-grid-text-1').text('Использую готовые решения');
  $('.irs-grid-text.js-grid-text-2').text('Использую готовые решения и умею их переделывать');
  $('.irs-grid-text.js-grid-text-4').text('Пишу сложный JS с нуля');

});