// Configurações globais
const itemsPerPage = 5; // Produtos por página
let currentPage = 1; // Página atual
let filteredProducts = []; // Produtos filtrados (para busca e ordenação)


  
// Função para obter produtos do localStorage
function getProducts() {
    return JSON.parse(localStorage.getItem('products')) || [];
}



// Função para salvar produtos no localStorage
function saveProducts(products) {
    localStorage.setItem('products', JSON.stringify(products));
}

function deleteAllProducts(productId) {
    const confirmation = confirm("Are you sure you want to delete this product?");
    if (!confirmation) return;

    let products = getProducts();
    products = products.filter(product => product.id !== productId);
    saveProducts(products);
    loadProducts(); // Atualiza a tabela
}

document.getElementById('resetProductsBtn').addEventListener('click', function(){
    function deleteAllProducts() {
        const confirmation = confirm("Are you sure you want to reset all products?");
        if (!confirmation) return;
    
        // Limpa os produtos armazenados
        saveProducts([]); // Salva uma lista vazia no localStorage
        loadProducts(); // Atualiza a interface (se aplicável)
    
        console.log("All products have been deleted successfully.");
    }
    deleteAllProducts();

    const saveProduct = (product) => {
        const products = JSON.parse(localStorage.getItem('products')) || [];
        products.push(product);
        localStorage.setItem('products', JSON.stringify(products));
    };

    function loadInitialProducts(){
        const Product1 = {
          id: Date.now(), // ID único gerado pelo timestamp
          name: "Guided by Voices - Bee Thousand",
          shortDescription: "Album - Guided by Voices",
          fullDescription: "Guided by Voices' 'Bee Thousand' CD from Matador Records",
          listPrice: 15.99,
          discountPercent: 10,
          stock: 100,
          enabled: true,
          category: "CD",
          brand: "Matador Records",
          unitSystem: "metric",
          cost: 8.00,
          length: 14,
          width: 12,
          height: 1,
          weight: 0.2,
          mainImage: {
            url: "images/gbv-bee-thousand-cover.jpeg"
          },
          featuredImages: [],
          productDetails: "CD from Guided by Voices, one of the most celebrated albums of the 1990s",
          creationTime: new Date().toISOString(),
          updateTime: new Date().toISOString(),
        };
        
        const Product2 = {
          id: Date.now() + 1,
          name: "Pavement - Slanted and Enchanted",
          shortDescription: "Album - Pavement",
          fullDescription: "Pavement's 'Slanted and Enchanted' MP3 from Domino Recording Co",
          listPrice: 12.99,
          discountPercent: 5,
          stock: 150,
          enabled: true,
          category: "MP3",
          brand: "Domino Recording Co",
          unitSystem: "metric",
          cost: 6.00,
          length: 10,
          width: 10,
          height: 0.1,
          weight: 0.05,
          mainImage: {
            url: "images/pavment-slanted-and-enchanted-cover.jpeg"
          },
          featuredImages: [],
          productDetails: "MP3 version of Pavement's classic album 'Slanted and Enchanted'",
          creationTime: new Date().toISOString(),
          updateTime: new Date().toISOString(),
        };
        
        const Product3 = {
          id: Date.now() + 2,
          name: "Neutral Milk Hotel T-Shirt",
          shortDescription: "T-Shirt - Neutral Milk Hotel",
          fullDescription: "Neutral Milk Hotel T-Shirt from Merge Records",
          listPrice: 20.00,
          discountPercent: 15,
          stock: 50,
          enabled: true,
          category: "T-Shirt",
          brand: "Merge Records",
          unitSystem: "metric",
          cost: 10.00,
          length: 28,
          width: 20,
          height: 0.5,
          weight: 0.3,
          mainImage: {
            url: "images/neutral-milk-hotel-in-the-aeroplane-over-the-sea-tshirt.jpeg"
          },
          featuredImages: [],
          productDetails: "Neutral Milk Hotel T-Shirt featuring album artwork",
          creationTime: new Date().toISOString(),
          updateTime: new Date().toISOString(),
        };
        
        const Product4 = {
          id: Date.now() + 3,
          name: "Indie Rock 101",
          shortDescription: "Book - Indie Rock 101",
          fullDescription: "'Indie Rock 101' Book about Indie music",
          listPrice: 25.00,
          discountPercent: 20,
          stock: 75,
          enabled: true,
          category: "Book",
          brand: "Music Books",
          unitSystem: "metric",
          cost: 12.00,
          length: 22,
          width: 15,
          height: 1,
          weight: 0.5,
          mainImage: {
            url: "images/indie-101-book.jpg"
          },
          featuredImages: [],
          productDetails: "An essential guide to indie rock bands and albums",
          creationTime: new Date().toISOString(),
          updateTime: new Date().toISOString(),
        };
        
        const Product5 = {
          id: Date.now() + 4,
          name: "The Jesus and Mary Chain Poster",
          shortDescription: "Poster - The Jesus and Mary Chain",
          fullDescription: "Poster of The Jesus and Mary Chain",
          listPrice: 10.00,
          discountPercent: 0,
          stock: 200,
          enabled: true,
          category: "Poster",
          brand: "Art & Prints",
          unitSystem: "metric",
          cost: 5.00,
          length: 30,
          width: 20,
          height: 0.1,
          weight: 0.1,
          mainImage: {
            url: "images/jamc-poster.png"
          },
          featuredImages: [],
          productDetails: "High-quality poster featuring The Jesus and Mary Chain artwork",
          creationTime: new Date().toISOString(),
          updateTime: new Date().toISOString(),
        };
        
        const Product6 = {
          id: Date.now() + 5,
          name: "My Bloody Valentine - Loveless",
          shortDescription: "Album - My Bloody Valentine",
          fullDescription: "My Bloody Valentine's 'Loveless' CD from Creation Records",
          listPrice: 18.00,
          discountPercent: 10,
          stock: 80,
          enabled: true,
          category: "CD",
          brand: "Creation Records",
          unitSystem: "metric",
          cost: 9.00,
          length: 14,
          width: 12,
          height: 1,
          weight: 0.2,
          mainImage: {
            url: "images/mbv-loveless-cd.jpeg"
          },
          featuredImages: [],
          productDetails: "My Bloody Valentine's groundbreaking 'Loveless' album",
          creationTime: new Date().toISOString(),
          updateTime: new Date().toISOString(),
        };
        
        const Product7 = {
          id: Date.now() + 6,
          name: "Yo La Tengo - I Can Hear the Heart Beating as One",
          shortDescription: "Album - Yo La Tengo",
          fullDescription: "Yo La Tengo's 'I Can Hear the Heart Beating as One' MP3 from Matador Records",
          listPrice: 14.99,
          discountPercent: 5,
          stock: 120,
          enabled: true,
          category: "MP3",
          brand: "Matador Records",
          unitSystem: "metric",
          cost: 7.50,
          length: 10,
          width: 10,
          height: 0.1,
          weight: 0.05,
          mainImage: {
            url: "images/yo-la-tengo-you-can-hear-heart-beating-as-one-mp3.jpeg"
          },
          featuredImages: [],
          productDetails: "MP3 version of Yo La Tengo's 'I Can Hear the Heart Beating as One'",
          creationTime: new Date().toISOString(),
          updateTime: new Date().toISOString(),
        };
        
        const Product8 = {
          id: Date.now() + 7,
          name: "Sonic Youth T-Shirt",
          shortDescription: "T-Shirt - Sonic Youth",
          fullDescription: "Sonic Youth T-Shirt from Geffen Records",
          listPrice: 22.00,
          discountPercent: 0,
          stock: 60,
          enabled: true,
          category: "T-Shirt",
          brand: "Geffen Records",
          unitSystem: "metric",
          cost: 12.00,
          length: 28,
          width: 20,
          height: 0.5,
          weight: 0.3,
          mainImage: {
            url: "images/sonic-youth-washing-machine-tshirt.jpeg"
          },
          featuredImages: [],
          productDetails: "Sonic Youth T-Shirt featuring iconic album artwork",
          creationTime: new Date().toISOString(),
          updateTime: new Date().toISOString(),
        };
        
        const Product9 = {
          id: Date.now() + 8,
          name: "Our Band Could Be Your Life",
          shortDescription: "Book - Our Band Could Be Your Life",
          fullDescription: "'Our Band Could Be Your Life' Book on Indie Music history",
          listPrice: 28.00,
          discountPercent: 15,
          stock: 90,
          enabled: true,
          category: "Book",
          brand: "Indie Publishing",
          unitSystem: "metric",
          cost: 14.00,
          length: 23,
          width: 16,
          height: 1,
          weight: 0.6,
          mainImage: {
            url: "images/our-band-could-be-your-life-book.jpeg"
          },
          featuredImages: [],
          productDetails: "The definitive book about the 1980s indie music scene",
          creationTime: new Date().toISOString(),
          updateTime: new Date().toISOString(),
        };
        
        const Product10 = {
          id: Date.now() + 9,
          name: "The Velvet Underground Poster",
          shortDescription: "Poster - The Velvet Underground",
          fullDescription: "Poster featuring The Velvet Underground artwork",
          listPrice: 12.00,
          discountPercent: 0,
          stock: 150,
          enabled: true,
          category: "Poster",
          brand: "Classic Prints",
          unitSystem: "metric",
          cost: 6.00,
          length: 30,
          width: 20,
          height: 0.1,
          weight: 0.1,
          mainImage: {
            url: "images/velvet-underground-poster.jpeg"
          },
          featuredImages: [],
          productDetails: "Poster of The Velvet Underground classic artwork",
          creationTime: new Date().toISOString(),
          updateTime: new Date().toISOString(),
        };
        
        
      saveProduct(Product1);
      saveProduct(Product2);
      saveProduct(Product3);
      saveProduct(Product4);
      saveProduct(Product5);
      saveProduct(Product6);
      saveProduct(Product7);
      saveProduct(Product8);
      saveProduct(Product9);
      saveProduct(Product10);
      }
    
      loadInitialProducts();
      loadProducts();

} );





