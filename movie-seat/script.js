const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');

const count = document.getElementById('count')
const total = document.getElementById('total')
const movieSelect = document.getElementById('movie');

populateUI()

let ticketPrice = Number(movieSelect.value);


function setMovieData(movieIndex, moviePrice) {
    localStorage.setItem('selectedMovieIndex', movieIndex);
    localStorage.setItem('selectedMoviePrice', moviePrice)
}

function updateSelectedCount() {
    const selectedSeats = document.querySelectorAll('.row .seat.selected');
    
    // Local Storage

    const seatsIndex = [...selectedSeats].map(seat => 
         [...seats].indexOf(seat))

   localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex))
    
    
    const selectedSeatsCount = selectedSeats.length;
    count.innerText = selectedSeatsCount;
    total.innerText = selectedSeatsCount * ticketPrice;
}

// event Listeners

function populateUI() {
    const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));
    console.log(selectedSeats)
}

// movie select event
movieSelect.addEventListener('change', e => {
    ticketPrice = Number(e.target.value)
    setMovieData(e.target.selectedIndex, e.target.value)
    updateSelectedCount();
})


// Seat click event
container.addEventListener('click', e => {
    if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
        e.target.classList.toggle('selected');

        updateSelectedCount();
    }
});