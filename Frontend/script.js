// FusionMart Clean Modern JS
// All interactivity for loader, navbar, search, product rendering, filtering, quick view modal, cart, carousel, and forms

// --- Product Data (STATIC FOR DEMO) ---
let products = [
  { id: 1, name: 'Smartphone X1', desc: 'Latest 5G smartphone with AMOLED display.', price: 24999, image: 'images/prod1.jpg', rating: 4.5, reviews: 120, badge: 'New', category: 'electronics' },
  { id: 2, name: 'Bluetooth Headphones', desc: 'Wireless headphones with noise cancellation.', price: 2999, image: 'images/prod2.jpg', rating: 4.4, reviews: 87, badge: '', category: 'electronics' },
  { id: 3, name: 'Smart TV 50"', desc: '4K Ultra HD Smart TV with HDR.', price: 39999, image: 'images/prod3.webp', rating: 4.6, reviews: 210, badge: 'Out of Stock', category: 'electronics' },
  { id: 4, name: 'Gaming Laptop Pro', desc: 'High-performance gaming laptop with RTX graphics.', price: 79999, image: 'images/prod4.webp', rating: 4.7, reviews: 65, badge: '', category: 'electronics' },
  { id: 5, name: 'Apple MacBook Air M2 (13-inch)', desc: 'Ultra-lightweight laptop with Apple M2 chip, 8GB RAM, 256GB SSD, and a 13.6', price: 114900, image: 'images/gaminglaptoppro.jpg', rating: 4.5, reviews: 65, badge: '', category: 'electronics' },
  { id: 6, name: 'Samsung Galaxy S24 Ultra (5G)', desc: 'Flagship smartphone with a 200MP quad camera, Snapdragon 8 Gen 3 processor', price: 129999, image: 'images/s24_ultra.jpg', rating: 4.6, reviews: 65, badge: '', category: 'electronics' },
  { id: 7, name: 'Sony WH-1000XM5 Wireless Headphones', desc: ' Industry-leading noise-canceling headphones with up to 30 hours of battery life', price: 29990, image: 'images/sony_wireless.jpg', rating: 4.7, reviews: 65, badge: '', category: 'electronics' },
  { id: 8, name: 'LG 55” 4K Ultra HD Smart OLED TV', desc: 'LG 55” 4K Ultra HD Smart OLED TV', price: 109990, image: 'images/lg_smart_amoled.webp', rating: 4.5, reviews: 65, badge: '', category: 'electronics' },


  { id: 9, name: 'Air Purifier', desc: 'HEPA filter air purifier for clean air.', price: 7999, image: 'images/prod5.webp', rating: 4.3, reviews: 34, badge: '', category: 'home' },
  { id: 10, name: 'Blender Pro', desc: 'High-speed blender for smoothies and more.', price: 2499, image: 'images/prod6.jpg', rating: 4.4, reviews: 58, badge: 'New', category: 'home' },
  { id: 11, name: 'LED Table Lamp', desc: 'Adjustable LED lamp for study or work.', price: 899, image: 'images/prod7.webp', rating: 4.2, reviews: 19, badge: '', category: 'home' },
  { id: 12, name: 'Luxury Bedsheet Set', desc: 'Premium cotton bedsheet set for king size beds.', price: 1999, image: 'images/prod8.jpg', rating: 4.5, reviews: 44, badge: '', category: 'home' },
  { id: 13, name: 'Dyson V8 Absolute Cord-Free Vacuum Cleaner', desc: ' Powerful cordless vacuum with advanced filtration and up to 40 minutes of fade-free suction', price: 38900, image: 'images/dyson_v8.jpg', rating: 4.8, reviews: 44, badge: '', category: 'home' },
  { id: 14, name: 'Philips Daily Collection Toaster (HD2582/00)', desc: 'Compact 2-slice toaster with 8 browning settings, auto shut-off, and crumb tray for easy cleaning.', price: 1999, image: 'images/philips.jpeg', rating: 4.5, reviews: 44, badge: '', category: 'home' },
  { id: 15, name: 'Havells Swing Wall Fan (16-inch)', desc: ' Energy-efficient fan with powerful air delivery, thermal overload protector, and 3-speed settings.', price: 2799, image: 'images/havells.webp', rating: 4.5, reviews: 44, badge: '', category: 'home' },
  { id: 16, name: 'Sleepyhead 3-Layer Memory Foam Mattress (Queen Size)', desc: ' Ergonomic mattress with pressure-relieving memory foam, perfect balance of comfort and support.', price: 14999, image: 'images/three_layer.jpeg', rating: 4.7, reviews: 44, badge: '', category: 'home' },

  
  { id: 17, name: 'Microwave Oven', desc: 'Convection microwave oven for fast cooking.', price: 10999, image: 'images/prod9.jpg', rating: 4.3, reviews: 29, badge: '', category: 'appliances' },
  { id: 18, name: 'Washing Machine', desc: 'Fully automatic washing machine.', price: 18999, image: 'images/prod10.webp', rating: 4.4, reviews: 53, badge: '', category: 'appliances' },
  { id: 19, name: 'Refrigerator', desc: 'Double-door refrigerator with inverter.', price: 22999, image: 'images/prod11.webp', rating: 4.4, reviews: 38, badge: '', category: 'appliances' },
  { id: 20, name: 'Air Fryer XL', desc: 'Large capacity air fryer for healthy cooking.', price: 5999, image: 'images/prod12.jpg', rating: 4.3, reviews: 22, badge: 'New', category: 'appliances' },
  { id: 21, name: 'LG 260L 3-Star Frost-Free Double Door Refrigerator', desc: 'Energy-efficient fridge with smart inverter compressor, auto defrost.', price: 27999, image: 'images/door_refri.jpeg', rating: 4.5, reviews: 22, badge: 'New', category: 'appliances' },
  { id: 22, name: 'Samsung 6.5 kg Fully-Automatic Top Load Washing Machine', desc: 'Eco Tub Clean, Center Jet Pulsator, and a diamond drum for powerful yet gentle washing', price: 16490, image: 'images/automatic.webp', rating: 4.4, reviews: 22, badge: 'New', category: 'appliances' },
  { id: 23, name: 'Bajaj Majesty 1603 TSS OTG (16L)', desc: ' Compact oven toaster grill with stainless steel body, 60-minute timer, and 1200W power for grilling and baking.', price: 3299, image: 'images/bajaj1603.jpg', rating: 4.3, reviews: 22, badge: 'New', category: 'appliances' },
  { id: 24, name: 'Crompton SilentPro Enso Ceiling Fan (1200mm)', desc: 'Super silent operation, energy-efficient BLDC motor, and remote control with speed adjustment.', price: 4599, image: 'images/crompton.jpeg', rating: 4.3, reviews: 22, badge: 'New', category: 'appliances' }
];
// Remove fetchProducts and its DOMContentLoaded listener

