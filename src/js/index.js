const btnAvancar = document.getElementById('btn-avancar');
const btnVoltar = document.getElementById('btn-voltar');
let cartaoAtual = 0;
const cartoes = document.querySelectorAll('.cartao');

 btnAvancar.addEventListener('click', function () {
    const ehUltimoCartao = cartaoAtual === cartoes.length - 1;
    if (ehUltimoCartao) return;

  esconderCartaoSelecionado();

  cartaoAtual++;
  mostrarCartao();
});

btnVoltar.addEventListener('click', function(){
    const ehPrimeirCartao = (cartaoAtual === 0)
    if( ehPrimeirCartao) return ;

    esconderCartaoSelecionado();

    cartaoAtual--;
    mostrarCartao();

});

function esconderCartaoSelecionado(){
    const cartaoSelecionado = document.querySelector('.selecionado');
    cartaoSelecionado.classList.remove('selecionado')
}
function mostrarCartao(){
    cartoes[cartaoAtual].classList.add('selecionado');
}