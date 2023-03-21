
//validar cadena 
const validateString = (cad)=>{
    //ternario
    let response = (cad.length >= 3) ? true : false; 
    return response;
};

const validateTel = (cad) =>{
    let response = (cad.length >= 10) ? true : false; 
    return response;
}

class Validate{
    //Metodos 
    validNames(values){
        //patron que debe seguir los inputs
        const nombresRX = /^([a-zA-ZÀ-ÖØ-öø-ÿ]{3,25})([\s]?)([a-zA-ZÀ-ÖØ-öø-ÿ]{0,25})$/g;
        //aqui comparamos el valor con el patron creado 
        const respuesta = value.match(nombresRX);
        //devuelve true o false
        return respuesta;
    }

    validMail(values){
        const correoRX = /^([\w.]+[^#$%&\/()='"!?¡]\w*-*)([@])(\w)+(\.[a-z]{2,3})$/g;
         //aqui comparamos el valor con el patron creado 
         const respuesta = value.match(correoRX);
         //devuelve true o false
         return respuesta;
    }

    valifform = (objeto) => {
        //tomar los valores del objeto, se convierte en un arreglo 
        const valores = Object.values(objeto);
        //si hay match da true si no false 
        //recorremos el arreglo 
        let resp = valores.findIndex(e => e === false); //si no encuentra un false devuelve -1, si lo encuentra devuleve la posicion del elemento
        return resp;

    }

    //PATRON REGULAR PARA CELULARES 
}
export {validateString, validateTel, Validate};