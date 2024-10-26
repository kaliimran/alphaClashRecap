function setHideElement (elementsId){
    const hideElement = document.getElementById(elementsId);
    hideElement.classList.add('hidden');
}
function setUnHideElement (elementsId){
    const unHideElement = document.getElementById(elementsId);
    unHideElement.classList.remove('hidden');
}

function addBackgroundColor (elementsId){
    const elements = document.getElementById(elementsId);
    elements.classList.add('bg-orange-400');
}
function removeBackgroundColor (elementsId){
    const elements = document.getElementById(elementsId);
    elements.classList.remove('bg-orange-400');
}


function setElementById(elementsId, value){
    const element = document.getElementById(elementsId);
    element.innerText = value;
}



// get a Generate random Alphabet

function randomAlphabet (){
    const randomAlphabetString = 'abcdefghijklmnopqrstuvwxyz'
    const alphabets = randomAlphabetString.split('');

    const randomNumber = Math.random()*25;
    const index = Math.round(randomNumber);

    const alphabet = alphabets[index];

    return alphabet;

}