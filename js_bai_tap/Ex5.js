/**
 * Đầu vào (input)
 *  - so_1 = 12
 *  - so_2 = 44
 *  - soHangChuc_1 = 0
 *  - soHangDonVi_1 = 0
 *  - tongHaiSo_1 = 0
 *  - soHangChuc_2 = 0
 *  - soHangDonVi_2 = 0
 *  - tongHaiSo_2 = 0
 * Xử lý
 *  - soHangChuc_1 = so_1 / 10
 *  - soHangDonVi_1 = so_1 % 10
 *  - tongHaiSo_1 = soHangChuc_1 + soHangDonVi_1
 * 
 *  - soHangChuc_2 = so_2 / 10
 *  - soHangDonVi_2 = so_2 % 10
 *  - tongHaiSo_2 = soHangChuc_2 + soHangDonVi_2
 * Đầu ra (output)
 *  - Xuất tổng 2 ký số 
 */

var so_1 = 12;
var so_2 = 44;
var soHangChuc_1 = 0;
var soHangChuc_2 = 0;
var soHangDonVi_1 = 0;
var soHangDonVi_2 = 0;
var tongHaiSo_1 = 0;
var tongHaiSo_2 = 0;

soHangChuc_1 = Math.floor(so_1 / 10)
soHangDonVi_1 = Math.floor(so_1 % 10)
tongHaiSo_1 = soHangChuc_1 + soHangDonVi_1
soHangChuc_2 = Math.floor(so_2 / 10)
soHangDonVi_2 = Math.floor(so_2 % 10)
tongHaiSo_2 = soHangChuc_2 + soHangDonVi_2

console.log("Tổng 2 ký số thứ nhất là: " + tongHaiSo_1);
console.log("Tổng 2 ký số thứ hai là: " + tongHaiSo_2);