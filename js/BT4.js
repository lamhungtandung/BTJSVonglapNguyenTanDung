document.getElementById('btnTinh4').onclick = function () {
    var ketQua = '';
    for (var i = 1; i <= 10; i++) {
        if (i % 2 === 0) {
            var div = `<div class="bg-danger text-white">Div chẵn ${i}</div>`;
        } else {
            var div = `<div class="bg-primary text-white">Div lẻ ${i}</div>`;
        }
    
        ketQua += div;
    }
    document.getElementById('txtResult4').innerHTML = ketQua;
}