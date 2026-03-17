//If else: la 1 cau truc dieu khien voi 2 block code cua if va else
// const age = 17
// if (age < 18) {
//     alert("Em chua 18")
// } else {
//     alert("Du tuoi")
// }

const tuoi = Number(prompt("Nhập vào độ tuổi của bạn:"));
let doTuoi = (tuoi >= 80) ? "Người già" :
             (tuoi >= 60) ? "Trung niên" :
             (tuoi >= 40) ? "Trưởng thành" :
             (tuoi >= 20) ? "Thanh niên" : 
                            "Trẻ em";
alert(doTuoi);