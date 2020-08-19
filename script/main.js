$(document).ready(function () {
  var tab = $('.tab');
  var save = $('.save');

  tab.on('click', function () {
    tab.removeClass('tabs-recomended__card_active');
    $(this).toggleClass('tabs-recomended__card_active');
    var activeTabContent = $(this).attr('data-target');
    $('.tabs-content').removeClass('tabs-content__visible');
    $(activeTabContent).toggleClass('tabs-content__visible');
  });

  save.on('click', function () {
    $(this).toggleClass('newsfeed-card__content_save');
  })
});

