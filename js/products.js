/**
 * Dhvani (ध्वनि) - Sound, simplified.
 * Product Catalog Data & High-Fidelity Vector Illustration Engine
 *
 * Each product defines specs, marketing copy, color variants, and a robust SVG illustration generator.
 * Gradient IDs are scoped with unique UIDs to prevent DOM collisions, and brittle SVG filter tags
 * are replaced with GPU-accelerated CSS drop shadows for 100% reliable rendering across all browsers.
 * Real photography can replace illustrations by setting `imagePath: "images/your-photo.png"`.
 */

const PRODUCTS = [
  {
    id: "dhvani-max",
    name: "Dhvani Max",
    category: "headphones",
    categoryLabel: "Over-Ear Headphones",
    price: 29900,
    tagline: "Quiet, where it matters.",
    headline: "The ultimate acoustic sanctuary.",
    description: "Our flagship over-ear acoustic system. Computational audio, custom-built 40mm high-excursion neodymium drivers, and active acoustic sealing create an immersive listening space unlike anything else.",
    badge: "Flagship",
    imagePath: "", // Set relative path to use a real photo instead of SVG illustration
    colors: [
      { name: "Space Black", hex: "#1d1d1f", textTone: "dark" },
      { name: "Silver", hex: "#d8d9de", textTone: "light" },
      { name: "Midnight Navy", hex: "#1c2738", textTone: "dark" }
    ],
    specs: {
      batteryLife: "40 hrs (ANC on) / 55 hrs (ANC off)",
      driverSize: "40mm custom neodymium dynamic",
      bluetooth: "v5.3 with LE Audio & LDAC support",
      noiseCancellation: "Hybrid Active Noise Cancellation (48 dB)",
      waterResistance: "IPX4 sweat and splash resistant",
      weight: "254 g",
      chargingType: "USB-C Fast Charging (10 min = 5 hrs)"
    },
    features: [
      "Industry-leading 48 dB Hybrid Active Noise Cancellation",
      "Spatial Audio with dynamic head-tracking for cinema-grade depth",
      "Acoustically engineered memory foam cushions with breathable woven mesh",
      "Studio-grade ultra-low distortion (< 0.1% THD @ 1kHz)",
      "Multipoint seamless pairing across laptop, phone, and tablet",
      "Precision anodized aluminum adjustment arms with frictionless glide"
    ],
    inTheBox: [
      "Dhvani Max Headphones",
      "Magnetic Smart Travel Case",
      "Braided USB-C to USB-C Charging Cable (1.2m)",
      "3.5mm to USB-C Lossless Audio Cable",
      "Quick Start & Safety Guide"
    ],
    visualType: "over-ear"
  },
  {
    id: "dhvani-studio",
    name: "Dhvani Studio",
    category: "headphones",
    categoryLabel: "Over-Ear Headphones",
    price: 17900,
    tagline: "Hear every detail.",
    headline: "Reference audio for purists and creators.",
    description: "Designed for audio engineers, producers, and discerning purists. Switch effortlessly between pristine zero-latency wired monitoring and wireless freedom with unmatched flat frequency response.",
    badge: "Studio Reference",
    imagePath: "",
    colors: [
      { name: "Matte Black", hex: "#222224", textTone: "dark" },
      { name: "Studio Grey", hex: "#c4c6cb", textTone: "light" },
      { name: "Raw Titanium", hex: "#7a7c85", textTone: "dark" }
    ],
    specs: {
      batteryLife: "50 hrs (Wired mode requires 0% battery)",
      driverSize: "45mm studio-grade planar dynamic",
      bluetooth: "v5.3 + Lossless 3.5mm / 6.35mm wired bypass",
      noiseCancellation: "Passive Acoustic Enclosure (Dual chamber)",
      waterResistance: "IPX4 splash resistant",
      weight: "238 g",
      chargingType: "USB-C Quick Charge (15 min = 6 hrs)"
    },
    features: [
      "Flat reference frequency response curve (10 Hz – 42 kHz)",
      "Zero-latency pure analog passthrough circuit",
      "Interchangeable velour and protein leather ear cushions",
      "Foldable aerospace-grade aluminum pivot hinge",
      "Gold-plated balanced 3.5mm and 6.35mm jack system",
      "Dual internal condenser microphones for broadcast-level vocal capture"
    ],
    inTheBox: [
      "Dhvani Studio Headphones",
      "Protective Hard-shell Travel Pouch",
      "1.8m Braided Studio Audio Cable",
      "6.35mm (1/4\") Gold-Plated Adapter",
      "USB-C Charging Cable"
    ],
    visualType: "over-ear-studio"
  },
  {
    id: "dhvani-air-pro",
    name: "Dhvani Air Pro",
    category: "earphones",
    categoryLabel: "In-Ear Earphones",
    price: 24900,
    tagline: "Pure silence. Pure presence.",
    headline: "Pocket-sized acoustic perfection.",
    description: "Engineered to fit imperceptibly in your ear while sealing out the busiest urban noise. Features continuous adaptive noise cancellation that calibrates 48,000 times per second for pristine silence.",
    badge: "Pro ANC",
    imagePath: "",
    colors: [
      { name: "Obsidian Black", hex: "#18181a", textTone: "dark" },
      { name: "Ceramic White", hex: "#f5f5f7", textTone: "light" },
      { name: "Forest Pine", hex: "#22352b", textTone: "dark" }
    ],
    specs: {
      batteryLife: "32 hrs total (8 hrs earbuds + 24 hrs case with ANC)",
      driverSize: "11mm custom dual-magnet dynamic",
      bluetooth: "v5.3 with aptX Adaptive & AAC",
      noiseCancellation: "Adaptive ANC with Transparency Mode (45 dB)",
      waterResistance: "IPX5 earbuds / IPX4 charging case",
      weight: "5.2 g per earbud / 46 g charging case",
      chargingType: "USB-C + Qi Wireless Charging (5 min = 2 hrs)"
    },
    features: [
      "Adaptive ANC that neutralizes background drone and chatter instantly",
      "Adaptive Transparency mode keeps you naturally aware of your surroundings",
      "Dual beamforming microphones with wind-mesh acoustic reduction",
      "Force sensor stem controls for effortless playback and volume adjustment",
      "Qi wireless-compatible compact pebble charging case",
      "Ear tip fit test with 4 interchangeable medical-grade silicone sizes"
    ],
    inTheBox: [
      "Dhvani Air Pro Earbuds (L & R)",
      "Qi Wireless Charging Case",
      "4 Sizes of Soft Silicone Tips (XS, S, M, L)",
      "Braided USB-C Cable (0.8m)",
      "Documentation"
    ],
    visualType: "in-ear-pro"
  },
  {
    id: "dhvani-air",
    name: "Dhvani Air",
    category: "earphones",
    categoryLabel: "In-Ear Earphones",
    price: 12900,
    tagline: "Everyday sound, perfected.",
    headline: "Featherlight design. All-day brilliance.",
    description: "Featherlight, all-day comfortable earbuds tuned for rich bass, crisp vocals, and total reliability. Slip them in and let the bustling world fade into your favorite playlist.",
    badge: "Popular",
    imagePath: "",
    colors: [
      { name: "Frost White", hex: "#f0f1f4", textTone: "light" },
      { name: "Shadow Black", hex: "#262729", textTone: "dark" },
      { name: "Sage Mist", hex: "#bdc7be", textTone: "light" }
    ],
    specs: {
      batteryLife: "30 hrs total (7 hrs earbuds + 23 hrs case)",
      driverSize: "10mm composite biological diaphragm",
      bluetooth: "v5.3 with Instant Swift Pair",
      noiseCancellation: "Environmental Noise Cancellation for calls (ENC)",
      waterResistance: "IPX4 sweat and splash resistant",
      weight: "4.3 g per earbud / 38 g charging case",
      chargingType: "USB-C Fast Charging (10 min = 3 hrs)"
    },
    features: [
      "Ultra-ergonomic semi-in-ear contour for zero ear fatigue",
      "Rich low-end punch tuned specifically for modern genres",
      "Crystal-clear call microphones with background voice isolation",
      "One-tap instantaneous pairing with Android, iOS, and Mac/PC",
      "Pocket-friendly slim profile magnetic case",
      "IPX4 water protection against rain, splashes, and workout sweat"
    ],
    inTheBox: [
      "Dhvani Air Earbuds (L & R)",
      "Slim Magnetic Charging Case",
      "3 Sizes of Silicone Ear Tips (S, M, L)",
      "USB-C to USB-A Charging Cable",
      "User Manual"
    ],
    visualType: "in-ear"
  },
  {
    id: "dhvani-sport",
    name: "Dhvani Sport",
    category: "earphones",
    categoryLabel: "Sports Earphones",
    price: 7900,
    tagline: "Stay locked in.",
    headline: "Unshakable grip. Waterproof power.",
    description: "Built for high-intensity training, marathons, and monsoon runs. Ergonomic secure-fit wingtips ensure they never fall out, backed by full IPX7 waterproof immersion resistance.",
    badge: "IPX7 Waterproof",
    imagePath: "",
    colors: [
      { name: "Stealth Black", hex: "#18191b", textTone: "dark" },
      { name: "Lava Orange", hex: "#b84227", textTone: "dark" },
      { name: "Glacier Grey", hex: "#d5d7dc", textTone: "light" }
    ],
    specs: {
      batteryLife: "28 hrs total (8 hrs earbuds + 20 hrs rugged case)",
      driverSize: "12mm high-output bass boost driver",
      bluetooth: "v5.3 with extended 20m athletic range",
      noiseCancellation: "Passive Acoustic Seal + Ambient Aware Pass",
      waterResistance: "IPX7 waterproof (submersible up to 1 meter)",
      weight: "6.4 g per earbud / 52 g rugged case",
      chargingType: "USB-C Fast Charging (10 min = 3.5 hrs)"
    },
    features: [
      "IPX7 certified waterproof & sweatproof for extreme conditions",
      "Flexible liquid-silicone ear hooks that stay locked during sprints",
      "Acoustic bass curve designed to keep heart rates and energy high",
      "Ambient awareness passthrough keeps you safe on outdoor runs",
      "Tactile physical click buttons easily operated with wet or gloved hands",
      "Impact-resistant rubberized travel case with sport lanyard"
    ],
    inTheBox: [
      "Dhvani Sport Earbuds with Integrated Wingtips",
      "Rugged Armor Charging Case",
      "3 Pairs of Performance Ear Tips (S, M, L)",
      "Detachable Sport Lanyard",
      "Heavy-Duty Braided USB-C Cable"
    ],
    visualType: "sport"
  },
  {
    id: "dhvani-go",
    name: "Dhvani Go",
    category: "earphones",
    categoryLabel: "In-Ear Earphones",
    price: 2999,
    tagline: "Made for India. Tuned for everyone.",
    headline: "Essential acoustic brilliance at an honest price.",
    description: "Essential acoustic excellence crafted for everyday commutes, study sessions, and daily playlists. Incredible dynamic range, featherlight footprint, and all-day endurance.",
    badge: "Best Value",
    imagePath: "",
    colors: [
      { name: "Carbon Black", hex: "#202022", textTone: "dark" },
      { name: "Arctic White", hex: "#eaebef", textTone: "light" },
      { name: "Deep Indigo", hex: "#1e2942", textTone: "dark" }
    ],
    specs: {
      batteryLife: "24 hrs total (6 hrs earbuds + 18 hrs compact case)",
      driverSize: "10mm graphene-coated dynamic driver",
      bluetooth: "v5.3 with 45ms Low-Latency Gaming Mode",
      noiseCancellation: "Passive Isolation + AI Call Noise Filter",
      waterResistance: "IPX4 sweat resistant",
      weight: "3.8 g per earbud / 34 g case",
      chargingType: "USB-C Fast Charging (10 min = 2 hrs)"
    },
    features: [
      "Sub-40g ultra-compact pocketable silhouette",
      "Graphene-coated diaphragm delivers crisp highs and tight, punchy bass",
      "45ms ultra-low latency mode for synchronized gaming and video",
      "AI-powered microphone algorithm removes traffic and street noise on calls",
      "Instant open-and-connect pairing",
      "Durable scratch-resistant matte finish"
    ],
    inTheBox: [
      "Dhvani Go Earbuds (L & R)",
      "Ultra-Compact Charging Case",
      "3 Pairs of Soft Silicone Ear Tips",
      "USB-C Charging Cable",
      "Warranty Card & Quick Start Guide"
    ],
    visualType: "go"
  }
];

