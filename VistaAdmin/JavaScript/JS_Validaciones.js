var usuario = document.getElementById("nombre_usuario");
var correo = document.getElementById("correo");
var fecha_nac = document.getElementById("fecha_na");
var contra = document.getElementById("contraseña");
var confi_contra = document.getElementById("confi_contraseña");
var form = document.getElementById("form");
var men = document.getElementById("mensaje");



form.addEventListener("submit", e=>{

    e.preventDefault();

    let men = "";
    
    let entrar = false;
    let date_regex = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(0[1-9]|1[1-9]|2[1-9])$/;
    let validar = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


    if ( usuario.value.length < 1 ) {


        men += "Debe ingresar un usuario.<br>";
        entrar = true;

    } 

    if (validar.test(correo.value)){


    }else{

        men+="Debe ingresar un correo válido.<br>"
        entrar=true

    }

    if (date_regex.test(fecha_nac.value)){

        
    }else{

        men+= "Debe ingresar la fecha con el siguiente formato: DD/MM/AA<br>"
        entrar = true

    }


    if (contra.value.length == 0){

        men += "Debe ingresar una contraseña válida.<br>";
        entrar = true;


    }


    if (contra.value != confi_contra.value ){

        men += "Sus contraseñas deben coincidir."
        entrar = true

    }



    if(entrar){
        mensaje.innerHTML = men
        
    }else{
        mensaje.innerHTML = 'Registrado'
        mensaje.innerHTML = '<a href="paginaPrincipal.html">Registrado Correctamente<br>Inicie sesion</a>'   
        
    }
    

} )

//Aqui terminan las del enzo  ↥ ↥ ↥ ↥ ↥ ↥ ↥ ↥

