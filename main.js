// Constants



// Variables

let arrCards = ['c02','c03','c04','c05'];
let idxDeck = 0; 




// Cached element referances
const dealBtn = document.getElementById('deal')
shuffleArray(arrCards)
// element.classList.add('');


// Event listeners
dealBtn.addEventListener('click', displayCard)





// Functions
function shuffleArray (arrCards) {
    arrCards.sort(() => Math.random() - 0.5);
}

function displayCard() {
    let card1 = document.getElementById('card 1').classList
    card1.add(arrCards[idxDeck])
    idxDeck++
    let card2 = document.getElementById('card 2').classList
    card2.add(arrCards[idxDeck])
    idxDeck++
}










// function getCards() {
//     const randomInt = Math.floor(Math.random() * arrCards.length)
//     return arrCards[randomInt]
// }