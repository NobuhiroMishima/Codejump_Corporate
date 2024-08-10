const hamburger = document.querySelector('.hamburger');
const navigation = document.querySelector('.navigation');
const cover = document.querySelector('.cover');

hamburger.addEventListener('click', () => navigation.classList.toggle('visible'));
hamburger.addEventListener('click', () => cover.classList.toggle('cover-bg'));
cover.addEventListener('click', () => navigation.classList.toggle('visible'));
cover.addEventListener('click', () => cover.classList.toggle('cover-bg'));

//スクロールの検知
$(function() {
    // 変数にクラスを入れる
    var btn = $('.go_top');
    
    //スクロールしてページトップから1000に達したらボタンを表示
    $(window).on('load scroll', function(){
      if($(this).scrollTop() > 1000) {
        btn.addClass('active');
      }else{
        btn.removeClass('active');
      }
    });
  
    //スクロールしてトップへ戻る
    btn.on('click',function () {
      $('body,html').animate({
        scrollTop: 0
      });
    });
  });