function tinhTienDien(kwh) {
    let tongTien = 0;

    if (kwh <= 50) {
        // Bậc 1: 0 - 50 kWh
        tongTien = kwh * 1800;
    } else if (kwh <= 100) {
        // Bậc 2: 50 kWh đầu giá 1800, số còn lại giá 2300
        tongTien = (50 * 1800) + ((kwh - 50) * 2300);
    } else {
        // Bậc 3: 50 kWh đầu giá 1800, 50 kWh tiếp theo giá 2300, còn lại giá 3000
        tongTien = (50 * 1800) + (50 * 2300) + ((kwh - 100) * 3000);
    }

    return tongTien;
}

// Ví dụ kiểm tra:
let soKwh = 230;
console.log(`Số tiền điện cho ${soKwh}kWh là: ${tinhTienDien(soKwh).toLocaleString()}đ`);