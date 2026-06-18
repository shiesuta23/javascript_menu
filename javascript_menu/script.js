// JavaScript
console.log("読み込みOK");

const btn = document.querySelector('#js-btn');
const nav = document.querySelector('#js-nav');

// ボタンがクリックされたら、両方に「open」クラスをつけ外しする
btn.addEventListener('click', function() {
    btn.classList.toggle('open');
    nav.classList.toggle('open');
});
