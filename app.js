document.addEventListener('DOMContentLoaded', () => {
let squares = document.querySelectorAll('.grid div'); // note querySelectorAll - names all items, not just one, as used with querySelector
let playerDisplay = document.querySelector('#player');

let currentPlayer = 'playerX';

squares.forEach(square => {
    square.addEventListener('click', clickOutcome);
})

function clickOutcome(event) {
    let squareArray = Array.from(squares)
    let index = squareArray.indexOf(event.target)
    console.log(index)
    playerDisplay.innerHTML = currentPlayer;

    if(currentPlayer === 'playerX') {
        squares[index].classList.add('playerX')
        currentPlayer='playerO'
    } else {
        squares[index].classList.add('playerO')
        currentPlayer='playerX'
    }
}

})