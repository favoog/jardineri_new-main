$(function(){
    $("#miFormulario").validate({
        rules:{
            txtUsuario : {
                required:true,
                minlength : 8
            },
            txtPassword : {
                required:true,
                minlength: 5
            }
        },
        messages: {
            txtUsuario : {
                required : "El campo del rut es obligatorio",
                minlength: "Debe de contener un minimo de 8 caracteres"
            },
            txtPassword : {
                required : "Este campo debe de tener",
                minlength : "Debe de contar con minimo 5 caracteres"
            }
        }
    })
})
