$("html").css("fontSize",$(window).width()/160*7+"px");
$(window).resize(function(){$("html").css("fontSize",$(window).width()/160*7+"px");});

var jud3=true;
var musicjud=true;
var audio=document.getElementById("audio");

$(".music").click(function(){
    if(musicjud){
      musicjud=false;
      jud3=false;
      $(".music").css("backgroundPosition","0 100%")
      audio.pause();
      $(".music_a").attr("href",function() { return this.href.split("music")[0]+"music=false"});
    }
    else{
      musicjud=true;
       $(".music").css("backgroundPosition","0 0")
      audio.play();
      $(".music_a").attr("href",function() { return this.href.split("music")[0]+"music=false"});
    }
})

$(".s1").on("touchstart",function(){
	if(jud3){
      musicjud=true;
      jud3=false;
      $(".music").css("backgroundPosition","0 0");
      audio.play();
    }
})
		
function men(){
	$(".men").fadeIn(200);
	var i=0;
	var mentimer=setInterval(function(){
		i++;
		if(i==3){
			clearInterval(mentimer);
		}
		$(".men img").attr("src","images/con1_"+i+".jpg")
	},100)
}

function xunhuan(a,b){
	var i=0;
	function donhua(a,b){
		if(i==b){
			i=0
		}
		
		$(a).css("backgroundPosition",i*(100/(b-1))+"% 0")
		i++;
		setTimeout(function(){
			donhua(a,b);
		},100);
	}
	donhua(a,b);
}

function noxunhuan(a,b){
	var i=0;
	function donhua(a,b){	
		$(a).css("backgroundPosition",i*(100/(b-1))+"% 0")
		i++;
		setTimeout(function(){
			if(i<b){
				donhua(a,b);
			}
		},100);
	}
	donhua(a,b);
}

function timeFn(){
	var nowtimeobj=new Date();
	var nowtime=nowtimeobj.getTime();
	var endtimeobj=new Date('2015/01/25 10:00:00');
	var endtime=endtimeobj.getTime();
	var dtime=endtime-nowtime;
	$(".time_h").html(parseInt(dtime/1000/60/60));
	$(".time_m").html(parseInt(dtime/1000/60%60));
	$(".time_s").html(parseInt(dtime/1000%60));
	if(dtime<=0){
		$(".time_h").html("0");
		$(".time_m").html("0");
		$(".time_s").html("0");
		clearInterval(daojishi);
		return false;
	}
}

function backFn(){
	if(ind==4){
		/*timeFn();
		daojishi=setInterval(timeFn,1000);*/  //倒计时
		$(".con9_4").attr("style","-webkit-animation:fadeInLeft .5s 1s linear both;");
		$(".bu6,.bu8").attr("style","-webkit-animation:fadeInUp .5s 1.2s linear both;");
		setTimeout(function(){
			$(".con9_4").attr("style","-webkit-animation:btn .5s infinite;");
			$(".bu6,.bu8").attr("style","-webkit-animation:btn .5s  infinite;");
		},1700);
	}
	if(ind==2){
		$(".con11_3").attr("style","-webkit-animation:fadeInUp .5s 0.8s linear both;");
		$(".bu7").attr("style","-webkit-animation:fadeInUp .5s 1s linear both;");
		setTimeout(function(){
			$(".con11_3").attr("style","-webkit-animation:btn .5s infinite;");
			$(".bu7").attr("style","-webkit-animation:btn .5s .2s infinite;");
		},1500);
	}
	if(ind==3){
		$(".bu5").attr("style","-webkit-animation:fadeInUp .5s .8s linear both;");
		setTimeout(function(){
			$(".bu5").attr("style","-webkit-animation:btn .5s infinite;");
		},1500);
	}
	if(ind==5){
		$(".bu10").attr("style","-webkit-animation:fadeInUp .5s 1.4s linear both;");
		setTimeout(function(){
			$(".bu10").attr("style","-webkit-animation:btn .5s infinite;");
		},2000);
	}
	if(ind==6){
		$(".bu11").attr("style","-webkit-animation:fadeInUp .5s 1.2s linear both;");
		setTimeout(function(){
			$(".bu11").attr("style","-webkit-animation:btn .5s infinite;");
		},1700);
	}
	if(ind==1){
		$(".jianRight").fadeIn(400);
		$(".jianLeft").fadeOut(400);
		$(".bu4").attr("style","-webkit-animation:fadeInUp .5s 1s linear both;");
		setTimeout(function(){
			$(".bu4").attr("style","-webkit-animation:btn .5s .2s infinite;");
		},1500);
	}
	else if(ind==$(".slide").length-1){
		$(".jianRight").fadeOut(400);
		$(".jianLeft").fadeIn(400);
		$(".bu9").attr("style","-webkit-animation:fadeInUp .5s 1s linear both;");
		setTimeout(function(){
			$(".bu9").attr("style","-webkit-animation:btn .5s .2s infinite;");
		},1500);
	}
	else{
		$(".jianRight").fadeIn(400);
		$(".jianLeft").fadeIn(400);	
	}
}

