
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
        const nombresRX = /^([a-zA-ZÀ-ÖØ-öø-ÿ]{3,25})([\s]?)([a-zA-ZÀ-ÖØ-öø-ÿ]{0,25}){1,3}$/g;
        //aqui comparamos el valor con el patron creado 
        const respuesta = values.match(nombresRX) ? true : false;
        //devuelve true o false
        return respuesta;
    }

    validMail(values){
        const correoRX = /^([\w.]+[^#$%&\/()='"!?¡]\w*-*)([@])(\w)+(\.[a-z]{2,3}){1,2}$/g;
         //aqui comparamos el valor con el patron creado 
         const respuesta = values.match(correoRX)? true : false;
         //devuelve true o false
         return respuesta;
    }

    validTel(values){
        const TelRX = /^(((300|301|302|303|304|324|305|310|311|312|313|314|320|321|322|323|315|316|317|318|319|350|351)[0-9]{7}))$/g;
        
        //aqui comparamos el valor con el patron creado 
        const respuesta = values.match(TelRX) ? true : false;
        //devuelve true o false
        return respuesta;
    }

    validText(values){
        const textRX =/^([a-zA-Z\dñÑáéíóúÁÉÍÓÚ^\d.,-_]+\s){20,50}$/g;
        //aqui comparamos el valor con el patron creado 
        const respuesta = values.match(textRX) ? true : false;
        //devuelve true o false
        return respuesta;
    }

    validform = (objeto) => {
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