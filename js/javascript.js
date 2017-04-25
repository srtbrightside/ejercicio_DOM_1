function translate(){
    var title = document.getElementById("form-signin-heading");
    var email = document.getElementById("inputEmail");
    var password = document.getElementById("inputPassword");
    var remenber = document.getElementsByTagName("span")[0];
    var button = document.getElementsByClassName("btn")[0];
    title.innerHTML = "Por favor inicia sesión";
    email.placeholder = "Correo Electrónico";
    password.placeholder = "Contraseña";
    remenber.innerHTML = "Recordar datos";
    button.innerHTML = "Iniciar Sesión";
}
translate();
function resultado(){

    //var ingre = document.getElementById("plana");
    //ingre.innerHTML = "datos"
    var usuario = document.getElementById("ingreso");
    usuario.innerHTML = "Datos del usuario";
    var correo = document.getElementById("inputEmail").value;
    var div = document.getElementById("emailok");
    div.innerHTML = "El correo ingresado es: " + "<br>" + correo;
    var clave = document.getElementById("inputPassword").value;
    var div1 = document.getElementById("clave");
    div1.innerHTML = "La clave ingresada es : " + "<br>" + clave;

}
