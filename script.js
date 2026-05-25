/* ============================================================
   STORAGE HELPERS
   ============================================================ */

function getStoredData(key, fallback) {
    const data = localStorage.getItem(key);
    if (!data) { localStorage.setItem(key, JSON.stringify(fallback)); return fallback; }
    return JSON.parse(data);
}
function saveStoredData(key, data) { localStorage.setItem(key, JSON.stringify(data)); }

/* ============================================================
   HARDCODED MENU CATALOG
   ============================================================ */

const menuCatalog = [
    { name: "2pcs Chicken Wings w/ Rice",   category: "rice",       price: 89,  img: "images/chicken.jpg",                       desc: "Crispy wings with delightful flavors" },
    { name: "Bacon Rice Bowl",              category: "rice",       price: 119, img: "images/baconricebowl.jpg",                 desc: "Savory bacon strips with rice" },
    { name: "Spam Rice Bowl",               category: "rice",       price: 119, img: "images/spamricebowl.jpg",                  desc: "Sliced spam served with rice" },
    { name: "Ham Rice Bowl",                category: "rice",       price: 119, img: "images/hamricebowl.jpg",                   desc: "Tender ham atop steamed rice" },
    { name: "Beef Bulgogi Rice Bowl",       category: "rice",       price: 149, img: "images/beefbulgogirice.jpg",               desc: "Sweet savory beef over rice" },
    { name: "Spicy Beef Bulgogi Rice Bowl", category: "rice",       price: 149, img: "images/spicybeeffrice.jpg",                desc: "Fiery marinated beef with rice" },
    { name: "Pork Bulgogi Rice Bowl",       category: "rice",       price: 149, img: "images/porkbulgogirice.jpg",               desc: "Traditional marinated pork over rice" },
    { name: "Spicy Pork Bulgogi Rice Bowl", category: "rice",       price: 149, img: "images/spicyporkrice.jpg",                 desc: "Bold spicy pork with rice" },
    { name: "Fries",                        category: "snacks",     price: 89,  img: "images/fries.jpg",                         desc: "French fries with different flavors" },
    { name: "Classic Corndog",              category: "snacks",     price: 119, img: "images/4 Ramyeon Corndogs.jpg",            desc: "Simple golden battered fried sausage" },
    { name: "Ramyeon Corndog",              category: "snacks",     price: 129, img: "images/4 Ramyeon Corndogs.jpg",            desc: "Crunchy, ramen-coated golden fried sausage" },
    { name: "Potato Corndog",               category: "snacks",     price: 129, img: "images/fries.jpg",                         desc: "Crispy potato coated sausage" },
    { name: "Mozzadog",                     category: "snacks",     price: 139, img: "images/chicken.jpg",                       desc: "Half mozzarella half sausage stick" },
    { name: "Mozzaspam Corndog",            category: "snacks",     price: 149, img: "images/3 Spam Sandwhich.jpg",              desc: "Fried mozzarella and spam stick" },
    { name: "Ramen",                        category: "ramen",      price: 169, img: "images/ramen.jpg",                         desc: "Hot ramen with authentic taste" },
    { name: "Classic Toast Sandwich",       category: "sandwiches", price: 109, img: "images/egg sandwich.jpg",                  desc: "Fluffy egg sandwich" },
    { name: "Chicken Pesto Sandwich",       category: "sandwiches", price: 159, img: "images/3 Pork Bulgogi Sandwich.jpg",       desc: "Herbaceous chicken and egg fusion" },
    { name: "Ham Sandwich",                 category: "sandwiches", price: 149, img: "images/egg sandwich.jpg",                  desc: "Savory ham, fluffy egg brioche" },
    { name: "Bacon Sandwich",               category: "sandwiches", price: 149, img: "images/baconricebowl.jpg",                 desc: "Smoky bacon with creamy eggs" },
    { name: "Beef Bulgogi Sandwich",        category: "sandwiches", price: 169, img: "images/3 Spicy Beef Bulgogi Sandwich.jpg", desc: "Sweet, savory Korean beef bulgogi" },
    { name: "Spicy Beef Bulgogi Sandwich",  category: "sandwiches", price: 169, img: "images/3 Spicy Beef Bulgogi Sandwich.jpg", desc: "Fiery, marinated Korean beef bulgogi" },
    { name: "Pork Bulgogi Sandwich",        category: "sandwiches", price: 159, img: "images/3 Pork Bulgogi Sandwich.jpg",       desc: "Traditional, tender pork bulgogi flavors" },
    { name: "Spicy Pork Bulgogi Sandwich",  category: "sandwiches", price: 159, img: "images/3 Spicy Pork Bulgogi Sandwich.jpg", desc: "Bold, fiery pork bulgogi kick" },
    { name: "Chicken Katsu Sandwich",       category: "sandwiches", price: 159, img: "images/chicken.jpg",                       desc: "Crispy chicken cutlet with eggs" },
    { name: "Hot Coffee",                   category: "drinks",     price: 88,  img: "images/hotcoffee.jpg",                     desc: "Hot coffee perfect for cold weather" },
    { name: "Fruity Drinks",                category: "drinks",     price: 78,  img: "images/drinks.jpg",                        desc: "Fruity drinks to ease the thirst" },
    { name: "Iced Caramel Macchiato",       category: "drinks",     price: 88,  img: "images/carmacc.jpg",                       desc: "Espresso, milk, and sweet caramel" },
    { name: "Cafe Mocha",                   category: "drinks",     price: 88,  img: "images/cafemocha.jpg",                     desc: "Rich chocolate meets espresso coffee" },
    { name: "Iced Chocolate",               category: "drinks",     price: 88,  img: "images/chocolate.jpg",                     desc: "Rich, creamy, chilled cocoa delight" },
    { name: "Matcha Latte",                 category: "drinks",     price: 88,  img: "images/matchalatte.jpg",                   desc: "Earthy green tea, creamy milk" },
    { name: "French Vanilla",               category: "drinks",     price: 88,  img: "images/frenchvan.jpg",                     desc: "Smooth, creamy, classic vanilla bean" },
    { name: "Hazelnut Latte",               category: "drinks",     price: 88,  img: "images/haznutlatte.jpg",                   desc: "Nutty, aromatic coffee milk blend" },
    { name: "Cookies n' Cream Frappe",      category: "drinks",     price: 108, img: "images/cncfrappe.jpg",                     desc: "Sweet, cookies, and cream frappe" },
    { name: "Ube Frappe",                   category: "drinks",     price: 108, img: "images/ubefrap.jpg",                       desc: "Sweet, purple yam blended ice" },
    { name: "Salted Caramel Frappe",        category: "drinks",     price: 118, img: "images/salcarfrappe.jpg",                  desc: "Sweet, salty, blended coffee treat" },
    { name: "Dark Choco Frappe",            category: "drinks",     price: 118, img: "images/dcfrappe.jpg",                      desc: "Intense, rich, blended chocolate ice" },
    { name: "Java Chips Frappe",            category: "drinks",     price: 118, img: "images/javachip.jpg",                      desc: "Coffee blend with chocolate bits" }
];

