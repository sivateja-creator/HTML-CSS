/* =========================================================
   XOFEE COFFEE SHOP - CUSTOM JAVASCRIPT
   College mini project by Shiva Chowdary
   ========================================================= */

/* ---------------------------------------------------------
   1. COFFEE MENU DATA (50 unique items)
   Each coffee has: id, name, category, price, desc, rating, img
   --------------------------------------------------------- */
const coffeeImages = [
  "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1507133750040-4a8f57021571?auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1514066558159-fc8c737ef259?auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1461988320302-91bde64fc8ad?auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1497636577773-f1231844b336?auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1524350876685-274059332603?auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1503481766315-7a586b20f66d?auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1442550528301-6825c94ec84a?auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1592318951566-4cd0a03d6e6b?auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1610889556528-9a770e32642f?auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1578374173705-969cbe6f2d6b?auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1517959105821-eaf2591984ca?auto=format&fit=crop&w=500&q=80"
];

// Helper to cycle through the image list so every card gets a real coffee photo
function imgFor(index) {
  return coffeeImages[index % coffeeImages.length];
}

const coffeeMenu = [
  // ---------------- ESPRESSO (7) ----------------
  { id: 1, name: "Classic Espresso", category: "Espresso", price: 99, rating: 4.6,
    desc: "A bold single shot pulled from freshly ground dark roast beans." },
  { id: 2, name: "Double Shot Espresso", category: "Espresso", price: 129, rating: 4.7,
    desc: "Double the intensity, double the caffeine kick for early mornings." },
  { id: 3, name: "Espresso Romano", category: "Espresso", price: 119, rating: 4.4,
    desc: "Classic espresso served with a twist of fresh lemon peel." },
  { id: 4, name: "Ristretto", category: "Espresso", price: 109, rating: 4.5,
    desc: "A short, concentrated shot with a rich, syrupy texture." },
  { id: 5, name: "Long Shot Espresso", category: "Espresso", price: 119, rating: 4.3,
    desc: "Extended extraction for a milder, smoother espresso experience." },
  { id: 6, name: "Espresso Con Panna", category: "Espresso", price: 139, rating: 4.6,
    desc: "Espresso topped with a dollop of fresh whipped cream." },
  { id: 7, name: "Affogato", category: "Espresso", price: 159, rating: 4.8,
    desc: "Hot espresso poured over a scoop of vanilla ice cream." },

  // ---------------- CAPPUCCINO (7) ----------------
  { id: 8, name: "Classic Cappuccino", category: "Cappuccino", price: 139, rating: 4.7,
    desc: "Equal parts espresso, steamed milk and thick milk foam." },
  { id: 9, name: "Dry Cappuccino", category: "Cappuccino", price: 139, rating: 4.4,
    desc: "Extra foam, less milk, for those who love a light, airy sip." },
  { id: 10, name: "Wet Cappuccino", category: "Cappuccino", price: 139, rating: 4.5,
    desc: "More steamed milk and less foam for a creamier cup." },
  { id: 11, name: "Cinnamon Cappuccino", category: "Cappuccino", price: 149, rating: 4.6,
    desc: "Classic cappuccino dusted with warm ground cinnamon." },
  { id: 12, name: "Vanilla Cappuccino", category: "Cappuccino", price: 149, rating: 4.7,
    desc: "Smooth cappuccino sweetened with a hint of vanilla syrup." },
  { id: 13, name: "Chocolate Cappuccino", category: "Cappuccino", price: 159, rating: 4.6,
    desc: "Rich cappuccino topped with a light dusting of cocoa powder." },
  { id: 14, name: "Iced Cappuccino", category: "Cappuccino", price: 149, rating: 4.5,
    desc: "Chilled espresso and cold foamed milk poured over ice." },

  // ---------------- LATTE (7) ----------------
  { id: 15, name: "Classic Latte", category: "Latte", price: 149, rating: 4.7,
    desc: "Silky steamed milk with a shot of espresso and light foam." },
  { id: 16, name: "Vanilla Latte", category: "Latte", price: 159, rating: 4.8,
    desc: "Our classic latte sweetened with real vanilla bean syrup." },
  { id: 17, name: "Caramel Latte", category: "Latte", price: 159, rating: 4.8,
    desc: "Buttery caramel drizzle swirled into a smooth espresso latte." },
  { id: 18, name: "Hazelnut Latte", category: "Latte", price: 159, rating: 4.6,
    desc: "Nutty hazelnut syrup blended with velvety steamed milk." },
  { id: 19, name: "Pumpkin Spice Latte", category: "Latte", price: 169, rating: 4.5,
    desc: "Warm spiced latte with notes of cinnamon, nutmeg and clove." },
  { id: 20, name: "Iced Latte", category: "Latte", price: 159, rating: 4.6,
    desc: "Chilled espresso poured over milk and ice, refreshingly smooth." },
  { id: 21, name: "Honey Lavender Latte", category: "Latte", price: 169, rating: 4.4,
    desc: "A floral, lightly sweet latte infused with honey and lavender." },

  // ---------------- MOCHA (6) ----------------
  { id: 22, name: "Classic Mocha", category: "Mocha", price: 159, rating: 4.7,
    desc: "A comforting blend of espresso, steamed milk and rich chocolate." },
  { id: 23, name: "White Chocolate Mocha", category: "Mocha", price: 169, rating: 4.6,
    desc: "Creamy white chocolate sauce blended with smooth espresso." },
  { id: 24, name: "Dark Chocolate Mocha", category: "Mocha", price: 169, rating: 4.8,
    desc: "Intense dark chocolate paired with a bold espresso shot." },
  { id: 25, name: "Mint Mocha", category: "Mocha", price: 169, rating: 4.5,
    desc: "Chocolatey mocha with a cool, refreshing mint finish." },
  { id: 26, name: "Caramel Mocha", category: "Mocha", price: 169, rating: 4.7,
    desc: "The best of both worlds — chocolate and caramel in one cup." },
  { id: 27, name: "Iced Mocha", category: "Mocha", price: 169, rating: 4.6,
    desc: "Chilled chocolate espresso drink topped with whipped cream." },

  // ---------------- AMERICANO (6) ----------------
  { id: 28, name: "Classic Americano", category: "Americano", price: 109, rating: 4.4,
    desc: "Espresso diluted with hot water for a lighter, smoother cup." },
  { id: 29, name: "Iced Americano", category: "Americano", price: 119, rating: 4.5,
    desc: "Bold espresso and cold water served over a tall glass of ice." },
  { id: 30, name: "Long Black", category: "Americano", price: 119, rating: 4.3,
    desc: "Hot water topped with espresso, preserving the crema layer." },
  { id: 31, name: "Red Eye Americano", category: "Americano", price: 129, rating: 4.6,
    desc: "Americano with an added espresso shot for extra caffeine." },
  { id: 32, name: "Black Americano", category: "Americano", price: 109, rating: 4.2,
    desc: "No milk, no sugar — just pure, strong black coffee." },
  { id: 33, name: "Sweet Americano", category: "Americano", price: 119, rating: 4.4,
    desc: "Classic Americano lightly sweetened with brown sugar syrup." },

  // ---------------- COLD BREW (6) ----------------
  { id: 34, name: "Classic Cold Brew", category: "Cold Brew", price: 149, rating: 4.7,
    desc: "Steeped for 18 hours for a smooth, naturally sweet flavour." },
  { id: 35, name: "Vanilla Cold Brew", category: "Cold Brew", price: 159, rating: 4.6,
    desc: "Slow-steeped cold brew finished with vanilla bean syrup." },
  { id: 36, name: "Nitro Cold Brew", category: "Cold Brew", price: 179, rating: 4.9,
    desc: "Nitrogen-infused cold brew with a creamy, cascading texture." },
  { id: 37, name: "Caramel Cold Brew", category: "Cold Brew", price: 159, rating: 4.6,
    desc: "Smooth cold brew layered with a rich caramel drizzle." },
  { id: 38, name: "Coconut Cold Brew", category: "Cold Brew", price: 169, rating: 4.5,
    desc: "Cold brew coffee blended with creamy coconut milk." },
  { id: 39, name: "Mocha Cold Brew", category: "Cold Brew", price: 169, rating: 4.6,
    desc: "Chilled cold brew swirled with chocolate sauce and cream." },

  // ---------------- FLAT WHITE (6) ----------------
  { id: 40, name: "Classic Flat White", category: "Flat White", price: 149, rating: 4.7,
    desc: "Double espresso with steamed milk poured in a thin velvety layer." },
  { id: 41, name: "Vanilla Flat White", category: "Flat White", price: 159, rating: 4.6,
    desc: "Our flat white sweetened with a touch of vanilla syrup." },
  { id: 42, name: "Caramel Flat White", category: "Flat White", price: 159, rating: 4.7,
    desc: "Smooth microfoam milk with a ribbon of buttery caramel." },
  { id: 43, name: "Honey Flat White", category: "Flat White", price: 159, rating: 4.5,
    desc: "Natural honey stirred into a silky smooth flat white." },
  { id: 44, name: "Double Flat White", category: "Flat White", price: 169, rating: 4.6,
    desc: "An extra shot of espresso for those who need more punch." },
  { id: 45, name: "Almond Flat White", category: "Flat White", price: 169, rating: 4.5,
    desc: "Made with creamy almond milk for a nutty, dairy-free option." },

  // ---------------- MACCHIATO (5) ----------------
  { id: 46, name: "Classic Macchiato", category: "Macchiato", price: 119, rating: 4.5,
    desc: "Espresso 'marked' with a small dollop of foamed milk." },
  { id: 47, name: "Caramel Macchiato", category: "Macchiato", price: 159, rating: 4.9,
    desc: "Vanilla-flavoured milk topped with espresso and caramel drizzle." },
  { id: 48, name: "Vanilla Macchiato", category: "Macchiato", price: 149, rating: 4.6,
    desc: "A creamy vanilla twist layered with a bold espresso shot." },
  { id: 49, name: "Iced Macchiato", category: "Macchiato", price: 159, rating: 4.6,
    desc: "Chilled milk and ice, marked with a shot of hot espresso." },
  { id: 50, name: "Chocolate Macchiato", category: "Macchiato", price: 159, rating: 4.7,
    desc: "Espresso and milk layered with a rich chocolate drizzle." }
];

