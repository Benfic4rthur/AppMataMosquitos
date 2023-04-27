//altura e larguda da pagina
let altura = 0;
let largura = 0;
let vidas = 1;
let tempo = 15;
let criaMosquitoTempo = 1500;

let nivel = window.location.search;
nivel = nivel.replace("?", "");

if (nivel == "facil") {
  criaMosquitoTempo = 1500;
} else if (nivel == "normal") {
  criaMosquitoTempo = 1250;
} else if (nivel == "dificil") {
  criaMosquitoTempo = 1000;
} else if (nivel == "chucknorris") {
  criaMosquitoTempo = 500;
  tempo = 10;
} else if(nivel == "entaotueobonzao"){
  criaMosquitoTempo = 100;
  tempo = 30;
}
//criando cronometro
let cronometro = setInterval(function () {
  tempo -= 1;
  if (tempo < 0) {
    clearInterval(cronometro);
    clearInterval(criaMosquito);
    window.location.href = "vitoria.html";
  } else {
    document.getElementById("cronometro").innerHTML = tempo;
  }
}, 1000);

function ajustaTamanhoPalcoJogo() {
  altura = window.innerHeight;
  largura = window.innerWidth;
  console.log("ALTURA: " + altura + " LARGURA: " + largura);
}
ajustaTamanhoPalcoJogo();

//posição aleatoria do mosquito
/*let vidas = 3;
function posicaoRandomica() {
  // Remover mosquito anterior caso exista e trocar a imagem do coração com switch
  if (document.getElementById('mosquito')) {
    document.getElementById('mosquito').remove();
    switch (vidas) {
      case 3:
        document.getElementById('v1').src = "imagens/coracao_vazio.png";
        vidas = 2;
        break;
      case 2:
        document.getElementById('v2').src = "imagens/coracao_vazio.png";
        vidas = 1;
        break;
      case 1:
        document.getElementById('v3').src = "imagens/coracao_vazio.png";
        vidas = 0;
        break;
      default:
        //atualiza pagina
        break;
    }
  }*/
//posição aleatoria do mosquito

function posicaoRandomica() {
  // Remover mosquito anterior caso exista com IF
  if (document.getElementById("mosquito")) {
    document.getElementById("mosquito").remove();
    if (vidas > 3) {
      window.location.href = "fim_de_jogo.html";
    } else {
      document.getElementById("v" + vidas).src = "imagens/coracao_vazio.png";
      vidas++;
    }
  }
  let posicaox = Math.floor(Math.random() * largura) - 90;
  let posicaoy = Math.floor(Math.random() * altura) - 90;
  //mantendo o mosquito dentro da tela
  posicaox = posicaox < 0 ? 0 : posicaox;
  posicaoy = posicaoy < 0 ? 0 : posicaoy;
  console.log(posicaox, posicaoy);
  //criar o elemento html randomico (mosquito)
  let mosquito = document.createElement("img");
  mosquito.src = "imagens/mosquito.png";
  mosquito.className = tamanhoAleatorio() + " " + direcaoAleatoria();
  mosquito.style.left = posicaox + "px";
  mosquito.style.top = posicaoy + "px";
  mosquito.style.position = "absolute";
  mosquito.id = "mosquito";
  mosquito.onclick = function () {
    this.remove();
  };
  document.body.appendChild(mosquito);
  tamanhoAleatorio();
}
//tamanho aleatorio do mosquito
function tamanhoAleatorio() {
  let classe = Math.floor(Math.random() * 3);
  switch (classe) {
    case 0:
      return "mosquito1";
    case 1:
      return "mosquito2";
    case 2:
      return "mosquito3";
  }
}
//direção aleatoria do mosquito
function direcaoAleatoria() {
  let classe = Math.floor(Math.random() * 2);
  switch (classe) {
    case 0:
      return "ladoA";
    case 1:
      return "ladoB";
  }
}
