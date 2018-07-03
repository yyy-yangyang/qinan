function $(id){
  return typeof id === 'string'?document.getElementById(id):id;
}
window.onload = function(){
	var titles = $('server-list').getElementsByTagName('li'),
	div=$('server-nin').getElementsByTagName('div'),
  span=$('server-list').getElementsByTagName('span'),
  a=$('server-list').getElementsByTagName('a');

	if(titles.length!=div.length)
		return;
    for (var i = 0;i<titles.length;i++){
    	titles[i].id = i;
    	titles[i].onclick=function(){
       //清除所有以上的li的class
               for(var j=0;j<titles.length;j++){
               	         titles[j].className='';
               	         div[j].style.display="none";
                         span[j].style.display="none";
                         a[j].style.color="black";
               }
               this.className = 'select';
               div[this.id].style.display='block';
               span[this.id].style.display="block";
               a[this.id].style.color="orange";
    	}
    }
    }
