// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
       let nombre = document.getElementById('nombreAmigo').value;
          if (nombre.trim() === "") {
          alert("Por favor, inserte un nombre.");
          return; // Salir de la función si está vacío
        }
      amigos.push(nombre);
      document.getElementById('nombreAmigo').value = "";
      console.log(amigos);
}

function mostrarAmigos() {
    
    let lista = document.getElementById('listaAmigos');
       lista.innerHTML = "";
    
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement('li');
        li.textContent = amigos[i]; 
        lista.appendChild(li);
    }
}
