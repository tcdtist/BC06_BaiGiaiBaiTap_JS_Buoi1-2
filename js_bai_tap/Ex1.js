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

var luongMotNgay = 100000;
var soNgayLam = 30;

luongNhanVien = luongMotNgay * soNgayLam;

var currentFormat = new Intl.NumberFormat("vn-VN");
var tienFormat = currentFormat.format(luongNhanVien);

console.log("Lương của nhân viên là: " + tienFormat);