console.log('You are at ' + window.location);

const Image = document.querySelector('.imageBlock');
let answer = prompt("Сколько тебе лет?");
answer=parseInt(answer);
//Image.style.backgroundImage = "url(img/base.jpg)";
if (answer <18)
{
    Image.style.backgroundImage = "url(img/school.jpg)";
}
else if (answer<=25)
{
    Image.style.backgroundImage = "url(img/party.jpg)";
}
else if (answer<=50)
{
    Image.style.backgroundImage = "url(img/pub.jpg)";
}
else {
    Image.style.backgroundImage = "url(img/base.jpg)";
}


