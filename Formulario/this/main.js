import {validateString, validateTel, Validate} from "./validate.js";
import {addStudent,modalAlert} from "./paint.js";

const btnEnviar = document.getElementById("btnEnviar");
const form = document.getElementById("fmContact");

//instanciar un objeto de la clase VALIDATE
let validator = new Validate();


//OBJETO DE VALIDACION
const objectValid={
    nameObject:false,
    lastNameObject:false,
    mailObject: false,
    teleObject: true,
    msnObject:true
}


//evento para que cada vez que los hijos tenga un cambio se genera la validacion
form.addEventListener("change",(event)=>{
    //saber cual de los hijos formulo el evento (capturar) se usara target 
    const inputId = event.target.id;
    console.log(inputId);
    //capturar el valor (no es llo mismo que el content)
    const inputValue = event.target.value;
    console.log(inputValue);
    //capturar clase 
    const inputClass = event.target.classList;
    console.log(inputClass);

    //si es valido 
    const validClass = ()=>{
        inputClass.add("is-valid");
        inputClass.remove("is-invalid");
    }

    //si en invalido
    const invalidClass = ()=>{
        inputClass.add("is-invalid");
        inputClass.remove("is-valid");
    }

    //segun el input hacer la validacion con el patron 
    switch(inputId){
        case 'name': 
            //aqui usamos el objeto instanciado
            //devuelve un true o false y lo aisgna automaticamente al objeto
            objectValid.nameObject = validator.validNames(inputValue);
            
            //si es true validClass  si es falso invalid Class 
            objectValid.nameObject ? validClass() : invalidClass();
            console.log(Object.values(objectValid));
            break;
        case 'lastName':    
            objectValid.lastNameObject = validator.validNames(inputValue);
            objectValid.lastNameObject ? validClass() : invalidClass();
            console.log(Object.values(objectValid));
            break;

        case 'mail':    
            objectValid.mailObject = validator.validMail(inputValue);
            objectValid.mailObject ? validClass() : invalidClass();
            console.log(Object.values(objectValid));
            break;
    }
});


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

    //validar cadena (antiguo)
    /* if(validateString(Nombre) && validateString(Apellido) && validateString(Telefono) && validateString(Correo)){
        if(!isNaN(parseInt(Telefono))){
            addStudent(Nombre,Apellido,Correo,Telefono,mensaje);
        }else{
            modalAlert("Error revise el numero de telefono");
        }
    }else{
        modalAlert("Error en los datos");
    } */


    if(validator.validform(objectValid)=== -1){
        addStudent(Nombre,Apellido,Correo,Telefono,mensaje);
    }else{
        modalAlert("Error en los datos");
    }
});