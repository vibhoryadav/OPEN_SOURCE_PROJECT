# Dhvani (ध्वनि) — Sound, simplified.

A production-quality, Apple-inspired e-commerce website for a premier Indian audio brand. Designed with meticulous minimalism, spacious typography-led layouts, active noise cancellation focus, and a seamless client-side architecture.

Built with **vanilla HTML, CSS, and JavaScript**. Zero build steps, zero external dependencies, zero npm packages. Double-click and run in any web browser.

---

## 🎧 Brand Philosophy & Identity

- **Brand Name:** Dhvani
- **Meaning:** "Dhvani" (<span style="color:#86868b">ध्वनि</span>) is Sanskrit for **"sound"**. Mentioned with understated elegance in the brand philosophy tag on the home page and in the regulatory footnotes of the footer.
- **Tagline:** *"Sound, simplified."*
- **Wordmark:** Clean typographic wordmark `Dhvani` in the sticky navigation with semibold weight and tight letter-spacing.
- **Currency:** Indian Rupees (`₹`), formatted using official Indian digit grouping standards (e.g. `₹29,900`, `₹2,999`).

---

## 📁 Project File Structure

```text
dhvani-audio/
│
├── index.html           # Home page: Hero, lineup grid, 4 feature highlights, Why Dhvani stats, compare teaser
├── products.html        # Catalog: Instant category filtering (All/Headphones/Earphones) & sort dropdown
├── product.html         # Dynamic detail page (?id=...): interactive color swatches, specs table, in-the-box
├── compare.html         # Comparison matrix: side-by-side comparison of 3 models with interactive dropdowns
├── cart.html            # Persistent bag: line items, +/- quantity controls, 18% GST calculation, total
├── checkout.html        # Checkout flow: field validation, UPI/Card/COD, and instant order confirmation
│
├── css/
│   └── styles.css       # Design tokens, Apple typography clamps, card radii, pill buttons, responsive styles
│
├── js/
│   ├── products.js      # 6 Products, specs, copy, pricing, and dynamic inline SVG illustration engine
│   └── script.js        # Shared nav/footer injection, localStorage cart management, toast notifications
│
└── README.md            # Documentation, image replacement guide, and 2-minute competition demo script
```

---

## 🚀 How to Run the Website

### Method 1: Instant Double-Click (Zero Setup)
Simply navigate into the `dhvani-audio` folder and **double-click `index.html`**.  
It opens directly in your default browser (`Chrome`, `Safari`, `Brave`, `Edge`, `Firefox`) via the `file://` protocol. No web server, Node.js, or internet connection is required.

### Method 2: Local Static Server (Optional)
If you prefer running through `localhost`:
```bash
cd dhvani-audio
python3 -m http.server 8000
```
Then visit: `http://localhost:8000`

---

## 🎨 Design System Specifications

| Token | Value | Usage |
| :--- | :--- | :--- |
| **Dominant Background** | `#ffffff` | Primary background (~80% of pages) |
| **Secondary Background** | `#f5f5f7` | Cards, alternating feature sections, in-the-box, footer |
| **Accent Contrast Section** | `#000000` | Full-width "Why Dhvani" statistical highlight |
| **Primary Typography** | `#1d1d1f` | SF Pro Display / Inter / Apple System (`clamp(40px, 7vw, 84px)`) |
| **Secondary Typography** | `#6e6e73` | Subheadings, descriptions, body text |
| **Buttons** | `#1d1d1f` | Black pill buttons (`border-radius: 980px`), hover `transform: scale(1.02)` |
| **Secondary Links** | `#1d1d1f` | Text links with animated `›` arrow |
| **Navigation** | `rgba(255,255,255,0.82)` | Sticky translucent bar with `backdrop-filter: blur(20px)` |
| **Animations** | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Subtle fade-and-rise on scroll using `IntersectionObserver` |

---

## 🖼️ How to Replace Product Images with Real Photos

The codebase uses a clean hybrid visual architecture. By default, it generates high-fidelity **inline SVG illustrations** of each headphone and earphone in vector form. The code is structured so that you can replace any illustration with a real photograph by changing **one single line** in `js/products.js`.

### Step-by-Step Instructions:

1. Place your photo (PNG, WebP, or JPG) in an `images/` folder inside the project, for example:  
   `images/dhvani-max.png`
2. Open `js/products.js`.
3. Locate the product in the `PRODUCTS` array.
4. Set the `imagePath` property to your image path:

```javascript
// Example in js/products.js:
{
  id: "dhvani-max",
  name: "Dhvani Max",
  price: 29900,
  // Before:
  // imagePath: "",
  
  // After:
  imagePath: "images/dhvani-max.png",
  ...
}
```

5. Save the file and refresh your browser. The site automatically detects `imagePath` and renders your real product photograph across the hero, catalog grid, product detail page, comparison matrix, and shopping bag!

---

## 🎤 2-Minute College Competition Demo Script

Use this exact script and navigation flow to impress the judges:

### **[0:00 - 0:25] The Brand & Apple-Calm Aesthetics (Home Page)**
- **Action:** Open `index.html`.
- **Say:**  
  > *"Good morning, judges. This is **Dhvani** — an Indian acoustic brand built on the philosophy of 'Sound, simplified.' In Sanskrit, ध्वनि means sound.  
  > Notice the design system: it strictly follows Apple's design principles. Over 80% whitespace, calm typography with tight letter-spacing, no flashy gradients, and custom self-contained vector product illustrations."*
- **Action:** Slowly scroll down through the 4 alternating feature sections (Active Noise Cancellation, 50-hour battery, planar drivers, and ergonomics).
- **Say:**  
  > *"Notice the subtle scroll animations powered by IntersectionObserver, leading into our dark contrast section highlighting 48 dB noise reduction and fast charging."*

### **[0:25 - 0:50] The Catalog & Instant Filtering (Products Page)**
- **Action:** Click **"All Products"** in the top navigation.
- **Say:**  
  > *"Here is the complete lineup across over-ear headphones and in-ear earphones with Indian Rupee formatting. Watch the category filter:"*
- **Action:** Click **"Headphones"**, then **"Earphones"**, then sort by **"Price: Low to High"**.
- **Say:**  
  > *"The filtering and sorting occur instantaneously in pure vanilla JavaScript without reloading the page or requiring any external library."*

### **[0:50 - 1:15] Dynamic Product Customizer (Product Detail Page)**
- **Action:** Click on **Dhvani Max** or any product card.
- **Say:**  
  > *"Each product detail page dynamically populates from a unified template via URL parameters. Watch the finish swatches:"*
- **Action:** Click the **Silver** swatch, then **Midnight Navy**, then **Space Black**.
- **Say:**  
  > *"Selecting a finish re-renders the vector illustration in real-time. Below, we have technical specs, what's in the box, and recommendations. Let's add this to our bag."*
- **Action:** Click the black pill button **"Add to Bag"**.
- **Say:**  
  > *"Notice the subtle Apple-style confirmation toast at the bottom-right and the animated cart badge incrementing in the sticky nav."*

### **[1:15 - 1:40] Side-by-Side Model Comparison (Compare Page)**
- **Action:** Click **"Compare"** in the navigation bar.
- **Say:**  
  > *"Customers often struggle to decide which model fits their lifestyle. On our comparison page, users can evaluate up to three models side-by-side. If I change the second column to 'Dhvani Sport'..."*
- **Action:** Select **Dhvani Sport** from the Column 2 dropdown.
- **Say:**  
  > *"The entire column immediately updates its acoustic drivers, IPX7 waterproof rating, and battery endurance."*

### **[1:40 - 2:00] Persistent Cart & Mock Checkout (Cart & Checkout Pages)**
- **Action:** Click the **Shopping Bag icon** in the nav.
- **Say:**  
  > *"The cart persists seamlessly across pages using localStorage. We can increment quantities, see our 18% GST auto-calculate, and proceed to checkout."*
- **Action:** Click **"Check Out"**, fill out the mock form (or use auto-fill), select **UPI**, and click **"Place Order"**.
- **Say:**  
  > *"The checkout performs strict client-side validation, clears the bag, and generates a formatted Dhvani order confirmation with tracking. Zero build tools, 100% responsive, and ready for production. Thank you."*

---

## 📱 Browser & Device Support

- **Browsers:** Google Chrome, Apple Safari, Brave, Mozilla Firefox, Microsoft Edge.
- **Devices:** Desktop (1920×1080, 1440×900), Tablets (iPad Pro, iPad Mini), Mobile (iPhone 15/14/13, Samsung Galaxy, Pixel).
- **Accessibility:** Semantic HTML5 elements (`<nav>`, `<main>`, `<aside>`, `<section>`, `<footer>`), ARIA live regions for cart, and visible keyboard `:focus-visible` states.
