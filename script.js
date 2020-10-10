$(function(){
  $(".faq-q").on("click",function(){
    $(this).next().slideToggle();
    $(this).toggleClass("faq-active");
  });

  $(".menu-trigger,.main-nav a").on("click",function(){
    $(this).toggleClass("active");
    $(".main-nav ul").toggleClass("active")
  });

  $(".faq-modal-trigger").on("click",function(){
    $(".faq-modal-window").fadeIn();
    // $(".body").addClass("noscroll");
    $(".faq-modal-overLay").css("display","block");
    posi = $(window).scrollTop();
      $('[data-modal="fixed"]').css({
        position: 'fixed',
        top: -1 * posi
      });
  });

  $(".faq-modal-close").on("click",function(){
    $(".faq-modal-window").fadeOut();
    // $(".body").removeClass("noscroll")
    $(".faq-modal-overLay").css("display","none");
    $('[data-modal="fixed"]').attr('style', '');
    $('html, body').prop({scrollTop: posi});
  });

  $(".faq-modal-overLay").on("click",function(){
    $(".faq-modal-window").fadeOut();
    // $(".body").removeClass("noscroll")
    $(".faq-modal-overLay").css("display","none");
    $('[data-modal="fixed"]').attr('style', '');
    $('html, body').prop({scrollTop: posi});
  });

  let runScroll = function() {
    $('a[href^="#"]').click(function() {
        let speed = 400;
        let href = $(this).attr("href");
        let $target = $(href == "#" || href == "" ? 'html' : href);
        let position = $target.offset().top - 100;

        $('body,html').animate({
            scrollTop: position
        }, speed, 'swing');
        return false;
    });
  };

  runScroll();
});