$(function(){
	var topView = 800;
	var place = 700;
	var work = 1800;

	var hide = $('#place .img02');

	hide.css('display','none');

	$(window).scroll(function(){
		var $scvalue = $(this).scrollTop();//スクロールの値を取得
		if($scvalue >500){
			hide.fadeIn(200);
		}
	});
});
