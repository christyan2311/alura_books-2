let Livros = []
const endpointDaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'
getBuscarLivrosDaAPI()
const elementoParaInserirLivros = document.getElementById('livros');

async function getBuscarLivrosDaAPI() {
    const res = await fetch(endpointDaAPI)
    Livros = await res.json()
    console.table(Livros)
    exibirLivrosNaTela(Livros)

}

function exibirLivrosNaTela(listaDeLivros) {
    listaDeLivros.forEach(livro => {
        elementoParaInserirLivros.innerHTML = ''
        const livroHTML = `<div class="livro">
            <img class="livro__imagem" src="${livro.imagem}" alt="${livro.alt}">
            <h2 class="livro__titulo">${livro.titulo}</h2>
            <p class="livro__descricao">${livro.autor}</p>
            <p class="livro__preco">R$ ${livro.preco.toFixed(2)}</p>
            <a class="btn btn--preencher" href="${livro.link}" target="_blank">Comprar</a>
        </div>`
        elementoParaInserirLivros.innerHTML += livroHTML
    })
}