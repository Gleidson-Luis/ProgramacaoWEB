// Banco de dados de produtos
const produtos = [
    {
        id: 1,
        nome: "Camiseta Básica Preta",
        preco: 49.90,
        descricao: "Camiseta básica de algodão premium, confortável e versátil",
        icon: "👕"
    },
    {
        id: 2,
        nome: "Camiseta Estampada Colorida",
        preco: 59.90,
        descricao: "Design exclusivo com cores vibrantes, perfeita para o dia a dia",
        icon: "🎨"
    },
    {
        id: 3,
        nome: "Camiseta Esportiva",
        preco: 69.90,
        descricao: "Tecido respirável ideal para atividades físicas e esportes",
        icon: "⚽"
    },
    {
        id: 4,
        nome: "Camiseta Vintage",
        preco: 79.90,
        descricao: "Estilo retrô com lavagem especial, muito confortável",
        icon: "🕶️"
    },
    {
        id: 5,
        nome: "Camiseta Listrada",
        preco: 54.90,
        descricao: "Clássica camiseta listrada, elegante e atemporal",
        icon: "🦓"
    },
    {
        id: 6,
        nome: "Camiseta Rock Band",
        preco: 64.90,
        descricao: "Para amantes de música, com estampas de bandas icônicas",
        icon: "🎸"
    },
    {
        id: 7,
        nome: "Camiseta Gamer",
        preco: 59.90,
        descricao: "Design geek para gamers de plantão, 100% algodão",
        icon: "🎮"
    },
    {
        id: 8,
        nome: "Camiseta Natureza",
        preco: 52.90,
        descricao: "Estampa com elementos da natureza, ecologicamente correta",
        icon: "🌿"
    }
];

// Estado do carrinho
let carrinho = 0;
let produtosFiltrados = [...produtos];

// Elementos do DOM
const produtosGrid = document.getElementById('produtosGrid');
const campoBusca = document.getElementById('campoBusca');
const contadorCarrinho = document.getElementById('contadorCarrinho');
const mensagemAdd = document.getElementById('mensagemAdd');
const btnLimpar = document.getElementById('btnLimpar');
const textoCarrinho = document.getElementById('textoCarrinho');

// Renderizar produtos
function renderizarProdutos(listaProdutos) {
    produtosGrid.innerHTML = '';
    
    if (listaProdutos.length === 0) {
        produtosGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: #999; font-size: 1.2rem;">Nenhum produto encontrado 😢</p>';
        return;
    }

    listaProdutos.forEach(produto => {
        const card = document.createElement('div');
        card.className = 'produto-card';
        card.innerHTML = `
            <div class="produto-icon">${produto.icon}</div>
            <h3>${produto.nome}</h3>
            <div class="produto-preco">R$ ${produto.preco.toFixed(2)}</div>
            <p class="produto-descricao">${produto.descricao}</p>
            <button class="btn-adicionar" onclick="adicionarAoCarrinho(${produto.id})">
                Adicionar ao Carrinho
            </button>
        `;
        produtosGrid.appendChild(card);
    });
}

// Busca em tempo real
campoBusca.addEventListener('input', function(e) {
    const termoBusca = e.target.value.toLowerCase().trim();
    
    produtosFiltrados = produtos.filter(produto => 
        produto.nome.toLowerCase().includes(termoBusca) ||
        produto.descricao.toLowerCase().includes(termoBusca)
    );
    
    renderizarProdutos(produtosFiltrados);
});

// Adicionar ao carrinho
function adicionarAoCarrinho(id) {
    carrinho++;
    contadorCarrinho.textContent = carrinho;
    
    // Mostrar mensagem
    mensagemAdd.style.display = 'block';
    setTimeout(() => {
        mensagemAdd.style.display = 'none';
    }, 2000);
    
    // Atualizar texto do carrinho
    atualizarTextoCarrinho();
}

// Atualizar texto do carrinho
function atualizarTextoCarrinho() {
    if (carrinho === 0) {
        textoCarrinho.textContent = 'Seu carrinho está vazio';
        textoCarrinho.className = 'mensagem-vazio';
    } else if (carrinho === 1) {
        textoCarrinho.textContent = '1 item no carrinho';
        textoCarrinho.className = '';
    } else {
        textoCarrinho.textContent = `${carrinho} itens no carrinho`;
        textoCarrinho.className = '';
    }
}

// Limpar carrinho
btnLimpar.addEventListener('click', function() {
    if (carrinho === 0) {
        alert('O carrinho já está vazio!');
        return;
    }
    
    if (confirm(`Tem certeza que deseja remover ${carrinho} ${carrinho === 1 ? 'item' : 'itens'} do carrinho?`)) {
        carrinho = 0;
        contadorCarrinho.textContent = '0';
        atualizarTextoCarrinho();
        alert('Carrinho limpo com sucesso!');
    }
});

// Inicializar
renderizarProdutos(produtos);