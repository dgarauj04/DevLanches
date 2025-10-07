lucide.createIcons();

const cardapio = {
    hamburgers: [
        { 
            id: 1, 
            nome: "Hambúrguer Clássico", 
            descricao: "Pão, carne, queijo, alface e tomate", 
            preco: 15.00,
            imagem: "./img/hamburguer/hamburguer-classico.png"
        },
        { 
            id: 2, 
            nome: "Cheese Bacon", 
            descricao: "Pão, carne, queijo, bacon e molho especial", 
            preco: 18.00,
            imagem: "./img/hamburguer/cheese-bacon.png"
        },
        { 
            id: 3, 
            nome: "Veggie Delight", 
            descricao: "Pão, hambúrguer vegetariano, salada e molho", 
            preco: 16.00,
            imagem: "./img/hamburguer/hamburguer-vegetariano.png"
        },
        { 
            id: 4, 
            nome: "Double Dev", 
            descricao: "2 carnes, queijo, bacon e molho barbecue", 
            preco: 22.00,
            imagem: "./img/hamburguer/double-dev.png"
        },
        { 
            id: 5, 
            nome: "Chicken Supreme", 
            descricao: "Frango empanado, alface e maionese especial", 
            preco: 17.00,
            imagem: "./img/hamburguer/chicken-supreme.png"
        }
    ],
    bebidas: [
        { 
            id: 6, 
            nome: "Refrigerante 350ml", 
            descricao: "Coca-Cola, Guaraná ou Fanta", 
            preco: 7.00,
            imagem: "./img/bebidas/refrigerante.webp"
        },
        { 
            id: 7, 
            nome: "Suco Natural 500ml", 
            descricao: "Laranja, limão ou maracujá", 
            preco: 8.00,
            imagem: "./img/bebidas/suco.png"
        },
        { 
            id: 8, 
            nome: "Água Mineral 500ml", 
            descricao: "Com ou sem gás", 
            preco: 4.00,
            imagem: "./img/bebidas/agua.jpeg"
        },
        { 
            id: 9, 
            nome: "Milkshake 400ml", 
            descricao: "Chocolate, morango ou baunilha", 
            preco: 12.00,
            imagem: "./img/bebidas/milkshake.png"
        },
        { 
            id: 10, 
            nome: "Café Expresso", 
            descricao: "Café premium com espuma cremosa", 
            preco: 5.00,
            imagem: "./img/bebidas/cafe.png"
        }
    ],
    salgados: [
        { 
            id: 11, 
            nome: "Coxinha", 
            descricao: "Frango desfiado com catupiry", 
            preco: 6.00,
            imagem: "./img/salgados/coxinha.jpg"
        },
        { 
            id: 12, 
            nome: "Pastel", 
            descricao: "Carne, queijo ou frango", 
            preco: 5.00,
            imagem: "./img/salgados/pastel.jpg"
        },
        { 
            id: 13, 
            nome: "Esfiha", 
            descricao: "Carne, queijo ou verdura", 
            preco: 4.00,
            imagem: "./img/salgados/esfiha.png"
        },
        { 
            id: 14, 
            nome: "Batata Frita", 
            descricao: "Porção individual com ketchup", 
            preco: 8.00,
            imagem: "./img/salgados/batata.jpg"
        },
        { 
            id: 15, 
            nome: "Bolinho de Queijo", 
            descricao: "Porção individual de Massa crocante com queijo derretido", 
            preco: 5.00,
            imagem: "./img/salgados/bolinho-queijo.jpg"
        }
    ],
    doces: [
        { 
            id: 16, 
            nome: "Sorvete", 
            descricao: "Casquinha com 2 bolas - chocolate ou morango", 
            preco: 10.00,
            imagem: "./img/doces/sorvete.png"
        },
        { 
            id: 17, 
            nome: "Brownie", 
            descricao: "Com nozes e calda de chocolate", 
            preco: 9.00,
            imagem: "./img/doces/brownie.png"
        },
        { 
            id: 18, 
            nome: "Pudim", 
            descricao: "Pudim de leite condensado tradicional", 
            preco: 8.00,
            imagem: "./img/doces/pudim.png"
        },
        { 
            id: 19, 
            nome: "Brigadeiro", 
            descricao: "Porção com 5 unidades", 
            preco: 6.00,
            imagem: "./img/doces/brigadeiro.jpg"
        },
        { 
            id: 20, 
            nome: "Torta de Limão", 
            descricao: "Fatia de torta de limão com merengue", 
            preco: 11.00,
            imagem: "./img/doces/torta.jpg"
        }
    ],
    promocoes: [
        { 
            id: 21, 
            nome: "Promo do Dia", 
            descricao: "Hambúrguer Clássico + Refrigerante 350ml", 
            preco: 18.00,
            precoOriginal: 22.00,
            imagem: "./img/promocoes/promo-dia.png",
            promocao: true
        },
        { 
            id: 22, 
            nome: "Combo Feliz", 
            descricao: "Hambúrguer + Batata Frita + Refrigerante", 
            preco: 25.00,
            precoOriginal: 30.00,
            imagem: "./img/promocoes/combo-feliz.png",
            promocao: true
        },
        { 
            id: 23, 
            nome: "Salgado & Doce", 
            descricao: "2 Salgados + 1 Doce à escolha", 
            preco: 15.00,
            precoOriginal: 18.00,
            imagem: "./img/promocoes/salgado-doce.png",
            promocao: true
        }
    ],
    combos: [
        { 
            id: 24, 
            nome: "Combo Dev Solo", 
            descricao: "1 Hambúrguer + 1 Bebida + 1 Salgado", 
            preco: 25.00,
            imagem: "./img/combos/combo-solo.png",
            combo: true
        },
        { 
            id: 25, 
            nome: "Combo Duo", 
            descricao: "2 Hambúrgueres + 2 Bebidas + 1 Batata Frita Grande", 
            preco: 45.00,
            imagem: "./img/combos/combo-duo.jpg",
            combo: true
        },
        { 
            id: 26, 
            nome: "Combo Família", 
            descricao: "4 Hambúrgueres + 4 Bebidas + 2 Salgados + 1 Doce", 
            preco: 80.00,
            imagem: "./img/combos/combo-family.jpg",
            combo: true
        },
        { 
            id: 27, 
            nome: "Combo Code Night", 
            descricao: "2 Hambúrgueres + 2 Bebidas + 1 Salgado + 1 Doce", 
            preco: 55.00,
            imagem: "./img/combos/combo-night.png",
            combo: true
        }
    ]
};

