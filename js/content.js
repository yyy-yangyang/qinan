function nav1(){
	var nav = document.getElementById('nav-box');
	var gly = document.getElementById('gly');
	var gly1 = document.getElementById('gly1');
	var headertop = document.getElementById('header-top');
	var body = document.getElementById("body");
	var logo = document.getElementById('logo');
    nav.style.right = "0rem";
    logo.style.display = "none";
    gly.style.display = "none";
    gly1.style.opacity = "1";
}

function nav2(){
    var nav = document.getElementById('nav-box');
	var gly = document.getElementById('gly');
	var gly1 = document.getElementById('gly1');
    nav.style.right = "30rem";
    gly1.style.opacity = "0";
    logo.style.display = "block";
    gly.style.display = "block";
}