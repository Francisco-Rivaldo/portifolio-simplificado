/*
Objetivo 1 - quando o usuario clicar no botão de monstrar mais deve abrir os projetos que estão escondidos no hmtl

        Passo 1 - pegar o botão mostrar mais no JS para poder verificar quando o usuario clicar em cima dele.

        Passo 2 - Indentificar o clique no botão.

        Passo 3 - adicionar a classe "ativo" nos projetos escondidos.

Objetivo 2 - Esconder o botão de mostrar mais.
        Passo 1 - pegar o botão e esconder ele
*/

/////////////////////////////////////////////////////////////////////////

//Objetivo 1 - quando o usuario clicar no botão de monstrar mais deve abrir os projetos que estão escondidos no hmtl

//Passo 1 - pegar o botão mostrar mais no JS para poder verificar quando o usuario clicar em cima dele.


const botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos');

const projetosInativos = document.querySelectorAll('.projeto:not(.ativo) ') //metodo para selecionar os não ativos no css.

botaoMostrarProjetos.addEventListener('click', () => {
//Passo 3 - adicionar a classe "ativo" nos projetos escondidos.
        mostrarMaisProjetos();

//Objetivo 2 - Esconder o botão de mostrar mais.
//Passo 1 - pegar o botão e esconder ele.

        esconderBotao();

})
function esconderBotao() {
        botaoMostrarProjetos.classList.add('remover');
}

function mostrarMaisProjetos() {
        projetosInativos.forEach(projetoInativo => {
                projetoInativo.classList.add('ativo');
        });
}

