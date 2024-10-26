
function handleKeyboard(events){
    const playerPress = events.key;

    const currentAlphabetElement = document.getElementById('currentAlphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();

    if(playerPress === expectedAlphabet){
        console.log('You got it');

        const currentScoreElement = document.getElementById('currentScore');
        const currentScoreText = currentScoreElement.innerText;
        const currentScore = parseInt(currentScoreText);

        const newScore = currentScore + 1;

        currentScoreElement.innerText = newScore


        removeBackgroundColor(expectedAlphabet);
        continueGame();
    }
    else{
        // alert('Try Again Now')
        const currentLifeElement = document.getElementById('currentLife');
        const currentLifeText = currentLifeElement.innerText;
        const currentLife = parseInt(currentLifeText);


        const lifeUpdate = currentLife - 1;
        currentLifeElement.innerText = lifeUpdate;

        if(lifeUpdate === 0){
            gameOver()
        }
    }
}


document.addEventListener('keyup', handleKeyboard)



function continueGame(){
    const alphabet = randomAlphabet();

    const currentAlphabetElement = document.getElementById('currentAlphabet');
    currentAlphabetElement.innerText = alphabet;

    addBackgroundColor(alphabet);
}


function playNow(){
    setHideElement('firstSection');
    setUnHideElement('playSection');


    // reset life 
    

    continueGame();
}

function gameOver(){
    setHideElement('playSection');
    setUnHideElement('resultSection');
}

function playAgain(){
    setUnHideElement('playSection');
    setHideElement('resultSection');
    setElementById('currentLife', 5);
    setElementById('currentScore', 0);
}