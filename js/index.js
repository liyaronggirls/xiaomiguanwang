window.onload = function() {
	//购物车
	$('.li_cart').mouseover(function(){
		$('.cart_list').stop().slideDown(300)
	}).mouseout(function(){
		$('.cart_list').stop().slideUp(300)
	})
	//文本框
$("#text1").focus(function(){
	$(this).css("border","1px solid orange");
	$(".search_list").show();//将ol2显示出来
	$('#span1').hide(100);
})
$(".search_list li").click(function(){
	var index  = $(this).index();//获取当前的下标
   	$("#text1").val($(".search_list li").eq(index).text())//将当前的点击内容赋值给文本框
  	$(".search_list").hide();//点击完成之后再隐藏
  	
})

	//banner轮播
	var index = 0;
	var next = 0;
	var timer = null;
	var width = $(".menu_2").width();
	console.log(width);
	timer = setInterval(move, 1000);
	//向左边运动的函数
	function move() {
		next++;
		if (next == 4) {
			next = -1;
		}
		$(".menu_2_banner li").eq(next).css("left", width + "px");
		$(".menu_2_banner li").eq(index).stop().animate({
			left: -width + "px"
		}, 500);
		$(".menu_2_banner li").eq(next).stop().animate({
			left: "0px"
		}, 500);

		//设置索引小球
		$(".circle li").eq(next).css("background", "#2E241E");
		$(".circle li").eq(next).siblings().css("background", "#fff");
		index = next;
	}

	//向右运动的函数
	function move1() {
		next++;
		if (next == 4) {
			next = -1;
		}
		$(".menu_2_banner li").eq(next).css("left", -width + "px");
		$(".menu_2_banner li").eq(index).stop().animate({
			left: width + "px"
		}, 500);
		$(".menu_2_banner li").eq(next).stop().animate({
			left: "0px"
		}, 500);

		//设置索引小球ol
		$(".circle li").eq(next).css("background", "#2E241E");
		$(".circle li").eq(next).siblings().css("background", "#fff");
		index = next;
	}
	//小圆点实现点击切换
	$(".circle li").click(function() {
			$index = $(this).index();
			if ($index > next) {
				next = $index - 1;
				move1();
			} else if ($index < next) {
				next = $index - 1;
				move();
			}
		})
		//翻页
		//上一个
	$(".prev").click(function() {
			clearInterval(timer);
			move();
		})
		//下一个
	$(".next").click(function() {
			clearInterval(timer);
			move1();
		})
		//鼠标移入移出
	$(".menu_2_banner").hover(function() {
		clearInterval(timer)
	}, function() {
		clearInterval(timer)
		timer = setInterval(move, 2000)
	})

	

	//swiperTab切换
	//获取元素  添加点击事件
	$(".qh span").click(function() {
			//获取下标
			index = $(this).index();
			quer.slideTo(index, 1000)
		})
		//定义swiper
	var quer = new Swiper('.swiper', {
		//回调函数，过渡结束时触发，接收Swiper实例作为参数。   
		onTransitionEnd:function() {
			//根据swiper下标添加类
			$(".qh span").eq(quer.activeIndex)
		}
	});
	$(".qh1 span").click(function() {
			//获取下标
			index = $(this).index();
			quer1.slideTo(index, 1000)
		})
	var quer1 = new Swiper('.swiper1', {
		//回调函数，过渡结束时触发，接收Swiper实例作为参数。   
		onTransitionEnd:function() {
			//根据swiper下标添加类
			$(".qh1 span").eq(quer1.activeIndex)
		}
	});
	
	//手机平板显示隐藏
	$(".menu_1_list>li").hover(function() {
		$(this).find("ul").stop().show();
	}, function() {
		$(this).find("ul").stop().hide();
	})
	//横向菜单
	$("#ul3>li").hover(function(){
		$(this).find("ul").stop().slideDown();
	
	},function(){
		$(this).find("ul").stop().slideUp();
	})
	$('#li_lunbo').width($('#li_lunbo div').length*$('#li_lunbo').width())
	
}