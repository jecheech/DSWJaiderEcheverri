

function tabs(bloques) {
  var i;
  var x = document.getElementsByClassName("contenido");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  document.getElementById(bloques).style.display = "block";  
}


function opciones(bloques) {
    var i;
    var x = document.getElementsByClassName("contenido");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    document.getElementById(bloques).style.display = "block";
}
