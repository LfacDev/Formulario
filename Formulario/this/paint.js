//pintar en el html el template 

//seleccionar el card de estudiante 
const cardEstudiante = document.querySelector("#cardsEstudiantes");

const addStudent=(name,lastName, mail, tele, msn) =>{
    //creamos un objeto
    let person ={
        pname: name,
        plastName : lastName,
        pmail: mail,
        ptele:tele,
        pmsn: msn
    };

    //esto se pasara al modal 
    let text = `¿Esta seguro ${person.pname} ${person.plastName} de enviar la peticion??`;

    modalAlert(text, "aceptar", person);
}

function modalAlert(cad, tipo, persona){
    //crear elementos 
    const alerta= document.createElement('div');
    const texto = document.createElement("p");
    const btnCerrar = document.createElement("input");

    //generar atributos 
    alerta.setAttribute("id", "alerta" )
    alerta.setAttribute("class", "alerta" )
    texto.setAttribute("class", "textAlerta");
    texto.innerHTML= `<strong>${cad}</strong>;`

    //atributos al boton 
    btnCerrar.setAttribute("type", "button");
    btnCerrar.setAttribute("class", "btnAlerta");
    btnCerrar.setAttribute("value", "cerrar");

    //agregar el boton y el texto dentro de alerta 
    alerta.appendChild(texto);
    alerta.appendChild(btnCerrar);

    if(tipo==="aceptar"){
        const btnEnviar = document.createElement("input");

        //atributos al boton 
        btnEnviar.setAttribute("type", "button");
        btnEnviar.setAttribute("class", "btnAlerta");
        btnEnviar.setAttribute("value", "Enviar");
        alerta.appendChild(btnEnviar);
        //agregar el alwrta dentro del body
        document.body.appendChild(alerta);
        //evento del boton enviar
        btnEnviar.onclick=function(){
            paintCard(persona, "estudiante");
            //removemos cuando ya le haya dado aceptar
            document.getElementById("alerta").remove();
        }
    }else{
        //agregar el alwrta dentro del body
        document.body.appendChild(alerta);
    }

    //removcer la alerta
    btnCerrar.onclick=function(){

        document.getElementById("alerta").remove();
    }

}

//paint Card
//datos, tipo= estudiante, profesor
const paintCard = (datos, tipo) =>{
    //ponerlo en mayusculas
    tipo = tipo.toUpperCase();
    //crear un fragmento (mini Dom)
    const fragmento = document.createDocumentFragment();
    //solo se quiere el contenido del template no toda la etiqueta
    const tempEstudiante = document.getElementById("templateEstudiante").content;  
    
    if(tipo === "ESTUDIANTE"){
        //se colnara temEstudiante
        let tempTemplate = tempEstudiante.cloneNode(true);
        tempTemplate.querySelector('.title-card').innerHTML = 'DATOS DEL PQR <hr>';
        tempTemplate.querySelector('.data-card').innerHTML = `NOMBRES Y APELLIDOS: ${datos.pname} ${datos.plastName}`;
        tempTemplate.querySelector('.text-mail').innerHTML = `CORREO ELECTRONICO: ${datos.pmail} `;
        tempTemplate.querySelector('.text-telefono').innerHTML = `TELEFONO: ${datos.ptele} `;
        tempTemplate.querySelector('.text-msn').innerHTML = `MENSAJE: ${datos.pmsn} `;
        
        //agregar el tempTemplate al fragmento 
        fragmento.appendChild(tempTemplate);
    }

    //ahora haremos visible el template
    cardEstudiante.appendChild(fragmento);
    
}


export {addStudent,modalAlert};