//alert('kkk');
function $(id){
	return document.getElementById(id);
}
	var black = document.getElementsByClassName('black');

//	alert(black.length);
	var menu_right = $('menu_right');
	var blue = document.getElementsByClassName('blue');
	var nav_lis = menu_right.getElementsByTagName('li');
	var content =$('content');
	var conts = document.getElementsByClassName('cont');		//内容页
	var lists = document.getElementsByClassName('list');
	//alert(lists.length);
	var now = 0;	//用来记录当前位置
	var leader  = 0,target = 0;
	//=======导航栏文字动画=========
	for(var i = 0;i<black.length;i++){
		lists[i].index = nav_lis[i].index = blue[i].index = black[i].index = i;
		nav_lis[i].style.width = blue[i].offsetWidth+'px';
		lists[i].onmouseover = black[i].onmouseover = blue[i].onmouseover = function(){
			animate(black[this.index],{'width':70});
			lists[this.index].style.backgroundColor = 'red';
		}
		lists[i].onmouseout = black[i].onmouseout = blue[i].onmouseout = function(){
			if(this.index != now){
				animate(black[this.index],{'width':0});
				lists[this.index].style.backgroundColor = 'goldenrod';
			}
		}
		lists[i].onclick = nav_lis[i].onclick = function(){
			//alert('kkk');
			if(this.index == now){
				return;
			}
			now = this.index;
			tab();			
			
		}
		
	function tab(){
			for(var i = 0;i<lists.length;i++){
				animate(black[i],{'width':0});
				lists[i].style.backgroundColor = 'goldenrod';
				nav_lis[i].className = '';
			}
			animate(black[now],{'width':70});
			lists[now].style.backgroundColor = 'red';
			nav_lis[now].className = 'li01';
			target = conts[now].offsetTop;
			//alert(target);
			var test = leader;//记录上一次点击的位置
						//console.log(test);
						//alert('kkk');
						clearInterval(timer);
						//target = olis2[this.index].offsetTop;
						//alert(target);
						var timer = setInterval(scrollUp,30);
						function scrollUp(){
							leader += (target - leader) / 10;
							leader = leader > test ? Math.ceil(leader) : Math.floor(leader);
							//leader = Math.ceil(leader);
							//alert(leader);
							if(target == leader){
								//alert('kk');
								clearInterval(timer);
//								window.scrollTo(0,target);
							}
							window.scrollTo(0,leader);
							
						}
		}
			
	};
	
	// 第一页的JS
	var yds=document.getElementsByClassName("yd");
	var layers=document.getElementsByClassName("layer");
	function animation1(){
		 var i=0;
	 var time1 = setInterval(function() {
	 	var a;
			if(i==3){
	 	      i=0;
	 	// 排他思想点击那个圆点变色，点击那页显示         
			for(var j=0;j<yds.length;j++){
				yds[j].style.backgroundColor="lightgrey";
				layers[j].style.display="none";

			}
			yds[i].style.backgroundColor="orange";
			
			layers[i].style.display="block";
			layers[i].style.animation="yundong2 2s linear 0s 1";
			layers[i+3].style.display="block";
			layers[i+3].style.animation="yundong1 2s linear 0s 1";
			console.log(i);
			var timeLast = setTimeout(function() {
							layers[i + 3].style.display = "none";
							clearTimeout(timeLast);
						}, 2000);
	 } else {
				i = i + 1;
//				console.log(i);
			for(var j = 0; j < layers.length; j++) {
			layers[j].style.display = "none";
			yds[j].style.background = "white";
		}
          yds[i].style.backgroundColor="orange";
			layers[i].style.display="block";
          layers[i-1].style.display="block";
          layers[i].style.animation="yundong2 2s linear 0s 1";
          layers[i-1].style.animation="yundong1 2s linear 0s 1";

	}
	for(var k=0;k<yds.length;k++){
		yds[k].index = k;
		yds[k].onclick = function() {

		clearInterval(time1);
		for(var n = 0; n < layers.length; n++) {
							    layers[n].style.display = "none";
								yds[n].style.background = "white";
							}
						  if(this.index==0){
						  	yds[0].style.background = "orange";
						  	layers[0].style.display = "block";
							layers[3].style.display = "block";
							layers[0].style.animation = "yundong2 2s linear 0s 1";
							layers[3].style.animation = "yundong1 2s linear 0s 1";
							var timeLast1 = setTimeout(function() {
							layers[3].style.display = "none";
							clearTimeout(timeLast1);
						}, 2000);
						}
						  else{
						    yds[this.index].style.background = "orange";
							layers[this.index].style.display = "block";
							layers[this.index - 1].style.display = "block";
							layers[this.index].style.animation = "yundong2 2s linear 0s 1";
							layers[this.index - 1].style.animation = "yundong1 2s linear 0s 1";
							}
						i=this.index;
					    var timeLast2 = setTimeout(function() {
							animation1();
							clearTimeout(timeLast2);
						},5000);
						}
						
					}
                  }, 5000);
	       }
	           animation1();
	
 //第二页
   var lis=document.getElementsByClassName('li1');