let estado = {
    carrinho: JSON.parse(localStorage.getItem('carrinhoDevLanches')) || [],
    cupomAplicado: false,
    desconto: 0
};

const elementos = {
    produtosContainer: document.getElementById('produtosContainer'),
    carrinhoModal: document.getElementById('carrinhoModal'),
    carrinhoBtn: document.getElementById('carrinhoBtn'),
    fecharCarrinho: document.getElementById('fecharCarrinho'),
    carrinhoItens: document.getElementById('carrinhoItens'),
    carrinhoContador: document.getElementById('carrinhoContador'),
    subtotal: document.getElementById('subtotal'),
    desconto: document.getElementById('desconto'),
    total: document.getElementById('total'),
    cupomInput: document.getElementById('cupomInput'),
    aplicarCupom: document.getElementById('aplicarCupom'),
    finalizarCompra: document.getElementById('finalizarCompra')
};

function inicializar() {
    renderizarProdutos('hamburgers');
    configurarEventListeners();
    atualizarCarrinho();
}

function configurarEventListeners() {
    document.querySelectorAll('.categoria-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const categoria = e.target.dataset.categoria;
            document.querySelectorAll('.categoria-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            renderizarProdutos(categoria);
        });
    });

    elementos.carrinhoBtn.addEventListener('click', () => abrirCarrinho());
    elementos.fecharCarrinho.addEventListener('click', () => fecharCarrinho());
    elementos.carrinhoModal.addEventListener('click', (e) => {
        if (e.target === elementos.carrinhoModal) fecharCarrinho();
    });

    elementos.aplicarCupom.addEventListener('click', aplicarCupomDesconto);
    elementos.finalizarCompra.addEventListener('click', finalizarPedidoWhatsApp);
}