/* ============================================================
   GLOBAL STATE (localStorage only)
   ============================================================ */

let products  = getStoredData("kegg_products",  menuCatalog.map(i => ({ ...i, stock: 50, status: "available" })));
let orders    = getStoredData("kegg_orders",    []);
let customers = getStoredData("kegg_customers", []);

/* ============================================================
   NAVIGATION — hamburger
   ============================================================ */

document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById("hamburger");
    const navLinks  = document.getElementById("navLinks");
    if (hamburger && navLinks) {
        hamburger.addEventListener("click", function () {
            navLinks.classList.toggle("open");
            hamburger.classList.toggle("open");
        });
        navLinks.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", function () {
                navLinks.classList.remove("open");
                hamburger.classList.remove("open");
            });
        });
    }
});

/* ============================================================
   NAVIGATION — show logged-in username
   ============================================================ */

function syncNavHeader() {
    const username = localStorage.getItem("kegg_user");
    const iconContainer = document.querySelector(".acc-icon");
    if (!username || !iconContainer) return;
    let display = document.getElementById("navUsernameDisplay");
    if (!display) {
        display = document.createElement("span");
        display.id = "navUsernameDisplay";
        iconContainer.appendChild(display);
    }
    display.innerText = username;
}
document.addEventListener("DOMContentLoaded", syncNavHeader);

/* ============================================================
   MENU PAGE
   ============================================================ */

function buildMenuCard(item) {
    const card = document.createElement('div');
    card.className = 'menu-card';
    card.setAttribute('data-category', item.category);
    card.innerHTML = `
        <div class="card-img-container">
            <img src="${item.img}" alt="${item.name}" loading="lazy" onerror="this.src='images/kegglogo.png'">
        </div>
        <div class="card-info">
            <h4>${item.name}</h4>
            <p class="desc">${item.desc}</p>
            <div class="price-add">
                <p class="price">₱ ${item.price}</p>
                <button class="add-btn" data-name="${item.name}" data-price="${item.price}">+ Add</button>
            </div>
        </div>`;
    return card;
}

