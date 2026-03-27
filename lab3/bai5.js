function calculator(a, b, phepTinh) {
    let ketQua;
    
    switch (phepTinh) {
        case '+':
            ketQua = a + b;
            break;
        case '-':
            ketQua = a - b;
            break;
        case 'x':
        case '*':
            ketQua = a * b;
            break;
        case '/':
            if (b === 0) {
                return "Lỗi: Không thể chia cho 0!";
            }
            ketQua = a / b;
            break;
        default:
            return "Phép tính không hợp lệ!";
    }
    
    return `${a} ${phepTinh} ${b} = ${ketQua}`;
}


console.log(calculator(15.5, 2, 'x')); 
console.log(calculator(10, 5, '/'));  