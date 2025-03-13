document.addEventListener('DOMContentLoaded', function() {
    let amigos = [];

    // Función para agregar un amigo
    function agregarAmigo() {
        let nombre = document.getElementById('nombreAmigo').value;
        if (nombre.trim() === "") {
            alert("Por favor, inserte un nombre.");
            return; // Salir de la función si está vacío
        }
        amigos.push(nombre);
        document.getElementById('nombreAmigo').value = "";
        mostrarAmigos();
    }

    // Función para mostrar los amigos en la lista
    function mostrarAmigos() {
        let lista = document.getElementById('listaAmigos');
        lista.innerHTML = "";  // Limpiar la lista antes de agregar nuevos elementos
        for (let i = 0; i < amigos.length; i++) {
            let li = document.createElement('li');
            li.textContent = amigos[i];
            lista.appendChild(li);
        }
    }

    // Función para sortear un amigo secreto
    function sortearAmigo() {
        if (amigos.length === 0) {
            alert("No hay amigos para sortear. Por favor, añade algunos.");
            return;
        }

        let indiceAleatorio = Math.floor(Math.random() * amigos.length);
        let amigoSorteado = amigos[indiceAleatorio];
        document.getElementById('resultado').innerHTML = `El amigo secreto es: ${amigoSorteado}`;
    }

    // Asignar los eventos a los botones
    document.querySelector('.button-add').addEventListener('click', agregarAmigo);
    document.querySelector('.button-draw').addEventListener('click', sortearAmigo);
});
