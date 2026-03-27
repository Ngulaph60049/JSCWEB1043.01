function kiemTraSoNguyenTo() {
    let n = Number(prompt("Mời nhập một số nguyên n:"));
    let isCheck = true; // 

    if (n < 2) {
        isCheck = false;
    } else {
        
        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) {
                isCheck = false; 
                break; 
            }
        }
    }

 
    if (isCheck) {
        alert(`${n} là số nguyên tố.`);
    } else {
        alert(`${n} không phải là số nguyên tố.`);
    }
}


kiemTraSoNguyenTo();