// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//Declaración de variables
let amigos = [];
let amigoSeleccionado = "";
let nuevoAmigo = "";
let numeroSeleccionado = 0;

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
    let listaAmigos = document.getElementById("listaAmigos");           
    
    //Limpiando la lista
    listaAmigos.innerHTML = "";                                         
    
    //Se recorre la lista de amigos
    for(var i = 0; i<amigos.length; i++){                               
        //Se llama a la función para agregar los nombre desde "amigos" a "listaAmigos"
        agregarAmigoALaLista(amigos[i]); 
    }                              
}

function agregarAmigoALaLista(elementoNuevo){                           //Agrega un nuevo elemento al Objeto lista
    //Crear un nuevo lemento <li>
    var nuevoElemento = document.createElement("li");                  
    
    //Crear el contenido del <li>
    var texto = document.createTextNode(elementoNuevo);                 
    nuevoElemento.appendChild(texto);
    
    //Agregar el <li> a la lista
    listaAmigos.appendChild(nuevoElemento);                             
}

function sortearAmigo(){
    //Se comprueba si hay datos en la lista de amigos
    if(amigos.length!=0){
        //Se obtiene el número aleatorio según el largo de la lista de amigos
        numeroSeleccionado = numeroAleatorio(amigos.length);

        //Se selecciona el amigo secreto en base al número aleatorio obtenido
        amigoSeleccionado = amigos[numeroSeleccionado-1];
        
        //Se limpia la lista de amigos
        //listaAmigos.innerHTML = "";
        
        //Selecciona la lista <ul> "resultado"
        var resultado = document.getElementById("resultado");
        
        //Crea el <li>    
        var nuevoElemento = document.createElement("li");
        
        //Asigna el texto al nuevo elemento
        nuevoElemento.innerHTML = `El amigo secreto sorteado es: ${amigoSeleccionado}`;
        
        //Se agrega el elemento a la lista
        resultado.appendChild(nuevoElemento);    
        
    } else {
        alert("No hay una lista de amigos disponible");
    }
}

function numeroAleatorio(numeroMaximo){
    return Math.floor(Math.random()*numeroMaximo)+1;
}