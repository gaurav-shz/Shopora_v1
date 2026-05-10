// ── PRODUCT DETAIL PAGE LOGIC ──

let currentProduct = null;
let currentQty = 1;

// ── GET PRODUCT ID FROM URL ──
function getProductId() {
  const params = new URLSearchParams(window.location.search);
  return parseInt(params.get("id")) || 1;
}

// ── INIT PAGE ──
function initProductDetail() {
  const id = getProductId();
  currentProduct = PRODUCTS.find(p => p.id === id);

  if (!currentProduct) {
    document.body.innerHTML = `
      <div style="text-align:center;padding:80px 24px;color:#f1f0ee">
        <h2>Product not found</h2>
        <a href="../index.html" style="color:#f97316">← Back to Home</a>
      </div>`;
    return;
  }

  renderProductDetail(currentProduct);
}

// ── RENDER ALL SECTIONS ──
function renderProductDetail(p) {
  document.title = `${p.name} – Shopora`;

  document.getElementById("breadcrumbName").textContent = p.name;

  const mainImg = document.getElementById("mainImg");
  mainImg.src = p.image;
  mainImg.alt = p.name;

  // Thumbnails
  const thumbStrip = document.getElementById("thumbStrip");
  thumbStrip.innerHTML = p.thumbs.map((t, i) => `
    <div class="thumb ${i === 0 ? "active" : ""}" onclick="switchThumb(this)">
      ${t}
    </div>
  `).join("");

  // Badge
  const badge = document.getElementById("detailBadge");
  badge.className = `prod-badge ${p.badge}`;
  badge.textContent = p.badge === "b-hot"  ? "🔥 Hot Deal"
    : p.badge === "b-new"  ? "✨ New"
    : p.badge === "b-sale" ? `${p.off}% OFF`
    : "⚡ Fast";

  // Brand & Category
  document.getElementById("detailBrand").textContent    = p.brand;
  document.getElementById("detailCategory").textContent = p.category;
  document.getElementById("detailName").textContent     = p.name;

  // Rating
  document.getElementById("detailStars").textContent   = "★".repeat(Math.floor(p.rating)) + (p.rating % 1 >= 0.5 ? "½" : "");
  document.getElementById("detailRating").textContent  = p.rating;
  document.getElementById("detailReviews").textContent = `${p.reviews.toLocaleString()} reviews`;

  // Price
  document.getElementById("detailPrice").textContent = `₹${p.price.toLocaleString()}`;
  document.getElementById("detailWas").textContent   = `₹${p.was.toLocaleString()}`;
  document.getElementById("detailOff").textContent   = `${p.off}% OFF`;

  // Highlights
  document.getElementById("highlightsList").innerHTML =
    p.highlights.map(h => `<li>${h}</li>`).join("");

  // Description tab
  document.getElementById("descText").textContent = p.description;

  // Specs tab
  document.getElementById("specsGrid").innerHTML =
    p.specs.map(s => `
      <div class="spec-row">
        <span class="spec-key">${s.key}</span>
        <span class="spec-val">${s.val}</span>
      </div>
    `).join("");

  // Reviews tab
  document.getElementById("reviewsList").innerHTML =
    p.userReviews.map(r => `
      <div class="review-card">
        <div class="review-top">
          <div>
            <div class="reviewer-name">${r.name}</div>
            <div class="review-stars">${"★".repeat(r.stars)}${"☆".repeat(5 - r.stars)}</div>
          </div>
          <div class="review-date">${r.date}</div>
        </div>
        <div class="review-text">${r.text}</div>
        ${r.verified ? `<div class="review-verified"><i class='bx bx-check-circle'></i> Verified Purchase</div>` : ""}
      </div>
    `).join("");

  // Price Comparison
  renderComparison(p);
}

