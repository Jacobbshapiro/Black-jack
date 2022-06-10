![Black Jack wireframe](https://i.imgur.com/ynw9mTp.png)

# Black Jack by Jacob Shapiro

## Technologies
html/js/css

## Rules
In this version of black jack the deal button will give you 2 random cards and you will have the choise to stand or hit. When standing the game will end. When you hit you will be given a card and you can choose to stand or hit again. If you hit and go over 21 you will bust and you will lose. If you get 17 but less then 22 you win.

## Future Enhancements
https://jacobbshapiro.github.io/Project-1/
Add cookies into browser to keep your score.
Add a dealer to play against.

## Psuedocode
// Constants
const MAX_CARDS = 52
const SPADES = 1-10
const HEARTS = 1-10
const CLUBS = 1-10
const CLOVERS = 1-10
const PLAYER = 1
const JACK = 10
const QUEEN = 10
const KING = 10
const ACE = 1 || 11

// Variables
player recieves 2 random cards on start of game

// Cached element referances
ask player stand or hit if hit player recieves 1 card
if bust game is over

// Event listeners
clicks on stand and hit button

// Functions
function for dealing
function for stand 
function for hit
function to shuffle 