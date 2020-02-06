(function ($) {
  $(function () {
    $('input, select').styler({
      onSelectOpened: function() {
        // к открытому селекту добавляется красная обводка
        $('.profile__field_select select').toggleClass('scrollbar-inner');
      }
    });
  });
})(jQuery);

