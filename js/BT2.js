document.getElementById('btnTinh2').onclick = function () {
    var soX = Number(document.getElementById('soX').value);
    var soN = Number(document.getElementById('soN').value);

    var ketQua = 0;
    var i = 1;
    while (i <= soN) {
        var tong = quitrinh(soX, i);
        i++;
        ketQua += tong;
    }
    function quitrinh(a, b) {
        var sum = Math.pow(a, b);
        return sum;
    }
    document.getElementById('txtResult2').innerHTML = 'Tổng: ' + ketQua;
}