console.log(lis);
for (var i = 0; i < 12; i++) {
lis[i].onmouseover=function() {
	this.className="show";
}
lis[i].onmouseout=function() {
	this.className="li1";
}
};
var plane1=document.getElementById('plane1');
var bg=document.getElementById('bg');
bg.onmouseover=function() {
	plane1.className="plane_1"
	plane2.className="plane_2"
	plane3.className="plane_3"
}
bg.onmouseout=function() {
	plane1.className="plane_11"
	plane2.className="plane_22"
	plane3.className="plane_33"
}
  var D_3=$("D_3");
	var pencel1=$("pencel1");
	var pencel2=$("pencel2");
	var pencel3=$("pencel3");
	var about1=$("about1");
	var about1_1=$("about1_1");
	var about3=$("about3");
	var about3_1=$("about3_1");
	var Xabout1_1=$("Xabout1");
	var Xabout1_2=$("Xabout2");
	var Xabout1_3=$("Xabout3");
	var Xabout1_4=$("Xabout4");
	var Xabout3_1=$("Xabout3_1");
	var Xabout3_2=$("Xabout3_2");
	var Xabout3_3=$("Xabout3_3");
	var Xabout3_4=$("Xabout3_4");
	var worksimg1=$("worksimg1");
	var worksimg2=$("worksimg2");
	var worksimg3=$("worksimg3");
	var worksimg4=$("worksimg4");
	// var bady = document.getElementsByTagName('body');

	// console.log(document.body.scrollTop);
	worksimg1.onmouseover=function (argument) {
		
	console.log(1);
	worksimg1.style.opacity=.5;
		
	}
	worksimg1.onmouseout=function (argument) {
	worksimg1.style.opacity=0;
		
	}
	worksimg2.onmouseover=function (argument) {
	worksimg2.style.opacity=.5;
		
	}
	worksimg2.onmouseout=function (argument) {
	worksimg2.style.opacity=0;
		
	}
	worksimg3.onmouseover=function (argument) {
	worksimg3.style.opacity=.5;
		
	}
	worksimg3.onmouseout=function (argument) {
	worksimg3.style.opacity=0;
		
	}
	worksimg4.onmouseover=function (argument) {
	worksimg4.style.opacity=.5;
		
	}
	worksimg4.onmouseout=function (argument) {
	worksimg4.style.opacity=0;
		
	}

	D_3.onmouseover=function (argument) {
			pencel1.style.top="200px";
			pencel2.style.top="480px";
			pencel3.style.top="541px";
		}
	D_3.onmouseout=function (argument) {
			pencel1.style.top="100px";
			pencel2.style.top="380px";
			pencel3.style.top="641px";
		}
	about1.onmouseout=function (argument) {
		Xabout1_1.style.top=0;
		Xabout1_2.style.left=0;
		Xabout1_3.style.left=0;
		Xabout1_4.style.top=0;
		about1_1.style.width="286px";
		about1_1.style.height="220px";
	}
	about1.onmouseover=function (argument) {
		Xabout1_1.style.top="100px";
		Xabout1_2.style.left="-130px";
		Xabout1_3.style.left="130px";
		Xabout1_4.style.top="-100px";
		about1_1.style.width="260px";
		about1_1.style.height="200px";
	}
	about3.onmouseout=function (argument) {
		Xabout3_1.style.top=0;
		Xabout3_2.style.left=0;
		Xabout3_3.style.left=0;
		Xabout3_4.style.top=0;
		about3_1.style.width="286px";
		about3_1.style.height="220px";
	}
	about3.onmouseover=function (argument) {
		Xabout3_1.style.top="100px";
		Xabout3_2.style.left="-130px";
		Xabout3_3.style.left="130px";
		Xabout3_4.style.top="-100px";
		about3_1.style.width="260px";
		about3_1.style.height="200px";
	}


	
	
	





			  
  
			
			
		
			

	
    // 第五页的JS
    var  text_left=$("text_left");
    var text_right=$("text_right");
    var bottom_lis=document.getElementsByClassName("team");
    for(var i=0;i<bottom_lis.length;i++){
    	// console.log(bottom_lis.length);
    	bottom_lis[i].index=i;
    	bottom_lis[i].onmouseover=function(){
    		for(var j=0;j<bottom_lis.length;j++){
    			bottom_lis[j].style.opacity="0.5";
    		}
    		// console.log(this.index);
    		this.style.opacity="1";
    		// addCanvas();
    	}
    	bottom_lis[i].onmouseout=function(){
    		for(var j=0;j<bottom_lis.length;j++){
    			bottom_lis[j].style.opacity="1";
    		}
    		 // removeCanvas();
    	}
    }
    // 冒泡泡的动画，要用到画布相关知识
