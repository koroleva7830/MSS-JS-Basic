console.log('You are at ' + window.location);

let money = prompt('money?');
let apple = prompt('apple?');
let bread = prompt('bread?');
let sumapple=prompt('price of apple?')*apple;
let sumbread=prompt('price of bread?')*bread;


let haveEnough = (mymoney, mysumapple, mysumbread) => {

    if (mymoney > (mysumbread + mysumapple)) {
        return 'Вам хватает денег на покупку';
    }
    else {return 'Вам не хватает денег на покупку';}
}
console.log('money = ' + money);
console.log('apple = ' + apple);
console.log('bread = ' + bread);
console.log('cost of apple = ' + sumapple / apple);
console. log('cost of bread = ' + sumbread / bread);
console.log(money > (sumbread + sumapple));


document.body.innerHTML = haveEnough(money, sumapple, sumbread);