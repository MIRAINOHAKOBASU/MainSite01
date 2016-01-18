var $scvalue;
var topView = 800;
var place = 700;
var work = 1800;

var groups = ['.group01' , '.group02', '.group03', '.group04', '.group05', '.group06', '.group07', '.group08', '.group09', '.group10']

$(function(){

	var hide = $('#place .img02, #place .img01, #place .hakobus, .group, #work .img01, #work .hakobus, #movie .img01, #movie .hakobus, #end .hakobus, .topButton');


	hide.css('display','none');

	$(window).scroll(function(){
		$scvalue = $(this).scrollTop();//スクロールの値を取得
		sFI('#place .img01',300);
		sFI('#place .img02',400);
		sFI('#place .hakobus',300);
		sFI('#work .img01', topView);
		sFI('#work .hakobus', topView);
		$.each(groups,function(i, element){
			sFI(element,topView + place - 600 + parseInt($(element).css("top")));
		});
		sFI('#movie .img01', topView + place + work - 900);
		sFI('#movie .hakobus', topView + place + work - 900);
		sFI('#end .hakobus',  topView + place + work - 500);

		sFI('.topButton',topView - 100);
	});
});

function sFI(element,value){//scrollFadeIn
	if($scvalue > value){
		$(element).fadeIn(500);
	}
}