// function addCanvas(){
// if(!oC){
// oC = document.createElement('canvas');
// oC.id = 'canvasBubble';
// oC.width = w;
// oC.height = h;
// oTeamContent3.appendChild(oC);
// bindCanvas();
// }
// }
// function removeCanvas(){
// clearInterval(timer1);
// clearInterval(timer2);
// oTeamContent3.removeChild(oC);
// oC = null;
// }
// function bindCanvas(){
// var oGC = oC.getContext('2d');
// var setArr = []; //存储要绘制的所有图形的数据
// var timer1=null;
// timer1 = setInterval(function(){
// oGC.clearRect(0,0,oC.width,oC.height);
// for(var i=0;i<setArr.length;i++){

// setArr[i].num += 5;
// setArr[i].x = setArr[i].startX - Math.sin(setArr[i].num*Math.PI/180)*setArr[i].step;

// setArr[i].y = setArr[i].startY - (setArr[i].num*Math.PI/180)*setArr[i].step;
// if( setArr[i].y < 50 ){

// setArr.splice(i,1);

// }

// }

// for(var i=0;i<setArr.length;i++){

// oGC.fillStyle = 'rgba('+setArr[i].c1+','+setArr[i].c2+','+setArr[i].c3+','+setArr[i].c4+')';

// oGC.beginPath();

// oGC.moveTo(setArr[i].x,setArr[i].y);

// oGC.arc(setArr[i].x,setArr[i].y,setArr[i].r,0,360*Math.PI/180);

// oGC.closePath();

// oGC.fill();

// }
// },1000/60);
// var timer2=null;

// timer2 = setInterval(function(){
// var x = Math.random()*oC.width;
// var y = oC.height - 10;
// var r = Math.random()*6 + 2;
// var c1 = Math.round(Math.random()*255);
// var c2 = Math.round(Math.random()*255);
// var c3 = Math.round(Math.random()*255);
// var c4 = 1;
// var num = 0;
// var step = Math.random()*20 + 10;
// var startX = x;
// var startY = y;
// setArr.push({
// x : x,
// y : y,
// r : r,
// c1 : c1,
// c2 : c2,
// c3 : c3,
// c4 : c4,
// num : num,
// step : step,
// startX : x,
// startY : y
// });
// },100);

// }




