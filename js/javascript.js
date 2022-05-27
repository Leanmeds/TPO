(function(){

    var formulario = document.getElementsByName('formulario')[0],
        boton = document.getElementById('btn');

    var validarNombre = function(e){
        if (formulario.nombre.value == 0){
            alert("Completa el campo Nombre");
            e.preventDefault();
        }
    };

    var validarApellido = function(e){
        if (formulario.apellido.value == 0){
            alert("Completa el campo Apellido");
            e.preventDefault();
        }
    };

    var validarEmail = function(e){
        if (formulario.email.value == 0){
            alert("Completa el campo E-mail");
            e.preventDefault();
        }
    };

    var validarCiudad = function(e){
        if (formulario.ciudad.value == 0){
            alert("Completa el campo Ciudad")
            e.preventDefault();
        }
    };
    
    var validarCP = function(e){
        if (formulario.codpos.value == 0){
            alert("Completa el campo Codigo Postal");
            e.preventDefault();
        }
    };

    var validarTelefono = function(e){
        if (formulario.telefono.value == 0){
            alert("Completa el campo Telefono");
            e.preventDefault();
        }
    };
    
    var validarRadio = function(e){
        if (formulario.sexo[0].checked == true || 
            formulario.sexo[1].checked == true ||
            formulario.sexo[2].checked == true){
            } else{
                alert("Completa el campo Sexo");
                e.preventDefault();
        }
    };
        
    var validarCheckbox = function(e){
        if (formulario.checkbox[0].checked == false ||
            formulario.checkbox[1].checked == false ||
            formulario.checkbox[2].checked == false){
            alert("Completa el campo 'Cómo conociste dECOlogii?'");
            e.preventDefault();
        }
    };

    var validarConsulta = function(e){
        if (formulario.consulta.value == 0){
            alert("Completa el campo Tu consulta");
            e.preventDefault;
        }
    }

    var validar = function(e){
        validarNombre(e);
        validarApellido(e);
        validarEmail(e);
        validarCiudad(e);
        validarCP(e);
        validarTelefono(e);
        validarRadio(e);
        validarCheckbox(e);
        validarConsulta(e);
    };
    formulario.addEventListener("submit", validar);
}())
