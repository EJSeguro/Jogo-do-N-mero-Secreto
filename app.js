let listaDeNumeros = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Jogo do Número Secreto';

//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = 'Escolha um número entre 1 e 10';
exibirTextoInicial();

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirTextoInicial(){
    exibirTextoNaTela('h1', 'Jogo do Número Secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

function verificarChute() {
let chute = document.querySelector('input').value;
console.log(chute);

if(chute == numeroSecreto){
    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
    exibirTextoNaTela('h1', 'Acertou!');
    exibirTextoNaTela('p', `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!!!`);
    document.getElementById('reiniciar').removeAttribute('disabled');
} else{
    if(chute < numeroSecreto){
        exibirTextoNaTela('p', 'O número secreto é maior!');
    } else{
        exibirTextoNaTela('p', 'O número secreto é menor!');
    }
    tentativas++;
    limparCampo();
}
}

function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random()*numeroLimite+1);
    let qtdDeElementos = listaDeNumeros.length;

    if(qtdDeElementos == numeroLimite){
        listaDeNumeros = [];
    }
    if(listaDeNumeros.includes(numeroEscolhido)){ //verificar se o valor exite na lista.
        return gerarNumeroAleatorio();
    } else{
        listaDeNumeros.push(numeroEscolhido); //inclui na lista, sempre ao final.
        return numeroEscolhido;
    } 
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    console.log('clicou');
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirTextoInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true);
    
}