let amigos = [];

function adicionarAmigo() {
  let nomeAmigo = document.getElementById("amigo").value.trim();
  if (nomeAmigo == "") {
    alert("Por favor, insira um nome!");
    return;
  }
  amigos.push(nomeAmigo);
  limparCampo();
  atualizarLista();
}

function atualizarLista() {
  let lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";

  for (i = 0; i < amigos.length; i++) {
    let li = document.createElement("li");
    li.textContent = amigos[i];
    lista.appendChild(li);
  }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("A lista de amigos está vazia. Adicione pelo menos um nome para sortear.");
        return;
    }
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];

    console.log(amigoSorteado);
     document.getElementById("resultado").innerHTML = `🎉 Amigo sorteado: <strong>${amigoSorteado}</strong>`;
    
}

function limparCampo() {
  let input = document.getElementById("amigo");
  input.value = "";
}
