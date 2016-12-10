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
	
	
	




