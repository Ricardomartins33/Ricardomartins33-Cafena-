     
     
 // 1️⃣ VARIÁVEIS (sempre no topo)
let cart = [];
let totalItens = 0;

// 2️⃣ FUNÇÕES
function adicionarCarrinho(nome, preco) {
    cart.push({ name: nome, price: preco });
    totalItens++;

    atualizarContador();
    updateCart();
}

function atualizarContador() {
    document.getElementById("contador").innerText = totalItens;
}



   function updateCart() {
    const cartItems = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");

    cartItems.innerHTML = ""; // Limpa lista

    let total = 0;
    cart.forEach(item => {
        total += item.price;
        const li = document.createElement("li");
        li.textContent = `${item.name} - R$ ${item.price.toFixed(2)}`;
        cartItems.appendChild(li);
    });

    cartTotal.textContent = `Total: R$ ${total.toFixed(2)}`;
}


     
     
     
     
     function mensagemCafe() {
  

  document.getElementById("menu").scrollIntoView({
    behavior: "smooth"
  });
}



const cartContainer = document.createElement('div');
cartContainer.id = 'cart-container';
cartContainer.style.display = 'none';
cartContainer.style.position = 'fixed';
cartContainer.style.top = '70px';
cartContainer.style.right = '20px';
cartContainer.style.background = '#222';
cartContainer.style.color = '#fff';
cartContainer.style.padding = '1rem';
cartContainer.style.borderRadius = '10px';
cartContainer.style.width = '300px';
cartContainer.style.zIndex = '200';
document.body.appendChild(cartContainer);

const cartTitle = document.createElement('h3');
cartTitle.innerText = 'Carrinho';
cartContainer.appendChild(cartTitle);

const cartItems = document.createElement('ul');
cartItems.id = 'cart-items';
cartContainer.appendChild(cartItems);


const cartTotal = document.createElement('p');
cartTotal.id = 'cart-total';
cartTotal.innerText = 'Total: R$ 0,00';
cartContainer.appendChild(cartTotal);


const closeBtn = document.createElement('button');
closeBtn.innerText = 'Fechar';
closeBtn.onclick = () => cartContainer.style.display = 'none';
cartContainer.appendChild(closeBtn);

