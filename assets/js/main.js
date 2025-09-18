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
  var $els = $('.fade-in-up, .fade-in-right, .fade-in-zoom');

  // 要素が画面に一部でも映っているかを判定（より確実）
  function isVisible(elem) {
    var rect = elem.getBoundingClientRect();
    var winH = $(window).height();
    return rect.top < winH && rect.bottom > 0;
  }

  function check() {
    $els.each(function() {
      var $el = $(this);
      var visible = isVisible(this);

      if (visible) {
        // 画面内に入った時の処理
        if ($el.hasClass('fade-in-zoom')) {
          // zoomは遅延して追加。重複タイマーを作らない。
          if (!$el.data('fadeTimer') && !$el.hasClass('action')) {
            var timer = setTimeout(function() {
              $el.addClass('action');
              $el.removeData('fadeTimer'); // タイマー完了後はデータを消す
            }, 300); // 遅延時間（ms）
            $el.data('fadeTimer', timer);
          }
        } else {
          // up / right は一度だけ発火（再発火させたくない）
          if (!$el.hasClass('action')) $el.addClass('action');
        }
      } else {
        // 画面外になった時の処理
        if ($el.hasClass('fade-in-zoom')) {
          // 保留中のタイマーがあればキャンセル
          var t = $el.data('fadeTimer');
          if (t) {
            clearTimeout(t);
            $el.removeData('fadeTimer');
          }
          // zoomは離脱でクラスを外して再発火可能にする
          $el.removeClass('action');
        }
        // up / right は一度だけ発火のまま（何もしない）
      }
    });
  }

  // 初回とスクロール・リサイズ時にチェック
  $(window).on('scroll resize load', check);
  check();
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