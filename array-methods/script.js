const main = document.getElementById('main')
const addUserBtn = document.getElementById('add-user')
const sortBtn = document.getElementById('sort')
const substractHalfBtn = document.getElementById('substract-half')
const doubleBtn = document.getElementById('double')
const showBtn = document.getElementById('show-millionaire')
const calculateWealthBtn = document.getElementById('calculate-wealth')



getRandomUser()
getRandomUser()
getRandomUser()

let data = [];
async function getRandomUser() {
    const res = await fetch('https://randomuser.me/api');
    const data = await res.json()  
    const user = data.results[0]
    
    const newUser = {
        name: `${user.name.first}
               ${user.name.last}`,
        money: Math.floor(Math.random() * 1000000)       
    };
    addData(newUser)
}

function doubleAmount() {
    data = data.map(user => {
        return {...user, money: user.money * 2 }
    });
    updateDOM();
}

function substractHalf() {
    data = data.map(user => {
        return {...user, money: user.money / 2 }
    })
    updateDOM();
}

function sortRiches() {
    data.sort((a, b) => b.money - a.money)
    updateDOM();
}

function showMillionairs(){
    data = data.filter(function(person) {
        return person.money >= 1000000
    })
    updateDOM();
}


function calculateWealth() {
    const wealth = data.reduce((acc, curr) => {
        return acc += curr.money
    }, 0);

    const wealthEl = document.createElement('div')
    wealthEl.innerHTML = `<h3>Total wealth: 
                            <span>${formatMoney(wealth)}</span>
    </h3>`
    main.appendChild(wealthEl)
}


function addData(obj) {
    data.push(obj)

    updateDOM();
}


function updateDOM(providedData = data) {
    main.innerHTML = '<h2><strong>Person</strong>Wealth</h2>'

    providedData.forEach(function(person) {
        const personElement = document.createElement('div');
        personElement.classList.add('person')
        personElement.innerHTML = `<span>
                                ${person.name}
                                   </span>
                                ${formatMoney(person.money)}
                                   `
        main.appendChild(personElement)                                       
    });

}

function formatMoney(number) {
    return '$ ' + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g,
    '$&,');
}


// EventListeners

addUserBtn.addEventListener('click', getRandomUser)
doubleBtn.addEventListener('click', doubleAmount)
substractHalfBtn.addEventListener('click', substractHalf)
sortBtn.addEventListener('click', sortRiches)
showBtn.addEventListener('click', showMillionairs)
calculateWealthBtn.addEventListener('click', calculateWealth)
