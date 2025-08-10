// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//Declaración de variables
let amigos = [];
let amigoSeleccionado = "";
let nuevoAmigo = "";
let numeroSeleccionado = 0;
var nuevoElemento = "";
let texto = "";

function agregarAmigo(){
    //Se obtiene el nombre ingresado por el usuario
    nuevoAmigo = document.getElementById("amigo").value;
    
    //Se comprueba y alerta por si se ingresó un vacio
    if(nuevoAmigo==""){                                                 
        alert("Por favor, inserte un nombre");
    
    } else {
        //Se agrega el nuevo amigo al final de la lista "amigos"
        amigos.push(nuevoAmigo);
        
        //Se limpia la caja de texto
        document.getElementById("amigo").value = "";                    
        actualizarObjetoLista();
    }
}

function actualizarObjetoLista(){
    //Obtener una referencia a la lista
    let lista = document.getElementById("listaAmigos");           
    
    //Limpiando la lista
    lista.innerHTML = "";                                         
    
    //Se recorre la lista de amigos
    for(var i = 0; i<amigos.length; i++){                               
        //Se llama a la función para crear un nuevo elemento
        nuevoElemento = generarNuevoElemento(amigos[i],"li");

        //Se agrega el nombre desde "amigos" a "lista"
        lista.appendChild(nuevoElemento); 
    }                              
}

function generarNuevoElemento(elementoNuevo,tipoElemento){           //Entrega un nuevo elemento para ser utilizado
    //Crear un nuevo lemento segun el tipo ingresado
    nuevoElemento = document.createElement(tipoElemento);                  
    
    //Crear el contenido del tipo de elemento
    texto = document.createTextNode(elementoNuevo);

    //Se actualiza el texto node del nuevo elemento
    nuevoElemento.appendChild(texto);                 
    return nuevoElemento;                           
}

function sortearAmigo(){
    //Se comprueba si hay datos en la lista de amigos
    if(amigos.length!=0){
        //Se obtiene el número aleatorio según el largo de la lista de amigos
        numeroSeleccionado = numeroAleatorio(amigos.length);

        //Se selecciona el amigo secreto en base al número aleatorio obtenido
        amigoSeleccionado = amigos[numeroSeleccionado-1];
        
        //Se limpia la lista de amigos
        listaAmigos.innerHTML = "";
        
        //Selecciona la lista <ul> "resultado"
        var resultado = document.getElementById("resultado");
        
        nuevoElemento = generarNuevoElemento(`El amigo secreto sorteado es: ${amigoSeleccionado}`,"li");
        resultado.appendChild(nuevoElemento);    
        
    } else {
        alert("No hay una lista de amigos disponible");
    }
}

function numeroAleatorio(numeroMaximo){
    return Math.floor(Math.random()*numeroMaximo)+1;
}
