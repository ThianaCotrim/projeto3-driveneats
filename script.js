
let nomePrato = "";
let nomeBebida = "";
let nomeSobremesa = "";


let valorPrato = "";
let valorBebida = "";
let valorSobremesa = "";

function selecionarOpcao(opcaoClicada) {
    const opcaoClicadaAnteriormente = document.querySelector('.opcoes .selecionado');
    if (opcaoClicadaAnteriormente !== null) {
        opcaoClicadaAnteriormente.classList.remove('selecionado');
    }
    const botao = document.querySelector(opcaoClicada);
    botao.classList.add('selecionado');
    nomePrato = botao.querySelector("h3").innerHTML;
    valorPrato = Number(botao.querySelector("h5").innerHTML.replace("R$","").replace(",","."));
}


function selecionarOpcaoRefri(opcaoClicada) {
    const opcaoClicadaAnteriormente = document.querySelector('.opcoes-refri .selecionado');
    if (opcaoClicadaAnteriormente !== null) {
        opcaoClicadaAnteriormente.classList.remove('selecionado');
    }
    const botao = document.querySelector(opcaoClicada)
    botao.classList.add('selecionado');
    nomeBebida = botao.querySelector("h3").innerHTML;
    valorBebida = Number(botao.querySelector("h5").innerHTML.replace("R$","").replace(",","."));
}


function selecionarOpcaoSobre(opcaoClicada) {
    const opcaoClicadaAnteriormente = document.querySelector('.opcoes-sobremesa .selecionado');
    if (opcaoClicadaAnteriormente !== null) {
        opcaoClicadaAnteriormente.classList.remove('selecionado');
    }
    const botao = document.querySelector(opcaoClicada)
    botao.classList.add('selecionado')
    nomeSobremesa = botao.querySelector("h3").innerHTML;
    valorSobremesa = Number(botao.querySelector("h5").innerHTML.replace("R$","").replace(",","."));

    if (document.querySelectorAll('.selecionado').length === 3) {

        const mudar = document.querySelector('.cinza')
        mudar.innerHTML = "Fechar Pedido"
        mudar.classList.add('verde')
        mudar.removeAttribute("disabled");
    }

}

function whatsapp() {

    let total = (valorPrato + valorBebida + valorSobremesa).toFixed (2);
    
    let msg = encodeURIComponent(`Olá, gostaria de fazer o pedido:
- Prato: ${nomePrato}
- Bebida: ${nomeBebida}
- Sobremesa: ${nomeSobremesa}
Total: R$ ${total}`)

    window.open(`https://wa.me/55999999999?text=${msg}`,'_blank');

}
