var conteiner = document.getElementById("conteiner");


function bustacarTodos() {
    let produtoA = {
        nome: 'PizzaA',
        preco: 30.5
    }
    
    let produtoB = {
        nome: 'pizzaB',
        preco: 40.5
    }
    
    let produtoC = {
        nome: 'PizzaC',
        preco: 55.55
    }
    
    let produtos = [produtoA, produtoB, produtoC];
    
    for (let index = 0; index < produtos.length; index++) {
        const produto = produtos[index];
        
        let preçoFormatado = new Intl.NumberFormat('pt-BR',{style: 'currency', currency:'BRL'}).format(produto.preco)
        let card = `
        <div class="card">
            <img src="img/receitas-de-massa-de-pizza.jpg" alt="foto">
            <h3>${produto.nome}</h3>
            <p>${preçoFormatado}</p>
            <button>Pedir</button>
        </div>`;

        conteiner.innerHTML += card;
    }
}
bustacarTodos()