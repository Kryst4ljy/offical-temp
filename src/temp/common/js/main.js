function setTab(name,cursel,n){
 for(i=1;i<=n;i++){
  var menu=document.getElementById(name+i);
  var con=document.getElementById("tab_"+name+"_"+i);
  menu.className=i==cursel?"hover":"";
  con.style.display=i==cursel?"block":"none";
  //con.style.visibility=i==cursel?"visible":"callapse";
 }
 if(document.getElementById("intro5").className=="hover"){
  $(".main .year .list").each(function(e, target){
  var $target=  $(target),
   $ul = $target.find("ul");
   $target.height($ul.outerHeight()), $ul.css("position", "absolute");
   }); 
   $(".main .year>h2>a").click(function(e){
   e.preventDefault();
   //$(this).parents(".year").toggleClass("close");
     });
   }
}

$(function(){
  $(".nav li").hover(function(){
	  $(this).addClass('on');
  },function(){
	  $(this).removeClass('on');
  });
});



  function openWin(){
	 //document.getElementById("tanchuang").style.display="block";
  }
  function closeWin(){
	// document.getElementById("tanchuang").style.display="none";
  }
 //弹窗 
  $(document).ready(function()
  {
	  //初始化：是否开启DIV弹出窗口功能
	//0 表示开启; 1 表示不开启;
	var popupStatus = 0;
	//使用Jquery加载弹窗 
	function loadPopup(){   
	//仅在开启标志popupStatus为0的情况下加载  
	if(popupStatus==0){   
		$("#backgroundPopup").css({   
			"opacity": "0.5"  
		});   
		$("#backgroundPopup").fadeIn("slow");   
		$("#showbaby").fadeIn("slow");   
		popupStatus = 1;   
		}   
	}  
	//使用Jquery去除弹窗效果 
	function disablePopup(){   
	//仅在开启标志popupStatus为1的情况下去除
		if(popupStatus==1){   
				$("#backgroundPopup").fadeOut("slow");   
				$("#showbaby").fadeOut("slow");   
				popupStatus = 0;   
			}   
	} 
	//将弹出窗口定位在屏幕的中央
	function centerPopup(){   
	//获取系统变量
		var windowWidth = document.documentElement.clientWidth;   
		var windowHeight = document.documentElement.clientHeight;   
		var popupHeight = $("#showbaby").height();   
		var popupWidth = $("#showbaby").width();   
		//居中设置   
		$("#showbaby").css({   
			"position": "absolute",   
			"top": windowHeight/2-popupHeight/2,   
			"left": windowWidth/2-popupWidth/2
		});   
		//以下代码仅在IE6下有效
		  
		$("#backgroundPopup").css({   
			"height": windowHeight   
		});   
	}
	
	//打开弹出窗口   
	//按钮点击事件!
	$(".btnshow").click(function(){   
		//调用函数居中窗口
		centerPopup();   
		//调用函数加载窗口
		loadPopup();   
	});
	//关闭弹出窗口   
	//点击"X"所触发的事件
	$("#btnback").click(function(){   
			disablePopup();   
	});   
	//点击窗口以外背景所触发的关闭窗口事件!
	$("#backgroundPopup").click(function(){   
		disablePopup();   
	});   
	//点击关闭按钮所触发的关闭窗口事件!
	$("#closebtn").click(function(){
		disablePopup();   
	});
	//点击取消按钮所触发的关闭窗口事件!
	$("#btncle").click(function(){
		disablePopup();   
	});
	//键盘按下ESC时关闭窗口!
	$(document).keypress(function(e){   
		if(e.keyCode==27 && popupStatus==1){   
			disablePopup();   
		}   
	});  
	

  })
  //宝贝列表页面返回顶部
  $(function() {
	$.fn.toTop = function(options) {
		var defaults = {			
			showHeight : 150,
			speed : 1000
		};
		var options = $.extend(defaults,options);
		$("body").prepend("<div id='totop' title='返回顶部'><a></a></div>");
		var $toTop = $(this);
		var $top = $("#totop");
		$toTop.scroll(function(){
			var scrolltop=$(this).scrollTop();		
			if(scrolltop>=options.showHeight){				
				$top.show();
			}
			else{
				$top.hide();
			}
		});	
		$top.click(function(){
			$("html,body").animate({scrollTop: 0}, options.speed);	
		});
	}
});
//tab到达页面顶端
function tabTotop()
 {
	 var toTop=offs.top-$(window).scrollTop();
	 if(toTop<0||toTop==0){
		 if(!$('.inewst').hasClass('ab'))
		 {
		 $('.inewst').addClass('ab');
		 $('.whitelinenone').addClass('whiteline');
		 }
	 }else{
		 $('.inewst').removeClass('ab');
		 $('.whitelinenone').removeClass('whiteline');
	 }
 }
 
 
 
 function item_masonry(awidth,bwidth){ 
	$('.item img').load(function(){ 
		$('.infinite_scroll').masonry({ 
			itemSelector: '.masonry_brick',
			columnWidth:awidth,
			gutterWidth:bwidth								
		});		
	});
	
		
	$('.infinite_scroll').masonry({ 
		itemSelector: '.masonry_brick',
		columnWidth:awidth,
		gutterWidth:bwidth								
	});	
}

//公司文化中的左侧菜单动态效果
function cultureClick()
{
	slide("#sliding-navigation", 35, 18, 150, 0);
}

function slide(navigation_id, pad_out, pad_in, time, multiplier)
{
	// creates the target paths
	var list_elements = navigation_id + " li";
	var link_elements = list_elements + " a";
	
	// initiates the timer used for the sliding animation
	var timer = 0;
	
	// creates the slide animation for all list elements 
	$(list_elements).each(function(i)
	{
		// margin left = - ([width of element] + [total vertical padding of element])
		//$(this).css("margin-left","-100px");
		// updates timer
		timer = (timer*multiplier + time);
		$(this).animate({ marginLeft: "0" }, timer);
		//$(this).animate({ marginLeft: "30px" }, timer);
		$(this).animate({ marginLeft: "0" }, timer);
	});

	// creates the hover-slide effect for all link elements 		
	$(link_elements).each(function(i)
	{
		$(this).hover(
		function()
		{
			$(this).animate({ paddingLeft: pad_out }, 150);
		},		
		function()
		{
			$(this).animate({ paddingLeft: pad_in }, 150);
		});
	});
}
//首页中根据浏览器大小判断logo所处的位置

//头部菜单的显示与隐藏
window.onscroll=function(){
	//$("#nav_menu").hide('normal');
}
window.onload = function(){
	document.onclick = function(e){
	//$("#nav_menu").hide('fast');
	//$("#compul").hide('fast');
	}
	//document.getElementById("menubtn").onclick = function(e){
	//$("#nav_menu").toggle('fast');
	//	stopFunc(e);
	//}
	//document.getElementById("nav_menu").onclick = function(e){
		//stopFunc(e);
	//}
	
	//document.getElementById("showcompany").onclick = function(e){
	//$("#compul").toggle('fast');
		//stopFunc(e);
	//}
	//document.getElementById("compul").onclick = function(e){
	//	stopFunc(e);
	//}
}
function stopFunc(e){
	document.all? event.cancelBubble = true : e.stopPropagation();
}


