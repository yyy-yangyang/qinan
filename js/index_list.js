window.onload = function(){
    var count = 0;
    var isgo = false;
    var timer;
    
    var ul_img =  document.getElementsByClassName('ul_img')[0];
    var li_img = document.getElementsByClassName('li_img');
    var div_btn = document.getElementsByClassName('div_btn'); 

    showtime();
    function showtime(){
      timer = setInterval(function(){
           if (isgo ==false) {
            count++;
            ul_img.style.transform = "translate("+ -20 * count + "%)";
            if (count >= li_img.length -1) {
              count = li_img.length - 1;
              isgo = true;
            }
           }else{
              count--;
              ul_img.style.transform = "translate("+ -20 * count + "%)";
              if(count <= 0){
                count = 0;
                isgo  = false;
              }
           }
           for (var i = 0; i < div_btn.length; i++) {
                    div_btn[i].style.backgroundColor = "#EECFA1";
                }     
                    div_btn[count].style.backgroundColor = "#EE9A00";
      },4000);
    }

    div_btn[0].style.backgroundColor = '#EE9A00';
    for (var i =0; i < div_btn.length; i++) {
       div_btn[i].index = i;
       div_btn[i].onmouseover = function(){
           clearInterval(timer);

           for(var a = 0; a < div_btn.length;a++){
            div_btn[a].style.backgroundColor = "#EECFA1";
           }
           div_btn[this.index].style.backgroundColor = "#EE9A00";
           //为了控制
           if (this.index == 4) {
            isgo =true;
           }
           if(this.index == 0){
            isgo =false;
           }
           //让count值对应
           count = this.index;
           ul_img.style.transform = "translate(" + -20 * this.index + "%)";
       }
       div_btn[i].onmouseout = function(){
                showtime();
       } 
    }




     var ul_img1 = document.getElementsByClassName('ul_img1')[0];
     var li_img1 = document.getElementsByClassName('li_img1');
     var div_btn1 = document.getElementsByClassName('div_btn1');
     var timer1;
     var numa = 0;
     var isgo1 = false;



     showtime1();
     function showtime1(){
       timer1 = setInterval(function(){
           if (isgo1 == false) {
            numa++;
            ul_img1.style.transform = "translate("+ -20 * numa  + "%)";
            if (numa >= li_img1.length-1) {
              numa = li_img1.length-1;
              isgo1  = true;
            }
           }else{
              numa--;
              ul_img1.style.transform = "translate("+ -20 * numa + "%)";
              if (numa <= 0 ) {
                numa = 0;
                isgo1 = false;
              }
           }
           for(var i = 0;i <  div_btn1.length;i++){
              div_btn1[i].style.backgroundColor = "#DCDCDC";
           }
              div_btn1[numa].style.backgroundColor = "orange";
       },3000);
     }
     div_btn1[0].style.backgroundColor = 'orange';


   
}