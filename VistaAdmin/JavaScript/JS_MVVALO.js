var formVALO = document.getElementById("form3");
var usserv = document.getElementById("usser");
var menVALO = document.getElementById("mensajeVALO");


formVALO.addEventListener("submit", e=>{

    e.preventDefault();

    let mensajeVALO = "";
    
    let entrar = false;


    if (usserv.value.length < 5){

        mensajeVALO += 'Debe ingresar una contraseña válida. Esta debe ser mayor a 7 caracteres.<br>';
        entrar = true;
    
    
    }


    if (usserv.value.length < 1){

        mensajeVALO += "Debe ingresar una contraseña.<br>";
        entrar = true;
    
    
    }







    if(entrar){
        menVALO.innerHTML = mensajeVALO
        
    }else{
        menVALO.innerHTML = 'Registrado'
        
    }
    







} )