// formulario de registro js

function validarFormulario(){
    let usuario = document.getElementById("txtUsuario").value;
    let passowrd = document.getElementById("txtPassword").value;



    // trim() => 
    /**
     1. string = "hola pipe" .trim() => "holapipe"
     2. string = " "
     */
    if (usuario.trim() === '') {
        document.getElementById("valUsuario").style.display = "inline";
        document.getElementById("txtUsuario").classList.add("is-invalid");
    }else{
        document.getElementById("valUsuario").style.display = "none";
        document.getElementById("txtUsuario").classList.remove("is-invalid");
        document.getElementById("txtUsuario").classList.add("is-valid");
    }

    if (passowrd.length == 0) {
        document.getElementById("valUsuario").classList.remove("is-invalid");
        document.getElementById("txtPassword").classList.add("is-invalid");
    }else{
        document.getElementById("valUsuario").classList.add("none");
        document.getElementById("txtPassword").classList.remove("is-invalid");
        document.getElementById("txtPassword").classList.add("is-valid");
    }

}


document.getElementById("mostrar").style.display = "none";

function pass(){
    let input = document.getElementById("txtPassword");
    if (input.type == "password") {
        input.type = "text";
        document.getElementById("ocultar").style.display = "inline";
        document.getElementById("mostrar").style.display = "none";


    }else{
        input.type = "password"
        document.getElementById("ocultar").style.display = "none";
        document.getElementById("mostrar").style.display = "inline";

    }

}