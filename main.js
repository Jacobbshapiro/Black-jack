// Constants



// Variables

const arrCards = ['cA','c02','c03','c04','c05','c06','c07','c08','c09','c10','cJ','cQ','cK','dA','d02','d03','d04','d05','d06','d07','d08','d09','d10','dJ','dQ','dK','hA','h02','h03','h04','h05','h06','h07','h08','h09','h10','hJ','hQ','hK','sA','s02','s03','s04','s05','s06','s07','s08','s09','s10','sJ','sQ','sK'];
let idxDeck = 0; 




// Cached element referances
const dealBtn = document.getElementById('deal')
shuffleArray(arrCards)
const shuffleBtn = document.getElementById('shuffle')
const hitBtn = document.getElementById('hit')


// Event listeners
dealBtn.addEventListener('click', displayCard);
shuffleBtn.addEventListener('click', reset);
hitBtn.addEventListener('click', hit);



// Functions
function shuffleArray (arrCards) {
    arrCards.sort(() => Math.random() - 0.5);
}

function displayCard() {
    const button = document.getElementById('deal').disabled = true
    const shuffle = document.getElementById('shuffle').disabled = false

    let card1 = document.getElementById('card1').classList;
    card1.add(arrCards[idxDeck]);
    idxDeck++;
    let card2 = document.getElementById('card2').classList;
    card2.add(arrCards[idxDeck]);
    idxDeck++;
}

function reset() {
    location.reload();
}

function hit() {
    document.createElement('div')
}