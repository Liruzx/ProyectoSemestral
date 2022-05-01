// De aqui en adelante agregaré las del cambio de contrasenia deseenme suerte //

var form2 = document.getElementById("form2");
var cambiodecontra = document.getElementById("nuevacontrasenia");
var cambiodecontra2 = document.getElementById("nuevacontrasenia2");
var men2 = document.getElementById("mensaje2");


form2.addEventListener("submit", e=>{

    e.preventDefault();

    let men2 = "";
    
    let entrar = false;

if (cambiodecontra.value.length < 7){

    men2 += "Debe ingresar una contraseña válida. Esta debe ser mayor a 7 caracteres.<br>";
    entrar = true;


}


if (cambiodecontra.value != cambiodecontra2.value ){

    men2 += "Sus contraseñas deben coincidir"
    entrar = true

}
















if(entrar){
    mensaje2.innerHTML = men2
    
}else{
    mensaje2.innerHTML = 'Registrado'
    
}


//hacer los oneclick pa las acciones qls  pero ya le supe mas o menos gente full sex 
//ahora saldre asi q en la tarde le sigo un abrazo.


} )