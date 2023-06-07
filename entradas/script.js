function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += "responsive";
    } else {
      x.className = "topnav";
    }
  }
function reserva(){
  var nombre = document.getElementById("nombre").value;
  var apellido = document.getElementById("apellido").value;
  var telefono = document.getElementById("telefono").value;
  var correo = document.getElementById("correo").value;
  var confirmarCorreo = document.getElementById("confirmarCorreo").value;
  var fecha = document.getElementById("fecha").value;
  var hora = document.getElementById("hora").value;
  var numPersonas = document.getElementById("num").value;
  

  if (nombre == '' || apellido == '' || telefono == '' || correo == '' || confirmarCorreo == '' || fecha == '' || hora == '' || numPersonas == '') {
    alert('Rellene todos los campos para cpntinuar');
  }
  else if (correo != confirmarCorreo) {
      alert('El correo no coincide.');
  }
  else{
    alert('Se ha realizado la reserva a nombre de: ' + nombre+" "+apellido+" el dia "+fecha+" a las "+hora+", para "+numPersonas+" personas.");
  }
}