// Função para obter o usuário atual do localStorage
function getCurrentUser() {
    return JSON.parse(localStorage.getItem('currentUser'));
}

// Função para exibir informações do usuário logado
function displayUserInfo() {
    const user = getCurrentUser();
    if (user) {
        document.getElementById('user-name').textContent = user.name;
        document.getElementById('user-role').textContent = user.role;
    } else {
        alert("User not authenticated. Redirecting to login.");
        window.location.href = "index.html";
    }
}

// Função para carregar produtos na tabela
function loadProducts(sortBy = 'id', searchKeyword = '', page = 1) {
    const allProducts = getProducts();

    // Filtragem por palavra-chave
    filteredProducts = allProducts.filter(product => {
        const keyword = searchKeyword.toLowerCase();
        return (
            product.name.toLowerCase().includes(keyword) ||
            product.brand.toLowerCase().includes(keyword) ||
            product.category.toLowerCase().includes(keyword)
        );
    });

    // Ordenação
    if (sortBy !== 'id') {
        filteredProducts.sort((a, b) => {
            const fieldA = a[sortBy]?.toLowerCase() || '';
            const fieldB = b[sortBy]?.toLowerCase() || '';
            return fieldA.localeCompare(fieldB);
        });
    }

    // Paginação
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedProducts = filteredProducts.slice(startIndex, endIndex);

    renderProductTable(paginatedProducts);
    renderPaginationControls(filteredProducts.length, page);
}

