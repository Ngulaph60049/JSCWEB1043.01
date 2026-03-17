// alert("Hello World!");

// var a = 1;
// var b = "Minh";
// c = 3;
// console.log(a, b, c);

// var ten = "minh";
// var Ten = "minh";
// alert(ten == Ten);

// console.log(this);

// const message = prompt("Nhập vào một tin nhắn của bạn:");
// console.log(message);

var xucXac1 = Math.ceil(Math.random() * 6);
var xucXac2 = Math.ceil(Math.random() * 6);
var xucXac3 = Math.ceil(Math.random() * 6);
if(xucXac1 + xucXac2 + xucXac3 > 10) {
    alert(`${xucXac1} ${xucXac2} ${xucXac3} Tài`);
} else {
    alert(`${xucXac1} ${xucXac2} ${xucXac3} Xỉu`);
}