const main = document.getElementById('main')
const addUserBtn = document.getElementById('add-user')
const sortBtn = document.getElementById('sort')
const substractHalfBtn = document.getElementById('substract-half')
const doubleBtn = document.getElementById('double')
const showBtn = document.getElementById('show-millionaire')
const calculateWealthBtn = document.getElementById('calculate-wealth')


let data = [];
async function getRandomUser() {
    const res = await fetch('https://randomuser.me/api');
    const data = await res.json()  
    console.log(data)
}

getRandomUser()