// Attach an image to every coffee item
coffeeMenu.forEach((item, index) => {
  item.img = imgFor(index);
});

/* ---------------------------------------------------------
   2. RENDER MENU CARDS
   --------------------------------------------------------- */
const menuContainer = document.getElementById("menuContainer");
const resultCount = document.getElementById("resultCount");
const noResults = document.getElementById("noResults");

function renderMenu(items) {
  menuContainer.innerHTML = ""; // clear old cards

  if (items.length === 0) {
    noResults.classList.remove("d-none");
  } else {
    noResults.classList.add("d-none");
  }

  items.forEach(coffee => {
    const col = document.createElement("div");
    col.className = "col-sm-6 col-lg-3";

    col.innerHTML = `
      <div class="coffee-card">
        <img src="${coffee.img}" alt="${coffee.name}" loading="lazy">
        <div class="card-body">
          <span class="badge-cat">${coffee.category}</span>
          <h6 class="fw-bold mt-2 mb-1">${coffee.name}</h6>
          <p class="text-muted small mb-2">${coffee.desc}</p>
          <div class="d-flex justify-content-between align-items-center mb-2">
            <span class="price-tag">&#8377;${coffee.price}</span>
            <span class="rating"><i class="bi bi-star-fill"></i> ${coffee.rating}</span>
          </div>
          <button class="btn btn-warm btn-sm w-100 buy-btn" data-name="${coffee.name}">
            <i class="bi bi-bag-check-fill me-1"></i>Buy Now
          </button>
        </div>
      </div>
    `;
    menuContainer.appendChild(col);
  });

  resultCount.textContent = `Showing ${items.length} of ${coffeeMenu.length} coffees`;
}

