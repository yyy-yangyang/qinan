function $(id){
  return typeof id === 'string'?document.getElementById(id):id;
}
window.onload = function(){
	var titles = $('mian_login_nav').getElementsByTagName('li'),
	div=$('mian_login_body').getElementsByTagName('div');
	if(titles.length!=div.length)
		return;

    for (var i = 0;i<titles.length;i++){
    	titles[i].id = i;
    	titles[i].onclick=function(){
       //清除所有以上的li的class
               for(var j=0;j<titles.length;j++){
               	         titles[j].className='';
               	         div[j].style.display="none";

               }
               this.className = 'select';
               div[this.id].style.display='block';

    	}
    }
    }
