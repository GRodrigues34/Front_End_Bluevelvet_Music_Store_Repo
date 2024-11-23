document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    // Recupera usuários do LocalStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];
    // Verifica se o usuário existe e se a senha está correta
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
        // Armazena o usuário atual no LocalStorage e redireciona para o painel
        localStorage.setItem('currentUser', JSON.stringify(user));
        if(user.role == 'admin' || user.role == 'sales_manager' || user.role == 'shipper'){
        window.location.href = "dashboard.html";
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
        } else {
            alert("Invalid role");
            window.location.href = "index.html";
        }

    } else {
        // Mensagem de erro se o e-mail ou senha estiverem incorretos
        errorMessage.style.display = 'block';
    }
});