/* ---------------------------------------------------------
   3. SEARCH + CATEGORY FILTER LOGIC
   --------------------------------------------------------- */
const categories = ["All", "Espresso", "Cappuccino", "Latte", "Mocha", "Americano", "Cold Brew", "Flat White", "Macchiato"];
const filterButtonsWrap = document.getElementById("filterButtons");
let activeCategory = "All";

// Build the filter buttons dynamically
categories.forEach(cat => {
  const btn = document.createElement("button");
  btn.className = "btn btn-sm" + (cat === "All" ? " active" : "");
  btn.textContent = cat;
  btn.dataset.category = cat;
  btn.addEventListener("click", () => {
    activeCategory = cat;
    document.querySelectorAll("#filterButtons .btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    applyFilters();
  });
  filterButtonsWrap.appendChild(btn);
});

const searchInput = document.getElementById("searchInput");
searchInput.addEventListener("input", applyFilters);

function applyFilters() {
  const searchTerm = searchInput.value.trim().toLowerCase();

  const filtered = coffeeMenu.filter(item => {
    const matchesCategory = activeCategory === "All" || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchTerm) ||
                           item.desc.toLowerCase().includes(searchTerm);
    return matchesCategory && matchesSearch;
  });

  renderMenu(filtered);
}

// Initial render on page load
renderMenu(coffeeMenu);

