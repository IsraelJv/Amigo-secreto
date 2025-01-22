// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

const lista = document.getElementById("listaAmigos");

function agregarAmigo() {

    const input = document.getElementById("amigo");
    const nombreAmigo = input.value;

    if (nombreAmigo) {

        const elemento = document.createElement("li");
        elemento.textContent = nombreAmigo;

        lista.appendChild(elemento);

        input.value = "";
        
    } else {
        alert("No se ingresó el nombre de un amigo.");
    }
}

function sortearAmigo() {

    const amigos = lista.getElementsByTagName("li");

    if(amigos.length === 0) {
        alert("No has agregado nombres de amigos para hacer el sorteo.")
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSeleccionado = amigos[indiceAleatorio].textContent;

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>${amigoSeleccionado}</li>`;

    while (lista.firstChild)
        lista.removeChild(lista.firstChild);

}