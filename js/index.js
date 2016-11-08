$(window).ready(function(){
	/*家电*/
	$(".close").click(function(e){
		e.stopPropagation();
		$("#jd").fadeOut();
	})
/*家电*/

/*图片透明度变化*/
	$(".opacity-a").on({mouseover:function(){$(this).css("opacity",0.9)},mouseout:function(){$(this).css("opacity",1)}})
/*图片透明度变化*/

/*猜你喜欢*/
	$(".caiB-box").eq(0).css("z-index",10);
	var cNow=0;
	$(".caiR").click(function(){
		cNow++;
		if(cNow>$(".caiB-box").length){
			cNow=0;
		}
		$(".caiB-box").css("z-index",5);
		$(".caiB-box").eq(cNow).css("z-index","10")
	})
	$(".change1").hover(function(){$(this).css("color","#e3101e")},function(){$(this).css("color","#666")})
/*猜你喜欢*/


/*1楼天天比价*/
$(".ttbj-li1,.ttbj-li2").hover(function(){
							$(this).find(".bDw").stop(true);
							$(this).find(".bDw").delay(100).animate({bottom:0},400)
					},
					function(){
							$(this).find(".bDw").stop(true);
							$(this).find(".bDw").delay(100).animate({bottom:-98},400)
							}
				)
/*1楼天天比价*/

/*楼层选项卡*/
	$(".floor").each(function(index){
		$(this).find(".TbR-box").eq(0).css("display","block");
		$(this).find(".lis a").eq(0).css("color","#fff");
		$(this).find(".lis a").eq(0).css("background-color","#535353");
		var lis=$(this).find(".lis a");
		var items=$(this).find(".TbR-box");
//		var t=setInterval(move,2000);
		var now=0;
		function move(){
			now++;
			if(now>=items.length){
				now=0;
			}
			lis.each(function(index2){
					$(this).css("color","#333");
					$(this).css("background-color","#fff");
				})
			items.each(function(index3){
				$(this).css("display","none");
			})
			items.eq(now).css("display","block");
			lis.eq(now).css("color","#fff");
			lis.eq(now).css("background-color","#535353");
		}
		$(".flo-btnR1").click(function(){
			move();
		})
		$(".floorTbR").hover(
			function(){
				$(".flo-btnR1").stop(true);
				$(".flo-btnR1").delay(200).animate({right:0},200)},
			function(){
				$(".flo-btnR1").stop(true);
				$(".flo-btnR1").delay(200).animate({right:-30},200)}
		)
		lis.each(function(index1,obj){
			$(this).on("mouseover",function(){
				lis.each(function(index2){
					$(this).css("color","#333");
					$(this).css("background-color","#fff");
				})
				items.each(function(index3){
					$(this).css("display","none");
				})
				$(this).css("color","#fff");
				$(this).css("background-color","#535353");
				items.eq(index1).css("display","block");
			})
		})
	})
/*楼层选项卡*/

/*banner轮播图*/
 // 	var img=$(".bannerC-img li")//图片
 // 	img.eq(0).css("display","block");
 // 	var lbt_btn1=$(".lbt-btn1")//文字
 // 	lbt_btn1.eq(0).css("display","none");
 // 	var lbt_btn2=$(".lbt-btn2");
 // 	var lbt_btn3=$(".lbt-btn2L");
 // 	console.log(lbt_btn3.length)
 // 	lbt_btn2.eq(0).css("display","block");
 // 	lbt_btn2.eq(0).find(".lbt-btn2L:first .lbt-l").css("background-color","#C00")
 // 	var bNow=0;
 // 	var bNext=0;
 // 	var bT=setInterval(bMove,2000);
 // 	var bFlag=true;
 // 	function bMove(){
 // 		bNow++;
 // 		if(bNow>=img.length){
 // 			bNow=0;
 // 		}
 // 		if(bNow%2==0){
 // 			// img.css("display","none");
	//  		lbt_btn1.css("display","block");
	//  		$(".lbt-l").css("background-color","#fff");
	//  		lbt_btn3.parent(".lbt-btn2").css("display","none");
	//  		img.eq(bNow).fadeIn();
	//  		lbt_btn3.eq(bNow).parent(".lbt-btn2").prev(".lbt-btn1").css("display","none");
	//  		lbt_btn3.eq(bNow).parent(".lbt-btn2").css("display","block");
	//  		lbt_btn3.eq(bNow).children(".lbt-l").css("background-color","#C00");
	//  		// n=bNow;
 // 		}
 // 	}
 // 	function bMoveR(){
 // 		bNow++;
 // 		if(bNow>=img.length){
 // 			bNow=0;
 // 		}
 // 		img.css("display","none");
 // 		$(".lbt-l").css("background-color","#fff");
 // 		lbt_btn3.parent(".lbt-btn2").css("display","none");
 // 		lbt_btn3.parent(".lbt-btn2").prev(".lbt-btn1").css("display","block");
 // 		lbt_btn3.eq(bNow).parents(".lbt-btn2").prev(".lbt-btn1").css("display","none");
 // 		lbt_btn3.eq(bNow).parents(".lbt-btn2").css("display","block");
 // 		lbt_btn3.eq(bNow).children(".lbt-l").css("background-color","#C00");
 // 		img.eq(bNow).fadeIn(function(){bFlag=true});
 // 	}
 // 	function bMoveL(){
 // 		bNow--;
 // 		if(bNow<0){
 // 			bNow=img.length-1;
 // 		}
 // 		img.css("display","none");
 // 		$(".lbt-l").css("background-color","#fff")
 // 		lbt_btn3.parent(".lbt-btn2").css("display","none");
 // 		lbt_btn3.parent(".lbt-btn2").prev(".lbt-btn1").css("display","block");
 // 		lbt_btn3.eq(bNow).parent(".lbt-btn2").prev(".lbt-btn1").css("display","none");
 // 		lbt_btn3.eq(bNow).parent(".lbt-btn2").css("display","block");
 // 		lbt_btn3.eq(bNow).children(".lbt-l").css("background-color","#C00");
 // 		img.eq(bNow).fadeIn(function(){bFlag=true});
 // 	}
 // 	$(".bannerC").on({
 // 		mouseover:function(){clearInterval(bT);},
 // 		mouseout:function(){bT=setInterval(bMove,2000);}
 // 	})
 // 	$(".ban-btnL,.ban-btnR").on({
 // 		mouseover:function(){$(this).css("opacity",0.5)},
 // 		mouseout:function(){$(this).css("opacity",0.3)}
 // 	})
 // 	//点击事件
	// lbt_btn3.each(function(index,obj){
	// 	$(this).parent(".lbt-btn2").prev(".lbt-btn1").hover(function(){
 // 			$(".lbt-btn2").css("display","none");
 // 			$(".lbt-btn1").css("display","block");
 // 			img.css("display","none");
	// 		$(this).css("display","none");
	// 		$(this).next().css("display","block");
	// 		lbt_btn3.eq(index).hover(function(){
	// 			$(".lbt-l").css("background-color","#fff")
	// 			$(this).children(".lbt-l").css("background-color","#c00");
	// 			img.eq(index).fadeIn();
	// 		})
	// 		bNow=index;
	// 	})
		
	// })
	// lbt_btn3.each(function(index,obj){
	// 	$(this).parent(".lbt-btn2").next(".lbt-btn1").hover(function(){
 // 			$(".lbt-btn2").css("display","none");
 // 			$(".lbt-btn1").css("display","block");
 // 			img.css("display","none");
	// 		$(this).css("display","none");
	// 		$(this).next().css("display","block");
	// 		lbt_btn3.eq(index).hover(function(){
	// 			$(".lbt-l").css("background-color","#fff")
	// 			$(this).children(".lbt-l").css("background-color","#c00");
	// 			img.eq(index).fadeIn();
	// 		})
	// 		bNow=index;
	// 	})
		
	// })
	// $(".ban-btnL").click(function(){
	// 	if(bFlag){
	// 		bMoveL();
	// 		bFlag=false;
	// 	}
		
	// })
	// $(".ban-btnR").click(function(){
	// 	if(bFlag){
	// 		bMoveR();
	// 		bFlag=false;
	// 	}
	// })


var img=$(".bannerC-img li")//图片
 	img.eq(0).css("display","block");
 	var lbt_btn1=$(".lbt-btn1")//文字
 	lbt_btn1.eq(0).css("display","none");
 	var lbt_btn2=$(".lbt-btn2");
 	var lbt_btn3=$(".lbt-btn2L");
 	console.log(lbt_btn3.length)
 	lbt_btn2.eq(0).css("display","block");
 	lbt_btn2.eq(0).find(".lbt-btn2L:first .lbt-l").css("background-color","#C00")
 	var bNow=0;
 	var bNext=0;
 	var bT=setInterval(bMove,2000);
 	var bFlag=true;
 	function bMove(){
 		bNext++;
 		if(bNext>=img.length){
 			bNext=0;
 		}
 		if(bNext%2==0){
 			// img.css("display","none");
	 		lbt_btn1.css("display","block");
	 		$(".lbt-l").css("background-color","#fff");
	 		lbt_btn3.parent(".lbt-btn2").css("display","none");
	 		img.eq(bNext).fadeIn();
	 		img.eq(bNow).fadeOut();
	 		lbt_btn3.eq(bNext).parent(".lbt-btn2").prev(".lbt-btn1").css("display","none");
	 		lbt_btn3.eq(bNext).parent(".lbt-btn2").css("display","block");
	 		lbt_btn3.eq(bNext).children(".lbt-l").css("background-color","#C00");
	 		bNow=bNext;
 		}
 	}
 	function bMoveR(){
 		bNext++;
 		if(bNext>=img.length){
 			bNext=0;
 		}
 		// img.css("display","none");
 		$(".lbt-l").css("background-color","#fff");
 		lbt_btn3.parent(".lbt-btn2").css("display","none");
 		lbt_btn3.parent(".lbt-btn2").prev(".lbt-btn1").css("display","block");
 		lbt_btn3.eq(bNext).parents(".lbt-btn2").prev(".lbt-btn1").css("display","none");
 		lbt_btn3.eq(bNext).parents(".lbt-btn2").css("display","block");
 		lbt_btn3.eq(bNext).children(".lbt-l").css("background-color","#C00");
 		img.eq(bNext).fadeIn(function(){bFlag=true});
 		img.eq(bNow).fadeOut(function(){bFlag=true});
 		bNow=bNext;
 	}
 	function bMoveL(){
 		bNext--;
 		if(bNext<0){
 			bNext=img.length-1;
 		}
 		// img.css("display","none");
 		$(".lbt-l").css("background-color","#fff")
 		lbt_btn3.parent(".lbt-btn2").css("display","none");
 		lbt_btn3.parent(".lbt-btn2").prev(".lbt-btn1").css("display","block");
 		lbt_btn3.eq(bNext).parent(".lbt-btn2").prev(".lbt-btn1").css("display","none");
 		lbt_btn3.eq(bNext).parent(".lbt-btn2").css("display","block");
 		lbt_btn3.eq(bNext).children(".lbt-l").css("background-color","#C00");
 		img.eq(bNext).fadeIn(function(){bFlag=true});
 		img.eq(bNow).fadeOut(function(){bFlag=true});
 		bNow=bNext;
 	}
 	$(".bannerC").on({
 		mouseover:function(){clearInterval(bT);},
 		mouseout:function(){bT=setInterval(bMove,2000);}
 	})
 	$(".ban-btnL,.ban-btnR").on({
 		mouseover:function(){$(this).css("opacity",0.5)},
 		mouseout:function(){$(this).css("opacity",0.3)}
 	})
 	//点击事件
	lbt_btn3.each(function(index,obj){
		$(this).parent(".lbt-btn2").prev(".lbt-btn1").hover(function(){
 			$(".lbt-btn2").css("display","none");
 			$(".lbt-btn1").css("display","block");
 			// img.css("display","none");
			$(this).css("display","none");
			$(this).next().css("display","block");
			lbt_btn3.hover(function(){
				var index5=lbt_btn3.index($(this));
				console.log(index5)
				$(".lbt-l").css("background-color","#fff")
				$(this).children(".lbt-l").css("background-color","#c00");
				img.eq(bNow).css("display","none");
				img.eq(index5).css("display","block");
				bNow=index5;
				bNext=bNow;
			})
			
		})
		
	})
	// lbt_btn3.each(function(index,obj){
	// 	$(this).parent(".lbt-btn2").next(".lbt-btn1").hover(function(){
 // 			$(".lbt-btn2").css("display","none");
 // 			$(".lbt-btn1").css("display","block");
 // 			img.css("display","none");
	// 		$(this).css("display","none");
	// 		$(this).next().css("display","block");
	// 		lbt_btn3.eq(index).hover(function(){
	// 			$(".lbt-l").css("background-color","#fff")
	// 			$(this).children(".lbt-l").css("background-color","#c00");
	// 			img.eq(index).fadeIn();
	// 		})
	// 		bNow=index;
	// 	})
		
	// })
	$(".ban-btnL").click(function(){
		if(bFlag){
			bMoveL();
			bFlag=false;
		}
		
	})
	$(".ban-btnR").click(function(){
		if(bFlag){
			bMoveR();
			bFlag=false;
		}
	})
/*banner轮播图*/

/*banner上面*/
	var h=$(".fenleir ul").find("li").eq(0).height();
//	var flag1=true;
	var t1=setInterval(move1,5000)
	function move1(){
		$(".fenleir ul").animate({top:-h},function(){
		$(this).children().eq(0).appendTo(this)
    	$(this).css("top",0);
//  	flag1=True;
		})
	}
	function move1X(){
		$(this).children().eq(0).appendTo(this);
		$(this).css("top",0);
		$(".fenleir ul").animate({top:-h},function(){flag1=True;});
	}
	$(".fl-btnS").click(function(){
//		if(flag1){
		$(this).css("background","#888888");
			move1();
//			flag1=false;
//		}
	})
	$(".fl-btnX").click(function(){
//		if(flag1){
		$(this).css("background","#888888");
			move1X();
//			flag1=false;
//		}
	})
	$(".fenleir").hover(
		function(){clearInterval(t1)},
		function(){t1=setInterval(move1,5000)}
	)
	
	/*banner左边选项卡*/
	$(".banner-item").each(function(index,obj){
		$(this).on({
			mouseover:function(){
				$(this).css("background","#f7f7f7");
				$(this).children("i").css("opacity","0");
				$(this).children(".bx").css("display","block");
				$(this).find("h3 a").css("color","#333");
				$(this).children(".xdwt").css("display","block");
			},
			mouseout:function(){
				$(this).css("background","#333");
				$(this).children("i").css("opacity","1");
				$(this).children(".bx").css("display","none");
				$(this).find("h3 a").css("color","#fff");
				$(this).children(".xdwt").css("display","none");
			}
		})
	})
/*banner左边选项卡*/

/*楼层轮波图*/
	$(".li1").each(function(index,obj){
		var DwImg=$(this).find("a");
		var btnFL=$(this).find(".flo-btnL");
		var btnFR=$(this).find(".flo-btnR");
		var lunbotuFLi=$(this).find(".floor-lun").children(".floor-btn").find("div");
		var now=0;
		var next=0;
		var ft=setInterval(moveF,2000);
		lunbotuFLi.eq(0).css("background-color","#CC0000");
		var fw=$(this).width();
		var flag=true; 
		DwImg.each(function(index1,obj){
			if(index1!=0){
				$(this).css("left",fw+'px')
			}
		})
		function moveF(){
			next++;
			if(next==DwImg.length){
			    next=0;
			}
			DwImg.eq(next).css("left",fw+'px');
			DwImg.eq(now).animate({left:-fw});
			DwImg.eq(next).animate({left:0},function(){
				flag=true;
			});
			lunbotuFLi.eq(now).css("background-color","#3E3E3E");
			lunbotuFLi.eq(next).css("background-color","#CC0000");
			now=next;
		}
		function moveFL(){
			next--;
			if(next==0){
			    next=DwImg.length-1;
			}
			DwImg.eq(next).css("left",-fw+'px');
			DwImg.eq(now).animate({left:fw});
			DwImg.eq(next).animate({left:0},function(){
				flag=true;
			});
			lunbotuFLi.eq(now).css("background-color","#3E3E3E");
			lunbotuFLi.eq(next).css("background-color","#CC0000");
			now=next;
		}
		$(this).on({
			mouseover:function(){
				clearInterval(ft);
				btnFL.css("left",0);
				btnFR.css("right",0);
			},
			mouseout:function(){
				ft=setInterval(moveF,2000);
				btnFL.css("left","-30px");
				btnFR.css("right","-30px");
			}
		})
		lunbotuFLi.each(function(index2,obj2){
			$(this).on("mouseover",function(){
					if(now>index2){
						DwImg.eq(index2).css("left",fw+'px');
						DwImg.eq(now).animate({left:-fw});
						DwImg.eq(index2).animate({left:0},function(){
							flag=true;
						});
					}else if(now<index2){
						DwImg.eq(index2).css("left",-fw+'px');
						DwImg.eq(now).animate({left:fw});
						DwImg.eq(index2).animate({left:0},function(){
							flag=true;
						});
					}
					lunbotuFLi.eq(index2).css("background-color","#CC0000");
					lunbotuFLi.eq(now).css("background-color","#3e3e3e");
					now=index2;
					next=now;
			})	
		})
		btnFL.click(function(){
			if(flag){
				moveFL();
				flag=false;
			}
		})
		btnFR.click(function(){
			if(flag){
				moveF()
				flag=false;
			}
		})
	})
/*楼层轮波图*/

/*促销商品*/
	$(".cxRB-dw ul").eq(0).css("display","block");
	var cxNow=0;
	$(".change31").click(function(){
		cxNow++;
		if(cxNow>=$(".cxRB-dw ul").length) cxNow=0;
		$(".cxRB-dw ul").css("display","none");
		$(".cxRB-dw ul").eq(cxNow).css("display","block");
	})
/*促销商品*/

/*页脚*/
	$(".wx").hover(
		function(){$(this).find(".wxer").css("display","block")},
		function(){$(this).find(".wxer").css("display","none")}
	)
/*页脚*/

/*楼层跳转*/
	$(".navL2 a").hover(function(){$(this).css("color","#c00")},function(){$(this).css("color"," #5E5E5E")})
	var floors=$(".floor");
	var nav=$("#navL");
	var nav_lis=$(".navL2 li");
	var flag=true;
	floors.each(function(index,obj){
		$(window).scroll(function(){
			var top=$(document).scrollTop();
			if(top>=floors.eq(0).offset().top-400){
		        nav.show();
		    }else if(top<floors.eq(0).offset().top-400){
		        nav.hide();
		    }else if(top==$(".cx").offset().top+400){
		      	nav.css("display","none");
		    }

		    if(top>floors.eq(index).offset().top-500){
		   		nav_lis.children(".nav-li1").css("display","none");
		   		nav_lis.children("a").css("color","#5E5E5E");
		        nav_lis.eq(index).children(".nav-li1").css("display","block");
		        nav_lis.eq(index).children("a").css("color","#c00");
		        // nowFix=index;
		    }   
		})
		 nav_lis.eq(index).click(function(){
		    	$("body,html").animate({scrollTop:floors.eq(index).offset().top},400)
		    	// var index1=$(this).index(nav_lis);
		    	// console.log(index1)
		    }) 
	})
	/*返回顶部*/
	$(".backtop li").eq(0).on({
		mouseover:function(){$(this).children(".backtop-btn1").css("background-position","0 -222px")},
		mouseout:function(){$(this).children(".backtop-btn1").css("background-position","-18px -222px")},
		click:function(){$("body,html").animate({scrollTop:0},600)}
	})
	$(".backtop li").eq(1).on({
		mouseover:function(){$(this).children(".backtop-btn2").css("background-position","0 -214px")},
		mouseout:function(){$(this).children(".backtop-btn2").css("background-position","-18px -214px")},
		click:function(){$("body,html").animate({scrollTop:$(".footer").offset().top},600,function(){
			nav.hide();
		})}
	})
	/*返回顶部*/

/*楼层跳转*/


/*右下角*/

	$(".fixR2 li").hover(
		function(){
			var w=$(this).children("div").width()
			$(this).css("background-color","#333");
			$(this).find("b").css("display","block")
			$(this).children("div").stop(true);
			$(this).children("div").delay(200).animate({left:-w});
		},
		function(){
			$(this).css("background-color","#5c5c5c");
			$(this).find("b").css("display","none");
			$(this).children("div").stop(true);
			$(this).children("div").delay(200).animate({left:40});
		}
	)

	$(".fixR3 li").hover(
		function(){
			var w=$(this).children("div").width()
			$(this).css("background-color","#333");
		},
		function(){
			$(this).css("background-color","#5c5c5c");
		}
	)
	/*返回顶部*/
	jQuery.backtop($(".fixR2 li").eq(3).children("div"),1000);
	
/*右下角*/
	
/*导航选项卡*/
	$(".nav .xxk").hover(
		function(){
			$(this).css({"background":"#fff","border-color":"#e6e6e6"});
			$(this).children("div").css("display","block");
			$(this).children(".zhao").css("display","block");
		},
		function(){
			$(this).css({"background":"#f8f8f8","border-color":"#f8f8f8"});
			$(this).children("div").css("display","none");
			$(this).children(".zhao").css("display","none");
		}
	)
/*导航选项卡*/

/*购物车选项卡*/
	$(".logoR-box").hover(
		function(){
			$(this).children(".zhe1").css("display","block");
			$(this).children(".logo-item").css("display","block");
			$(this).children(".gw").css("box-shadow","0 0 5px rgba(0,0,0,0.09)");
		},
		function(){
			$(this).children(".zhe1").css("display","none");
			$(this).children(".logo-item").css("display","none");
			$(this).children(".gw").css("box-shadow","none")
		}
	)
/*购物车选项卡*/

/*图片懒加载*/
	$(".lazy").lazyload({
		effect:"fadeIn",
		placeholder : "images/lazy.png",
		skip_invisible:false
		})
/*图片懒加载*/
	})
