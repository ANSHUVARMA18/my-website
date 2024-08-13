const products = [
   { id: 1, name: "PIXI On The Glow Blush", price: "500.00", image: 'file:///C:/Users/anish/OneDrive/Documents/project/anshu/images/c_undershirt.png' },
    { id: 2, name: "Rare Beauty Foundation (10ml)", price: "3500.00", image: 'file:///C:/Users/anish/OneDrive/Documents/project/anshu/images/c_polo-shirt.png'},
    { id: 3, name: "Kay Beauty Hydrating Lip Oil Gloss (Hydrate & Treat)", price: "600.00", image:'file:///C:/Users/anish/OneDrive/Documents/project/anshu/images/c_shirt-girl.png' },
    { id: 4, name: "Black Magic Liquid Eyeliner - Super Black 01", price: "359.00", image: 'file:///C:/Users/anish/OneDrive/Documents/project/anshu/images/c_western-shirt.png' },
    { id: 5, name: "LANEIGE Lip Sleeping Mask EX - Grapefruit", price: "699.00", image: 'file:///C:/Users/anish/OneDrive/Documents/project/anshu/images/jewellery3.jpg'},
    { id: 6, name: "M.A.C Macstack Mascara - Black Stack", price: "799.00", image: 'file:///C:/Users/anish/OneDrive/Documents/project/anshu/images/dress4.jpg' },
    { id: 7, name: "RARE BEAUTY Matte Liquid Lipstick Nudes & Browns - Set of 8", price: "3235.00", image: 'file:///C:/Users/anish/OneDrive/Documents/project/anshu/images/shoes5.jpg' },
    { id: 8, name: "Maybelline New York Instant Age Rewind Concealer", price: "525.00", image: 'file:///C:/Users/anish/OneDrive/Documents/project/anshu/images/dress2.jpg' },
    { id: 9, name: "M.A.C Sheertone Blush - Peaches", price: "599.00", image: 'file:///C:/Users/anish/OneDrive/Documents/project/anshu/images/shoes4.jpg' }];

const productList = document.getElementById('product-list');

products.forEach(product => {
    const productCard = document.createElement('div');
    productCard.className = 'col-md-4 product-item';
    productCard.innerHTML = `
        <div class="card">
            <img src="${product.image}" class="card-img-top" alt="${product.name}">
            <div class="card-body">
                <h5 class="card-title">${product.name}</h5>
                <p class="card-text">${product.price}</p>
                <button class="add-to-cart-btn" data-id="${product.id}">Add to Cart</button>
            </div>
        </div>
    `;
    productList.appendChild(productCard);
});

const cart = [];

document.addEventListener('click', function(event) {
    if (event.target.classList.contains('add-to-cart-btn')) {
        const productId = event.target.getAttribute('data-id');
        const product = products.find(p => p.id == productId);
        cart.push(product);
        alert(`${product.name} has been added to your cart.`);
        console.log(cart);
    }
});