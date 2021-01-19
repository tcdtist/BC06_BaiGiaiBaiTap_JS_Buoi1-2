/**
 * Đầu vào (input)
 *  - luongNhanVien = 0
 *  - luongMotNgay: 100000
 *  - soNgayLam: 30
 * Xử lý
 *  - luongNhanVien = luongMotNgay * soNgayLam
 * Đầu ra (output)
 * - xuất lương 
 */
function getEle(id) {
    return document.getElementById(id);
}


getEle('tinhEx1').addEventListener('click', () => {

    var luongMotNgay = 100_000;
    var soNgayLam = getEle('soNgayLam').value;

    luongNhanVien = luongMotNgay * soNgayLam;

    var currentFormat = new Intl.NumberFormat("vn-VN");
    var moneyFormat = currentFormat.format(luongNhanVien);

    console.log("Lương của nhân viên là: " + moneyFormat);

    getEle('kqEx1').value = "Tổng tiền:      " + moneyFormat + " VND";
})