function tc(){
	$("#tc_btn").click(function() {
	    $(".tc_mengban").fadeIn(1000);
	    $(".tc_box").attr("style","-webkit-animation:zoomInDown 1.5s linear both;");
	    
	})
	$(".tc_guang,.tc_mengban").on("touchstart",function(){
		$(".tc_box").attr("style","-webkit-animation:zoomOutUp 1s linear both;");
	    $(".tc_mengban").fadeOut(1000);
	})
	$(".tc_con").height("60rem");
	$(".tc").height("18.5rem")
	var bili=($(".tc").height())/$(".tc_con").height();
	$(".tc_tiao").height(bili*$(".tc").height());

	var tx=0,ty=0,etx=0,ety=0,tjud=false,sy=0;dty=0;
	var tc=document.getElementsByClassName("tc")[0];
	tc.addEventListener("touchstart",function(e){
	    tjud=true;
	    ty = e.touches[0].pageY;
	    this.addEventListener("touchmove",ttouchmove,false);
	    this.addEventListener("touchend",ttouchend,false);
	    return false;
	},false);
	ttouchmove=function(e){
	    if(tjud){
	        event.preventDefault();
	        ety = e.touches[0].pageY;
	        dty=sy+ty-ety;

	        $(this).scrollTop(dty);
	        if(dty<=0){

	            this.removeEventListener("touchmove",ttouchmove,false);
	            dty=0;
	            sy=dty;
	        	tjud=false;
	        	$(".tc_tiao").css("top",0)
	        }
	        else if(dty>=$(".tc_con").height()-$(".tc").height()){
	        	console.log(1)
	            $(".tc_tiao").css("top",$(".tc").height()-$(".tc_tiao").height())
	            this.removeEventListener("touchmove",ttouchmove,false);
	            dty=$(".tc_con").height()-$(".tc").height()
	            sy=dty;
	        	tjud=false;
	        	$(".tc_tiao").css("top",bili*dty)
	        }
	        else{
	            $(".tc_tiao").css("top",bili*dty)
	        }
	        return false;
	    }
	    
	}
	ttouchend=function(e){
	    if(tjud){
	        sy=dty;
	        tjud=false;
	        return false;
	    }   
	}
}



function jingtou2(){
	$(".s2 .pao").show();
	$(".ren3").attr("style","-webkit-transform: translate3d(17rem, 0, 0);-webkit-transition:all 2s linear;");
	setTimeout(function(){
		$(".s2 .pao").hide();
		$(".s2 .taitou").show();
		setTimeout(function(){
			$(".s2 .taitou").hide();
			$(".s2 .gaoxing").show();
			setTimeout(function(){
				$(".s2 .gaoxing").hide();
				$(".s2 .gaoxing2").show();
				$(".con2_6").attr("style","-webkit-animation: btn 0.5s infinite;");
				setTimeout(function(){
					$(".s2 .gaoxing2").hide();
					$(".s2 .gaoxing3").show();
					$(".s2").attr("style","-webkit-transition:all 3s linear;");
					setTimeout(function(){
						$(".s2 .gaoxing3").hide();
						$(".s2 .pao").show();
						$(".s2").attr("style","-webkit-transition:all 3s linear;-webkit-transform: translate3d(-100%, 0, 0);");
						$(".ren3").attr("style","-webkit-transform: translate3d(35rem, 0, 0);-webkit-transition:all 3s linear;");
						setTimeout(function(){
							jingtou3();
						},3000)
					},500)
				},800)
			},500)
		},1500)

	},2000);
}

