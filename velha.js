
let jogador = null;
let jogadorSelecionado = document.getElementById('jogador-selecionado')

mudarJogador ('X')

function escolherQuadrado(id){
  
  let quadrado = document.getElementById(id);

  quadrado.innerHTML = jogador;
  quadrado.style.color = '#000';
   if (quadrado.innerHTML !== '*'){
   	return;
   }

   if (jogador === 'X'){
   	 jogador = 'O';
   } else {
   	 jogador = 'X'
   }
   mudarJogador(jogador);
}

//função para receber o valor da label "jogador", e alterar para o oposto
function mudarJogador(valor){
  jogador = valor;
  jogadorSelecionado.innerHTML = jogador; 
}