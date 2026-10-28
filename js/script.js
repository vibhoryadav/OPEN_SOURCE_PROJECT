/**
 * Dhvani (ध्वनि) - Sound, simplified.
 * Shared Script: Navigation, Footer Injection, Cart Management, Animations, and Notifications
 */

const CART_KEY = "dhvani_cart_v1";

/* ==========================================================================
   Cart State Management (Persistent via localStorage)
   ========================================================================== */
function getCart() {
  try {
    const raw = localStorage.getItem(CART_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    console.error("Failed to read cart from localStorage:", e);
    return [];
  }
}

function saveCart(cart) {
  try {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
    updateCartBadge();
    // Dispatch custom event for pages listening for cart updates
    window.dispatchEvent(new CustomEvent("dhvani-cart-updated", { detail: { cart } }));
  } catch (e) {
    console.error("Failed to save cart to localStorage:", e);
  }
}

function addToCart(productId, colorHex = null, quantity = 1) {
  const product = window.getProductById ? window.getProductById(productId) : null;
  if (!product) {
    console.warn("Product not found:", productId);
    return;
  }

  const selectedColor = product.colors.find(c => c.hex.toLowerCase() === (colorHex || "").toLowerCase()) || product.colors[0];
  const cart = getCart();

  const existingIndex = cart.findIndex(item => item.id === product.id && item.colorHex === selectedColor.hex);

  if (existingIndex > -1) {
    cart[existingIndex].quantity += quantity;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      colorName: selectedColor.name,
      colorHex: selectedColor.hex,
      visualType: product.visualType,
      imagePath: product.imagePath || "",
      quantity: quantity
    });
  }

  saveCart(cart);
  showToast(`Added ${product.name} (${selectedColor.name}) to your Bag.`);
}

function updateCartItemQuantity(index, quantity) {
  const cart = getCart();
  if (index >= 0 && index < cart.length) {
    if (quantity <= 0) {
      cart.splice(index, 1);
    } else {
      cart[index].quantity = quantity;
    }
    saveCart(cart);
  }
}

function removeCartItem(index) {
  const cart = getCart();
  if (index >= 0 && index < cart.length) {
    cart.splice(index, 1);
    saveCart(cart);
  }
}

function clearCart() {
  saveCart([]);
}

function getCartCalculations() {
  const cart = getCart();
  const itemCount = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
  const subtotal = cart.reduce((sum, item) => sum + ((item.price || 0) * (item.quantity || 1)), 0);
  // GST calculated at 18% as requested
  const gst = Math.round(subtotal * 0.18);
  const total = subtotal + gst;

  return { cart, itemCount, subtotal, gst, total };
}

function updateCartBadge() {
  const badge = document.querySelector(".cart-badge");
  if (!badge) return;

  const { itemCount } = getCartCalculations();
  badge.textContent = itemCount;
  if (itemCount > 0) {
    badge.style.display = "flex";
    badge.classList.remove("bump");
    void badge.offsetWidth; // trigger reflow
    badge.classList.add("bump");
  } else {
    badge.style.display = "none";
  }
}

/* ==========================================================================
   Subtle Toast Notifications
   ========================================================================== */
