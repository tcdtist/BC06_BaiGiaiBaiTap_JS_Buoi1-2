/**
 * Đầu vào (input)
 *  - giaUSD = 23500 (VND)
 *  - soTien = 0 (USD)
 * Xử lý
 *  - tienViet = soTien * giaUSD
 * Đầu ra (output)
 *  - xuất tiền sau khi đổi
 */

var giaUSD = 23500;
var soTien = 5;

tienViet = soTien * giaUSD;

currentFormat = new Intl.NumberFormat("vn-VN");
tienFormat = currentFormat.format(tienViet);

console.log("Tiền sau khi đổi là: " +  tienFormat + " VND");