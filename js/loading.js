$(function() {
  var hide = $('.inner,.topButton,#topView>.img04,#topView>.img03');

  hide.css('display','none');
  $('#loading ,.loadingImg').css('display','block');
});

$(window).load(function () { //全ての読み込みが完了したら実行
  stopload();
});

$(window).resize(function(){//画面サイズが変更されたら実行
  if($(window).width() > 680){
    $('#topView>.img04, #topView>.img03').css('display','block');
  }else{
    $('#topView>.img04, #topView>.img03').css('display','none');
  }
});

//10秒たったら強制的にロード画面を非表示
$(function(){
  setTimeout('stopload()',10000);
});

function stopload(){
  $('.loadingImg').delay(900).fadeOut(800);
  $('#loading').delay(600).fadeOut(300);
  delayFadeIn('.inner',1000,600);
  delayFadeIn('.topButton',1000,600);
  if($(window).width() > 680){
    delayFadeIn('#topView>.img04',1700,600);
    delayFadeIn('#topView>.img03',2000,600);
  }
}

function delayFadeIn(element, delay, fadein){
  $(element).delay(delay).fadeIn(fadein);
}