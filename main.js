// Constants



// Variables

const arrCards = ['cA', 11,'c02', 2,'c03', 3,'c04', 4,'c05', 5,'c06', 6,'c07', 7,'c08', 8,'c09', 9,'c10', 10, 'cJ', 10,'cQ', 10,'cK', 10,'dA', 11,'d02', 2,'d03', 3,'d04', 4,'d05', 5,'d06', 6,'d07', 7,'d08', 8,'d09', 9,'d10', 10,'dJ', 10,'dQ', 10,'dK', 10,'hA', 11,'h02', 2,'h03', 3,'h04', 4,'h05', 5,'h06', 6,'h07', 7,'h08', 8,'h09', 9,'h10', 10,'hJ', 10,'hQ', 10,'hK', 10,'sA', 11,'s02', 2,'s03', 3,'s04', 4,'s05', 5,'s06', 6,'s07', 7,'s08', 8,'s09', 9,'s10', 10,'sJ', 10,'sQ', 10,'sK', 10];

let idxDeck = 0; 
let score = 0;


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
    const hit = document.getElementById('hit').disabled = false

    let card1 = document.getElementById('card0').classList;
    card1.add(arrCards[idxDeck]);
    idxDeck++;
    
    score=score+arrCards[idxDeck];
    idxDeck++
    
    let card2 = document.getElementById('card1').classList;
    card2.add(arrCards[idxDeck]);
    idxDeck++;
    
    score=score+arrCards[idxDeck];
    idxDeck++
}

function reset() {
    location.reload();
}

function hit() {
    const div = document.createElement('div')
    div.setAttribute('id','card' + idxDeck);
    div.classList.add('card');
    const hitMe = document.getElementById('your-cards')
    hitMe.appendChild(div);
    let newCard = document.getElementById('card' + idxDeck).classList;
    newCard.add(arrCards[idxDeck]);
    idxDeck++;
    
    score=score+arrCards[idxDeck];
    idxDeck++
}