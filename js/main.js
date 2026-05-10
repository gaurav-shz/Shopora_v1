// ── SHOPORA MAIN.JS ──

// ── DATA ──
const catNav = [
  { icon: "bx bx-category",  label: "All"         },
  { icon: "bx bx-devices",   label: "Electronics" },
  { icon: "bx bx-shirt",     label: "Fashion"     },
  { icon: "bx bx-leaf",      label: "Groceries"   },
  { icon: "bx bx-first-aid", label: "Health"      },
  { icon: "bx bx-home-alt",  label: "Home"        },
  { icon: "bx bx-dumbbell",  label: "Sports"      },
  { icon: "bx bx-book",      label: "Books"       },
  { icon: "bx bx-car",       label: "Auto"        },
  { icon: "bx bx-spa",       label: "Beauty"      },
  { icon: "bx bx-cube",      label: "Toys"        },
];

const categories = [
  { icon: "📱", label: "Electronics",   color: "#06b6d4", bg: "rgba(6,182,212,.1)"  },
  { icon: "👕", label: "Fashion",       color: "#a855f7", bg: "rgba(168,85,247,.1)" },
  { icon: "🥦", label: "Groceries",     color: "#22c55e", bg: "rgba(34,197,94,.1)"  },
  { icon: "💊", label: "Health",        color: "#f43f5e", bg: "rgba(244,63,94,.1)"  },
  { icon: "🛋️", label: "Home",          color: "#f97316", bg: "rgba(249,115,22,.1)" },
  { icon: "🏋️", label: "Sports",        color: "#06b6d4", bg: "rgba(6,182,212,.1)"  },
  { icon: "📚", label: "Books",         color: "#facc15", bg: "rgba(250,204,21,.1)" },
  { icon: "🚗", label: "Automotive",    color: "#a855f7", bg: "rgba(168,85,247,.1)" },
  { icon: "💄", label: "Beauty",        color: "#f43f5e", bg: "rgba(244,63,94,.1)"  },
  { icon: "🧸", label: "Toys",          color: "#f97316", bg: "rgba(249,115,22,.1)" },
  { icon: "🍼", label: "Baby",          color: "#22c55e", bg: "rgba(34,197,94,.1)"  },
  { icon: "🐾", label: "Pets",          color: "#facc15", bg: "rgba(250,204,21,.1)" },
];

const groceries = [
  { icon: "🥛", name: "Dairy",         time: "8 min"  },
  { icon: "🥦", name: "Vegetables",    time: "10 min" },
  { icon: "🍞", name: "Bakery",        time: "9 min"  },
  { icon: "🥤", name: "Beverages",     time: "7 min"  },
  { icon: "🧴", name: "Personal Care", time: "10 min" },
  { icon: "🍫", name: "Snacks",        time: "8 min"  },
  { icon: "🥚", name: "Eggs",          time: "6 min"  },
  { icon: "🌾", name: "Staples",       time: "10 min" },
];

// ── CART ──
function getCart() {
  return JSON.parse(localStorage.getItem("shopora_cart") || "[]");
}
function saveCart(cart) {
  localStorage.setItem("shopora_cart", JSON.stringify(cart));
}
function updateCartBadge() {
  const total = getCart().reduce((s, i) => s + i.qty, 0);
  const badge = document.getElementById("cartCount");
  if (badge) badge.textContent = total;
}
function addToCart(id, e) {
  if (e) e.stopPropagation();
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;
  const cart = getCart();
  const existing = cart.find(x => x.id === id);
  if (existing) existing.qty++;
  else cart.push({ ...p, qty: 1 });
  saveCart(cart);
  updateCartBadge();
  showToast(`✓ ${p.name} added to cart!`);
}

// ── TOAST ──
function showToast(msg) {
  let t = document.getElementById("toast");
  if (!t) {
    t = document.createElement("div");
    t.id = "toast";
    t.className = "toast";
    document.body.appendChild(t);
  }
  t.textContent = msg;
  t.classList.add("show");
  setTimeout(() => t.classList.remove("show"), 2500);
}

// ── WISHLIST ──
function toggleWish(el, e) {
  if (e) e.stopPropagation();
  el.classList.toggle("wished");
  el.style.color = el.classList.contains("wished") ? "#ef4444" : "";
  showToast(el.classList.contains("wished") ? "♥ Added to Wishlist!" : "Removed from Wishlist");
}

// ── GO TO PRODUCT ──
function goToProduct(id) {
  window.location.href = `pages/product-detail.html?id=${id}`;
}

// ── RENDER: CATEGORY NAV STRIP ──
function renderCatStrip() {
  const strip = document.getElementById("catStrip");
  if (!strip) return;
  strip.innerHTML = catNav.map((c, i) => `
    <div class="cat-pill ${i === 0 ? "active" : ""}"
         onclick="filterCat(this, '${c.label}')">
      <i class='${c.icon}'></i> ${c.label}
    </div>
  `).join("");
}

