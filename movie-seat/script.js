const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');

const count = document.getElementById('count')
const total = document.getElementById('total')
const movieSelect = document.getElementById('movie');

const ticketPrice = Number(movieSelect.value);


// event Listeners

container.addEventListener('click', (e) => {
    if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
        e.target.classList.toggle('selected')
    }
});