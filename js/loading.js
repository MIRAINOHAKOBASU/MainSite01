$(function() {
  var h = $(window).height();

  $('.inner,.topButton').css('display','none');
  $('#loading ,.loadingImg').css('display','block');
});

$(window).load(function () { //全ての読み込みが完了したら実行
  $('.loadingImg').delay(900).fadeOut(800);
  $('#loading').delay(600).fadeOut(300);
  $('.inner,.topButton').delay(1000).fadeIn(600);

});

//10秒たったら強制的にロード画面を非表示
$(function(){
  setTimeout('stopload()',10000);
});

function stopload(){
  $('.loadingImg').delay(900).fadeOut(800);
  $('#loading').delay(600).fadeOut(300);
  $('.inner,.topButton').css('display', 'block');
}