function filterCat(el, label) {
  document.querySelectorAll(".cat-pill").forEach(p => p.classList.remove("active"));
  el.classList.add("active");
  if (label === "All") {
    renderProducts(PRODUCTS, "trendingGrid");
  } else {
    const filtered = PRODUCTS.filter(p => p.category === label);
    renderProducts(filtered.length ? filtered : PRODUCTS, "trendingGrid");
  }
}

// ── RENDER: QUICK CATS ──
function renderQuickCats() {
  const el = document.getElementById("quickCats");
  if (!el) return;
  el.innerHTML = categories.map(c => `
    <div class="q-cat" onclick="filterCat(document.querySelector('.cat-pill'), '${c.label}')">
      <div class="q-cat-icon" style="background:${c.bg};color:${c.color}">${c.icon}</div>
      <span>${c.label}</span>
    </div>
  `).join("");
}

// ── RENDER: PRODUCTS ──
function renderProducts(data, containerId) {
  const el = document.getElementById(containerId);
  if (!el) return;

  if (!data || data.length === 0) {
    el.innerHTML = `<div style="color:var(--muted);font-size:14px;padding:20px 0">No products found.</div>`;
    return;
  }

  el.innerHTML = data.map(p => {
    // Find best platform price
    const sorted = [...p.platforms].sort((a, b) => a.price - b.price);
    const best = sorted[0];
    const isBestShopora = best.name === "Shopora";

    return `
      <div class="prod-card" onclick="goToProduct(${p.id})">
        <div class="prod-img">
          <span class="prod-img-emoji">
            <img src="${p.image}" alt="${p.name}"
              style="width:85%;height:85%;object-fit:contain"
              onerror="this.style.display='none';this.nextElementSibling.style.display='block'"/>
            <span style="display:none;font-size:56px">${p.thumbs[0]}</span>
          </span>
          <span class="prod-badge ${p.badge}">
            ${p.badge === "b-hot"  ? "🔥 Hot"
            : p.badge === "b-new"  ? "✨ New"
            : p.badge === "b-fast" ? "⚡ Fast"
            : p.off + "% OFF"}
          </span>
          <div class="prod-wish" onclick="toggleWish(this, event)">
            <i class='bx bx-heart'></i>
          </div>
          <div class="compare-mini">
            <span class="compare-mini-label">Best price:</span>
            <span class="compare-mini-best">
              ${isBestShopora ? "✓ Here!" : best.name + " ₹" + best.price.toLocaleString()}
            </span>
          </div>
        </div>
        <div class="prod-info">
          <div class="prod-brand">${p.brand}</div>
          <div class="prod-name">${p.name}</div>
          <div class="prod-rating">
            <span class="stars">${"★".repeat(Math.floor(p.rating))}${"☆".repeat(5 - Math.floor(p.rating))}</span>
            <span class="rcount">${p.reviews.toLocaleString()}</span>
          </div>
          <div class="prod-price">
            <span class="price-now">₹${p.price.toLocaleString()}</span>
            <span class="price-was">₹${p.was.toLocaleString()}</span>
            <span class="price-off">${p.off}% off</span>
          </div>
          <button class="add-cart" onclick="addToCart(${p.id}, event)">
            <i class='bx bx-cart-add'></i> Add to Cart
          </button>
        </div>
      </div>
    `;
  }).join("");
}

// ── RENDER: GROCERY ──
function renderGrocery() {
  const el = document.getElementById("groceryStrip");
  if (!el) return;
  el.innerHTML = groceries.map(g => `
    <div class="groc-card">
      <div class="groc-icon">${g.icon}</div>
      <div class="groc-name">${g.name}</div>
      <div class="groc-time">⚡ ${g.time}</div>
    </div>
  `).join("");
}

// ── COUNTDOWN TIMER ──
function renderCountdown() {
  const el = document.getElementById("countdown");
  if (!el) return;
  const end = new Date();
  end.setHours(23, 59, 59, 0);
  function tick() {
    const diff = Math.max(0, end - new Date());
    const h = String(Math.floor(diff / 3600000)).padStart(2, "0");
    const m = String(Math.floor((diff % 3600000) / 60000)).padStart(2, "0");
    const s = String(Math.floor((diff % 60000) / 1000)).padStart(2, "0");
    el.innerHTML = `
      <div class="timer-box"><div class="t">${h}</div><div class="l">HRS</div></div>
      <div class="timer-box"><div class="t">${m}</div><div class="l">MIN</div></div>
      <div class="timer-box"><div class="t">${s}</div><div class="l">SEC</div></div>
    `;
  }
  tick();
  setInterval(tick, 1000);
}

// ── SEARCH ──
document.getElementById("searchInput")?.addEventListener("keydown", e => {
  if (e.key === "Enter") {
    const q = e.target.value.trim().toLowerCase();
    if (!q) return;
    const results = PRODUCTS.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.brand.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q)
    );
    renderProducts(results.length ? results : PRODUCTS, "trendingGrid");
    document.getElementById("trendingGrid")
      ?.scrollIntoView({ behavior: "smooth" });
  }
});

// ── INIT ──
renderCatStrip();
renderQuickCats();
renderProducts(PRODUCTS, "trendingGrid");
renderGrocery();
renderCountdown();
updateCartBadge();