function renderMenuCards() {
    const grid = document.querySelector('.menu-grid');
    if (!grid) return;
    grid.innerHTML = '';
    menuCatalog.forEach(item => grid.appendChild(buildMenuCard(item)));
    grid.querySelectorAll('.add-btn').forEach(btn => {
        btn.addEventListener('click', function () {
            const itemName  = this.getAttribute('data-name');
            const itemPrice = parseInt(this.getAttribute('data-price'));
            const imgEl     = this.closest('.menu-card')?.querySelector('img');
            const itemImg   = imgEl ? imgEl.src : 'images/kegglogo.png';
            const cart      = JSON.parse(localStorage.getItem('kegg_cart') || '[]');
            const existing  = cart.find(i => i.name === itemName);
            if (existing) { existing.quantity += 1; }
            else { cart.push({ name: itemName, price: itemPrice, img: itemImg, quantity: 1 }); }
            localStorage.setItem('kegg_cart', JSON.stringify(cart));
            alert('🛒 ' + itemName + ' added to your cart!');
        });
    });
}

document.addEventListener("DOMContentLoaded", function () {
    if (!document.querySelector(".menu-page")) return;
    renderMenuCards();

    const searchBar = document.querySelector(".search-bar");
    if (searchBar) {
        searchBar.addEventListener("keyup", function () {
            const query = searchBar.value.toLowerCase();
            document.querySelectorAll(".menu-card").forEach(card => {
                const name = card.querySelector("h4")?.textContent.toLowerCase() || "";
                card.style.display = name.includes(query) ? "block" : "none";
            });
        });
    }

    document.querySelectorAll(".menu-filters .filter-btn").forEach(btn => {
        btn.addEventListener("click", function () {
            document.querySelectorAll(".menu-filters .filter-btn").forEach(b => b.classList.remove("active"));
            this.classList.add("active");
            const filter = this.getAttribute("data-filter");
            document.querySelectorAll(".menu-card").forEach(card => {
                card.style.display = (filter === "all" || card.getAttribute("data-category") === filter) ? "block" : "none";
            });
        });
    });
});

/* ============================================================
   CART PAGE
   ============================================================ */

function calculateTotals(subtotal) {
    const delivery      = 0;
    const customization = subtotal > 0 ? 15 : 0;
    const processing    = subtotal > 0 ? 11 : 0;
    const total         = subtotal + delivery + customization + processing;
    const set = (id, val) => { const el = document.getElementById(id); if (el) el.innerText = "₱" + val; };
    set("summary-subtotal",      subtotal);
    set("summary-delivery",      delivery);
    set("summary-customization", customization);
    set("summary-processing",    processing);
    set("summary-grand-total",   total);
}

function loadCartItems() {
    const list = document.getElementById("cart-items-list");
    if (!list) return;
    const cart = JSON.parse(localStorage.getItem("kegg_cart") || "[]");
    list.innerHTML = "";
    if (cart.length === 0) {
        list.innerHTML = '<p class="empty-cart-msg">Your cart is currently empty.</p>';
        calculateTotals(0);
        return;
    }
    let subtotal = 0;
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        subtotal += itemTotal;
        const row = document.createElement("div");
        row.className = "cart-item-row dynamic-cart-row";
        const left = document.createElement("div");
        left.className = "cart-left-details";
        const img = document.createElement("img");
        img.src = item.img;
        img.className = "cart-product-img";
        const meta = document.createElement("div");
        const nameEl = document.createElement("h4");
        nameEl.innerText = item.name;
        nameEl.className = "cart-item-title";
        const removeBtn = document.createElement("span");
        removeBtn.innerText = "Remove";
        removeBtn.className = "cart-remove-link";
        removeBtn.addEventListener("click", (function (name) {
            return function () {
                const updated = JSON.parse(localStorage.getItem("kegg_cart") || "[]").filter(i => i.name !== name);
                localStorage.setItem("kegg_cart", JSON.stringify(updated));
                loadCartItems();
            };
        })(item.name));
        meta.appendChild(nameEl);
        meta.appendChild(removeBtn);
        left.appendChild(img);
        left.appendChild(meta);
        const right = document.createElement("div");
        right.className = "cart-right-controls";
        const qtyWrap = document.createElement("div");
        qtyWrap.className = "cart-qty-container";
        function makeQtyBtn(label, delta) {
            const btn = document.createElement("button");
            btn.innerText = label;
            btn.className = "cart-qty-btn";
            btn.addEventListener("click", (function (name) {
                return function () {
                    const c = JSON.parse(localStorage.getItem("kegg_cart") || "[]");
                    const found = c.find(i => i.name === name);
                    if (found) found.quantity = Math.max(1, found.quantity + delta);
                    localStorage.setItem("kegg_cart", JSON.stringify(c));
                    loadCartItems();
                };
            })(item.name));
            return btn;
        }
        const qtyInput = document.createElement("input");
        qtyInput.type = "text"; qtyInput.value = item.quantity;
        qtyInput.className = "cart-qty-field custom-qty-input"; qtyInput.readOnly = true;
        qtyWrap.appendChild(makeQtyBtn("-", -1));
        qtyWrap.appendChild(qtyInput);
        qtyWrap.appendChild(makeQtyBtn("+", 1));
        const priceEl = document.createElement("span");
        priceEl.className = "item-row-price-value custom-final-price";
        priceEl.innerText = "₱" + itemTotal;
        right.appendChild(qtyWrap);
        right.appendChild(priceEl);
        row.appendChild(left);
        row.appendChild(right);
        list.appendChild(row);
    });
    calculateTotals(subtotal);
}

