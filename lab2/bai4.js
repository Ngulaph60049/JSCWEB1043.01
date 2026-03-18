document.write("<div style='display: flex; flex-wrap: wrap; gap: 20px;'>");

for (let i = 2; i <= 9; i++) {
    document.write("<div style='border: 1px solid #ccc; padding: 10px; border-radius: 5px;'>");
    document.write(`<strong>Bảng cửu chương ${i}</strong><br>`);
    
    for (let j = 1; j <= 10; j++) {
        document.write(`${i} x ${j} = ${i * j} <br>`);
    }
    
    document.write("</div>");
}

document.write("</div>");