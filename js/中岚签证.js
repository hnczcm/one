/*
* @Author: hp
* @Date:   2019-07-30 18:33:54
* @Last Modified by:   hp
* @Last Modified time: 2019-07-31 14:17:48
*/
$(function(){
	$('.msw_nav .navbar-nav>li').click(function(event) {
		$(this).addClass('selected');
		$(this).siblings('li').removeClass('selected');
	});
	$('.top .rap1').click(function(event) {
					// 事件源：body,html
					// scrollTop滚动条距离页面顶部的距离，scrollTop在css中没有，是animate中特有的
		$('body,html').animate({
			// 带有动画回到顶部
			'scrollTop':'0px'
		}, 1000)
	});	
	$(window).scroll(function(event) {
		if($(this).scrollTop()>600){
			$('.top .rap1').fadeIn();
		}else{
			$('.top .rap1').fadeOut();
		}
	});	
})

