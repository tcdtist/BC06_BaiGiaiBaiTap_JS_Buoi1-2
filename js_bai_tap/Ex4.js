/**
 * Đầu vào (input)
 *  - chieuDai = 0
 *  - chieuRong = 0
 *  - dienTich = 0
 *  - chuVi = 0
 * Xử lý
 *  - dienTich = chieuDai * chieuRong
 *  - chuVi = (chieuDai + chieuRong) * 2
 * Đầu ra (output)
 *  - Xuất diện tích và chu vi của hình chữ nhật
 */

var chieuDai = 3;
var chieuRong = 4;
var chuVi = 0;
var dienTich = 0;

chuVi = (chieuDai + chieuRong) * 2;
dienTich = chieuDai * chieuRong;

console.log("Chu vi hình chữ nhật là: " + chuVi);
console.log("Diện tích hình chữ nhật là: " + dienTich);