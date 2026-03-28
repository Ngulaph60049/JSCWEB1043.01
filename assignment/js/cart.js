const products = [
  {
    id: 1,
    name: "Lenovo Legion 5",
    price: 18000000,
    image: "img/laptop1.jpg",
  },
  {
    id: 2,
    name: "Lenovo Yoga Slim 7i",
    price: 25000000,
    image: "img/laptop2.jpg",
  },
  {
    id: 3,
    name: "MacBook Air M1",
    price: 26000000,
    image: "img/laptop3.jpg",
  },
  {
    id: 4,
    name: "ASUS ROG Zephyrus",
    price: 23000000,
    image: "img/laptop4.jpg",
  },
  {
    id: 5,
    name: "ASUS ROG Strix",
    price: 25000000,
    image: "img/laptop5.jpg",
  }
];

// Hàm tải sản phẩm trong giỏ hàng
function loadCart() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let cartBody = document.getElementById("cart-body");
  let total = 0;
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

// Hàm xóa từng sản phẩm
function removeFromCart(id) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const index = cart.indexOf(id);
  if (index > -1) {
    cart.splice(index, 1);
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  loadCart();
}

// Hàm xóa toàn bộ giỏ hàng
function clearCart() {
  localStorage.removeItem("cart");
  loadCart();
}

// Hàm thanh toán đơn hàng
function checkout() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  if (cart.length === 0) {
    alert("Giỏ hàng đang trống. Vui lòng thêm sản phẩm trước khi thanh toán.");
    return;
  }

  let method = prompt("Vui lòng chọn phương thức thanh toán (nhập số):\n1. Tiền mặt\n2. Chuyển khoản\n3. Momo", "1");

  if (method === null) {
    document.getElementById("checkout-message").innerText = "Bạn đã hủy thanh toán.";
    return;
  }

  let methodText;
  switch (method.trim()) {
    case "1":
      methodText = "Tiền mặt";
      break;
    case "2":
      methodText = "Chuyển khoản";
      break;
    case "3":
      methodText = "Momo";
      break;
    default:
      alert("Phương thức không hợp lệ, vui lòng thử lại.");
      return;
  }

  let total = 0;
  cart.forEach(productId => {
    const product = products.find(p => p.id === productId);
    if (product) total += product.price;
  });

  alert(`Thanh toán thành công bằng ${methodText}. Tổng: ${total.toLocaleString()} VNĐ`);
  document.getElementById("checkout-message").innerText = `Thanh toán thành công (${methodText}). Tổng: ${total.toLocaleString()} VNĐ`;

  clearCart();
}

// Thêm sản phẩm vào giỏ (gọi từ nút "Mua ngay")
function addToCart(productId) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(productId);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Đã thêm vào giỏ hàng!");
}

// Gọi hàm khi tải trang
window.onload = loadCart;
