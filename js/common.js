//スムーススクロール
//スムーススクロール
$(function(){
  $('a[href^="#"]').click(function(){
    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
});

//ナビゲーション用
(function($) {
    $(function () {
        $('#nav-toggle').on('click', function() {
            $('body').toggleClass('open');
        });
		$('#gloval-nav a').on('click', function() {
            $('body').toggleClass('open');
        });
    });
})(jQuery);

//フェードイン
$(function(){
    $(window).scroll(function (){
        $('.fadein').each(function(){
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight + 50){
                $(this).addClass('scrollin');
            }
        });
    });
});