document.addEventListener("DOMContentLoaded", loadCartItems);

/* ============================================================
   CHECKOUT PAGE
   ============================================================ */

function buildScheduleDropdowns() {
    const pickDate = document.getElementById("pickDate");
    const pickTime = document.getElementById("pickTime");
    if (!pickDate || !pickTime) return;
    const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const today = new Date();
    for (let i = 0; i < 7; i++) {
        const d = new Date(); d.setDate(today.getDate() + i);
        const dateStr = d.toISOString().split("T")[0];
        const opt = document.createElement("option");
        opt.value = dateStr; opt.innerText = dateStr + " (" + days[d.getDay()] + ")";
        pickDate.appendChild(opt);
    }
    for (let h = 7; h <= 22; h++) {
        const suffix = h >= 12 ? " PM" : " AM";
        const displayHour = h > 12 ? h - 12 : h;
        [":00", ":30"].forEach(min => {
            const opt = document.createElement("option");
            opt.value = h + min; opt.innerText = displayHour + min + suffix;
            pickTime.appendChild(opt);
        });
    }
}

function renderCheckoutSummary() {
    const container = document.getElementById("sumItemsList") || document.getElementById("checkoutItemsList");
    if (!container) return;
    const cart = JSON.parse(localStorage.getItem("kegg_cart") || "[]");
    container.innerHTML = "";
    let subtotal = 0;
    cart.forEach(item => {
        subtotal += item.price * item.quantity;
        const row = document.createElement("div");
        row.style.cssText = "display:flex;justify-content:space-between;padding:5px 0";
        const left = document.createElement("span"); left.innerText = item.name + " x" + item.quantity;
        const right = document.createElement("span"); right.innerText = "₱" + (item.price * item.quantity);
        row.appendChild(left); row.appendChild(right); container.appendChild(row);
    });
    const customization = subtotal > 0 ? 15 : 0;
    const processing    = subtotal > 0 ? 11 : 0;
    const grand         = subtotal + customization + processing;
    const set = (id, val) => { const el = document.getElementById(id); if (el) el.innerText = "₱" + val; };
    set("sumSubtotal", subtotal); set("sumCustomization", customization);
    set("sumProcessing", processing); set("sumGrandTotal", grand);
}

