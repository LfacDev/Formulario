
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

export {validateString, validateTel};