// Handle "Buy Now" clicks (simple alert since this is a front-end demo project)
menuContainer.addEventListener("click", (e) => {
  const btn = e.target.closest(".buy-btn");
  if (btn) {
    alert(`Thanks for ordering "${btn.dataset.name}" from Xofee! Your coffee will be ready in a few minutes. ☕`);
  }
});

/* ---------------------------------------------------------
   4. CATEGORY BOXES SCROLL TO MENU + FILTER
   --------------------------------------------------------- */
document.querySelectorAll("#categoryIcons .category-box").forEach(box => {
  box.addEventListener("click", () => {
    const catName = box.querySelector("p").textContent.trim();
    // Scroll to menu section
    document.getElementById("menu").scrollIntoView({ behavior: "smooth" });
    // Trigger the matching filter button
    const matchBtn = [...document.querySelectorAll("#filterButtons .btn")]
      .find(b => b.dataset.category === catName);
    if (matchBtn) matchBtn.click();
  });
});

/* ---------------------------------------------------------
   5. STICKY NAVBAR ON SCROLL
   --------------------------------------------------------- */
const navbar = document.getElementById("mainNavbar");
window.addEventListener("scroll", () => {
  if (window.scrollY > 60) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }

  // Back to top button visibility
  const backToTop = document.getElementById("backToTop");
  if (window.scrollY > 400) {
    backToTop.style.display = "flex";
  } else {
    backToTop.style.display = "none";
  }
});

/* ---------------------------------------------------------
   6. BACK TO TOP BUTTON CLICK
   --------------------------------------------------------- */
document.getElementById("backToTop").addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

/* ---------------------------------------------------------
   7. DARK MODE TOGGLE
   --------------------------------------------------------- */
const darkModeBtn = document.getElementById("darkModeBtn");
darkModeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  const icon = darkModeBtn.querySelector("i");
  if (document.body.classList.contains("dark-mode")) {
    icon.classList.remove("bi-moon-stars-fill");
    icon.classList.add("bi-sun-fill");
  } else {
    icon.classList.remove("bi-sun-fill");
    icon.classList.add("bi-moon-stars-fill");
  }
});

/* ---------------------------------------------------------
   8. CONTACT FORM SUBMIT (front-end only demo)
   --------------------------------------------------------- */
const contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", (e) => {
  e.preventDefault(); // stop actual page reload since there's no backend

  const formSuccess = document.getElementById("formSuccess");
  formSuccess.classList.remove("d-none");

  // Reset the form fields after "sending"
  contactForm.reset();

  // Hide success message after a few seconds
  setTimeout(() => {
    formSuccess.classList.add("d-none");
  }, 4000);
});

/* ---------------------------------------------------------
   9. LOADING SPINNER - hide once page has fully loaded
   --------------------------------------------------------- */
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  setTimeout(() => {
    loader.classList.add("hide");
  }, 800); // small delay so the spinner is actually visible
});

/* ---------------------------------------------------------
   10. HIGHLIGHT ACTIVE NAV LINK ON SCROLL (bonus UX touch)
   --------------------------------------------------------- */
const sections = document.querySelectorAll("section[id], header[id]");
const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});
