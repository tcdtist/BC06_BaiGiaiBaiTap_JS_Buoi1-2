/**
 * Đầu vào (input)
 *  - soThuc_1
 *  - soThuc_2
 *  - soThuc_3
 *  - soThuc_4
 *  - soThuc_5
 *  - tongCacSo = 0
 *  - trungBinh = 0
 * Xử lý
 *  - tongCacSo =  soThuc_1 + soThuc_2 + soThuc_3 + soThuc_4 + soThuc_5
 *  - trungBinh = tongCacSo / 5
 * Đầu ra (output)
 *  - xuất trungBinh
 */



function getEle(id) {
    return document.getElementById(id);
}


getEle('tinhEx1').addEventListener('click', () => {


    /* var soThuc_1 = 1;
var soThuc_2 = 2;
var soThuc_3 = 3;
var soThuc_4 = 4;
var soThuc_5 = 5;
var tongCacSo = 0;
var trungBinh = 0;

tongCacSo =  soThuc_1 + soThuc_2 + soThuc_3 + soThuc_4 + soThuc_5;
trungBinh = tongCacSo / 5;

console.log("Trung bình 5 số là: " + trungBinh); */

    var luongMotNgay = 100_000;
    var soNgayLam = getEle('soNgayLam').value;

    luongNhanVien = luongMotNgay * soNgayLam;

    var currentFormat = new Intl.NumberFormat("vn-VN");
    var moneyFormat = currentFormat.format(luongNhanVien);

    console.log("Lương của nhân viên là: " + moneyFormat);

    getEle('kqEx1').value = "Tổng tiền:      " + moneyFormat + " VND";
})
