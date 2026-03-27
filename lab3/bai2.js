function tinhTienDien(kwh) {
    let tongTien = 0;

    if (kwh <= 50) {
        tongTien = kwh * 1800;
    } else if (kwh <= 100) {
        tongTien = (50 * 1800) + ((kwh - 50) * 2300);
    } else {
        tongTien = (50 * 1800) + (50 * 2300) + ((kwh - 100) * 3000);
    }

    return tongTien;
}


let soKwh = 120;
console.log(`Số tiền điện cho ${soKwh}kWh là: ${tinhTienDien(soKwh).toLocaleString()}đ`);