var saotimer=null;
function touchendFn(){
	$(".sao").attr("style","");
	clearTimeout(saotimer);
	$(".jiegou").html("扫描失败!请重新扫描").fadeIn(200);
}
function touchstartFn(){
		$(".jiegou").fadeOut(200);
		$(".sao").attr("style"," -webkit-animation: sao 1s infinite linear;");
		saotimer=setTimeout(function(){
			jingtou4();
			$(".sao").attr("style","");
			$(".jiegou").html("扫描成功!").fadeIn(200);
			$(".zhiwenkuang").unbind("touchstart",touchstartFn)
			$(".zhiwenkuang").unbind("touchend",touchendFn);
		},1500);
		$(".zhiwenkuang").bind("touchend",touchendFn);
		
	}
function jingtou3(){
	$(".s2 .pao").hide();
	$(".s2 .taitou").show();
	setTimeout(function(){
		$(".con3_1").attr("style","-webkit-animation:fadeInUp .5s .5s linear both;");
		$(".con3_2").attr("style","-webkit-animation:fadeInUp .5s .8s linear both;");
		$(".con3_3").attr("style","-webkit-animation:fadeInUp .5s 1.2s linear both;");
		$(".con3_5").attr("style","-webkit-animation:fadeInUp .5s 1.5s linear both;");
		$(".bu3").attr("style","-webkit-animation:bu3 1.5s 2s linear both;");
		$(".con3_6").attr("style","-webkit-animation:fadeIn .5s 2.5s linear both;");
		$(".con3_7").attr("style","-webkit-animation:fadeIn .5s 3.5s linear both;");
		$(".zhiwenkuang,.zhiwen,.sao").attr("style","-webkit-animation:fadeInUp .5s 2s linear both;");
		$(".con3_4").attr("style","-webkit-animation:fadeInUp .5s 2.2s linear both;");
		setTimeout(function(){
			$(".zhiwenkuang,.con3_4").attr("style","-webkit-animation: kuang 0.5s infinite;");
			$(".con3_5_1").hide();
			setTimeout(function(){
				$(".con3_5_2").hide();
			},1000)
		},3000)
	},500);
	$(".zhiwenkuang").bind("touchstart",touchstartFn)
}

function jingtou4(){
	$(".s2 .taitou").hide();
	$(".fei").show();
	noxunhuan(".fei",22);
	$(".fei").attr("style"," -webkit-animation: fei 4s linear;");
	setTimeout(function(){
		$(".s3").attr("style"," -webkit-animation: jingtouru2 1s linear;");
		setTimeout(function(){
			$(".s2,.fei").remove();
			$(".con4_5").attr("style","-webkit-animation:fadeInUp .5s .2s linear both;");
			$(".con4_6").attr("style","-webkit-animation:fadeInUp .5s .5s linear both;");
			$(".con4_7").attr("style","-webkit-animation:fadeInRight .5s .8s linear both;");
			$(".con4_8").attr("style","-webkit-animation:fadeInRight .5s 1s linear both;");
			$(".s3 .pao").show();
			$(".ren4").attr("style","-webkit-transform: translate3d(10rem, 0, 0);-webkit-transition:all 1.5s linear;");
			setTimeout(function(){
				$(".con4_8").attr("style","-webkit-animation: btn 0.5s infinite;");
				$(".s3 .pao").hide();
				$(".s3 .taitou").show();
				setTimeout(function(){
					$(".s3 .pao").show();
					$(".s3 .taitou").hide();
					$(".ren4").attr("style","-webkit-transform: translate3d(30rem, 0, 0);-webkit-transition:all 2.5s linear;");
					setTimeout(function(){
						$(".s5").show();
						$(".s5").attr("style","-webkit-animation:jingtouru .5s 0s ease-out both;");
						setTimeout(function(){
							$(".s3").remove();
							jingtou6();
						},500);
					},2500)
				},2000)
			},1500);
		},1000);
	},3000);
}

