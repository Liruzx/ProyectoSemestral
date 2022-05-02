var formVALO = document.getElementById("form3");
var usserv = document.getElementById("usser");
var cambiodecontra2 = document.getElementById("");
var menVALO = document.getElementById("mensajeVALO");


formVALO.addEventListener("submit", e=>{

    e.preventDefault();

    let menVALO = "";
    
    let entrar = false;


    if (usserv.value.length < 5){

        menVALO += "Debe ingresar una contraseña válida. Esta debe ser mayor a 7 caracteres.<br>";
        entrar = true;
    
    
    }









    if(entrar){
        mensajeVALO.innerHTML = menVALO
        
    }else{
        mensajeVALO.innerHTML = 'Registrado'
        
    }
    







} )