// Função para renderizar a tabela de produtos
function renderProductTable(products) {
    const productTableBody = document.getElementById('productList');
    productTableBody.innerHTML = ''; // Limpa a tabela

    if (products.length === 0) {
        productTableBody.innerHTML = '<tr><td colspan="6">No products found.</td></tr>';
        return;
    }

    products.forEach((product, index) => {
        const productRow = document.createElement('tr');
        const hasMainImage = product.mainImage && product.mainImage.url; // Check if mainImage exists
    productRow.innerHTML = `
      <td>${index + 1}</td>
      <td>
        ${hasMainImage ? `<img src="${product.mainImage.url}" alt="${product.name}" style="width: 100px; height: 100px;">` : ''}</td>
            <td>${product.name}</td>
            <td>${product.brand}</td>
            <td>${product.category}</td>
            <td>
                <button class="view-details-btn">View Details</button>
                <button class="edit-btn">Edit</button>
                <button class="delete-btn">Delete</button>
            </td>
        `;
        productTableBody.appendChild(productRow);

        // Adiciona eventos para os botões
        productRow.querySelector('.view-details-btn').addEventListener('click', () => viewProductDetails(product));
        productRow.querySelector('.edit-btn').addEventListener('click', () => editProduct(product));
        productRow.querySelector('.delete-btn').addEventListener('click', () => deleteProduct(product.id));
    });
}