/**
 * Format a number into standard Indian Currency representation (e.g. ₹29,900)
 */
function formatPrice(amount) {
  if (typeof amount !== "number") amount = Number(amount) || 0;
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0
  }).format(amount);
}

/**
 * Retrieve a product by ID
 */
function getProductById(id) {
  return PRODUCTS.find(p => p.id === id) || null;
}

/**
 * Calculate light/dark contrast adjustments safely
 */
function shadeColor(color, percent) {
  let clean = color.replace("#", "");
  if (clean.length === 3) {
    clean = clean.split("").map(c => c + c).join("");
  }
  let num = parseInt(clean, 16);
  if (isNaN(num)) return color;

  let amt = Math.round(2.55 * percent);
  let R = (num >> 16) + amt;
  let G = (num >> 8 & 0x00FF) + amt;
  let B = (num & 0x0000FF) + amt;

  R = Math.min(255, Math.max(0, R));
  G = Math.min(255, Math.max(0, G));
  B = Math.min(255, Math.max(0, B));

  return "#" + (
    0x1000000 +
    R * 0x10000 +
    G * 0x100 +
    B
  ).toString(16).slice(1);
}

/**
 * High-Precision Vector SVG Illustration Generators
 * All gradient IDs are dynamically scoped via a unique UID to eliminate DOM collisions.
 * Brittle SVG filter tags are avoided in favor of rock-solid CSS drop-shadows.
 */