document.addEventListener("DOMContentLoaded", function () {
    if (!document.getElementById("checkoutForm")) return;
    buildScheduleDropdowns();
    renderCheckoutSummary();

    const payGcash   = document.getElementById("payGcash");
    const payCash    = document.getElementById("payCash");
    const gcashBlock = document.getElementById("gcashDetailsBlock");
    if (payGcash && payCash && gcashBlock) {
        payGcash.addEventListener("change", () => { gcashBlock.style.display = "block"; });
        payCash.addEventListener("change",  () => { gcashBlock.style.display = "none"; });
    }

    document.getElementById("checkoutForm").addEventListener("submit", function (e) {
        e.preventDefault();
        const cart = JSON.parse(localStorage.getItem("kegg_cart") || "[]");
        if (cart.length === 0) { alert("Your cart is empty."); return; }

        const name  = document.getElementById("billName").value.trim();
        const phone = document.getElementById("billPhone").value.trim();
        const email = document.getElementById("billEmail")?.value.trim() || "N/A";
        const date  = document.getElementById("pickDate").value;
        const time  = document.getElementById("pickTime").value;
        const notes = document.getElementById("billNotes")?.value.trim() || "None";

        let paymentMethod = "Cash";
        if (payGcash && payGcash.checked) {
            paymentMethod = "GCash";
            if (document.getElementById("gcashReceipt") && !document.getElementById("gcashReceipt").files[0]) {
                alert("Please upload your GCash receipt."); return;
            }
        }

        let subtotal = 0;
        cart.forEach(item => { subtotal += item.price * item.quantity; });
        const customization = subtotal > 0 ? 15 : 0;
        const processing    = subtotal > 0 ? 11 : 0;
        const grand         = subtotal + customization + processing;
        const ref           = "KEGG-" + Math.floor(Math.random() * 900000 + 100000);

        // Save order to localStorage
        orders = getStoredData("kegg_orders", []);
        orders.push({ ref, customer: name, phone, email, items: cart.map(i => i.name + " x" + i.quantity).join(", "), subtotal, total: grand, paymentMethod, status: "Pending", date, time, notes, timestamp: new Date().toISOString() });
        saveStoredData("kegg_orders", orders);

        // Save/update customer
        customers = getStoredData("kegg_customers", []);
        const existing = customers.find(c => c.phone === phone);
        if (existing) { existing.ordersCount += 1; existing.totalSpent += grand; }
        else { customers.push({ name, phone, email, ordersCount: 1, totalSpent: grand }); }
        saveStoredData("kegg_customers", customers);

        const submitBtn = document.querySelector(".co-place-btn");
        if (submitBtn) { submitBtn.disabled = true; submitBtn.textContent = "Order Placed!"; }

        alert("🎉 Order Submitted!\n\nThank you, " + name + "!\nRef: " + ref + "\nPickup: " + date + " at " + time + "\nPayment: " + paymentMethod + "\nTotal: ₱" + grand);
        localStorage.removeItem("kegg_cart");
        window.location.href = "index.html";
    });
});

/* ============================================================
   LOGIN & SIGNUP (localStorage only)
   ============================================================ */

document.addEventListener("DOMContentLoaded", function () {

    // Eye toggles
    function bindEye(eyeId, inputId) {
        const eye = document.getElementById(eyeId);
        const inp = document.getElementById(inputId);
        if (!eye || !inp) return;
        eye.addEventListener("click", function () {
            const hidden = inp.type === "password";
            inp.type = hidden ? "text" : "password";
            eye.innerText = hidden ? "🔒" : "👁️";
        });
    }
    bindEye("eyeToggle",        "loginPass");
    bindEye("togglePassEye",    "regPass");
    bindEye("toggleConfirmEye", "regConfirmPass");

    // ── LOGIN ──────────────────────────────────────────────
    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", function (e) {
            e.preventDefault();
            const username = document.getElementById("loginUsername")?.value.trim() || "";
            const password = document.getElementById("loginPass").value;

            const users = JSON.parse(localStorage.getItem("kegg_users") || "[]");
            const user  = users.find(u => u.username === username && u.password === password);

            if (user) {
                localStorage.setItem("kegg_user",    user.username);
                localStorage.setItem("kegg_user_id", user.username);
                alert("Welcome back, " + user.username + "!");
                window.location.href = "menu.html";
            } else {
                alert("Incorrect username or password. Please try again.");
            }
        });
    }

    // ── SIGN UP ────────────────────────────────────────────
    const regForm = document.getElementById("registrationForm");
    if (regForm) {
        regForm.addEventListener("submit", function (e) {
            e.preventDefault();
            const username = document.getElementById("regUsername").value.trim();
            const phone    = document.getElementById("regPhone")?.value.trim() || "";
            const pass     = document.getElementById("regPass").value;
            const confirm  = document.getElementById("regConfirmPass").value;

            if (pass !== confirm) { alert("Passwords do not match."); return; }
            if (pass.length < 6)  { alert("Password must be at least 6 characters."); return; }

            const users = JSON.parse(localStorage.getItem("kegg_users") || "[]");
            if (users.find(u => u.username === username)) {
                alert("Username already taken. Please choose another."); return;
            }

            users.push({ username, phone, password: pass });
            localStorage.setItem("kegg_users", JSON.stringify(users));
            localStorage.setItem("kegg_user",  username);
            alert("Registration successful! Welcome, " + username + ".");
            window.location.href = "menu.html";
        });
    }
});

/* ============================================================
   ADMIN PANEL — localStorage only
   ============================================================ */

