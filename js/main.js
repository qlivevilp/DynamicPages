var nowPage=0;

/*重复动画*/
var page1_html=$(".page1").html();
var page2_html=$(".page2").html();
var page3_html=$(".page3").html();
var page4_html=$(".page4").html();
var page5_html=$(".page5").html();
var page6_html=$(".page6").html();
//当页面加载完成
window.onload=function(){
	//获取屏幕宽高
	var w=window.innerWidth;
	var h=window.innerHeight;
	//docment包含所有页面所有对象。通过元素类名查找标签
	//document.getElementsByClassName()
	//$=jQuery ($来代替jQuery)
	//“”内的写法与css一致
	$(".box").width(w);
	$(".box").height(4*h);
	$(".page").width(w);
	$(".page").height(h);
	
	//滑动监听
	$(".box").swipe({
		//当监听到滑动时执行	direction 方向  distance距离 duration时间
		//fingerCount 触屏的点数 envent 触发的事件
		swipe:function(event,direction,distance,duration,fingerCount){
			if(direction=="up"&&nowPage<6){
				nowPage+=1;
				//jquery里的css动画,改变css属性{“属性”：“值”，“属性”：“值”}
				//2000ms  2s
				//animateOfPage方法带小括号为立即执行，反之为当动画结束之后执行
				$(".box").animate({"top":"-"+nowPage*100+"%"},2000,animateOfPage);
			}
			else if(direction=="down"&&nowPage>0){
				nowPage-=1;
				$(".box").animate({"top":"-"+nowPage*100+"%"},2000,animateOfPage);
			}
						
		}
	})
	/*踢足球的男孩渐入*/
	$(".page1_girl").fadeIn(1000,function(){
	  $(".page1_kids").fadeIn(1000,function(){
	     $(".page1_foot").fadeIn(2000);
	  })
	})  
}

function animateOfPage(){
	if(nowPage==0){
		/*第一页的动画*/	
		/*踢足球的男孩渐入*/
	$(".page1_girl").fadeIn(1000,function(){
	  $(".page1_kids").fadeIn(1000,function(){
	     $(".page1_foot").fadeIn(2000);
	  })
	})  
		//重载page2
		reloadPage2();
	}
	else if(nowPage==1){
	 //执行page2的动画
	 $(".page2_txt1").fadeIn(1000,function(){
	 	$(".page2_txt2").fadeIn(1000);
	 })	
	 //重载page1和page3 
	 reloadPage3();
	 reloadPage1();
	}
	else if(nowPage==2){ 
		//执行page3动画	
		$(".page3_bottom").fadeIn(1000,function(){
	 		$(".page3_txt1").fadeIn(1000,function(){
	 			$(".page3_txt2").fadeIn(1000);
	 		})
	 })
		//重载page2
		reloadPage2();
		reloadPage4();
	}
	else if(nowPage==3){	 
		//执行page4动画
		/*必须有第三张才能执行*/
		$(".page4_txt").fadeIn(1000,function(){
			$(".page4_txt1").fadeIn(1000,function(){
				$(".page4_nation").fadeIn(2000);
			})
		})
		
		reloadPage3();
		reloadPage5();
	}
	else if(nowPage==4){
		//执行page5动画
		/*场景1左划推出*/			
		$(".page5_txt").fadeIn(1000,function(){
			$(".page5_flower").fadeIn(1000,function(){
				$(".page5_kid").fadeIn(1000);
			})
			
		})
		//重载
		reloadPage4();
		reloadPage6();
	}
	else if(nowPage==5){
		//执行page6动画
		/*第一页的动画*/
			$(".page6_1").fadeIn(2000,function(){
			$(".page6_14").fadeIn(2000);
			$(".page6_13").fadeIn(2000);
			$(".page6_15").fadeIn(2000);
			$(".page6_16").fadeIn(2000);
			$(".page6_17").fadeIn(2000);
			$(".page6_11").fadeIn(2000);
			$(".page6_12").fadeIn(2000);
			
		})
		//重载
		reloadPage5();
	}
	else if(nowPage==6){
		//执行page7动画
		
		//重载
		reloadPage6();
	}
}

/*重载每一页动画*/
function reloadPage1(){
	//false是否结束线程 true是否调到结束状态
	$(".page1").children().stop(false,true).fadeIn();
	$(".page1").html(page1_html);
}
function reloadPage2(){
	$(".page2").children().stop(false,true).fadeIn();
	$(".page2").html(page2_html);
}
function reloadPage3(){	
	$(".page3").children().stop(false,true).animate();
	$(".page3").children().stop(false,true).fadeIn();
	$(".page3").children().stop(false,true).fadeOut();
	$(".page3").html(page3_html);
}
function reloadPage4(){	
	$(".page4").children().stop(false,true).animate();
	$(".page4").children().stop(false,true).fadeIn();
	$(".page4").children().stop(false,true).fadeOut();
	$(".page4").html(page4_html);
}
function reloadPage5(){	
	$(".page5").children().stop(false,true).animate();
	$(".page5").children().stop(false,true).fadeIn();
	$(".page5").children().stop(false,true).fadeOut();
	$(".page5").html(page5_html);
}
function reloadPage6(){
	$(".page6").children().stop(false,true).fadeIn();
	$(".page6").html(page6_html);
}
function playMusic(obj){
	
    var player=document.getElementById("player");
    if(player.paused){
 	   player.play();
 	   obj.src="img/images/musicBtn.png";
 	   $(".musicBtn").addClass("musicBtnRotate");
    }
    else{
    	player.pause();
    	obj.src="img/images/musicBtnOff.png";
    	$(".musicBtn").removeClass("musicBtnRotate");
    }
}