const SVG_GENERATORS = {
  "over-ear": (color, uid) => {
    const dark = shadeColor(color, -25);
    const light = shadeColor(color, 25);
    const highlight = shadeColor(color, 45);
    const metal = "#8e8e93";
    const metalLight = "#d1d1d6";
    const cushion = shadeColor(color, -15);

    return `
    <svg class="product-svg" viewBox="0 0 500 500" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Dhvani Max Over-Ear Headphones illustration">
      <defs>
        <linearGradient id="${uid}_headband" x1="150" y1="60" x2="350" y2="60" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stop-color="${dark}"/>
          <stop offset="50%" stop-color="${light}"/>
          <stop offset="100%" stop-color="${dark}"/>
        </linearGradient>
        <linearGradient id="${uid}_metal" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="${metalLight}"/>
          <stop offset="50%" stop-color="${metal}"/>
          <stop offset="100%" stop-color="#48484a"/>
        </linearGradient>
        <radialGradient id="${uid}_cupL" cx="30%" cy="30%" r="70%">
          <stop offset="0%" stop-color="${highlight}"/>
          <stop offset="60%" stop-color="${color}"/>
          <stop offset="100%" stop-color="${dark}"/>
        </radialGradient>
        <radialGradient id="${uid}_cupR" cx="30%" cy="30%" r="70%">
          <stop offset="0%" stop-color="${highlight}"/>
          <stop offset="60%" stop-color="${color}"/>
          <stop offset="100%" stop-color="${dark}"/>
        </radialGradient>
      </defs>

      <g class="svg-artwork-group">
        <!-- Headband Outer Arc -->
        <path d="M 120 280 C 120 120, 380 120, 380 280" stroke="url(#${uid}_headband)" stroke-width="26" stroke-linecap="round" fill="none"/>
        
        <!-- Headband Breathable Canopy Mesh Inner -->
        <path d="M 148 240 C 155 130, 345 130, 352 240" stroke="${cushion}" stroke-width="12" stroke-linecap="round" stroke-dasharray="2 4" fill="none" opacity="0.6"/>

        <!-- Headband Inner Padding Under-arch -->
        <path d="M 148 242 C 160 148, 340 148, 352 242" stroke="${cushion}" stroke-width="6" stroke-linecap="round" fill="none"/>

        <!-- Left Telescopic Arm -->
        <path d="M 125 240 L 125 295" stroke="url(#${uid}_metal)" stroke-width="10" stroke-linecap="round"/>
        <rect x="119" y="270" width="12" height="18" rx="4" fill="${metal}"/>
        <!-- Left Yoke Gimbal -->
        <path d="M 125 292 C 125 325, 95 330, 95 348" stroke="url(#${uid}_metal)" stroke-width="8" stroke-linecap="round" fill="none"/>

        <!-- Right Telescopic Arm -->
        <path d="M 375 240 L 375 295" stroke="url(#${uid}_metal)" stroke-width="10" stroke-linecap="round"/>
        <rect x="369" y="270" width="12" height="18" rx="4" fill="${metal}"/>
        <!-- Right Yoke Gimbal -->
        <path d="M 375 292 C 375 325, 405 330, 405 348" stroke="url(#${uid}_metal)" stroke-width="8" stroke-linecap="round" fill="none"/>

        <!-- Left Ear Cushion (plush back) -->
        <ellipse cx="118" cy="360" rx="36" ry="68" fill="${cushion}" transform="rotate(-6 118 360)"/>
        <ellipse cx="120" cy="360" rx="30" ry="62" fill="${dark}" opacity="0.4" transform="rotate(-6 120 360)"/>

        <!-- Left Anodized Earcup Outer Shell -->
        <ellipse cx="132" cy="358" rx="38" ry="64" fill="url(#${uid}_cupL)" transform="rotate(-6 132 358)"/>
        <ellipse cx="132" cy="358" rx="34" ry="60" stroke="${highlight}" stroke-width="1.5" fill="none" opacity="0.35" transform="rotate(-6 132 358)"/>
        <!-- Acoustic Port / ANC mic slot -->
        <rect x="132" y="322" width="2" height="10" rx="1" fill="${dark}" opacity="0.6"/>

        <!-- Right Ear Cushion (plush back) -->
        <ellipse cx="382" cy="360" rx="36" ry="68" fill="${cushion}" transform="rotate(6 382 360)"/>
        <ellipse cx="380" cy="360" rx="30" ry="62" fill="${dark}" opacity="0.4" transform="rotate(6 380 360)"/>

        <!-- Right Anodized Earcup Outer Shell -->
        <ellipse cx="368" cy="358" rx="38" ry="64" fill="url(#${uid}_cupR)" transform="rotate(6 368 358)"/>
        <ellipse cx="368" cy="358" rx="34" ry="60" stroke="${highlight}" stroke-width="1.5" fill="none" opacity="0.35" transform="rotate(6 368 358)"/>
        <!-- Acoustic Port / ANC mic slot -->
        <rect x="366" y="322" width="2" height="10" rx="1" fill="${dark}" opacity="0.6"/>
      </g>
    </svg>
    `;
  },

  "over-ear-studio": (color, uid) => {
    const dark = shadeColor(color, -30);
    const light = shadeColor(color, 20);
    const highlight = shadeColor(color, 35);
    const metal = "#9a9aa0";

    return `
    <svg class="product-svg" viewBox="0 0 500 500" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Dhvani Studio Reference Headphones illustration">
      <defs>
        <radialGradient id="${uid}_studioL" cx="35%" cy="35%" r="65%">
          <stop offset="0%" stop-color="${highlight}"/>
          <stop offset="60%" stop-color="${color}"/>
          <stop offset="100%" stop-color="${dark}"/>
        </radialGradient>
        <radialGradient id="${uid}_studioR" cx="35%" cy="35%" r="65%">
          <stop offset="0%" stop-color="${highlight}"/>
          <stop offset="60%" stop-color="${color}"/>
          <stop offset="100%" stop-color="${dark}"/>
        </radialGradient>
      </defs>

      <g class="svg-artwork-group">
        <!-- Twin Spring Steel Headband -->
        <path d="M 125 260 C 125 110, 375 110, 375 260" stroke="${metal}" stroke-width="5" fill="none"/>
        <path d="M 132 260 C 132 118, 368 118, 368 260" stroke="${metal}" stroke-width="4" fill="none"/>

        <!-- Suspended Leather Comfort Strap -->
        <path d="M 145 245 C 160 148, 340 148, 355 245" stroke="${dark}" stroke-width="16" stroke-linecap="round" fill="none"/>
        <path d="M 152 245 C 165 152, 335 152, 348 245" stroke="${light}" stroke-width="2" stroke-linecap="round" stroke-dasharray="3 5" fill="none" opacity="0.7"/>

        <!-- Left Hinge & Pivot -->
        <rect x="114" y="255" width="16" height="28" rx="3" fill="${metal}"/>
        <circle cx="122" cy="269" r="3.5" fill="#333"/>
        <path d="M 122 283 L 122 320" stroke="${metal}" stroke-width="6" stroke-linecap="round"/>

        <!-- Right Hinge & Pivot -->
        <rect x="370" y="255" width="16" height="28" rx="3" fill="${metal}"/>
        <circle cx="378" cy="269" r="3.5" fill="#333"/>
        <path d="M 378 283 L 378 320" stroke="${metal}" stroke-width="6" stroke-linecap="round"/>

        <!-- Left Ear Cup (Studio Circular Acoustic Enclosure) -->
        <circle cx="122" cy="355" r="64" fill="${dark}"/>
        <circle cx="122" cy="355" r="54" fill="url(#${uid}_studioL)"/>
        <!-- Planar Acoustic Open Grille Pattern -->
        <circle cx="122" cy="355" r="34" stroke="${dark}" stroke-width="3" stroke-dasharray="4 3" fill="none"/>
        <circle cx="122" cy="355" r="22" stroke="${metal}" stroke-width="2" fill="none" opacity="0.6"/>
        <circle cx="122" cy="355" r="8" fill="${dark}"/>
        <!-- 3.5mm Jack entry point -->
        <circle cx="122" cy="414" r="3.5" fill="#222" stroke="${metal}" stroke-width="1.5"/>

        <!-- Right Ear Cup -->
        <circle cx="378" cy="355" r="64" fill="${dark}"/>
        <circle cx="378" cy="355" r="54" fill="url(#${uid}_studioR)"/>
        <!-- Planar Grille Pattern -->
        <circle cx="378" cy="355" r="34" stroke="${dark}" stroke-width="3" stroke-dasharray="4 3" fill="none"/>
        <circle cx="378" cy="355" r="22" stroke="${metal}" stroke-width="2" fill="none" opacity="0.6"/>
        <circle cx="378" cy="355" r="8" fill="${dark}"/>
      </g>
    </svg>
    `;
  },

  "in-ear-pro": (color, uid) => {
    const dark = shadeColor(color, -25);
    const light = shadeColor(color, 25);
    const highlight = shadeColor(color, 40);
    const tipColor = shadeColor(color, 15);

    return `
    <svg class="product-svg" viewBox="0 0 500 500" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Dhvani Air Pro Wireless Earbuds and Charging Case illustration">
      <defs>
        <radialGradient id="${uid}_caseBody" cx="35%" cy="30%" r="70%">
          <stop offset="0%" stop-color="${highlight}"/>
          <stop offset="60%" stop-color="${color}"/>
          <stop offset="100%" stop-color="${dark}"/>
        </radialGradient>
        <linearGradient id="${uid}_stem" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="${light}"/>
          <stop offset="100%" stop-color="${dark}"/>
        </linearGradient>
      </defs>

      <g class="svg-artwork-group">
        <!-- Premium Compact Wireless Charging Case -->
        <rect x="175" y="240" width="150" height="190" rx="48" fill="url(#${uid}_caseBody)"/>
        <!-- Lid parting seam -->
        <path d="M 175 300 L 325 300" stroke="${dark}" stroke-width="1.5" opacity="0.5"/>
        <path d="M 175 301 L 325 301" stroke="${highlight}" stroke-width="0.8" opacity="0.6"/>
        <!-- LED Status Indicator (Soft Glow) -->
        <circle cx="250" cy="326" r="3.5" fill="#34c759"/>
        <!-- Case Bevel Highlight -->
        <rect x="178" y="243" width="144" height="184" rx="45" stroke="${highlight}" stroke-width="1" fill="none" opacity="0.3"/>

        <!-- Left Earbud (Floating with Stem & Silicone Tip) -->
        <g transform="translate(10, 0)">
          <!-- Acoustic Earbud Body -->
          <circle cx="115" cy="170" r="30" fill="url(#${uid}_caseBody)"/>
          <!-- Medical Grade Silicone Tip -->
          <path d="M 85 160 C 70 160, 60 170, 60 180 C 60 190, 70 200, 85 200 Z" fill="${tipColor}" opacity="0.9"/>
          <!-- Acoustic Port Grille -->
          <ellipse cx="115" cy="155" rx="5" ry="3" fill="${dark}" opacity="0.7"/>
          <!-- Pro Stem with Force Sensor Indentation -->
          <rect x="120" y="180" width="16" height="65" rx="8" fill="url(#${uid}_stem)" transform="rotate(-12 120 180)"/>
          <rect x="122" y="208" width="4" height="14" rx="2" fill="${dark}" opacity="0.5" transform="rotate(-12 120 180)"/>
          <!-- Microphone Mesh Port -->
          <circle cx="132" cy="235" r="2" fill="#333"/>
        </g>

        <!-- Right Earbud (Mirrored / Floating) -->
        <g transform="translate(-10, 0)">
          <!-- Acoustic Earbud Body -->
          <circle cx="385" cy="170" r="30" fill="url(#${uid}_caseBody)"/>
          <!-- Silicone Tip -->
          <path d="M 415 160 C 430 160, 440 170, 440 180 C 440 190, 430 200, 415 200 Z" fill="${tipColor}" opacity="0.9"/>
          <!-- Acoustic Port Grille -->
          <ellipse cx="385" cy="155" rx="5" ry="3" fill="${dark}" opacity="0.7"/>
          <!-- Stem with Sensor -->
          <rect x="364" y="180" width="16" height="65" rx="8" fill="url(#${uid}_stem)" transform="rotate(12 364 180)"/>
          <rect x="374" y="208" width="4" height="14" rx="2" fill="${dark}" opacity="0.5" transform="rotate(12 364 180)"/>
          <!-- Microphone Mesh Port -->
          <circle cx="368" cy="235" r="2" fill="#333"/>
        </g>
      </g>
    </svg>
    `;
  },

  "in-ear": (color, uid) => {
    const dark = shadeColor(color, -25);
    const highlight = shadeColor(color, 40);

    return `
    <svg class="product-svg" viewBox="0 0 500 500" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Dhvani Air Wireless Earbuds illustration">
      <defs>
        <radialGradient id="${uid}_airCase" cx="30%" cy="30%" r="70%">
          <stop offset="0%" stop-color="${highlight}"/>
          <stop offset="60%" stop-color="${color}"/>
          <stop offset="100%" stop-color="${dark}"/>
        </radialGradient>
      </defs>

      <g class="svg-artwork-group">
        <!-- Horizontal Pebble Charging Case -->
        <rect x="160" y="260" width="180" height="140" rx="50" fill="url(#${uid}_airCase)"/>
        <!-- Lid Line -->
        <path d="M 160 305 L 340 305" stroke="${dark}" stroke-width="1.5" opacity="0.4"/>
        <!-- Indicator LED -->
        <circle cx="250" cy="335" r="3" fill="#34c759"/>

        <!-- Left Earbud Minimalist Stem -->
        <g transform="translate(15, 20)">
          <circle cx="120" cy="160" r="26" fill="url(#${uid}_airCase)"/>
          <rect x="122" y="165" width="14" height="60" rx="7" fill="url(#${uid}_airCase)" transform="rotate(-8 122 165)"/>
          <!-- Speaker acoustic mesh -->
          <ellipse cx="106" cy="160" rx="8" ry="12" fill="${dark}" opacity="0.8"/>
        </g>

        <!-- Right Earbud -->
        <g transform="translate(-15, 20)">
          <circle cx="380" cy="160" r="26" fill="url(#${uid}_airCase)"/>
          <rect x="364" y="165" width="14" height="60" rx="7" fill="url(#${uid}_airCase)" transform="rotate(8 364 165)"/>
          <!-- Speaker acoustic mesh -->
          <ellipse cx="394" cy="160" rx="8" ry="12" fill="${dark}" opacity="0.8"/>
        </g>
      </g>
    </svg>
    `;
  },

  "sport": (color, uid) => {
    const dark = shadeColor(color, -30);
    const highlight = shadeColor(color, 40);
    const hookColor = shadeColor(color, -10);

    return `
    <svg class="product-svg" viewBox="0 0 500 500" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Dhvani Sport Waterproof Wireless Earbuds illustration">
      <defs>
        <radialGradient id="${uid}_sport" cx="30%" cy="30%" r="70%">
          <stop offset="0%" stop-color="${highlight}"/>
          <stop offset="60%" stop-color="${color}"/>
          <stop offset="100%" stop-color="${dark}"/>
        </radialGradient>
      </defs>

      <g class="svg-artwork-group">
        <!-- Ruggedized Sport Charging Case with Rubberized Texture -->
        <rect x="150" y="270" width="200" height="130" rx="36" fill="${dark}"/>
        <rect x="155" y="275" width="190" height="120" rx="32" fill="url(#${uid}_sport)"/>
        <path d="M 150 320 L 350 320" stroke="${dark}" stroke-width="2"/>
        <circle cx="250" cy="345" r="3.5" fill="#34c759"/>
        <!-- Rugged side grip grooves -->
        <rect x="146" y="335" width="4" height="24" rx="2" fill="${dark}"/>
        <rect x="350" y="335" width="4" height="24" rx="2" fill="${dark}"/>

        <!-- Left Sport Earbud with Ergonomic Wingtip Hook -->
        <g transform="translate(10, -10)">
          <!-- Dynamic Secure Earhook Arch -->
          <path d="M 140 180 C 130 110, 70 120, 75 185 C 80 230, 115 220, 125 200" stroke="${hookColor}" stroke-width="12" stroke-linecap="round" fill="none"/>
          <circle cx="130" cy="190" r="24" fill="url(#${uid}_sport)"/>
          <!-- Sweat-proof silicone tip -->
          <ellipse cx="108" cy="190" rx="10" ry="14" fill="${dark}"/>
          <!-- Physical tactile control button -->
          <circle cx="132" cy="190" r="10" stroke="${highlight}" stroke-width="2" fill="${dark}"/>
        </g>

        <!-- Right Sport Earbud -->
        <g transform="translate(-10, -10)">
          <!-- Dynamic Secure Earhook Arch -->
          <path d="M 360 180 C 370 110, 430 120, 425 185 C 420 230, 385 220, 375 200" stroke="${hookColor}" stroke-width="12" stroke-linecap="round" fill="none"/>
          <circle cx="370" cy="190" r="24" fill="url(#${uid}_sport)"/>
          <ellipse cx="392" cy="190" rx="10" ry="14" fill="${dark}"/>
          <circle cx="368" cy="190" r="10" stroke="${highlight}" stroke-width="2" fill="${dark}"/>
        </g>
      </g>
    </svg>
    `;
  },

  "go": (color, uid) => {
    const dark = shadeColor(color, -25);
    const highlight = shadeColor(color, 40);

    return `
    <svg class="product-svg" viewBox="0 0 500 500" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Dhvani Go Budget Wireless Earphones illustration">
      <defs>
        <radialGradient id="${uid}_go" cx="35%" cy="35%" r="65%">
          <stop offset="0%" stop-color="${highlight}"/>
          <stop offset="60%" stop-color="${color}"/>
          <stop offset="100%" stop-color="${dark}"/>
        </radialGradient>
      </defs>

      <g class="svg-artwork-group">
        <!-- Ultra-compact Slim Pocket Case -->
        <rect x="170" y="270" width="160" height="120" rx="42" fill="url(#${uid}_go)"/>
        <path d="M 170 310 L 330 310" stroke="${dark}" stroke-width="1.5" opacity="0.4"/>
        <circle cx="250" cy="335" r="3" fill="#34c759"/>

        <!-- Left Earbud -->
        <g transform="translate(20, 30)">
          <circle cx="130" cy="155" r="22" fill="url(#${uid}_go)"/>
          <rect x="130" y="160" width="11" height="48" rx="5.5" fill="url(#${uid}_go)" transform="rotate(-6 130 160)"/>
          <ellipse cx="118" cy="155" rx="7" ry="10" fill="${dark}"/>
        </g>

        <!-- Right Earbud -->
        <g transform="translate(-20, 30)">
          <circle cx="370" cy="155" r="22" fill="url(#${uid}_go)"/>
          <rect x="359" y="160" width="11" height="48" rx="5.5" fill="url(#${uid}_go)" transform="rotate(6 359 160)"/>
          <ellipse cx="382" cy="155" rx="7" ry="10" fill="${dark}"/>
        </g>
      </g>
    </svg>
    `;
  }
};

/**
 * Render visual wrapper:
 * If product has an imagePath specified and set, uses <img>.
 * Otherwise, generates the clean inline SVG vector illustration with dynamic color swatch support.
 */
function renderProductVisual(product, selectedHex, className = "") {
  if (!product) return "";
  if (product.imagePath && product.imagePath.trim() !== "") {
    return `
      <div class="product-svg-wrapper ${className}" data-product-id="${product.id}">
        <img src="${product.imagePath}" alt="${product.name}" class="product-img" loading="lazy" />
      </div>`;
  }
  const color = selectedHex || (product.colors && product.colors[0] ? product.colors[0].hex : "#1d1d1f");
  const generator = SVG_GENERATORS[product.visualType] || SVG_GENERATORS["over-ear"];
  const uid = "p_" + Math.random().toString(36).slice(2, 9);
  const svgMarkup = generator(color, uid);
  return `<div class="product-svg-wrapper ${className}" data-product-id="${product.id}">${svgMarkup}</div>`;
}

// Export for browser globals
window.PRODUCTS = PRODUCTS;
window.formatPrice = formatPrice;
window.getProductById = getProductById;
window.renderProductVisual = renderProductVisual;
