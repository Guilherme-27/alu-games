function alterarStatus(numeroJogo) {
    botoes = document.getElementsByClassName('dashboard__item__button');
    textoBotao = botoes[numeroJogo-1].innerHTML;
    if (textoBotao == 'Alugar') {
        botoes[numeroJogo-1].innerHTML = 'Devolver';
        botoes[numeroJogo-1].classList.add('dashboard__item__button--return');
    } else {
        botoes[numeroJogo-1].innerHTML = 'Alugar';
        botoes[numeroJogo-1].classList.remove('dashboard__item__button--return');
    }
}