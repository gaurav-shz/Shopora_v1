// --- Shopora Frontend: main.js ---

document.addEventListener('DOMContentLoaded', () => {
    console.log("🚀 Shopora Frontend Loaded. Attempting to fetch products...");
    
    // 1. Define the location of your Python Backend
    const API_URL = 'https://shopora-v1.onrender.com/api/products';

    // 2. Reach out to the server
    fetch(API_URL)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log("📦 Data received from backend:", data);
            
            // 3. Find the place on your page where products should go
            // NOTE: Make sure your index.html has a div with id="products-grid"
            const productsGrid = document.getElementById('products-grid');

            if (!productsGrid) {
                console.error("❌ Error: Could not find an element with id='products-grid' in index.html");
                return;
            }

            // Clear any loading text/placeholders
            productsGrid.innerHTML = '';

            // 4. Loop through the products and build the cards
            data.products.forEach(product => {
                const productCard = `
                    <div class="product-card">
                        <div class="product-badge ${product.badge}">${product.badge === 'b-hot' ? 'Hot Deal' : ''}</div>
                        <div class="product-image">
                            <img src="${product.image}" alt="${product.name}">
                        </div>
                        <div class="product-info">
                            <span class="brand-name">${product.brand}</span>
                            <h3>${product.name}</h3>
                            <div class="rating">
                                <span>⭐ ${product.rating}</span>
                                <span class="reviews">(${product.reviews} reviews)</span>
                            </div>
                            <div class="price-container">
                                <span class="current-price">₹${product.price.toLocaleString()}</span>
                                <span class="original-price">₹${product.was.toLocaleString()}</span>
                                <span class="discount-tag">${product.off} OFF</span>
                            </div>
                            <button class="compare-btn" onclick="window.location.href='product-detail.html'">Compare Prices</button>
                        </div>
                    </div>
                `;
                productsGrid.innerHTML += productCard;
            });
        })
        .catch(error => {
            console.error("❌ Connection Failed:", error);
            const productsGrid = document.getElementById('products-grid');
            if (productsGrid) {
                productsGrid.innerHTML = `<p style="color: white; text-align: center;">Unable to load products. Is the Python server running?</p>`;
            }
        });
});