var playe01 = {
  foto: "images/OIP.jpg",
  nome: "Player 1",
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0,
};
var player02 = {
  foto: "images/OIP.jpg",
  nome: "Player 2",
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0,
};

function calculaPontos(jogador) {
  var pontos = jogador.vitorias * 3 + jogador.empates;
  return pontos;
}

playe01.pontos = calculaPontos(playe01);
player02.pontos = calculaPontos(player02);

var jogadores = [playe01, player02];

function exibeJogadoresNaTela() {
  var tabelaDeJogadores = document.getElementById("tabelaJogadores");
  var elemento = "";
  for (var i = 0; i < jogadores.length; i++) {
    elemento += "<tr>";
    elemento +=
      "<td><img src=" + jogadores[i].foto + "  class='fotoPlayers'></td>";
    elemento += "<td>" + jogadores[i].nome + "</td>";
    elemento += "<td>" + jogadores[i].vitorias + "</td>";
    elemento += "<td>" + jogadores[i].empates + "</td>";
    elemento += "<td>" + jogadores[i].derrotas + "</td>";
    elemento += "<td>" + jogadores[i].pontos + "</td>";
    elemento +=
      "<td><button onClick='adicionarVitoria(" + i + ")'>Vitoria</button></td>";
    elemento +=
      "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>";
    elemento +=
      "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td>";
    elemento +=
      "<td><button onClick='zerarTabela(" + i + ")'>zerar</button></td>";
    elemento += "</tr>";
    console.log(elemento);
    tabelaDeJogadores.innerHTML = elemento;
  }
}

function adicionarVitoria(i) {
  var jogador = jogadores[i];
  jogador.vitorias++;
  jogador.pontos = calculaPontos(jogador);
  exibeJogadoresNaTela(jogadores);
}
function adicionarEmpate(i) {
  var jogador = jogadores[i];
  jogador.empates++;
  jogador.pontos = calculaPontos(jogador);
  exibeJogadoresNaTela(jogadores);
}
function adicionarDerrota(i) {
  var jogador = jogadores[i];
  jogador.derrotas++;
  jogador.pontos = calculaPontos(jogador);
  exibeJogadoresNaTela(jogadores);
}

function zerarTabela(i) {
  var jogador = jogadores[i];
  jogador.vitorias = 0;
  jogador.empates = 0;
  jogador.derrotas = 0;
  jogador.pontos = 0;
  exibeJogadoresNaTela(jogadores);
}

function adicionarPlayer() {
  var nomeDoPlayer = document.getElementById("nomeDoPlayer").value;
  var adicionarPlayer = {
    foto: "images/OIP.jpg",
    nome: nomeDoPlayer,
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0,
  };

  jogadores.push(adicionarPlayer);
  exibeJogadoresNaTela(jogadores);
}