// Hardcoded admin credentials (no server needed)
const ADMIN_CREDENTIALS = [
    { username: "kegg_admin", password: "Kegg@2026!", role: "superadmin" }
];

function adminLogout() {
    sessionStorage.removeItem("kegg_admin");
    sessionStorage.removeItem("kegg_admin_role");
    window.location.href = "admin-login.html";
}

let activePage       = "dashboard";
let editProductIndex = null;

window.switchPage = function (pageId) {
    activePage = pageId;
    document.querySelectorAll(".page-view").forEach(v => v.classList.remove("active-page"));
    document.querySelectorAll(".nav-item").forEach(n => n.classList.remove("active"));
    const view = document.getElementById("view-" + pageId);
    if (view) view.classList.add("active-page");
    const titles = { dashboard: "Dashboard", products: "Products Menu Customizer", inventory: "Inventory Management", orders: "Incoming Live Customer Orders", customers: "Registered Customer Database", settings: "System Control Settings" };
    const titleEl = document.getElementById("pageTitleDisplay");
    if (titleEl) titleEl.innerText = titles[pageId] || "Admin Panel";
    const activeBtn = document.querySelector(`.sidebar-nav button[onclick="switchPage('${pageId}')"]`);
    if (activeBtn) activeBtn.classList.add("active");
    if (pageId === "dashboard") refreshDashboard();
    if (pageId === "products")  renderProducts();
    if (pageId === "inventory") renderInventory();
    if (pageId === "orders")    renderOrders();
    if (pageId === "customers") renderCustomers();
};

// ── Dashboard ──────────────────────────────────────────────
function refreshDashboard() {
    products  = getStoredData("kegg_products",  menuCatalog.map(i => ({ ...i, stock: 50, status: "available" })));
    orders    = getStoredData("kegg_orders",    []);
    customers = getStoredData("kegg_customers", []);

    const set = (id, val) => { const el = document.getElementById(id); if (el) el.innerText = val; };
    set("dash-total-products",  products.length);
    set("dash-total-orders",    orders.length);
    set("dash-total-customers", customers.length);

    let lowCount = 0, alertHtml = "";
    products.forEach(p => {
        if ((p.stock || 0) <= 10) {
            lowCount++;
            alertHtml += `<tr><td>${p.name}</td><td>${p.stock}</td><td><span class='admin-badge-alert'>${(p.status||"").toUpperCase()}</span></td></tr>`;
        }
    });
    set("dash-low-stock", lowCount);
    const alertsTable = document.getElementById("dash-alerts-table");
    if (alertsTable) alertsTable.innerHTML = alertHtml || "<tr><td colspan='3'>All stocks stable.</td></tr>";

    const recentHtml = products.slice(-5).reverse().map(p =>
        `<tr><td>${p.name}</td><td>${p.category}</td><td>₱${p.price}</td></tr>`
    ).join("");
    const recentTable = document.getElementById("dash-recent-table");
    if (recentTable) recentTable.innerHTML = recentHtml || "<tr><td colspan='3'>No items.</td></tr>";
}

// ── Products ───────────────────────────────────────────────
window.renderProducts = window.runProductFilters = function () {
    products = getStoredData("kegg_products", menuCatalog.map(i => ({ ...i, stock: 50, status: "available" })));
    const tbody  = document.getElementById("products-table-body");
    if (!tbody) return;
    const search = document.getElementById("prodSearchInput")?.value.toLowerCase() || "";
    const cat    = document.getElementById("prodCategoryFilter")?.value || "all";
    tbody.innerHTML = "";
    products.forEach((p, i) => {
        if (cat !== "all" && p.category !== cat) return;
        if (search && !p.name.toLowerCase().includes(search)) return;
        const isUnavailable = p.status === "unavailable" || p.status === "out of stock";
        const tr = document.createElement("tr");
        tr.style.opacity = isUnavailable ? "0.5" : "1";
        tr.innerHTML = `
            <td><strong>${p.name}</strong>${isUnavailable ? ' <span style="color:#c92a2a;font-size:11px;">(hidden)</span>' : ''}</td>
            <td>${p.category.toUpperCase()}</td>
            <td>₱${p.price}</td>
            <td><span class='admin-badge${isUnavailable ? "-alert" : ""}'>${p.status}</span></td>
            <td>
              <button class='admin-edit-btn' onclick='openProductModal(true,${i})'>Edit</button>
              <button class='admin-del-btn'  onclick='deleteProduct(${i})'>Hide</button>
              ${isUnavailable ? `<button class='admin-inv-btn' onclick='restoreProduct(${i})'>Restore</button>` : ""}
            </td>`;
        tbody.appendChild(tr);
    });
};

