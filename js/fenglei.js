



    var myclick = function(v){
        var llis = document.getElementById('main_box1').getElementsByTagName("a");
        for(var i =0;i<llis.length;i++){
            var lli = llis[i];
            if (lli == document.getElementById('select' + v)) {
                lli.style.backgroundColor = "#eee";
            }else{
                lli.style.backgroundColor = "#fff";
            }
        }
        var divs = document.getElementsByClassName("main_1");
        for(var i = 0;i < divs.length;i++){
            var divv = divs[i];
            if(divv == document.getElementById("main_box_" + v)){
                  divv.style.display = "block";
            }else{
                divv.style.display = "none";
            }
        }
    }
    






function nav1(){
    var nav = document.getElementById('nav-box');
    var gly = document.getElementById('gly');
    var gly1 = document.getElementById('gly1');
    var headertop = document.getElementById('header-top');
    var logo = document.getElementById('logo');
    nav.style.right = "0rem";
    logo.style.display = "none";
    body.style.background = "rgba(128,128,128,1)";
    gly.style.display = "none";
    gly1.style.opacity = "1";
    gly1.style.display = "block";
}

function nav2(){
    var nav = document.getElementById('nav-box');
    var gly = document.getElementById('gly');
    var gly1 = document.getElementById('gly1');
    nav.style.right = "30rem";
    gly1.style.opacity = "0";
    body.style.background = "none";
    logo.style.display = "block";
    gly.style.display = "block";
}
