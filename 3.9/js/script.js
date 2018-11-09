console.log('You are at ' + window.location);
let pageColor=prompt("какой цвет страницы?");
let fontColor=prompt("какой цвет текста?");
let namePerson=prompt("как зовут человека?");
let addressImg=prompt("адрес картинки?");
let myText=prompt("введите текст");

const byPage=document.querySelector('.page');
const byBody=document.querySelector('body');
const byName=document.querySelector('.name');
const byImg=document.querySelector('img');
const byText=document.querySelector('.shortBio');

byBody.style.backgroundColor=pageColor;
byPage.style['color']=fontColor;
byName.innerHTML = namePerson;
byImg.setAttribute('src', addressImg);
byText.innerHTML = myText;
byText.className += ' animated';

console.log(byPage);
console.log(byName);
console.log(byImg);
console.log(byImg.getAttribute('src'));