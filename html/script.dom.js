//タイトルの取得
function getTitle() {
    let title = document.title;
    console.log(title);
}

//日本語挨拶をセット
function setGreetJA() {
    var greet = document.getElementById('greet');
    var language = document.getElementById('language');
    language.innerText = '日本語';
    greet.innerText = 'こんにちは';
}

//英語挨拶をセット
function setGreetEN() {
    var greet = document.getElementById('greet');
    var language = document.getElementById('language');
    language.innerText = 'English';
    greet.innerText = 'Hello';
}