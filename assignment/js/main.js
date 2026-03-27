// main.js

const products = [
  {
    id: 1,
    name: "Lenovo Legion 5",
    price: 18000000,
    image: "img/laptop1.jpg",
    description: "Laptop gaming Lenovo Legion 5, hiệu năng cao, thiết kế mạnh mẽ."
  },
  {
    id: 2,
    name: "Lenovo Yoga Slim 7i",
    price: 25000000,
    image: "img/laptop2.jpg",
    description: "Laptop mỏng nhẹ Lenovo Yoga Slim 7i, thời trang, hiệu năng tốt."
  },
  {
    id: 3,
    name: "MacBook Air M1",
    price: 26000000,
    image: "img/laptop3.jpg",
    description: "MacBook Air M1, nhẹ, pin trâu, hiệu suất mạnh mẽ."
  },
  {
    id: 4,
    name: "ASUS ROG Zephyrus",
    price: 23000000,
    image: "img/laptop4.jpg",
    description: "Laptop gaming ASUS ROG Zephyrus, mỏng nhẹ, mạnh mẽ."
  },
  {
    id: 5,
    name: "ASUS ROG Strix",
    price: 25000000,
    image: "img/laptop5.jpg",
    description: "ROG Strix, đèn RGB, thiết kế chiến, hiệu suất cao."
  }
];

function renderProducts() {
  const container = document.getElementById("product-list");
  if (!container) return;

  let html = "";
  products.forEach(product => {
    html += `
      <div class="product-card">
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <p class="price">Giá: ${product.price.toLocaleString()} VNĐ</p>
        <button class="buy-btn" onclick="addToCart(${product.id})">Thêm vào giỏ hàng</button>
        <div class="detail-btn-wrap">
          <a href="chitietsanpham.html?id=${product.id}" class="detail-btn">Xem chi tiết</a>
        </div>
      </div>
    `;
  });

  container.innerHTML = html;

  document.querySelectorAll(".product-card").forEach(card => {
    card.addEventListener("mouseover", () => card.style.border = "2px solid #007bff");
    card.addEventListener("mouseout", () => card.style.border = "1px solid #ddd");
    card.addEventListener("click", () => {
      card.style.backgroundColor = "#e3f2fd";
      setTimeout(() => card.style.backgroundColor = "#fff", 400);
    });
  });
}

document.addEventListener("DOMContentLoaded", function () {
  renderProducts();

  const countdownEl = document.getElementById("countdown");
  if (countdownEl) {
    let duration = 120;
    const timer = setInterval(() => {
      const minutes = Math.floor(duration / 60);
      const seconds = duration % 60;
      countdownEl.textContent = `Flash sale còn: ${minutes} phút ${seconds < 10 ? '0' : ''}${seconds} giây`;
      if (duration <= 0) {
        clearInterval(timer);
        countdownEl.textContent = "Flash sale đã kết thúc!";
      }
      duration--;
    }, 1000);
  }

  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const phone = form.phone.value.trim();
      const product = form.product.value.trim();
      if (!name || !email || !phone || !product) {
        document.getElementById("formMsg").textContent = "Vui lòng nhập đầy đủ thông tin!";
        return;
      }
      document.getElementById("formMsg").textContent = "Đã gửi thành công!";
    });
  }

  const slides = document.getElementsByClassName("slide");
  if (slides.length > 0) autoSlide();

  if (window.location.pathname.includes("cart.html")) {
    loadCart();
  }
});

let slideIndex = 0;

function autoSlide() {
  const slides = document.getElementsByClassName("slide");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slideIndex++;
  if (slideIndex > slides.length) slideIndex = 1;

  slides[slideIndex - 1].style.display = "block";
  setTimeout(autoSlide, 3000); // Chuyển ảnh mỗi 3 giây
}

document.addEventListener("DOMContentLoaded", autoSlide);


function addToCart(productId) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(productId);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Đã thêm sản phẩm vào giỏ hàng!");
}

function loadCart() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let cartBody = document.getElementById("cart-body");
  let total = 0;
  if (!cartBody) return;
  cartBody.innerHTML = "";

  if (cart.length === 0) {
    cartBody.innerHTML = "<tr><td colspan='5'>Giỏ hàng của bạn đang trống.</td></tr>";
    document.getElementById("total-price").innerText = "";
    return;
  }

  let cartMap = {};
  cart.forEach(productId => {
    cartMap[productId] = (cartMap[productId] || 0) + 1;
  });

  Object.keys(cartMap).forEach(productId => {
    const product = products.find(p => p.id === parseInt(productId));
    const qty = cartMap[productId];
    if (product) {
      const subtotal = product.price * qty;
      cartBody.innerHTML += `
        <tr>
          <td><img src="${product.image}" width="80"></td>
          <td>${product.name}</td>
          <td>${product.price.toLocaleString()} VNĐ</td>
          <td>${qty}</td>
          <td>${subtotal.toLocaleString()} VNĐ</td>
          <td><button onclick="removeFromCart(${product.id})">Xóa</button></td>
        </tr>
      `;
      total += subtotal;
    }
  });

  document.getElementById("total-price").innerText = `Tổng tiền: ${total.toLocaleString()} VNĐ`;
}

function removeFromCart(id) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const index = cart.indexOf(id);
  if (index > -1) {
    cart.splice(index, 1);
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  loadCart();
}
