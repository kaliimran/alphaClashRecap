
function handleKeyboard(events){
    const playerPress = events.key;
    if(playerPress === 'Escape'){
        gameOver()
    }

    const currentAlphabetElement = document.getElementById('currentAlphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();

    if(playerPress === expectedAlphabet){

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


document.addEventListener('keyup', handleKeyboard);



function continueGame(){
    const alphabet = randomAlphabet();

    const currentAlphabetElement = document.getElementById('currentAlphabet');
    currentAlphabetElement.innerText = alphabet;

    addBackgroundColor(alphabet);
}


function playNow(){
    setHideElement('firstSection');
    setUnHideElement('playSection');


    

    continueGame();
}

function gameOver(){
    setHideElement('playSection');
    setUnHideElement('resultSection');

    const scoreElement = document.getElementById('currentScore');
    const score = scoreElement.innerText;
    setElementById('gameScore', score)
}

function playAgain(){
    setUnHideElement('playSection');
    setHideElement('resultSection');
    setElementById('currentLife', 5);
    setElementById('currentScore', 0);
}