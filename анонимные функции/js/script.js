console.log('You are at ' + window.location);
 let myFun = function(element, color) {
    element.style.backgroundColor = color;
 }

 const heading = document.querySelector('h1');
 const par = document.querySelector('h2');
 myFun(heading, 'red');
 myFun(par, 'green');
