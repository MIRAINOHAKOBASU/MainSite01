var $scvalue;
var topView = 800;
var place = 700;
var work = 1600;

var groups = ['.group01' , '.group02', '.group03', '.group04', '.group05', '.group06', '.group07', '.group08', '.group09', '.group10']

$(function(){


	var hide = $('#place .img02, #place .img01, #place .hakobus, .group, #work .img01, #work .text01, #work .hakobus, #movie .img01, #movie .hakobus, #end .hakobus');

	if($(window).width() > 680){
		hide.css('display','none');
	}
	$('.topButton').css('display','none');

	$(window).scroll(function(){
		$scvalue = $(this).scrollTop();//スクロールの値を取得
		if($(window).width() > 680){
			sFI('#place .img01',topView + work - 400);
			sFI('#place .img02',600 + work);
			sFI('#place .hakobus',topView + work - 400);
			sFI('#work .img01', 200);
			sFI('#work .text01', 250);
			sFI('#work .hakobus', 200);
			$.each(groups,function(i, element){
				sFI(element,topView - 600 + parseInt($(element).css("top")));
			});
			sFI('#movie .img01', topView + work+300);
			sFI('#movie .hakobus', topView + work+300);
			sFI('#end .hakobus',  topView + work+550);
		}

		sFI('.topButton',400);
		sFO('.topButton',400);
	});
});

function sFI(element,value){//scrollFadeIn
	if($scvalue > value){
		$(element).fadeIn(500);
	}
}

function sFO(element,value){//scrollFadeOut
	if($scvalue < value){
		$(element).fadeOut(500);
	}
}
