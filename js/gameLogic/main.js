// Get all the elements who will be changed
const buttonAttack = document.getElementById('button-attack');
const buttonRestart = document.getElementById('button-restart');
const results = document.getElementById('results');

//Knights characters
const player1 = new Knight("Lifeng", "PLANT");
const player2 = new Knight("Lae", "FIRE");
const player3 = new Knight("Pog", "WATER");

//Sorcerers characters
const player4 = new Sorcerer("Perlica", "FIRE");
const player5 = new Sorcerer("Gilberta", "PLANT");
const player6 = new Sorcerer("Xaihi", "WATER");