function jingtou6(){
	
	setTimeout(function(){
		$(".con6_3").attr("style","-webkit-animation: btn 0.5s infinite;");
	},1500);
	$(".yaogan").one("click",function(){
		$(".yaogan").css("backgroundPosition","0 bottom");
		$(".shuzi1").attr("style","-webkit-animation: shuzi1 5s .2s both linear;");
		$(".shuzi2").attr("style","-webkit-animation: shuzi2 5s .2s both linear;");
		setTimeout(function(){
			
			$(".ren2 .laotou").hide();
			$(".ren2 .gaoxing2").show();
			setTimeout(function(){
				$(".ren2 .gaoxing2").hide();
				$(".ren2 .pao").show();
				$(".ren2").attr("style","-webkit-transform: translate3d(25rem, 0, 0);-webkit-transition:all 3s linear;");
				setTimeout(function(){
					$(".slide:eq(1)").attr("style","-webkit-animation:jingtouru .5s 0s linear both;z-index:10;display:block;");
					$(".ren2 i").hide();
					$(".ren2").attr("style","");
					$(".ren2").attr("style","-webkit-transform: translate3d(-10rem, 0, 0);");
					setTimeout(function(){
						move=true;
						$(".active").removeClass('active');
						$(".slide").attr("style","");
						$(".slide").eq(ind).addClass('active');
						move=true;
						$(".ren2 .pao").show();
						$(".ren2").attr("style","-webkit-transform: translate3d(0, 0, 0);-webkit-transition:all 1s linear;");
						setTimeout(function(){
							$(".ren2 .pao").hide();
							$(".ren2 .tiaowang").show();
							$(".bu4").attr("style","-webkit-animation: btn 0.5s infinite;");
						},1000)
					},500)
				},2500)
			},1000)
			tc();
			$(".con6_1_1").attr("style","-webkit-animation: btn 0.5s infinite;");
		},5200)
	});
	$(".ren2").attr("style","-webkit-transform: translate3d(-10rem, 0, 0);");
	$(".ren2 .pao").show();
	$(".ren2").attr("style","-webkit-transform: translate3d(0, 0, 0);-webkit-transition:all 1s linear;");
	setTimeout(function(){
		$(".ren2 .pao").hide();
		$(".ren2 .laotou1").show();
		setTimeout(function(){
			$(".ren2 .laotou1").hide();
			$(".ren2 .laotou").show();
		},500)
	},1000);
}


var moveing=false;
var startX=0;
var endX=0;
var ind=1;
var move=false;
var slide_box=document.getElementById("slide_box");
var movetimer=null;
var movetimer2=null;
var daojishi=null;
var loadjud=false;
if(slide_box.addEventListener){
    slide_box.addEventListener("touchstart", touchStart, false);
    slide_box.addEventListener("touchmove", touchMove, false);
    slide_box.addEventListener("touchend", touchEnd, false);
}

function touchStart(event){
    if(move){
    	var touch = event.touches[0];
	    startX = touch.pageX;
	    endX = touch.pageX;
	    moveing=true;
    }
}

function touchMove(event){
	if(moveing){
		event.preventDefault();
        var touch = event.touches[0];
        endX = touch.pageX;
	}
}

function touchEnd(event){
	if(moveing){
		if(endX-startX>30&&ind>1){
			leftmove()
		}
		else if(endX-startX<-30&&ind<$("#slide_box .slide").length-1&&ind>0){
			rightmove()
		}
		moveing=false;
	}
}

function leftmove(){
	move=false;
	$(".slide").eq(ind-1).attr("style","-webkit-animation:jingtouru3 .5s 0s ease-out both;display:block;");
	$(".slide").eq(ind).attr("style","-webkit-animation:jingtouchu3 .5s 0s ease-out both;");
	$(".ren2").attr("style","-webkit-transform: translate3d(100%, 0, 0);-webkit-transition:all 0.5s ease-out;");
	ind--;
	clearTimeout(movetimer);
	clearTimeout(movetimer2);
	setTimeout(function(){
		$(".active").removeClass('active');
		$(".slide").attr("style","");
		$(".slide").eq(ind).addClass('active');
		$(".ren2 i").hide();
		move=true;
		$(".ren2 .pao2").show();
		$(".ren2").attr("style","-webkit-transform: translate3d(0, 0, 0);-webkit-transition:all 1.5s linear;");
		movetimer=setTimeout(function(){
			$(".ren2 .pao2").hide();
			$(".ren2 .zhuan").show();
			movetimer2=setTimeout(function(){
				$(".ren2 .zhuan").hide();
				$(".ren2 .tiaowang").show();
			},500);
		},1500);
	},500)
	backFn();
}

