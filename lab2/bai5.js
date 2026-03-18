function kiemTraSoNguyenTo() {
    let n = Number(prompt("Mời nhập một số nguyên n:"));
    let isCheck = true; // Biến đánh dấu (flag)

    if (n < 2) {
        isCheck = false;
    } else {
        // Chạy vòng lặp từ 2 đến sát n
        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) {
                isCheck = false; // Tìm thấy ước khác, không phải SNT
                break; // Thoát vòng lặp ngay lập tức
            }
        }
    }

    // Xuất kết quả
    if (isCheck) {
        alert(`${n} là số nguyên tố.`);
    } else {
        alert(`${n} không phải là số nguyên tố.`);
    }
}

// Gọi hàm
kiemTraSoNguyenTo();