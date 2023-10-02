//Adicionando e removendo classe "selecionado"

const botoes = document.querySelectorAll('.botao');

const personagens = document.querySelectorAll(".personagem");

botoes.forEach((botao, i)=> {
    botao.addEventListener("click", () => {

        //adicionando e removendo classe do botão
        desselecionarBotao();
        botao.classList.add("selecionado");

        //adicionado e removendo classe do personagem
        desselecionarPersonagem();
        personagens[i].classList.add("selecionado");
    });
});

function desselecionarPersonagem() {
    const personagemSelecionado = document.querySelector(".personagem.selecionado");
    personagemSelecionado.classList.remove("selecionado");
}

function desselecionarBotao() {
    const botaoSelecionado = document.querySelector(".botao.selecionado");
    botaoSelecionado.classList.remove("selecionado");
}
