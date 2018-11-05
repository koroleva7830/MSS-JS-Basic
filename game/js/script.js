console.log('You are at ' + window.location);
let money = prompt('money?');
let apple = prompt('apple?');
let bread = prompt('bread?');
let sumapple=prompt('price of apple?')*apple;
let sumbread=prompt('price of bread?')*bread;
document.body.innerHTML = money > (sumbread + sumapple);