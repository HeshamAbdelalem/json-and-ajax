/* jshint esversion:6 */
let ourRequest = new XMLHttpRequest();

ourRequest.open('GET', 'animals.json');
ourRequest.onload = function() {
    let ourData = JSON.parse(ourRequest.responseText);
    console.log(ourData[0]);
};
ourRequest.send();

let btn = document.querySelector('#btn');
console.log(btn);