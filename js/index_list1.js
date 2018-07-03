 var myclick = function(v){
      var ai = document.getElementById('head1').getElementsByTagName('a');
       for(var i = 0;i < ai.length;i++){
           var aii = ai[i];
           if (aii == document.getElementById('one' + v)) {
            aii.style.color = "#FF6900";
            aii.style.borderBottom = "1px solid #FF6900";
           }else{
            aii.style.color ="black";
            aii.style.borderBottom = "none";
           }
       }
    }

var myclicks = function(z){
  var si = document.getElementById('box_mian18').getElementsByTagName('li');
  var sia = document.getElementById('box_mian18').getElementsByTagName('a');
  for(var i = 0;i<si.length;i++){
    var sii = si[i];
    var siaa = sia[i];
    if(sii == document.getElementById('three' + z)){
      siaa.style.color = "#FF6900";
      sii.style.borderBottom = "2px solid #FF6900";
    }else{
      sii.style.borderBottom = "none";
      siaa.style.color ="#818181";
    }
  }

  var auto = document.getElementsByClassName('auto');
  for(var i = 0;i<auto.length;i++){
    var autoo = auto[i];
    if(autoo == document.getElementById("box_" + z)){
        autoo.style.display = "block";
    }else{
        autoo.style.display="none";
    }
  }
}