function renderizarProdutos(categoria) {
    const produtos = cardapio[categoria];
    if (!produtos) return;

    elementos.produtosContainer.innerHTML = `
        <div class="categoria-produtos active">
            ${produtos.map(produto => criarCardProduto(produto)).join('')}
        </div>
    `;

    document.querySelectorAll('.quantidade-btn').forEach(btn => {
        btn.addEventListener('click', manipularQuantidade);
    });

    document.querySelectorAll('.btn-adicionar').forEach(btn => {
        btn.addEventListener('click', adicionarAoCarrinho);
    });
}

function criarCardProduto(produto) {
    const isPromocao = produto.promocao;
    const isCombo = produto.combo;
    
    return `
        <div class="card-produto ${isPromocao ? 'promocao' : ''}">
            ${isPromocao ? '<span class="badge-promocao">PROMO</span>' : ''}
            <div class="card-imagem">
                <img src="${produto.imagem}" alt="${produto.nome}" class="produto-imagem" />
            </div>

            <div class="card-conteudo">
                <h3>${produto.nome}</h3>
                <p class="descricao">${produto.descricao}</p>
                <div class="preco">
                    ${isPromocao ? `
                        <span class="preco-original">R$${produto.precoOriginal.toFixed(2)}</span>
                    ` : ''}
                    R$${produto.preco.toFixed(2)}
                </div>
                <div class="controles-quantidade">
                    <button class="quantidade-btn minus" data-id="${produto.id}">-</button>
                    <span class="quantidade" data-id="${produto.id}">1</span>
                    <button class="quantidade-btn plus" data-id="${produto.id}">+</button>
                </div>
                <button class="btn-adicionar" data-id="${produto.id}">
                    ${isCombo ? 'Adicionar Combo' : 'Adicionar ao Carrinho'}
                </button>
            </div>
        </div>
    `;
}


function manipularQuantidade(e) {
    const btn = e.target;
    const id = btn.dataset.id;
    const quantidadeElement = document.querySelector(`.quantidade[data-id="${id}"]`);
    let quantidade = parseInt(quantidadeElement.textContent);

    if (btn.classList.contains('plus')) {
        quantidade++;
    } else if (btn.classList.contains('minus') && quantidade > 1) {
        quantidade--;
    }

    quantidadeElement.textContent = quantidade;
}

function adicionarAoCarrinho(e) {
    const btn = e.target;
    const id = parseInt(btn.dataset.id);
    const quantidadeElement = document.querySelector(`.quantidade[data-id="${id}"]`);
    const quantidade = parseInt(quantidadeElement.textContent);

    let produto = null;
    for (const categoria in cardapio) {
        produto = cardapio[categoria].find(p => p.id === id);
        if (produto) break;
    }

    if (!produto) return;

    const itemExistente = estado.carrinho.find(item => item.id === id);
    
    if (itemExistente) {
        itemExistente.quantidade += quantidade;
    } else {
        estado.carrinho.push({
            ...produto,
            quantidade: quantidade
        });
    }

    quantidadeElement.textContent = 1;

    atualizarCarrinho();
    salvarNoLocalStorage();

    btn.textContent = 'Adicionado!';
    setTimeout(() => {
        btn.textContent = produto.combo ? 'Adicionar Combo' : 'Adicionar ao Carrinho';
    }, 1000);
}

function atualizarCarrinho() {
    elementos.carrinhoItens.innerHTML = estado.carrinho.length > 0 
        ? estado.carrinho.map(item => criarItemCarrinho(item)).join('')
        : '<p>Carrinho vazio</p>';

    const totalItens = estado.carrinho.reduce((total, item) => total + item.quantidade, 0);
    elementos.carrinhoContador.textContent = totalItens;

    document.querySelectorAll('.quantidade-btn-carrinho').forEach(btn => {
        btn.addEventListener('click', manipularQuantidadeCarrinho);
    });

    document.querySelectorAll('.remover-btn').forEach(btn => {
        btn.addEventListener('click', removerDoCarrinho);
    });

    calcularTotais();
}

function criarItemCarrinho(item) {
    return `
        <div class="carrinho-item">
            <div class="item-info">
                <h4>${item.nome}</h4>
                <p class="descricao">${item.descricao}</p>
                <div class="preco">R$${item.preco.toFixed(2)}</div>
            </div>
            <div class="controles-carrinho">
                <div class="controles-quantidade">
                    <button class="quantidade-btn quantidade-btn-carrinho minus" data-id="${item.id}">-</button>
                    <span class="quantidade">${item.quantidade}</span>
                    <button class="quantidade-btn quantidade-btn-carrinho plus" data-id="${item.id}">+</button>
                </div>
                <button class="remover-btn" data-id="${item.id}">Remover</button>
            </div>
        </div>
    `;
}

