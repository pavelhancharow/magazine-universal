$(document).ready(function () {
  var tab = $('.tab');
  var save = $('.save');
  var commentsButton = $('.comments-button');
  var hiddenComments = $('.comments-item__list_hidden');
  var loadMore = $('.comments-button__img');

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

  commentsButton.on('click', function () {
    commentsButton.removeClass('tabs-recomended__list_hidden');
    $(loadMore).toggleClass('comments-button__img_rotate');
    $(hiddenComments).toggleClass('comments-item__list_hidden');
  });

  //header menu
  var menuSections = $('.button-menu');

  menuSections.on('click', function () {
    $('.header-bottom').toggleClass('header-bottom__active');
    $('.header-top__search').toggleClass('header-top__search_active');
    $('.header-top__info').toggleClass('header-top__info_active');
    $('.header-top__logo').toggleClass('header-top__logo_active');
    $('.secondary-director').toggleClass('secondary-director_active');
  });

  $(window).scroll(function () {
    var height = $(window).scrollTop();
    /*Если сделали скролл на 100px задаём новый класс для header*/
    if (height > 250) {
      $('.header-bottom').addClass('header-bottom__fixed');
    } else {
      /*Если меньше 100px удаляем класс для header*/
      $('.header-bottom').removeClass('header-bottom__fixed');
    }
  });

  //initialize swiper when document ready
  var adsList = new Swiper('.ads-list', {
    // Optional parameters
    loop: true,
    speed: 400,
    slidesPerView: 4,
    spaceBetween: 0,
    breakpoints: {
      993: {
        slidesPerView: 4,
        spaceBetween: 0
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 0
      },
      577: {
        slidesPerView: 2,
        spaceBetween: 0
      },
      426: {
        slidesPerView: 2,
        spaceBetween: 0
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 0
      }
    }
  });

  var informationSlider = new Swiper('.information-block__slider', {
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

  var paragraphSwiper = new Swiper('.paragraph-photos__swiper', {
    // Optional parameters
    loop: true,
    speed: 400,

    navigation: {
      nextEl: '.paragraph-button__next',
      prevEl: '.paragraph-button__prev',
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },

  });

  //validation
  $(".form").each(function () {
    $(this).validate({
      errorClass: "invalid",
      rules: {
        email: {
          required: true,
          email: true
        },
        message: {
          required: true,
          minlength: 100
        }
      },
      messages: {
        email: {
          required: "* Enter your email address",
          email: "* Must be name@domain.com"
        },
        message: {
          required: "* Enter your message",
          minlength: "* More than 100 letters long",
        }
      },
    });
  });
});

