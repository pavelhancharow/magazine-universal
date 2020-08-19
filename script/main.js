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
  });

  //initialize swiper when document ready
  var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    loop: true,
    speed: 400,
    autoplay: {
      delay: 3000,
    },
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

  //validation
  $('.footer-subscribe__form').validate({
    errorClass: "invalid",
    rules: {
      email: {
        required: true,
        email: true
      }
    },
    messages: {
      email: {
        required: "* Enter your email address",
        email: "* Must be name@domain.com"
      }
    }
  });
});

