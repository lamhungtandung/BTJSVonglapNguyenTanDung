document.getElementById('btnTinh3').onclick = function () {
    var soN = Number(document.getElementById('son').value);

    var ketQua = 1;
    

    for (var i = 1; i <= soN; i++) {
        ketQua *= i;
        
    }
    document.getElementById('txtResult3').innerHTML = 'Giai thừa là : ' + ketQua;
}