function showToast(message) {
  if (typeof document === "undefined" || !document.createElement) return;

  let container = document.getElementById("toast-container");
  if (!container) {
    container = document.createElement("div");
    container.id = "toast-container";
    container.className = "toast-container";
    document.body.appendChild(container);
  }

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.setAttribute("role", "status");
  toast.innerHTML = `
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  // Trigger enter animation
  requestAnimationFrame(() => {
    toast.classList.add("show");
  });

  // Remove after 3.2s
  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}

/* ==========================================================================
   Navigation & Footer Injection (Single Source of Truth)
   ========================================================================== */
function injectNav() {
  const navPlaceholder = document.getElementById("site-header");
  if (!navPlaceholder) return;

  // Determine current page for active nav styling
  const path = window.location.pathname.toLowerCase();
  const isProducts = path.includes("products.html");
  const isCompare = path.includes("compare.html");
  const isCart = path.includes("cart.html");

  navPlaceholder.className = "site-nav";
  navPlaceholder.innerHTML = `
    <div class="nav-container">
      <a href="index.html" class="nav-brand" aria-label="Dhvani Home">
        <span>Dhvani</span>
      </a>

      <nav class="nav-menu-wrapper" aria-label="Primary Navigation">
        <ul class="nav-menu">
          <li class="nav-item ${isProducts ? 'active' : ''}">
            <a href="products.html">All Products</a>
          </li>
          <li class="nav-item">
            <a href="products.html?category=headphones">Headphones</a>
          </li>
          <li class="nav-item">
            <a href="products.html?category=earphones">Earphones</a>
          </li>
          <li class="nav-item ${isCompare ? 'active' : ''}">
            <a href="compare.html">Compare</a>
          </li>
          <li class="nav-item">
            <a href="index.html#about">About</a>
          </li>
        </ul>
      </nav>

      <div class="nav-actions">
        <a href="cart.html" class="cart-icon-btn ${isCart ? 'active' : ''}" aria-label="Shopping Bag">
          <svg width="19" height="21" viewBox="0 0 19 21" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M4.5 7V5a5 5 0 0 1 10 0v2"></path>
            <path d="M2.5 7h14l-1.2 12H3.7L2.5 7z"></path>
          </svg>
          <span class="cart-badge" style="display: none;">0</span>
        </a>

        <button class="mobile-menu-toggle" aria-label="Toggle navigation menu" aria-expanded="false">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
            <line x1="3" y1="7" x2="21" y2="7"></line>
            <line x1="3" y1="17" x2="21" y2="17"></line>
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Navigation Drawer -->
    <div class="mobile-nav-drawer" id="mobile-nav-drawer">
      <a href="index.html">Home</a>
      <a href="products.html">All Products</a>
      <a href="products.html?category=headphones">Headphones</a>
      <a href="products.html?category=earphones">Earphones</a>
      <a href="compare.html">Compare Models</a>
      <a href="index.html#about">About Dhvani</a>
      <a href="cart.html">View Bag</a>
    </div>
  `;

  // Mobile menu listener
  const toggleBtn = navPlaceholder.querySelector(".mobile-menu-toggle");
  const drawer = navPlaceholder.querySelector("#mobile-nav-drawer");
  if (toggleBtn && drawer) {
    toggleBtn.addEventListener("click", () => {
      const isOpen = drawer.classList.toggle("open");
      toggleBtn.setAttribute("aria-expanded", isOpen);
    });
  }

  updateCartBadge();
}

function injectFooter() {
  const footerPlaceholder = document.getElementById("site-footer");
  if (!footerPlaceholder) return;

  footerPlaceholder.className = "site-footer";
  footerPlaceholder.innerHTML = `
    <div class="container">
      <div class="footer-top-note">
        <p>1. Noise reduction measurements are based on internal laboratory tests against standard ambient urban and flight cabin frequencies. 2. Battery life depends on device settings, environment, usage, and many other factors. Actual results will vary. 3. "Dhvani" (<span class="sanskrit-text">ध्वनि</span>) is Sanskrit for "sound". Handcrafted acoustic engineering designed in India.</p>
      </div>

      <div class="footer-grid">
        <div class="footer-column">
          <h3 class="footer-column-title">Shop Audio</h3>
          <ul class="footer-links">
            <li><a href="product.html?id=dhvani-max">Dhvani Max</a></li>
            <li><a href="product.html?id=dhvani-studio">Dhvani Studio</a></li>
            <li><a href="product.html?id=dhvani-air-pro">Dhvani Air Pro</a></li>
            <li><a href="product.html?id=dhvani-air">Dhvani Air</a></li>
            <li><a href="product.html?id=dhvani-sport">Dhvani Sport</a></li>
            <li><a href="product.html?id=dhvani-go">Dhvani Go</a></li>
          </ul>
        </div>

        <div class="footer-column">
          <h3 class="footer-column-title">Compare & Specs</h3>
          <ul class="footer-links">
            <li><a href="compare.html">Compare All Models</a></li>
            <li><a href="compare.html">Battery Performance Guide</a></li>
            <li><a href="compare.html">Acoustic Drivers & ANC</a></li>
            <li><a href="products.html">All Wireless Products</a></li>
          </ul>
        </div>

        <div class="footer-column">
          <h3 class="footer-column-title">About Dhvani (<span class="sanskrit-text">ध्वनि</span>)</h3>
          <ul class="footer-links">
            <li><a href="index.html#about">Our Story & Meaning</a></li>
            <li><a href="index.html#philosophy">Sound, Simplified</a></li>
            <li><a href="index.html#why">Acoustic Research Lab</a></li>
            <li><a href="index.html#about">College Innovation Showcase</a></li>
          </ul>
        </div>

        <div class="footer-column">
          <h3 class="footer-column-title">Customer Care</h3>
          <ul class="footer-links">
            <li><a href="cart.html">View Shopping Bag</a></li>
            <li><a href="checkout.html">Track Order</a></li>
            <li><a href="products.html">Free Shipping Across India</a></li>
            <li><a href="products.html">1-Year Comprehensive Warranty</a></li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom">
        <div>
          Copyright © 2026 Dhvani Audio Technologies Pvt. Ltd. All rights reserved.
        </div>
        <div class="footer-bottom-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Sale</a>
          <a href="#">Sales Policy</a>
          <a href="#">Legal</a>
          <a href="#">Site Map</a>
        </div>
      </div>
    </div>
  `;
}

/* ==========================================================================
   Smooth Fade-and-Rise Scroll Observer
   ========================================================================== */
function initScrollAnimations() {
  const targets = document.querySelectorAll(".fade-up");
  if (!targets.length) return;

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          obs.unobserve(entry.target);
        }
      });
    }, {
      rootMargin: "0px 0px -50px 0px",
      threshold: 0.1
    });

    targets.forEach(t => observer.observe(t));
  } else {
    // Fallback for older browsers
    targets.forEach(t => t.classList.add("in-view"));
  }
}

/* ==========================================================================
   DOM Ready Initialization
   ========================================================================== */
document.addEventListener("DOMContentLoaded", () => {
  injectNav();
  injectFooter();
  initScrollAnimations();
});

// Export functions to global scope
window.getCart = getCart;
window.saveCart = saveCart;
window.addToCart = addToCart;
window.updateCartItemQuantity = updateCartItemQuantity;
window.removeCartItem = removeCartItem;
window.clearCart = clearCart;
window.getCartCalculations = getCartCalculations;
window.updateCartBadge = updateCartBadge;
window.showToast = showToast;
