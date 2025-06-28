function aplicarDesconto(livros) {
    const desconto = 0.3; // 30% de desconto
    livrosComDesconto = livros.map(livro => {
        return {
            ...livro,
            preco: livro.preco - (livro.preco * desconto)
        };
    });
    return livrosComDesconto;
}