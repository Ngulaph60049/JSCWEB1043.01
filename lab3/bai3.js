function tinhLuong() {

    let chucVu = prompt("Nhập chức vụ (intern, staff, senior, manager):").toLowerCase();
    let ngayCong = Number(prompt("Nhập số ngày công thực tế trong tháng:"));
    
    let heSo = 0;
    const luongCoBan = 5000000;
    const ngayCongQuyDinh = 24;

    switch (chucVu) {
        case "intern":
            heSo = 1.0;
            break;
        case "staff":
            heSo = 1.5;
            break;
        case "senior":
            heSo = 2.0;
            break;
        case "manager":
            heSo = 3.0;
            break;
        default:
            alert("Chức vụ không hợp lệ!");
            return; 
    }

  
    let luong = heSo * ngayCong * (luongCoBan / ngayCongQuyDinh);

   
    alert(`Chức vụ: ${chucVu.toUpperCase()}
Số ngày công: ${ngayCong}
Tổng lương nhận được: ${luong.toLocaleString('vi-VN')}đ`);
}


tinhLuong();