function rightmove(){
	move=false;
	$(".slide").eq(ind+1).attr("style","-webkit-animation:jingtouru .5s 0s ease-out both;display:block;");
	$(".slide").eq(ind).attr("style","-webkit-animation:jingtouchu2 .5s 0s ease-out both;");
	$(".ren2").attr("style","-webkit-transform: translate3d(-100%, 0, 0);-webkit-transition:all 0.5s ease-out;");
	ind++;
	setTimeout(function(){
		clearTimeout(movetimer);
		clearTimeout(movetimer2);
		$(".active").removeClass('active');
		$(".slide").attr("style","");
		$(".slide").eq(ind).addClass('active');
		$(".ren2 i").hide();
		$(".ren2").attr("style","");
		move=true;
		$(".ren2 .pao").show();
		$(".ren2").attr("style","-webkit-transform: translate3d(0, 0, 0);-webkit-transition:all 1s linear;");
		movetimer=setTimeout(function(){
			$(".ren2 .pao").hide();
			$(".ren2 .tiaowang").show();
		},1000);
	},500)
	setTimeout(function(){
		$(".ren2").attr("style","-webkit-transform: translate3d(-10rem, 0, 0);");
	},400)
	backFn();
}

var menjud=false;
var paotimer=null;
function jinmen(){
	if(menjud){
		clearInterval(paotimer);
		$(".guang").fadeOut(400);
		$(".ren").attr("style","-webkit-transform: translate3d(13.5rem, -4rem, 0);-webkit-transition:all 1.5s linear;");
		setTimeout(function(){
			$(".s1").attr("style","-webkit-animation:jingtouchu .5s 0s ease-out both;");
			setTimeout(function(){
				$(".s1").remove();
				$(".s2").show();
				$(".s2").attr("style","-webkit-animation:jingtouru .5s 0s ease-out both;");
				setTimeout(function(){
					jingtou2();
				},500);
			},500);
		},1500)
	}
	else{
		$(".s1 .pao").hide();
		$(".s1 .zhuan2").show();
		setTimeout(function(){
			$(".s1 .zhuan2").hide();
			$(".s1 .pao2").show();
			$(".ren").attr("style","-webkit-transform: translate3d(0, 0, 0);-webkit-transition:all 1.5s linear;");
			setTimeout(function(){
				$(".s1 .pao2").hide();
				$(".s1 .zhuan1").show();
			},1500)
		},500)
	}
}
function jingtou1(){
	$(".s1 .zhuan1").hide();
	$(".ren").attr("style","-webkit-transform: translate3d(8rem, 0, 0);-webkit-transition:all 1.5s linear;");
	$(".guang").attr("style","-webkit-animation: donghua9 4s infinite step-start both;")
	$(".s1 .pao").show();
	setTimeout(function(){
		jinmen();
	},1500)
}


$(window).load(function(){
	$(".s1,.s2,.s3,.s4,.s5").on("touchmove",function(){
		event.preventDefault();
	});
	jingtou1();
	paotimer=setInterval(jingtou1,4000);
	$(".menba").one("click",function(){
		$(".hand").hide();
		men();
		menjud=true;
	});


	var page_ind=0;
	var page_sum=Math.ceil(($(".jp_per_box ul").length-1)/5-1);
	$(".con12_3 span").html(page_ind+1+"/"+(page_sum+1))
	$(".jp_per_box ul:gt("+page_ind*5+"):lt(5)").clone().appendTo(".jp_page");
	$(".jp_last").click(function(){
		if(page_ind>0){
			$(".jp_page").html("");
			page_ind--;
			$(".jp_per_box ul:gt("+page_ind*5+"):lt(5)").clone().appendTo(".jp_page");
			$(".con12_3 span").html(page_ind+1+"/"+(page_sum+1))
		}
	});
	$(".jp_next").click(function(){
		if(page_ind<page_sum){
			$(".jp_page").html("");
			page_ind++;
			$(".jp_per_box ul:gt("+page_ind*5+"):lt(5)").clone().appendTo(".jp_page");
			console.log($(".jp_per_box ul:gt("+page_ind*5+"):lt(5)").clone())
			$(".con12_3 span").html(page_ind+1+"/"+(page_sum+1))
		}
	});
	$(".loading").fadeOut("400");




	$(".con9_4 button").click(function(){
		$(".join").fadeOut('200');
		$(".success").fadeIn('200');
	})
})