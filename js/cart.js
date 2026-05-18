// ── SHOPORA CART.JS ──

// ── LOAD CART FROM STORAGE ──
function getCart() {
  return JSON.parse(localStorage.getItem("shopora_cart") || "[]");
}
function saveCart(cart) {
  localStorage.setItem("shopora_cart", JSON.stringify(cart));
}

// ── UPDATE CART BADGE ──
function updateCartBadge() {
  const total = getCart().reduce((s, i) => s + i.qty, 0);
  const badge = document.getElementById("cartCount");
  if (badge) badge.textContent = total;
}

// ── RENDER CART ITEMS ──
function renderCart() {
  const cart = getCart();
  const list  = document.getElementById("cartItemsList");
  const empty = document.getElementById("cartEmpty");
  const countLbl = document.getElementById("itemCount");

  if (!list) return;

  if (cart.length === 0) {
    list.innerHTML = "";
    if (empty) empty.style.display = "block";
    if (countLbl) countLbl.textContent = "0 items";
    renderSummary([]);
    document.getElementById("compareNudge") && (document.getElementById("compareNudge").style.display = "none");
    return;
  }

  if (empty) empty.style.display = "none";
  if (countLbl) countLbl.textContent = `${cart.length} item${cart.length > 1 ? "s" : ""}`;

  list.innerHTML = cart.map((item, idx) => `
    <div class="cart-item" id="cartItem${idx}">
      <div class="cart-item-check">
        <input type="checkbox" class="item-check" data-idx="${idx}" onchange="updateSelectAll()"/>
      </div>
      <div class="cart-item-img">
        <img src="${item.image}" alt="${item.name}"
          style="width:100%;height:100%;object-fit:contain"
          onerror="this.style.display='none'"/>
      </div>
      <div class="cart-item-info">
        <div class="cart-item-brand">${item.brand}</div>
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-price">
          <span class="price-now">₹${item.price.toLocaleString()}</span>
          <span class="price-was">₹${item.was.toLocaleString()}</span>
          <span class="price-off">${item.off}% off</span>
        </div>
        <div class="cart-item-actions">
          <div class="qty-control">
            <button onclick="changeQty(${idx}, -1)">−</button>
            <span id="qty${idx}">${item.qty}</span>
            <button onclick="changeQty(${idx}, +1)">+</button>
          </div>
          <button class="remove-btn" onclick="removeItem(${idx})">
            <i class='bx bx-trash'></i> Remove
          </button>
          <button class="wish-btn" onclick="moveToWishlist(${idx})">
            <i class='bx bx-heart'></i> Wishlist
          </button>
        </div>
      </div>
    </div>
  `).join("");

  renderSummary(cart);
  renderSuggested(cart);
  checkCompareNudge(cart);
}

// ── CHANGE QUANTITY ──
function changeQty(idx, delta) {
  const cart = getCart();
  cart[idx].qty = Math.max(1, cart[idx].qty + delta);
  saveCart(cart);
  renderCart();
  updateCartBadge();
}

// ── REMOVE ITEM ──
function removeItem(idx) {
  const cart = getCart();
  cart.splice(idx, 1);
  saveCart(cart);
  renderCart();
  updateCartBadge();
  showToast("Item removed from cart");
}

// ── MOVE TO WISHLIST ──
function moveToWishlist(idx) {
  removeItem(idx);
  showToast("♥ Moved to Wishlist!");
}

// ── SELECT ALL ──
function toggleSelectAll(cb) {
  document.querySelectorAll(".item-check").forEach(c => c.checked = cb.checked);
}
function updateSelectAll() {
  const all   = document.querySelectorAll(".item-check");
  const checked = document.querySelectorAll(".item-check:checked");
  const sa = document.getElementById("selectAll");
  if (sa) sa.checked = all.length > 0 && all.length === checked.length;
}

// ── REMOVE SELECTED ──
function removeSelected() {
  const checked = [...document.querySelectorAll(".item-check:checked")].map(c => parseInt(c.dataset.idx));
  if (checked.length === 0) { showToast("No items selected"); return; }
  let cart = getCart();
  cart = cart.filter((_, i) => !checked.includes(i));
  saveCart(cart);
  renderCart();
  updateCartBadge();
  showToast(`${checked.length} item(s) removed`);
}