window.openProductModal = function (isEdit, idx) {
    const modal = document.getElementById("productFormModal");
    if (!modal) return;
    if (isEdit) {
        document.getElementById("modalFormTitle").innerText = "Edit Product";
        editProductIndex = idx;
        const p = products[idx];
        document.getElementById("formProdName").value     = p.name;
        document.getElementById("formProdCategory").value = p.category;
        document.getElementById("formProdPrice").value    = p.price;
        document.getElementById("formProdStock").value    = p.stock;
        document.getElementById("formProdStatus").value   = p.status;
    } else {
        document.getElementById("modalFormTitle").innerText = "Add New Product";
        editProductIndex = null;
        document.getElementById("formProdName").value     = "";
        document.getElementById("formProdCategory").value = "sandwiches";
        document.getElementById("formProdPrice").value    = "";
        document.getElementById("formProdStock").value    = "50";
        document.getElementById("formProdStatus").value   = "available";
    }
    modal.style.display = "flex";
};

window.closeProductModal = function () {
    const modal = document.getElementById("productFormModal");
    if (modal) modal.style.display = "none";
};

window.commitProductForm = function () {
    const name   = document.getElementById("formProdName").value.trim();
    const cat    = document.getElementById("formProdCategory").value;
    const price  = parseInt(document.getElementById("formProdPrice").value);
    const stock  = parseInt(document.getElementById("formProdStock").value);
    const status = document.getElementById("formProdStatus").value;
    if (!name || isNaN(price)) { alert("Please enter a valid name and price."); return; }
    products = getStoredData("kegg_products", []);
    if (editProductIndex !== null) {
        products[editProductIndex] = { ...products[editProductIndex], name, category: cat, price, stock, status };
    } else {
        products.push({ name, category: cat, price, stock, status, img: "images/kegglogo.png", desc: "" });
    }
    saveStoredData("kegg_products", products);
    closeProductModal();
    renderProducts();
};

window.deleteProduct = window.deleteProductRecord = function (idx) {
    if (!confirm("Hide this product from the menu?")) return;
    products = getStoredData("kegg_products", []);
    if (products[idx]) { products[idx].status = "unavailable"; saveStoredData("kegg_products", products); }
    renderProducts();
};

window.restoreProduct = function (idx) {
    products = getStoredData("kegg_products", []);
    if (products[idx]) { products[idx].status = "available"; saveStoredData("kegg_products", products); }
    renderProducts();
};

// ── Inventory ──────────────────────────────────────────────
window.renderInventory = window.runInventoryFilters = function () {
    products = getStoredData("kegg_products", menuCatalog.map(i => ({ ...i, stock: 50, status: "available" })));
    const tbody  = document.getElementById("inventory-table-body");
    if (!tbody) return;
    const search = document.getElementById("invSearchInput")?.value.toLowerCase() || "";
    tbody.innerHTML = "";
    products.forEach((p, i) => {
        if (search && !p.name.toLowerCase().includes(search)) return;
        const badgeClass = (p.stock || 0) <= 10 ? "admin-badge-alert" : "admin-badge";
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${p.name}</td>
            <td><strong class='admin-stock-txt'>${p.stock} items</strong> left</td>
            <td><span class='${badgeClass}'>${(p.status||"").toUpperCase()}</span></td>
            <td>
              <button class='admin-inv-btn'    onclick='adjustStock(${i},  10)'>+10</button>
              <button class='admin-inv-btn'    onclick='adjustStock(${i}, -10)'>-10</button>
              <button class='admin-toggle-btn' onclick='toggleStatus(${i})'>Toggle</button>
            </td>`;
        tbody.appendChild(tr);
    });
};

window.adjustStock = function (idx, qty) {
    products = getStoredData("kegg_products", []);
    if (!products[idx]) return;
    products[idx].stock  = Math.max(0, (products[idx].stock || 0) + qty);
    products[idx].status = products[idx].stock === 0 ? "out of stock" : (products[idx].status === "out of stock" ? "available" : products[idx].status);
    saveStoredData("kegg_products", products);
    renderInventory();
};

window.toggleStatus = function (idx) {
    products = getStoredData("kegg_products", []);
    if (!products[idx]) return;
    products[idx].status = products[idx].status === "available" ? "unavailable" : "available";
    saveStoredData("kegg_products", products);
    renderInventory();
};

// ── Orders ─────────────────────────────────────────────────
function renderOrders() {
    orders = getStoredData("kegg_orders", []);
    const tbody = document.getElementById("orders-table-body");
    if (!tbody) return;
    if (orders.length === 0) { tbody.innerHTML = "<tr><td colspan='6'>No orders yet.</td></tr>"; return; }
    tbody.innerHTML = "";
    orders.forEach((ord, i) => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td><code>${ord.ref}</code></td>
            <td><strong>${ord.customer}</strong><br><small>${ord.phone || ""}</small></td>
            <td><span class='admin-items-summary'>${ord.items}</span><br><small style='color:#666'>Notes: ${ord.notes || "None"}</small></td>
            <td><strong>₱${ord.total}</strong></td>
            <td><span class='admin-badge-pending'>${ord.status}</span><br><small>${ord.date || ""} @ ${ord.time || ""}</small></td>
            <td><button class='admin-action-btn-status' onclick='advanceOrder(${i})'>Advance Status</button></td>`;
        tbody.appendChild(tr);
    });
}
window.renderAdminOrdersIndex = renderOrders;