// --- Loader ---
document.addEventListener('DOMContentLoaded', () => {
  const loader = document.getElementById('loader');
  if (loader) {
    setTimeout(() => {
      loader.style.opacity = '0';
      setTimeout(() => loader.style.display = 'none', 400);
    }, 1000);
  }

  // --- Carousel ---
  let currentSlide = 0;
  const slides = document.querySelectorAll('.carousel-slide');
  const prevBtn = document.querySelector('.carousel-prev');
  const nextBtn = document.querySelector('.carousel-next');
  function showSlide(idx) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === idx);
    });
  }
  if (slides.length) {
    showSlide(currentSlide);
    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
      });
    }
    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
      });
    }
  }

  // --- Wishlist State ---
  let wishlist = [];

  // --- Deals Data ---
  const deals = [
    { title: 'Smartphone X1', desc: 'Save ₹5,000 on Smartphone X1', image: 'images/prod1.jpg', offer: '₹19,999', old: '₹24,999' },
    { title: 'Washing Machine', desc: 'Flat 20% off on Washing Machines', image: 'images/prod8.jpg', offer: '₹15,199', old: '₹18,999' },
    { title: 'LED Table Lamp', desc: 'Buy 1 Get 1 Free', image: 'images/prod6.jpg', offer: '₹899', old: '' },
  ];

  // --- Offers Data ---
  const offers = [
    { title: 'Bank Offer', desc: '10% Instant Discount with HDFC Cards', image: 'images/offer1.png' },
    { title: 'Combo Offer', desc: 'Buy Blender Pro + Air Purifier & Save 15%', image: 'images/offer2.jpg' },
    { title: 'No Cost EMI', desc: 'No Cost EMI on select electronics', image: 'images/offer3.avif' },
  ];

  // --- More Data ---
  const more = [
    { title: 'Gift Cards', desc: 'Send a FusionMart gift card to your loved ones.', image: 'images/more1.jpg' },
    { title: 'Customer Support', desc: '24/7 support for all your shopping needs.', image: 'images/more2.jpg' },
    { title: 'Upcoming: Grocery', desc: 'Groceries coming soon to FusionMart!', image: 'images/more3.jpg' },
  ];

  // --- Helper: Render Stars ---
  function renderStars(rating) {
    const full = Math.floor(rating);
    const half = rating % 1 >= 0.5 ? 1 : 0;
    let stars = '';
    for (let i = 0; i < full; i++) stars += '★';
    if (half) stars += '☆';
    while (stars.length < 5) stars += '☆';
    return `<span class="stars" style="color:#f7b500;font-size:1.1em;">${stars}</span>`;
  }

  // --- Render Category Product Grids ---
  function renderCategoryGrid(category, gridId) {
    const grid = document.getElementById(gridId);
    if (!grid) return;
    grid.innerHTML = '';
    products.filter(p => p.category === category).forEach(product => {
      const isWished = wishlist.includes(product.id);
      const outOfStock = product.badge === 'Out of Stock';
      const badge = product.badge ? `<span class="product-badge ${outOfStock ? 'badge-out' : 'badge-new'}">${product.badge}</span>` : '';
      const heart = `<button class="wishlist-btn" data-id="${product.id}" aria-label="Add to wishlist">${isWished ? '❤️' : '🤍'}</button>`;
      const card = document.createElement('div');
      card.className = 'product-card';
      card.innerHTML = `
        <div class="product-img-wrap">
          <img src="${product.image}" alt="${product.name}" />
          ${badge}
          <div class="wishlist-wrap">${heart}</div>
        </div>
        <div class="product-info">
          <h3>${product.name}</h3>
          <div class="product-rating">${renderStars(product.rating)} <span class="review-count">(${product.reviews})</span></div>
          <p class="product-desc">${product.desc}</p>
          <div class="product-price">₹${product.price.toLocaleString()}</div>
          <div class="product-actions">
            <a href="product-details.html?id=${product.id}" class="quick-view-btn" ${outOfStock ? 'aria-disabled="true" tabindex="-1"' : ''}>Quick View</a>
            <button class="add-cart-btn" data-id="${product.id}" ${outOfStock ? 'disabled' : ''}>Add to cart</button>
          </div>
        </div
      `;
      grid.appendChild(card);
    });
  }
  renderCategoryGrid('electronics', 'electronics-grid'); // Moved to fetchProducts
  renderCategoryGrid('home', 'home-grid'); // Moved to fetchProducts
  renderCategoryGrid('appliances', 'appliances-grid'); // Moved to fetchProducts

  // --- Render Deals ---
  const dealsDiv = document.getElementById('deals-cards');
  if (dealsDiv) {
    dealsDiv.innerHTML = '';
    deals.forEach(deal => {
      const card = document.createElement('div');
      card.className = 'deal-card';
      card.innerHTML = `
        <img src="${deal.image}" alt="${deal.title}" />
        <div class="deal-info">
          <span class="deal-title">${deal.title}</span>
          <span class="deal-offer">${deal.offer}${deal.old ? ` <span style='text-decoration:line-through;color:#999;font-size:0.95em;'>${deal.old}</span>` : ''}</span>
          <p>${deal.desc}</p>
        </div>
      `;
      dealsDiv.appendChild(card);
    });
  }

  // --- Render Offers ---
  const offersDiv = document.getElementById('offers-cards');
  if (offersDiv) {
    offersDiv.innerHTML = '';
    offers.forEach(offer => {
      const card = document.createElement('div');
      card.className = 'deal-card';
      card.innerHTML = `
        <img src="${offer.image}" alt="${offer.title}" />
        <div class="deal-info">
          <span class="deal-title">${offer.title}</span>
          <p>${offer.desc}</p>
        </div>
      `;
      offersDiv.appendChild(card);
    });
  }

  // --- Render More ---
  const moreDiv = document.getElementById('more-cards');
  if (moreDiv) {
    moreDiv.innerHTML = '';
    more.forEach(item => {
      const card = document.createElement('div');
      card.className = 'deal-card';
      card.innerHTML = `
        <img src="${item.image}" alt="${item.title}" />
        <div class="deal-info">
          <span class="deal-title">${item.title}</span>
          <p>${item.desc}</p>
        </div>
      `;
      moreDiv.appendChild(card);
    });
  }

  // --- Product Filtering ---
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', e => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderProducts(btn.dataset.category);
    });
  });

  // --- Quick View Modal ---
  const quickViewModal = document.getElementById('quick-view-modal');
  const quickViewBody = quickViewModal ? quickViewModal.querySelector('.modal-body') : null;
  if (quickViewBody) {
    productGrid.addEventListener('click', e => {
      if (e.target.classList.contains('quick-view-btn')) {
        const id = +e.target.dataset.id;
        const prod = products.find(p => p.id === id);
        quickViewBody.innerHTML = `
          <img src="${prod.image}" alt="${prod.name}" style="width:100%;max-width:300px;border-radius:8px;box-shadow:0 2px 10px rgba(0,0,0,0.07);margin-bottom:1rem;" />
          <h2>${prod.name}</h2>
          <p>${prod.desc}</p>
          <div class="product-price">₹${prod.price.toLocaleString()}</div>
          <button class="add-cart-btn" data-id="${prod.id}">Add to Cart</button>
        `;
        quickViewModal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
      }
    });
    quickViewModal.querySelector('.close-modal').addEventListener('click', () => {
      quickViewModal.classList.add('hidden');
      document.body.style.overflow = '';
    });
  }

  // --- Cart Logic ---
  let cart = [];
  const cartSidebar = document.getElementById('cart-sidebar');
  const cartItemsDiv = cartSidebar ? cartSidebar.querySelector('.cart-items') : null;
  const cartTotalSpan = document.getElementById('cart-total');
  if (cartItemsDiv && cartTotalSpan) {
    function updateCart() {
      cartItemsDiv.innerHTML = '';
      let total = 0;
      cart.forEach(item => {
        const prod = products.find(p => p.id === item.id);
        total += prod.price * item.qty;
        const div = document.createElement('div');
        div.className = 'cart-item';
        div.innerHTML = `
          <img src="${prod.image}" alt="${prod.name}" />
          <div class="cart-item-info">
            <span>${prod.name}</span>
            <span>₹${prod.price.toLocaleString()} x ${item.qty}</span>
          </div>
          <div class="cart-item-actions">
            <button class="cart-qty-btn" data-id="${item.id}" data-action="dec">-</button>
            <span>${item.qty}</span>
            <button class="cart-qty-btn" data-id="${item.id}" data-action="inc">+</button>
            <button class="cart-remove-btn" data-id="${item.id}" aria-label="Remove from cart">&times;</button>
          </div>
        `;
        cartItemsDiv.appendChild(div);
      });
      cartTotalSpan.textContent = total.toLocaleString();
      document.querySelector('.cart-count').textContent = cart.reduce((a, b) => a + b.qty, 0);
    }
    // Add to cart (from grid or modal)
    document.body.addEventListener('click', e => {
      if (e.target.classList.contains('add-cart-btn')) {
        const id = +e.target.dataset.id;
        const idx = cart.findIndex(item => item.id === id);
        if (idx > -1) cart[idx].qty++;
        else cart.push({ id, qty: 1 });
        updateCart();
      }
      if (e.target.classList.contains('cart-qty-btn')) {
        const id = +e.target.dataset.id;
        const action = e.target.dataset.action;
        const idx = cart.findIndex(item => item.id === id);
        if (idx > -1) {
          if (action === 'inc') cart[idx].qty++;
          else if (action === 'dec' && cart[idx].qty > 1) cart[idx].qty--;
          updateCart();
        }
      }
      if (e.target.classList.contains('cart-remove-btn')) {
        const id = +e.target.dataset.id;
        cart = cart.filter(item => item.id !== id);
        updateCart();
      }
    });
    // Open/close cart sidebar
    const cartIcon = document.getElementById('cart-icon');
    if (cartIcon) {
      cartIcon.addEventListener('click', () => {
        cartSidebar.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
      });
    }
    if (cartSidebar) {
      cartSidebar.querySelector('.close-cart').addEventListener('click', () => {
        cartSidebar.classList.add('hidden');
        document.body.style.overflow = '';
      });
    }
  }

  // --- Search ---
  const searchBtn = document.getElementById('search-btn');
  const searchInput = document.getElementById('search-input');
  const productGrid = document.querySelector('.product-grid');
  if (searchBtn && searchInput && productGrid) {
    searchBtn.addEventListener('click', () => {
      const val = searchInput.value.toLowerCase();
      const filtered = products.filter(p => p.name.toLowerCase().includes(val) || p.desc.toLowerCase().includes(val));
      productGrid.innerHTML = '';
      filtered.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
          <img src="${product.image}" alt="${product.name}" />
          <div class="product-info">
            <h3>${product.name}</h3>
            <p class="product-desc">${product.desc}</p>
            <div class="product-price">₹${product.price.toLocaleString()}</div>
            <div class="product-actions">
              <button class="quick-view-btn" data-id="${product.id}">Quick View</button>
              <button class="add-cart-btn" data-id="${product.id}">Add to Cart</button>
            </div>
          </div>
        `;
        productGrid.appendChild(card);
      });
    });
  }

  // --- Forms (Contact, Newsletter, etc.) ---
  document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', e => {
      e.preventDefault();
      alert('Thank you! Your submission has been received.');
      form.reset();
    });
  });

  // --- Filtering & Sorting Logic ---
  function getFilteredSortedProducts(category, filters, sort) {
    let filtered = products.filter(p => p.category === category);
    // In Stock
    if (filters.instock) filtered = filtered.filter(p => p.badge !== 'Out of Stock');
    // Price
    if (filters.price.length) {
      filtered = filtered.filter(p => filters.price.some(range => {
        const [min, max] = range.split('-').map(Number);
        return p.price >= min && p.price <= max;
      }));
    }
    // Rating
    if (filters.rating) filtered = filtered.filter(p => p.rating >= filters.rating);
    // Sorting
    if (sort === 'price-asc') filtered.sort((a, b) => a.price - b.price);
    else if (sort === 'price-desc') filtered.sort((a, b) => b.price - a.price);
    else if (sort === 'rating') filtered.sort((a, b) => b.rating - a.rating);
    else if (sort === 'newest') filtered.sort((a, b) => b.id - a.id);
    return filtered;
  }

  function setupCategoryGrid(category, gridId, sortId, instockId) {
    const grid = document.getElementById(gridId);
    const sortDropdown = document.getElementById(sortId);
    const instockCheckbox = document.getElementById(instockId);
    const priceCheckboxes = grid ? grid.parentElement.querySelectorAll('.filter-price') : null;
    const ratingCheckboxes = grid ? grid.parentElement.querySelectorAll('.filter-rating') : null;
    let filters = { instock: false, price: [], rating: null };
    let sort = 'default';
    if (sortDropdown && instockCheckbox && priceCheckboxes && ratingCheckboxes) {
      function updateGrid() {
        const filtered = getFilteredSortedProducts(category, filters, sort);
        grid.innerHTML = '';
        filtered.forEach(product => {
          const isWished = wishlist.includes(product.id);
          const outOfStock = product.badge === 'Out of Stock';
          const badge = product.badge ? `<span class="product-badge ${outOfStock ? 'badge-out' : 'badge-new'}">${product.badge}</span>` : '';
          const heart = `<button class="wishlist-btn" data-id="${product.id}" aria-label="Add to wishlist">${isWished ? '❤️' : '🤍'}</button>`;
          const card = document.createElement('div');
          card.className = 'product-card';
          card.innerHTML = `
            <div class="product-img-wrap">
              <img src="${product.image}" alt="${product.name}" />
              ${badge}
              <div class="wishlist-wrap">${heart}</div>
            </div>
            <div class="product-info">
              <h3>${product.name}</h3>
              <div class="product-rating">${renderStars(product.rating)} <span class="review-count">(${product.reviews})</span></div>
              <p class="product-desc">${product.desc}</p>
              <div class="product-price">₹${product.price.toLocaleString()}</div>
              <div class="product-actions">
                <button class="quick-view-btn" data-id="${product.id}" ${outOfStock ? 'disabled' : ''}>Quick View</button>
                <button class="add-cart-btn" data-id="${product.id}" ${outOfStock ? 'disabled' : ''}>Add to Cart</button>
              </div>
            </div>
          `;
          grid.appendChild(card);
        });
      }
      // Event listeners
      sortDropdown.addEventListener('change', e => {
        sort = e.target.value;
        updateGrid();
      });
      instockCheckbox.addEventListener('change', e => {
        filters.instock = e.target.checked;
        updateGrid();
      });
      priceCheckboxes.forEach(cb => cb.addEventListener('change', () => {
        filters.price = Array.from(priceCheckboxes).filter(c => c.checked).map(c => c.value);
        updateGrid();
      }));
      ratingCheckboxes.forEach(cb => cb.addEventListener('change', () => {
        filters.rating = Array.from(ratingCheckboxes).find(c => c.checked)?.value ? 4 : null;
        updateGrid();
      }));
      updateGrid();
    }
  }
  // setupCategoryGrid('electronics', 'electronics-grid', 'electronics-sort', 'electronics-instock'); // Moved to fetchProducts
  // setupCategoryGrid('home', 'home-grid', 'home-sort', 'home-instock'); // Moved to fetchProducts
  // setupCategoryGrid('appliances', 'appliances-grid', 'appliances-sort', 'appliances-instock'); // Moved to fetchProducts

  // --- Wishlist Interactivity ---
  document.body.addEventListener('click', e => {
    if (e.target.classList.contains('wishlist-btn')) {
      const id = +e.target.dataset.id;
      if (wishlist.includes(id)) wishlist = wishlist.filter(w => w !== id);
      else wishlist.push(id);
      // Animate heart
      e.target.classList.add('wishlist-anim');
      setTimeout(() => e.target.classList.remove('wishlist-anim'), 400);
      // Re-render all grids
      renderCategoryGrid('electronics', 'electronics-grid');
      renderCategoryGrid('home', 'home-grid');
      renderCategoryGrid('appliances', 'appliances-grid');
      renderWishlist();
    }
    if (e.target.id === 'open-wishlist') {
      const wishlistModal = document.getElementById('wishlist-modal');
      if (wishlistModal) {
        wishlistModal.classList.remove('hidden');
        renderWishlist();
        document.body.style.overflow = 'hidden';
      }
    }
    if (e.target.closest('.close-modal')) {
      const modal = e.target.closest('.modal');
      if (modal) {
        modal.classList.add('hidden');
        document.body.style.overflow = '';
      }
    }
  });
  function renderWishlist() {
    const wishlistDiv = document.getElementById('wishlist-items');
    if (!wishlistDiv) return;
    wishlistDiv.innerHTML = '';
    if (!wishlist.length) {
      wishlistDiv.innerHTML = '<p>Your wishlist is empty.</p>';
      return;
    }
    wishlist.forEach(id => {
      const product = products.find(p => p.id === id);
      if (!product) return;
      const card = document.createElement('div');
      card.className = 'product-card';
      card.innerHTML = `
        <div class="product-img-wrap">
          <img src="${product.image}" alt="${product.name}" />
          <button class="wishlist-remove-btn" data-id="${product.id}" aria-label="Remove from wishlist">&times;</button>
        </div>
        <div class="product-info">
          <h3>${product.name}</h3>
          <div class="product-rating">${renderStars(product.rating)} <span class="review-count">(${product.reviews})</span></div>
          <div class="product-price">₹${product.price.toLocaleString()}</div>
          <button class="add-cart-btn" data-id="${product.id}">Add to Cart</button>
        </div>
      `;
      wishlistDiv.appendChild(card);
    });
  }

  // Add event listener for wishlist remove
  document.body.addEventListener('click', e => {
    if (e.target.classList.contains('wishlist-remove-btn')) {
      const id = +e.target.dataset.id;
      wishlist = wishlist.filter(w => w !== id);
      renderWishlist();
      // Also update product grids
      renderCategoryGrid('electronics', 'electronics-grid');
      renderCategoryGrid('home', 'home-grid');
      renderCategoryGrid('appliances', 'appliances-grid');
    }
  });

  // Add event listener for wishlist remove all
  document.body.addEventListener('click', e => {
    if (e.target.classList.contains('wishlist-remove-all-btn')) {
      wishlist = [];
      renderWishlist();
      renderCategoryGrid('electronics', 'electronics-grid');
      renderCategoryGrid('home', 'home-grid');
      renderCategoryGrid('appliances', 'appliances-grid');
    }
  });

  // --- Open Wishlist Modal from Navbar (add a button in your navbar HTML with id='open-wishlist') ---
  // (If not present, add: <button id="open-wishlist" class="nav-login-btn">Wishlist</button> in the navbar)

  // --- Reviews in Quick View Modal ---
  const demoReviews = [
    { user: 'Priya S.', rating: 5, text: 'Amazing product! Highly recommend.' },
    { user: 'Rahul M.', rating: 4, text: 'Good value for money.' },
    { user: 'Emily T.', rating: 5, text: 'Exceeded my expectations.' },
  ];
  function renderReviews() {
    const reviewsDiv = document.getElementById('reviews-section');
    if (!reviewsDiv) return;
    reviewsDiv.innerHTML = '<h3>Customer Reviews</h3>' + demoReviews.map(r => `
      <div class="review-card">
        <div class="review-user">${r.user}</div>
        <div class="review-stars">${renderStars(r.rating)}</div>
        <div class="review-text">${r.text}</div>
      </div>
    `).join('');
  }

  // --- Mini Cart Preview ---
  const miniCart = document.getElementById('mini-cart');
  const cartIcon = document.getElementById('cart-icon');
  if (miniCart && cartIcon) {
    cartIcon.addEventListener('mouseenter', () => {
      if (!cart.length) return;
      miniCart.innerHTML = cart.map(item => {
        const prod = products.find(p => p.id === item.id);
        return `<div class='mini-cart-item'><img src='${prod.image}' alt='${prod.name}' /><span>${prod.name}</span> <span>₹${prod.price} x ${item.qty}</span></div>`;
      }).join('') + `<div class='mini-cart-total'>Total: ₹${cart.reduce((t, i) => t + products.find(p => p.id === i.id).price * i.qty, 0)}</div>`;
      miniCart.classList.remove('hidden');
    });
    cartIcon.addEventListener('mouseleave', () => {
      miniCart.classList.add('hidden');
    });
  }

  // --- Cart Enhancements ---
  const removeAllBtn = document.querySelector('.remove-all-btn');
  const continueShoppingBtn = document.querySelector('.continue-shopping-btn');
  if (removeAllBtn) {
    removeAllBtn.addEventListener('click', () => {
      cart = [];
      updateCart();
    });
  }
  if (continueShoppingBtn) {
    continueShoppingBtn.addEventListener('click', () => {
      const cartSidebar = document.getElementById('cart-sidebar');
      if (cartSidebar) {
        cartSidebar.classList.add('hidden');
        document.body.style.overflow = '';
      }
    });
  }

  // --- Animate Add to Cart ---
  document.body.addEventListener('click', e => {
    if (e.target.classList.contains('add-cart-btn')) {
      e.target.classList.add('cart-anim');
      setTimeout(() => e.target.classList.remove('cart-anim'), 400);
    }
  });

  // --- Quick View Modal: Render reviews when opened ---
  if (productGrid) {
    productGrid.addEventListener('click', e => {
      if (e.target.classList.contains('quick-view-btn')) {
        renderReviews();
      }
    });
  }

  // --- Homepage Product Grid: Sorting and Quick View (improved) ---
  const homepageSort = document.getElementById('homepage-sort');
  const homepageGrid = document.querySelector('.product-grid');
  let currentHomepageFilter = 'all';
  let currentHomepageSort = 'default';
  if (homepageSort) {
    if (homepageGrid) {
      function renderHomepageProducts(sort = 'default', filter = 'all') {
        let filtered = filter === 'all' ? products.slice() : products.filter(p => p.category === filter);
        if (sort === 'price-asc') filtered.sort((a, b) => a.price - b.price);
        else if (sort === 'price-desc') filtered.sort((a, b) => b.price - a.price);
        else if (sort === 'rating') filtered.sort((a, b) => b.rating - a.rating);
        else if (sort === 'newest') filtered.sort((a, b) => b.id - a.id);
        homepageGrid.innerHTML = '';
        filtered.forEach(product => {
          const outOfStock = product.badge === 'Out of Stock';
          const badge = product.badge ? `<span class="product-badge ${outOfStock ? 'badge-out' : 'badge-new'}">${product.badge}</span>` : '';
          const card = document.createElement('div');
          card.className = 'product-card';
          card.innerHTML = `
            <div class="product-img-wrap">
              <img src="${product.image}" alt="${product.name}" />
              ${badge}
            </div>
            <div class="product-info">
              <h3>${product.name}</h3>
              <div class="product-rating">${renderStars(product.rating)} <span class="review-count">(${product.reviews})</span></div>
              <p class="product-desc">${product.desc}</p>
              <div class="product-price">₹${product.price.toLocaleString()}</div>
              <div class="product-actions">
                <a href="product-details.html?id=${product.id}" class="quick-view-btn" ${outOfStock ? 'aria-disabled="true" tabindex="-1"' : ''}>Quick View</a>
                <button class="add-cart-btn" data-id="${product.id}" ${outOfStock ? 'disabled' : ''}>Add to Cart</button>
              </div>
            </div>
          `;
          homepageGrid.appendChild(card);
        });
      }
      // Initial render
      // renderHomepageProducts(); // Moved to fetchProducts
      // Sorting
      homepageSort.addEventListener('change', e => {
        currentHomepageSort = e.target.value;
        renderHomepageProducts(currentHomepageSort, currentHomepageFilter);
      });
      // Filtering
      document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', e => {
          document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          currentHomepageFilter = btn.dataset.category;
          renderHomepageProducts(currentHomepageSort, currentHomepageFilter);
        });
      });
      // Quick View for homepage (Flipkart-style)
      homepageGrid.addEventListener('click', e => {
        if (e.target.classList.contains('quick-view-btn')) {
          const id = +e.target.dataset.id;
          const prod = products.find(p => p.id === id);
          const quickViewModal = document.getElementById('quick-view-modal');
          const quickViewBody = quickViewModal ? quickViewModal.querySelector('.modal-body') : null;
          if (quickViewModal && quickViewBody) {
            quickViewBody.innerHTML = `
              <div style="display:flex;flex-wrap:wrap;gap:2rem;align-items:flex-start;justify-content:center;max-width:600px;margin:auto;">
                <div style="flex:1;min-width:180px;text-align:center;">
                  <img src="${prod.image}" alt="${prod.name}" style="width:100%;max-width:220px;border-radius:10px;box-shadow:0 2px 10px rgba(0,0,0,0.07);margin-bottom:1rem;background:#f8f9fc;" />
                  ${prod.badge ? `<div style='margin-top:0.5rem;'><span class='product-badge ${prod.badge === 'Out of Stock' ? 'badge-out' : 'badge-new'}'>${prod.badge}</span></div>` : ''}
                </div>
                <div style="flex:2;min-width:220px;">
                  <h2 style="color:#004aad;font-size:1.5rem;margin-bottom:0.5rem;">${prod.name}</h2>
                  <div style="margin-bottom:0.5rem;">${renderStars(prod.rating)} <span class="review-count">(${prod.reviews} ratings)</span></div>
                  <div class="product-price" style="font-size:1.3rem;margin-bottom:0.7rem;">₹${prod.price.toLocaleString()}</div>
                  <p style="margin-bottom:1.2rem;color:#444;">${prod.desc}</p>
                  <button class="add-cart-btn" data-id="${prod.id}" style="margin-bottom:1rem;">Add to Cart</button>
                  <div style="margin-top:1.2rem;">
                    <strong>Highlights:</strong>
                    <ul style="margin:0.5rem 0 0 1.2rem;padding:0;font-size:0.98rem;color:#333;">
                      <li>100% Genuine Product</li>
                      <li>Fast Delivery & Easy Returns</li>
                      <li>Secure Payment Options</li>
                    </ul>
                  </div>
                </div>
              </div>
              <hr style="margin:1.5rem 0;">
              <div style="margin-bottom:1rem;">
                <h3 style="font-size:1.1rem;color:#004aad;margin-bottom:0.5rem;">Customer Reviews</h3>
                ${demoReviews.map(r => `
                  <div class="review-card" style="margin-bottom:0.7rem;">
                    <div class="review-user" style="font-weight:600;">${r.user}</div>
                    <div class="review-stars">${renderStars(r.rating)}</div>
                    <div class="review-text" style="color:#444;">${r.text}</div>
                  </div>
                `).join('')}
              </div>
            `;
            quickViewModal.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
          }
        }
      });
      renderHomepageProducts();
      renderCategoryGrid('electronics', 'electronics-grid');
      renderCategoryGrid('home', 'home-grid');
      renderCategoryGrid('appliances', 'appliances-grid');
    }
  }
});

function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem('fusionmart_cart') || '[]');
  const count = cart.reduce((sum, item) => sum + item.qty, 0);
  document.querySelectorAll('.cart-count').forEach(el => el.textContent = count);
}
updateCartCount();

// Update cart count after add/remove
function handleAddToCartClick(e) {
  if (e.target.classList.contains('add-cart-btn')) {
    const id = +e.target.dataset.id;
    let cart = JSON.parse(localStorage.getItem('fusionmart_cart') || '[]');
    const existing = cart.find(item => item.id === id);
    if (existing) existing.qty++;
    else cart.push({ id, qty: 1 });
    localStorage.setItem('fusionmart_cart', JSON.stringify(cart));
    updateCartCount();
    window.location.href = 'cart.html';
  }
}
document.body.addEventListener('click', handleAddToCartClick);

// Listen for cart changes (removal, quantity change)
window.addEventListener('storage', updateCartCount);

// Also update cart count after cart actions on cart.html
if (window.location.pathname.endsWith('cart.html')) {
  document.addEventListener('DOMContentLoaded', function() {
    const cartList = document.getElementById('cart-list');
    if (cartList) {
      cartList.addEventListener('click', function(e) {
        setTimeout(updateCartCount, 100);
      });
    }
    const placeOrderBtn = document.getElementById('place-order-btn');
    if (placeOrderBtn) {
      placeOrderBtn.addEventListener('click', function() {
        setTimeout(updateCartCount, 100);
      });
    }
  });
}

// --- USER NAVBAR LOGIC ---
async function updateNavbarUser() {
  const email = localStorage.getItem('fusionmart_user_email');
  const loginBtn = document.querySelector('.nav-login-btn');
  if (!loginBtn) return;
  if (!email) {
    loginBtn.style.display = '';
    loginBtn.textContent = 'Login';
    loginBtn.href = 'login.html';
    return;
  }
  // Fetch user details from backend
  try {
    const res = await fetch('http://localhost:8080/api/users');
    if (!res.ok) throw new Error('Failed to fetch users');
    const users = await res.json();
    const user = users.find(u => u.email === email);
    if (user && user.fullName) {
      // Create dropdown for user
      loginBtn.textContent = user.fullName;
      loginBtn.href = '#';
      loginBtn.style.cursor = 'pointer';
      loginBtn.classList.add('user-dropdown-btn');
      // Remove any existing dropdown
      let existingDropdown = document.getElementById('user-dropdown');
      if (existingDropdown) existingDropdown.remove();
      // Find the container
      const container = loginBtn.closest('.user-dropdown-container') || loginBtn.parentElement;
      container.style.position = 'relative';
      // Create dropdown
      const dropdown = document.createElement('div');
      dropdown.id = 'user-dropdown';
      dropdown.style.position = 'absolute';
      dropdown.style.top = '100%';
      dropdown.style.right = '0';
      dropdown.style.background = '#fff';
      dropdown.style.boxShadow = '0 2px 10px rgba(0,0,0,0.08)';
      dropdown.style.borderRadius = '8px';
      dropdown.style.minWidth = '120px';
      dropdown.style.zIndex = '1001';
      dropdown.style.display = 'none';
      dropdown.innerHTML = `<a href="#" id="logout-link" style="display:block;padding:12px 18px;color:#004aad;text-decoration:none;font-weight:500;">Logout</a>`;
      container.appendChild(dropdown);
      // Show/hide dropdown on click
      loginBtn.onclick = function(e) {
        e.preventDefault();
        // Hide any other open dropdowns
        document.querySelectorAll('#user-dropdown').forEach(d => { if (d !== dropdown) d.style.display = 'none'; });
        dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
      };
      // Hide dropdown when clicking outside
      document.addEventListener('click', function handler(event) {
        if (!container.contains(event.target)) {
          dropdown.style.display = 'none';
          document.removeEventListener('click', handler);
        }
      });
      // Logout logic
      dropdown.querySelector('#logout-link').onclick = function(e) {
        e.preventDefault();
        localStorage.removeItem('fusionmart_jwt');
        localStorage.removeItem('fusionmart_user_email');
        window.location.reload();
      };
    } else {
      loginBtn.textContent = email;
      loginBtn.href = '#';
    }
  } catch (e) {
    loginBtn.textContent = email;
    loginBtn.href = '#';
  }
}
document.addEventListener('DOMContentLoaded', updateNavbarUser); 