// ── PRICE COMPARISON ──
function renderComparison(p) {
  const list = document.getElementById("compareList");
  const sorted = [...p.platforms].sort((a, b) => a.price - b.price);
  const lowestPrice = sorted[0].price;
  const highestPrice = sorted[sorted.length - 1].price;

  list.innerHTML = sorted.map((plat, i) => {
    const isBest = i === 0;
    const isShopora = plat.name === "Shopora";
    const barWidth = 100 - Math.round(((plat.price - lowestPrice) / (highestPrice - lowestPrice + 1)) * 60);
    const savings = plat.price - lowestPrice;

    return `
      <div class="compare-row ${isBest ? "best-deal" : ""}"
           onclick="goToPlatform('${plat.url}', '${plat.name}')">

        <div class="plat-logo" style="background:${plat.color}22">
          ${plat.emoji}
        </div>

        <div style="flex:1;min-width:0">
          <div style="display:flex;align-items:center;gap:6px">
            <span class="plat-name">${plat.name}</span>
            ${isBest ? `<span class="best-tag">Best Price</span>` : ""}
            ${!plat.trusted ? `<span style="font-size:10px;color:#f97316;background:rgba(249,115,22,.1);padding:2px 6px;border-radius:99px">Unverified</span>` : ""}
          </div>
          <div class="plat-delivery">🚚 ${plat.delivery}</div>
          <div class="compare-bar-wrap" style="margin-top:6px">
            <div class="compare-bar-bg">
              <div class="compare-bar-fill"
                   style="width:0%;background:${plat.color}"
                   data-width="${barWidth}%">
              </div>
            </div>
          </div>
        </div>

        <div style="text-align:right;flex-shrink:0">
          <div class="plat-price" style="color:${isBest ? "var(--accent4)" : "var(--text)"}">
            ₹${plat.price.toLocaleString()}
          </div>
          ${savings > 0
            ? `<div style="font-size:10px;color:var(--muted)">₹${savings.toLocaleString()} more</div>`
            : `<div style="font-size:10px;color:var(--accent4)">Lowest ✓</div>`}
        </div>

        <i class='bx ${isShopora ? "bx-cart-add" : "bx-link-external"} go-icon'></i>
      </div>
    `;
  }).join("");

  // Animate bars after render
  setTimeout(() => {
    document.querySelectorAll(".compare-bar-fill").forEach(bar => {
      bar.style.width = bar.dataset.width;
      bar.style.transition = "width 1s ease";
    });
  }, 100);
}

// ── PLATFORM CLICK ──
function goToPlatform(url, name) {
  if (url === "#" || name === "Shopora") {
    addToCartDetail();
    return;
  }
  // Open affiliate link in new tab
  window.open(url, "_blank");
}

// ── THUMBNAIL SWITCH ──
function switchThumb(el) {
  document.querySelectorAll(".thumb").forEach(t => t.classList.remove("active"));
  el.classList.add("active");
}

// ── QUANTITY ──
function changeQty(delta) {
  currentQty = Math.max(1, currentQty + delta);
  document.getElementById("qtyNum").textContent = currentQty;
}

// ── ADD TO CART ──
function addToCartDetail() {
  if (!currentProduct) return;
  let cart = JSON.parse(localStorage.getItem("shopora_cart") || "[]");
  const existing = cart.find(x => x.id === currentProduct.id);
  if (existing) {
    existing.qty += currentQty;
  } else {
    cart.push({ ...currentProduct, qty: currentQty });
  }
  localStorage.setItem("shopora_cart", JSON.stringify(cart));
  updateCartBadge();
  showToast(`✓ ${currentProduct.name} added to cart!`);
}

// ── BUY NOW ──
function buyNow() {
  addToCartDetail();
  window.location.href = "cart.html";
}

// ── WISHLIST ──
function toggleWishDetail(btn) {
  btn.classList.toggle("wished");
  showToast(btn.classList.contains("wished")
    ? "♥ Added to Wishlist!"
    : "Removed from Wishlist");
}

// ── TABS ──
function switchTab(btn, tabId) {
  document.querySelectorAll(".desc-tab").forEach(t => t.classList.remove("active"));
  document.querySelectorAll(".desc-content").forEach(c => c.classList.add("hidden"));
  btn.classList.add("active");
  document.getElementById(tabId).classList.remove("hidden");
}

// ── CART BADGE ──
function updateCartBadge() {
  const cart = JSON.parse(localStorage.getItem("shopora_cart") || "[]");
  const total = cart.reduce((s, i) => s + i.qty, 0);
  const badge = document.getElementById("cartCount");
  if (badge) badge.textContent = total;
}

// ── TOAST ──
function showToast(msg) {
  const toast = document.getElementById("toast");
  toast.textContent = msg;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2500);
}

// ── START ──
updateCartBadge();
initProductDetail();