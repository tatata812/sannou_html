$(function () {

  // SPメニュー
  $("#js-hamburger-menu, .navigation__link").click(function () {
    $(".header-sp,.black-bg,.header").toggleClass("active"); //ボタン自身に activeクラスを付与し
  });
  $(".header-sp__btn-img").click(function () {
    $(".header-sp,.black-bg,.header").toggleClass("active");
    $('.hamburger-menu').toggleClass('hamburger-menu--open');
  });

  $('#js-hamburger-menu, .navigation__link').on('click', function () {
    $('.navigation').slideToggle(500);
    $('.hamburger-menu').toggleClass('hamburger-menu--open')
  });


  // TOPへボタン
  $(function () {
    var $topButton = $(".top-to-js");
    var $footer = $("footer"); // フッター要素を取得

    // トップへスクロール
    $topButton.click(function (e) {
      e.preventDefault();
      e.stopPropagation();
      $("html, body").animate({
        scrollTop: 0
      }, 500);
    });

    // スクロール時の処理
    $(window).scroll(function () {
      var scrollTop = $(window).scrollTop();
      var windowHeight = $(window).height();
      var footerTop = $footer.offset().top;

      // フッターに達したかどうか
      if (scrollTop + windowHeight >= footerTop) {
        $topButton.fadeOut();
      } else {
        $topButton.fadeIn();
      }
    });
  });


  // メインビジュアル　スライダー
  $(document).ready(function () {
    const $slides = $('.main-visual-js img');
    let current = 0;
    const slideCount = $slides.length;
    const intervalTime = 4000; // 3秒ごとに切り替え

    // 初期設定：最初の画像以外を非表示
    $slides.hide().eq(current).show();

    // スライド切り替え
    setInterval(function () {
      const next = (current + 1) % slideCount;
      $slides.eq(current).fadeOut(1000);
      $slides.eq(next).fadeIn(1000);
      current = next;
    }, intervalTime);
  });


  //フェードイン
$(function() {
  function fadeInOnScroll() {
    $('.fade-in-up, .fade-in-right, .fade-in-zoom,.fade-in-left').each(function() {
      var elemPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();

      if (scroll > elemPos - windowHeight + 100) {
        if ($(this).hasClass('fade-in-zoom')) {
          // zoomだけ遅延
          var el = $(this);
          setTimeout(function(){
            el.addClass('action');
          }, 300); // 0.3秒遅延
        } else {
          $(this).addClass('action');
        }
      }
    });
  }

  fadeInOnScroll();

  $(window).on('scroll', function() {
    fadeInOnScroll();
  });
});


  $(function () {
    var headerHeight = 40; // ヘッダーの高さ
    $('a[href^="#"]').click(function () {
      var speed = 500;
      var href = $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var position = target.offset().top - headerHeight;
      $("html, body").animate({
        scrollTop: position
      }, speed, "swing");
      return false;
    });
  });

})