$(function(){
  let greeting =$('.greeting').offset().top;
  let profill =$('.profill').offset().top;
  let work =$('.work').offset().top;
  let recruit =$('.recruit').offset().top;
  let form =$('.form').offset().top;

//トップへ戻る
    var pagetop = $('#page_top');
    // ボタン非表示
    pagetop.hide();
    // 100px スクロールしたらボタン表示
    $(window).scroll(function () {
       if ($(this).scrollTop() > 100) {
            pagetop.fadeIn();
       } else {
            pagetop.fadeOut();
       }
    });
    pagetop.click(function () {
       $('body, html').animate({ scrollTop: 0 }, 500);
       return false;
    });

//メニュー表示
$('.click').on('click',function(){
  $('.header-list').toggleClass('is-active');
  let header = $('.header-list').hasClass('is-active');
if(header){
  $('.click p').text("CLOSE");
}else{
  $('.click p').text("MENU");
}
});

//クリックした要素に飛ぶ
$('.header-list li,.footer-list li').on('click',function(){
  let click=$(this).attr('id');
  console.log(click);

  if(click=="greeting"){
    $(window).scrollTop(greeting);
    $('.header-list').removeClass('is-active');
  }
  else if (click=="profill") {
    $(window).scrollTop(profill);
    $('.header-list').removeClass('is-active');
  }
  else if (click=="work") {
    $(window).scrollTop(work);
    $('.header-list').removeClass('is-active');


  }
  else if (click=="recruit") {
    $(window).scrollTop(recruit);
    $('.header-list').removeClass('is-active');


  }
  else if (click=="form") {
    $(window).scrollTop(form);
    $('.header-list').removeClass('is-active');
  }
});


});
