document.getElementById('btnTinh').onclick = function () {
    var ketQua = 0;
    var i = 0;
    while (ketQua < 10000) {
        ketQua += i;
        i++;
    }
    document.getElementById('txtResult').innerHTML = `Số nguyên dương nhỏ nhất là: ${i - 1}`;
}