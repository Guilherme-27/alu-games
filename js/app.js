function alterarStatus(id) {
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');
    if (confirm('Você tem certeza?') == true) {
        if (botao.classList.contains('dashboard__item__button--return')) {
            botao.classList.remove('dashboard__item__button--return');
            imagem.classList.remove('dashboard__item__img--rented');
            //innerHTML também pode ser substituído por .textContent
            botao.innerHTML = 'Alugar';
        } else {
            botao.classList.add('dashboard__item__button--return');
            imagem.classList.add('dashboard__item__img--rented');
            //innerHTML também pode ser substituído por .textContent
            botao.innerHTML = 'Devolver';
        }
    }
}