function manipularQuantidadeCarrinho(e) {
    const btn = e.target;
    const id = parseInt(btn.dataset.id);
    const item = estado.carrinho.find(item => item.id === id);

    if (!item) return;

    if (btn.classList.contains('plus')) {
        item.quantidade++;
    } else if (btn.classList.contains('minus')) {
        if (item.quantidade > 1) {
            item.quantidade--;
        } else {
            removerDoCarrinho({ target: btn });
            return;
        }
    }

    atualizarCarrinho();
    salvarNoLocalStorage();
}

function removerDoCarrinho(e) {
    const id = parseInt(e.target.dataset.id);
    estado.carrinho = estado.carrinho.filter(item => item.id !== id);
    atualizarCarrinho();
    salvarNoLocalStorage();
}

function calcularTotais() {
    const subtotal = estado.carrinho.reduce((total, item) => total + (item.preco * item.quantidade), 0);
    
    let desconto = 0;
    if (estado.cupomAplicado) {
        desconto = subtotal * 0.1; 
    }

    const total = subtotal - desconto;

    elementos.subtotal.textContent = subtotal.toFixed(2);
    elementos.desconto.textContent = desconto.toFixed(2);
    elementos.total.textContent = total.toFixed(2);
}

function aplicarCupomDesconto() {
    const cupom = elementos.cupomInput.value.trim().toUpperCase();
    
    if (cupom === 'DESCONTO10') {
        estado.cupomAplicado = true;
        elementos.cupomInput.disabled = true;
        elementos.aplicarCupom.disabled = true;
        elementos.aplicarCupom.textContent = 'Aplicado!';
        calcularTotais();
    } else {
        alert('Cupom inválido! Tente "DESCONTO10" para 10% de desconto.');
    }
}

function abrirCarrinho() {
    elementos.carrinhoModal.classList.add('active');
}

function fecharCarrinho() {
    elementos.carrinhoModal.classList.remove('active');
}

function salvarNoLocalStorage() {
    localStorage.setItem('carrinhoDevLanches', JSON.stringify(estado.carrinho));
}

function finalizarPedidoWhatsApp() {
    if (estado.carrinho.length === 0) {
        alert('Seu carrinho está vazio!');
        return;
    }

    const numero = '5521993064884'; 
    const mensagem = formatarMensagemWhatsApp();
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
    
    window.open(url, '_blank');
    estado.carrinho = [];
    estado.cupomAplicado = false;
    estado.desconto = 0;
    elementos.cupomInput.disabled = false;
    elementos.aplicarCupom.disabled = false;
    elementos.aplicarCupom.textContent = 'Aplicar';
    elementos.cupomInput.value = '';
    atualizarCarrinho();
    salvarNoLocalStorage();
    fecharCarrinho();
}

function formatarMensagemWhatsApp() {
    const subtotal = estado.carrinho.reduce((total, item) => total + (item.preco * item.quantidade), 0);
    const desconto = estado.cupomAplicado ? subtotal * 0.1 : 0;
    const total = subtotal - desconto;

    let mensagem = `*Olá, gostaria de fazer o pedido:*\n\n`;
    
    estado.carrinho.forEach(item => {
        mensagem += `- *${item.nome}* x${item.quantidade}: R$${(item.preco * item.quantidade).toFixed(2)}\n`;
        mensagem += `  _${item.descricao}_\n`;
    });

    mensagem += `\n`;
    mensagem += `Subtotal: R$${subtotal.toFixed(2)}\n`;
    
    if (estado.cupomAplicado) {
        mensagem += `Desconto: ~~R$${subtotal.toFixed(2)}~~ R$${(subtotal - desconto).toFixed(2)}\n`;
    }
    
    mensagem += `*Total: R$${total.toFixed(2)}*`;
    mensagem += `\n\n_Pedido feito via DevLanches_`;

    return mensagem;
}

document.addEventListener('DOMContentLoaded', inicializar);