window.advanceOrder = window.advanceOrderStatus = function (idx) {
    const flow = { Pending: "Preparing", Preparing: "Ready", Ready: "Completed" };
    orders = getStoredData("kegg_orders", []);
    if (!orders[idx]) return;
    const next = flow[orders[idx].status];
    if (!next) { alert("This order is already completed."); return; }
    orders[idx].status = next;
    saveStoredData("kegg_orders", orders);
    renderOrders();
};

// ── Customers ──────────────────────────────────────────────
function renderCustomers() {
    customers = getStoredData("kegg_customers", []);
    const tbody = document.getElementById("customers-table-body");
    if (!tbody) return;
    if (customers.length === 0) { tbody.innerHTML = "<tr><td colspan='4'>No registered customers yet.</td></tr>"; return; }
    tbody.innerHTML = "";
    customers.forEach(c => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td><strong>${c.name || c.username || "—"}</strong></td>
            <td>${c.phone || "—"}</td>
            <td>${c.email || "N/A"}</td>
            <td><strong class='admin-orders-count'>${c.ordersCount || 0} Orders</strong><br><small>Total: ₱${c.totalSpent || 0}</small></td>`;
        tbody.appendChild(tr);
    });
}
window.renderAdminCustomersIndex = renderCustomers;

// Boot dashboard on admin page load
document.addEventListener("DOMContentLoaded", function () {
    if (document.getElementById("dash-total-products")) refreshDashboard();
});

/* ============================================================
   PROMOS — Spin the Wheel
   ============================================================ */

document.addEventListener("DOMContentLoaded", function () {
    const wheel   = document.getElementById("wheel");
    const spinBtn = document.getElementById("spinBtn");
    if (!wheel || !spinBtn) return;

    const prizes = [
        { name: "Free Egg Sandwich", img: "images/egg sandwich.jpg" },
        { name: "Free 2 Drinks",     img: "images/dcfrappe.jpg" },
        { name: "Free Corndog",      img: "images/4 Ramyeon Corndogs.jpg" },
        { name: "Free Rice Bowl",    img: "images/beefbulgogirice.jpg" }
    ];

    const winModal       = document.getElementById("winModal");
    const closeModalBtn  = document.getElementById("closeModalBtn");
    const actionModalBtn = document.getElementById("actionModalBtn");
    const modalPrizeImg  = document.getElementById("modalPrizeImg");
    const modalPrizeName = document.getElementById("modalPrizeName");
    const modalPrizeText = document.getElementById("modalPrizeNameText");
    let isSpinning = false;

    spinBtn.addEventListener("click", function () {
        if (isSpinning) return;
        isSpinning = true;
        const degrees = Math.floor(Math.random() * 360) + 1800;
        wheel.style.transform = "rotate(" + degrees + "deg)";
        setTimeout(function () {
            isSpinning = false;
            const segSize  = 360 / prizes.length;
            const adjusted = (360 - (degrees % 360) + 45) % 360;
            const prize    = prizes[Math.floor(adjusted / segSize)];
            if (modalPrizeImg)  modalPrizeImg.src       = prize.img;
            if (modalPrizeName) modalPrizeName.innerText = prize.name;
            if (modalPrizeText) modalPrizeText.innerText = prize.name;
            if (winModal)       winModal.style.display   = "flex";
        }, 4000);
    });

    if (closeModalBtn)  closeModalBtn.addEventListener("click",  () => { winModal.style.display = "none"; });
    if (actionModalBtn) actionModalBtn.addEventListener("click", () => { winModal.style.display = "none"; });
});
