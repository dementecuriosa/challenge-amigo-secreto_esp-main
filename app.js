// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//modificamos el titulo
let titulo = document.querySelector(`h1`);
titulo.innerHTML="Juego del amigo secreto"

//modificamos el subtitulo

let parrafo =document.querySelector(`h2`);
parrafo.innerHTML= "ingrese el nombre de su amigo"

//crearemos un array
let amigos = [ ];

//creamos la función agregarAmigo()

function agregarAmigo(){
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();
    console.log(amigos);
    if (nombre === "") {
        alert("error, por favor inserte un nombre");
        return;
    }

// Validar si el nombre contiene solo letras
    if (!isNaN(nombre)) {
        alert("Por favor ingrese un nombre válido (solo letras)");
        return;
    }

// no quiero que los nombres se repitan 
if (amigos.includes(nombre)) {
    alert("Ese nombre ya fue agregado");
    return;
}
    amigos.push(nombre);
    mostrarAmigos(); // Actualizar la lista en la página
}

function mostrarAmigos() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = ""; // Limpiar la lista antes de mostrarla

    for (let i = 0; i < amigos.length; i++) {
        let amigo = amigos[i];
        let li = document.createElement("li");
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    }
}

// creamos la funcion sorteo

function sortearAmigo() {
    if (amigos.length== 0){
    alert("no hay nombres ingresados")
    }
    let numeroGenerado = Math.floor(Math.random() * amigos.length) ;
    let amigoSorteado = amigos[numeroGenerado];

      console.log (numeroGenerado);


    // resultado
    document.getElementById("resultado").innerHTML = `<li> el amigo secreto es: ${amigoSorteado}</li>`;
}

