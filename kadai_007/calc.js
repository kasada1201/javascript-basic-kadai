// 0~15までのランダムな数字が入力される
num = Math.floor(Math.random() * 16);

// 代入された変数の確認
console.log(num)

//3と5の倍数、3の倍数、5の倍数、それ以外を条件式で切り分ける
if (num === 0) {
    console.log(num);
}
else if (num % 15 === 0) {
    console.log('3と5の倍数です');
}
else if (num % 3 === 0) {
    console.log('3の倍数です');
}
else if (num % 5 === 0) {
    console.log('5の倍数です');
}
else {
    console.log(num);
}