// Função para renderizar controles de paginação
function renderPaginationControls(totalProducts, currentPage) {
    const totalPages = Math.ceil(totalProducts / itemsPerPage);
    const paginationContainer = document.getElementById('pagination');
    paginationContainer.innerHTML = ''; // Limpa os controles

    if (totalPages <= 1) {
        paginationContainer.style.display = 'none';
        return;
    }
    paginationContainer.style.display = 'flex';

    // Botões de navegação
    const createButton = (text, disabled, onClick) => {
        const button = document.createElement('button');
        button.textContent = text;
        button.disabled = disabled;
        button.addEventListener('click', onClick);
        return button;
    };

    // Botão "Primeiro"
    paginationContainer.appendChild(createButton('First', currentPage === 1, () => loadProducts('id', '', 1)));

    // Botão "Anterior"
    paginationContainer.appendChild(createButton('Previous', currentPage === 1, () => loadProducts('id', '', currentPage - 1)));

    // Botões de página
    for (let i = 1; i <= totalPages; i++) {
        paginationContainer.appendChild(createButton(i, currentPage === i, () => loadProducts('id', '', i)));
    }

    // Botão "Próximo"
    paginationContainer.appendChild(createButton('Next', currentPage === totalPages, () => loadProducts('id', '', currentPage + 1)));

    // Botão "Último"
    paginationContainer.appendChild(createButton('Last', currentPage === totalPages, () => loadProducts('id', '', totalPages)));
}

// Função para editar produto
function editProduct(product) {
    localStorage.setItem('modifiedProduct', JSON.stringify(product));
    window.location.href = "edit-product.html";
}



// Evento de logout
document.getElementById('logoutBtn').addEventListener('click', () => {
    localStorage.removeItem('currentUser');
    window.location.href = "index.html";
});

// Evento de ordenação
document.getElementById('sortSelect').addEventListener('change', (event) => {
    loadProducts(event.target.value, '', 1); // Reinicia na página 1
});

// Função para deletar produto
function deleteProduct(productId) {
    const confirmation = confirm("Are you sure you want to delete this product?");
    if (!confirmation) return;

    let products = getProducts();

    // Confirmação de exclusão por comparação direta com IDs
    const productIndex = products.findIndex(product => product.id === productId);

    if (productIndex !== -1) {
        products.splice(productIndex, 1); // Remove o produto pelo índice
        saveProducts(products);
        loadProducts(); // Atualiza a tabela
        console.log("Product deleted successfully:", productId);
    } else {
        alert("Product not found.");
    }

    // Logs para depuração
    console.log("Updated products list:", products);
}



// Evento de busca
document.getElementById('searchInput').addEventListener('input', (event) => {
    loadProducts('id', event.target.value, 1); // Reinicia na página 1
});

// Evento para redirecionar à criação de produtos
document.getElementById('addProductBtn').addEventListener('click', () => {
    const user = getCurrentUser();
    if (user && (user.role === 'admin' || user.role === 'editor')) {
        window.location.href = 'create-product.html';
    } else {
        alert("You do not have permission to add products.");
    }
});

function viewProductDetails(product) {
    // Atualiza a URL com o ID do produto
localStorage.setItem('viewProduct', JSON.stringify(product));
    window.location.href = `view-product.html?id=${product.id}`;
  }

// Inicialização do dashboard
document.addEventListener('DOMContentLoaded', () => {
    displayUserInfo();
    loadProducts(); // Carrega a tabela inicial
});




