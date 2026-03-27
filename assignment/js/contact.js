document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Reset lỗi
    document.querySelectorAll(".error").forEach(el => el.textContent = "");
    document.getElementById("formMsg").textContent = "";

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const product = document.getElementById("product").value.trim();

    let isValid = true;

    if (!name) {
      document.getElementById("errName").textContent = "Vui lòng nhập họ tên";
      isValid = false;
    }

    if (!email) {
      document.getElementById("errEmail").textContent = "Vui lòng nhập email";
      isValid = false;
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        document.getElementById("errEmail").textContent = "Email không hợp lệ";
        isValid = false;
      }
    }

    if (!phone) {
      document.getElementById("errPhone").textContent = "Vui lòng nhập số điện thoại";
      isValid = false;
    }

    if (!product) {
      document.getElementById("errProduct").textContent = "Vui lòng nhập tên sản phẩm";
      isValid = false;
    }

    if (isValid) {
      document.getElementById("formMsg").textContent = "Gửi thành công! Cảm ơn bạn đã liên hệ.";
      // Optional: reset form
      form.reset();
    }
  });
});