// ── RENDER SUMMARY ──
function renderSummary(cart) {
  const rows  = document.getElementById("summaryRows");
  const total = document.getElementById("summaryTotal");
  if (!rows || !total) return;

  const subtotal  = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const savings   = cart.reduce((s, i) => s + (i.was - i.price) * i.qty, 0);
  const delivery  = subtotal >= 499 ? 0 : 49;
  const finalTotal = subtotal + delivery;

  rows.innerHTML = `
    <div class="summary-row"><span>Subtotal (${cart.reduce((s,i)=>s+i.qty,0)} items)</span><span>₹${subtotal.toLocaleString()}</span></div>
    <div class="summary-row" style="color:var(--accent4)"><span>You Save</span><span>−₹${savings.toLocaleString()}</span></div>
    <div class="summary-row"><span>Delivery</span><span>${delivery === 0 ? '<span style="color:var(--accent4)">FREE</span>' : "₹" + delivery}</span></div>
  `;
  total.textContent = `₹${finalTotal.toLocaleString()}`;
}

// ── APPLY COUPON ──
function applyCoupon() {
  const code = document.getElementById("couponInput")?.value.trim().toUpperCase();
  if (!code) { showToast("Enter a coupon code"); return; }
  const valid = { "SAVE10": 10, "SHOPORA20": 20, "FIRST50": 50 };
  if (valid[code]) {
    showToast(`🎉 Coupon applied! ${valid[code]}% off`);
  } else {
    showToast("❌ Invalid coupon code");
  }
}

// ── CHECKOUT ──
function checkout() {
  const cart = getCart();
  if (cart.length === 0) { showToast("Your cart is empty!"); return; }
  showToast("🚀 Redirecting to checkout...");
  setTimeout(() => showToast("✅ Checkout coming soon!"), 1500);
}

// ── COMPARE NUDGE ──
function checkCompareNudge(cart) {
  const nudge = document.getElementById("compareNudge");
  if (!nudge) return;
  const hasCheaper = cart.some(item => {
    const others = item.platforms?.filter(p => p.name !== "Shopora") || [];
    return others.some(p => p.price < item.price);
  });
  nudge.style.display = hasCheaper ? "flex" : "none";
  if (hasCheaper) {
    document.getElementById("nudgeText").textContent = "Some items may be cheaper on other platforms";
  }
}

// ── SUGGESTED PRODUCTS ──
function renderSuggested(cart) {
  const grid = document.getElementById("suggestedGrid");
  if (!grid || typeof PRODUCTS === "undefined") return;
  const cartIds = cart.map(i => i.id);
  const suggestions = PRODUCTS.filter(p => !cartIds.includes(p.id)).slice(0, 4);
  if (suggestions.length === 0) { grid.innerHTML = ""; return; }

  grid.innerHTML = suggestions.map(p => `
    <div class="prod-card" onclick="goToProduct(${p.id})">
      <div class="prod-img">
        <span class="prod-img-emoji">
          <img src="${p.image}" alt="${p.name}"
            style="width:85%;height:85%;object-fit:contain"
            onerror="this.style.display='none';this.nextElementSibling.style.display='block'"/>
          <span style="display:none;font-size:56px">${p.thumbs?.[0] || "🛍️"}</span>
        </span>
        <span class="prod-badge ${p.badge}">
          ${p.badge === "b-hot" ? "🔥 Hot" : p.badge === "b-new" ? "✨ New" : p.badge === "b-fast" ? "⚡ Fast" : p.off + "% OFF"}
        </span>
      </div>
      <div class="prod-info">
        <div class="prod-brand">${p.brand}</div>
        <div class="prod-name">${p.name}</div>
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
  `).join("");
}

// ── GO TO PRODUCT ──
function goToProduct(id) {
  window.location.href = `product-detail.html?id=${id}`;
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

// ── INIT ──
updateCartBadge();
renderCart();