$(document).ready(function () {
  var tab = $('.tab');
  var save = $('.save');
  var bookmarkSave = $('.hero-bg__bookmark');

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

  bookmarkSave.on('click', function () {
    $(this).toggleClass('hero-bg__bookmark_save');
  });

  // likes count
  var btnLike = $('.support-social__like');
  var likeCount = $('.support-social__count');
  var heroLike = $('.hero-about__container_like');
  var heroCount = $('.hero-about__span_count');

  btnLike.on('click', function () {
    if (btnLike.hasClass('like')) {
      var value = parseInt($(likeCount).text(), 10) - 1;
      $(likeCount).text(value);
    } else {
      value = parseInt($(likeCount).text(), 10) + 1;
      $(likeCount).text(value);
    }
    btnLike.toggleClass('like');
  });

  heroLike.on('click', function () {
    if (heroLike.hasClass('like')) {
      var value = parseInt($(heroCount).text(), 10) - 1;
      $(heroCount).text(value);
    } else {
      value = parseInt($(heroCount).text(), 10) + 1;
      $(heroCount).text(value);
    }
    heroLike.toggleClass('like');
  });

  // Read more Comments
  var commentsButton = $('.comments-button');
  var hiddenComments = $('.comments-item__list');

  commentsButton.on('click', function () {
    hiddenComments.removeClass('comments-item__list_hidden');
    commentsButton.addClass('comments-button__hidden');
  });

  // Read more Side bar
  var sideBarButton = $('.side-bar__bottom');
  var hiddenSideBar = $('.side-bar__list_hidden');

  sideBarButton.on('click', function () {
    $(hiddenSideBar).toggleClass('side-bar__list_hidden');
    $('.side-bar__item').toggleClass('side-bar__item_active');
    $('.side-bar__list').toggleClass('side-bar__list_active');
  });

  // Read more Column
  var columnButton = $('.newsfeed-column__footer');
  var hiddenCard = $('.newsfeed-column__main_hidden');
  var visibleCard = $('.newsfeed-column__main_visible');

  columnButton.on('click', function () {
    $(hiddenCard).toggleClass('newsfeed-column__main_hidden');
    $(visibleCard).toggleClass('newsfeed-column__main_visible');
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

  //sign in modal
  var openBtn = $('.user');
  var closeBtn = $('.button-modal__close');
  var overlay = $('.sign-in__overlay');
  var subscribeBtn = $('.header-top__subscribe');
  subscribeBtn.on('click', openSubscribe);
  openBtn.on('click', openSingIn);
  closeBtn.on('click', closeSingIn);
  overlay.on('click', closeSingIn);

  function openSubscribe() {
    var targetModal = $(this).attr('data-href');
    $(targetModal).find('.sign-in__overlay').addClass('sign-in__overlay_visible');
    $(targetModal).find('.sign-in__modal').addClass('sign-in__modal_visible');
  }

  function openSingIn() {
    var targetModal = $(this).attr('data-href');
    $(targetModal).find('.sign-in__overlay').addClass('sign-in__overlay_visible');
    $(targetModal).find('.sign-in__modal').addClass('sign-in__modal_visible');
  }

  function closeSingIn(event) {
    event.preventDefault();
    var modalOverlay = $('.sign-in__overlay');
    var modalUser = $('.sign-in__modal');
    modalOverlay.removeClass('sign-in__overlay_visible');
    modalUser.removeClass('sign-in__modal_visible');
  }

  $(document).keydown(function (e) {
    if (e.keyCode == 27) {
      $(".sign-in__overlay").removeClass("sign-in__overlay_visible");
      $(".sign-in__modal").removeClass("sign-in__modal_visible");
    }
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

  var tabsSwiper = new Swiper('.tabs-recomended__swiper', {
    // Optional parameters
    loop: false,
    speed: 400,
    autoplay: {
      delay: 2000,
    },
    slidesPerView: 4,
    spaceBetween: 0,
    breakpoints: {
      577: {
        slidesPerView: 4,
        spaceBetween: 0
      },
      426: {
        slidesPerView: 3,
        spaceBetween: 0
      },
      320: {
        slidesPerView: 2,
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
        },
        password: {
          required: true,
          minlength: 10
        }
      },
      messages: {
        email: {
          required: "* Enter your email address",
          email: "* Must be name@domain.com"
        },
        message: {
          required: "* Enter your message",
          minlength: "* More than 100 letters long"
        },
        password: {
          required: "* Enter password",
          minlength: "* More than 10 letters long"
        }
      },
    });
  });
  $(function () {
    $('.lazy').lazy();
  });
});
