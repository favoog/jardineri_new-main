$(document).ready(function() {
    $('#adminCheck').change(function() {
        if ($(this).is(':checked')) {
            $('#adminFields').show();
        } else {
            $('#adminFields').hide();
        }
    });

    $("#miFormulario2").validate({
        rules: {
            txtUsuario : {
                required: true,
                minlength : 5
            },
            txtNombre : {
                required: true,
                minlength : 3
            },
            txtApellido : {
                required: true,
                minlength: 3
            },
            txtNumero : {
                required: true,
                minlength: 8
            },
            txtCorreo : {
                required: true,
                minlength: 12
            },
            txtPassword : {
                required: true,
                minlength: 8
            },
            txtPasswordConfirmate: {
                required: true,
                minlength: 8,
                equalTo: "#txtPassword"
            },
            txtRUT: {
                required: function(element) {
                    return $("#adminCheck").is(":checked");
                },
                pattern: /^[0-9]{8}-[0-9Kk]$/
            },
            txtAdminPassword: {
                required: function(element) {
                    return $("#adminCheck").is(":checked");
                },
                minlength: 8
            },
            txtAdminPasswordConfirmate: {
                required: function(element) {
                    return $("#adminCheck").is(":checked");
                },
                minlength: 8,
                equalTo: "#txtAdminPassword"
            }
        },
        messages: {
            txtUsuario : {
                required:"Este campo es obligatorio",
                minlength : "El usuario debe de contener un minimo de 5 caracteres"
            },
            txtNombre : {
                required:"Este campo es obligatorio",
                minlength : "El nombre debe de tener un minimo de 3 caracteres"
            },
            txtApellido : {
                required:"Este campo es obligatorio",
                minlength: "El apellido debe de contener un minimo de 3 caracteres "
            },
            txtNumero : {
                required:"El numero debe ser valido!",
                minlength: "El numero debe de contener un minimo de 8 caracteres "
            },
            txtCorreo : {
                required:"El correo debe ser valido!",
                minlength: "debe contener un minimo de 12 caracteres, al igual que '@'"
            },
            txtPassword : {
                required : "Debe de contener 1 mayuscula al menos, 3 numeros",
                minlength : "Debe de contener un minimo de 8 caracteres"
            },
            txtPasswordConfirmate: {
                required : "Su contraseña debe de coincidir con la anterior",
                minlength: "Debe de contener un minimo de 8 caracteres",
                equalTo: "Las contraseñas no coinciden"
            },
            txtRUT: {
                required: "Por favor, ingrese el RUT",
                pattern: "El RUT debe tener 8 dígitos más un dígito verificador separado por '-'"
            },
            txtAdminPassword: {
                required: "Por favor, ingrese una contraseña de administrador",
                minlength: "La contraseña debe tener al menos 8 caracteres"
            },
            txtAdminPasswordConfirmate: {
                required: "Por favor, confirme la contraseña de administrador",
                equalTo: "Las contraseñas no coinciden"
            }
        },
        submitHandler: function(form) {
            // Obtener valores del formulario
            var usuario = $('#txtUsuario').val();
            var nombre = $('#txtNombre').val();
            var apellido = $('#txtApellido').val();
            var numero = $('#txtNumero').val();
            var correo = $('#txtCorreo').val();
            var password = $('#txtPassword').val();
            var isAdmin = $('#adminCheck').is(':checked');
            var rut = $('#txtRUT').val();
            var adminPassword = $('#txtAdminPassword').val();

            // Crear objeto usuario
            var user = {
                usuario: usuario,
                nombre: nombre,
                apellido: apellido,
                numero: numero,
                correo: correo,
                password: password,
                isAdmin: isAdmin,
                rut: rut,
                adminPassword: adminPassword
            };

            // Guardar en Local Storage
            localStorage.setItem('user_' + usuario, JSON.stringify(user));
            alert('Usuario registrado exitosamente!');
            form.reset();
        }
    });
});