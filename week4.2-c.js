/**
 * Khai báo 3 biến a,b,c là các số bất kì
 * Ko cần kiểm tra a,b,c là số (có thì tốt)
 * In ra số lớn nhất trong 3 số a,b,c
 */

var minhHeight = 1;
var duyenHeight = 1;
var sherryHeight = 1;

if (minhHeight > duyenHeight && minhHeight > sherryHeight) {
  console.log(minhHeight);
} else if (duyenHeight > minhHeight && duyenHeight > sherryHeight) {
  console.log(duyenHeight);
} else if (sherryHeight > minhHeight && sherryHeight > duyenHeight) {
  console.log(sherryHeight);
} else {
  console.log("ca 3 so = nhau");
}
