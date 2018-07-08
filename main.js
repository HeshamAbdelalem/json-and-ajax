/* jshint esversion:6 */
let pageCounter = 1;
let animalContainer = document.querySelector('#animal-info');
let btn = document.querySelector('#btn');

btn.addEventListener('click', function(){

    let ourRequest = new XMLHttpRequest();
    /*
    https://learnwebcode.github.io/json-example/animals-1.json */
    ourRequest.open('GET', `animals-${pageCounter}.json`);
    ourRequest.onload = function() {
        let ourData = JSON.parse(ourRequest.responseText);
        renderHTML(ourData);
    };
    ourRequest.onerror = function() {
        console.log('Error!!');
    }
    ourRequest.send();
    pageCounter++ ;
    if(pageCounter > 3) {
        btn.style.display ='none';
    }

});

function renderHTML(data) {
    let htmlString = '';

    for(let i = 0; i < data.length; i++){
        htmlString += `<p> ${data[i].name} is a ${data[i].species} that like to eat: ${data[i].foods.likes} </p>`;
    }

    animalContainer.insertAdjacentHTML('beforeend', htmlString);
}