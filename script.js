// Canvas要素を取得
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

// クリックしたときの処理
canvas.addEventListener('click', function(event) {
    // クリックした位置を取得
    var x = event.clientX - canvas.offsetLeft;
    var y = event.clientY - canvas.offsetTop;

    // 円を描画する処理
    ctx.beginPath();
    ctx.arc(x, y, 20, 0, 2 * Math.PI);
    ctx.fillStyle = 'red'; // 円の色
    ctx.fill();
    ctx.closePath();
});
