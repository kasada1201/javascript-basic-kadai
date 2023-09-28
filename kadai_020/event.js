// idがbtnの要素を取得する
const btn = document.getElementById('btn');
// idがtextの要素を取得する
const text = document.getElementById('text');

// ボタンをクリックした時のイベント処理を実行する
btn.addEventListener('click', () => {
    text.textContent = "ボタンをクリックしました"
});