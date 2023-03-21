import {validateString, validateTel} from "./validate.js";
import {addStudent,modalAlert} from "./paint.js";

const btnEnviar = document.getElementById("btnEnviar");

//asociar el evento al boton 
btnEnviar.addEventListener("click", (e)=>{
    //evitar que se refresque la pagina 
    e.preventDefault();

    //seleccionar los datos del formulario
    const Nombre = document.getElementById("name").value;
    const Apellido = document.getElementById("lastName").value;
    const Correo = document.getElementById("mail").value;
    const Telefono = document.getElementById("telephone").value;
    const mensaje = document.getElementById("fm_contact").value;

    //validar cadena 
    if(validateString(Nombre) && validateString(Apellido) && validateString(Telefono) && validateString(Correo)){
        if(!isNaN(parseInt(Telefono))){
            addStudent(Nombre,Apellido,Correo,Telefono,mensaje);
        }else{
            modalAlert("Error revise el numero de telefono");
        }
    }else{
        modalAlert("Error en los datos");
    }
});