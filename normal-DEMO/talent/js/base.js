/*ani*/
$(document).ready(function() {

	//监听
	function fnMouseWheel(obj, succFn) {
		obj.onmousewheel = fn;
		if (obj.addEventListener) {
			obj.addEventListener("DOMMouseScroll", fn, false);
		}

		function fn(ev) {
			var oEvent = ev || window.event;
			var down = true;
			if (oEvent.detail) {
				down = oEvent.detail > 0;
			} else {
				down = oEvent.wheelDelta < 0;
			}
			if (succFn) {
				succFn.call(this, down, oEvent);
			}
			if (oEvent.preventDefault) {
				oEvent.preventDefault();
			}
			return false;
		}
	}

	//滚动到当前屏
	function downnow(now) {
		if (now == 1) {
			$(".two-left-bg").css("left", "0");

			$(".two-left-bg").stop().animate({
				left: "-100%"
			}, 1500, function() {

				$(".two-text").addClass('two-text-ani');
			});

		} else if (now == 2) {
			$(".talent-text").addClass('talent-text-ani');

		} else if (now == 3) {
			$(".bg-l").addClass('bg-l-ani');
			$(".bg-r").addClass('bg-r-ani');
			$(".four-text").addClass('four-text-ani');

		} else if (now == 5) {
			$(".b-l").addClass('b-l-ani');
			$(".b-r").addClass('b-r-ani');
			$(".talent-six .one i").addClass('i-act');
			$(".six-text").addClass('six-text-ani');
			$(".six-bottom").addClass('six-bottom-ani');
		}
	}

	//滚动
	var a = 0,
		belWheel = true,
		curr = 0;
	$(".page").eq(0).addClass('opacity-1');
	$(".talent-nav-list li").eq(0).addClass('actli').siblings().removeClass('actli');
	fnMouseWheel(document, function(down) {
		if (down) {
			if (belWheel) {
				belWheel = false;
				a++;
				console.log(a);
				downnow(a);
				if (a > 5) {
					a = 5;
					belWheel = true;
					return false;
				}
				// debugger;
				$(".transiton-w").css("top", "100%");
				$(".transiton-w").stop().animate({
					top: 0
				}, 400, function() {
					$(".page").eq(a).addClass('opacity-1').siblings().removeClass('opacity-1');
					$(".talent-nav-list li").eq(a).addClass('actli').siblings().removeClass('actli');
					$(".transiton-w").stop().animate({
						top: "-100%"
					}, 400, function() {
						belWheel = true;
					});
				});
			}
		} else {
			if (belWheel) {
				belWheel = false;
				a--;
				downnow(a);
				console.log(a);
				if (a < 0) {
					a = 0;
					belWheel = true;
					return false;
				}
				// debugger;
				$(".transiton-w").css("top", "-100%");
				$(".transiton-w").stop().animate({
					top: 0
				}, 400, function() {
					$(".page").eq(a).addClass('opacity-1').siblings().removeClass('opacity-1');
					$(".talent-nav-list li").eq(a).addClass('actli').siblings().removeClass('actli');
					$(".transiton-w").stop().animate({
						top: "100%"
					}, 400, function() {
						belWheel = true;
					});
				});
			}

		}
	})


	$(".talent-nav-list li").click(function() {
		if (belWheel) {
			a = $(this).index();
			if (curr != a) {
				belWheel = false;
				downnow(a);
				var direction = curr < a ? {
					topa: "100%",
					topb: "-100%"
				} : {
					topa: "-100%",
					topb: "100%"
				};

				$(".transiton-w").css("top", direction.topa);
				$(".transiton-w").stop().animate({
					top: 0
				}, 400, function() {
					$(".talent-nav-list li").eq(a).addClass('actli').siblings().removeClass('actli');
					$(".page").eq(a).addClass('opacity-1').siblings().removeClass('opacity-1');
					$(".transiton-w").stop().animate({
						top: direction.topb
					}, 400, function() {
						belWheel = true;
					});
				});
				curr = a;
			}
		}

		if ($(".talent-nav").hasClass('nav-box')) {
			$(".talent-nav").removeClass('nav-box');
		}
	})


	//汉堡操作
	$("#ham").click(function() {
		if ($(".talent-nav").hasClass('nav-box')) {
			$(".talent-nav").removeClass('nav-box');
		} else {
			$(".talent-nav").addClass('nav-box');
		}
	});

	//左侧盒子
	$(".talent-right").click(function() {
		if ($(".talent-nav").hasClass('nav-box')) {
			$(".talent-nav").removeClass('nav-box');
		}
	})

	//视差
	$("#head").mousemove(function(e) {
		var x1 = e.pageX,
			y1 = e.pageY,
			middle_x = $(window).width() / 2,
			middle_y = $(window).height() / 2,
			sta_x = x1 - middle_x,
			sta_y = y1 - middle_y,
			once = 50;
		$(".talent-one-star").css({
			"top": -sta_y / once,
			"left": -sta_x / once
		});
	})

	//轮播
	$(".five-num-items li").click(function() {
		var fIndex = $(this).index();
		$("#five-wrap li .f-l-bg,#five-wrap li .f-r-bg").css("left", "100%");
		$("#five-wrap li .f-l-bg,#five-wrap li .f-r-bg").stop().animate({
			left: 0
		}, 500, function() {
			$("#five-wrap li").eq(fIndex).addClass("oz1").siblings().removeClass("oz1");
			$("#five-wrap li .f-l-bg,#five-wrap li .f-r-bg").stop().animate({
				left: "-100%"
			}, 500);
		});
		$(this).addClass("active-li").siblings().removeClass("active-li");
	});
});