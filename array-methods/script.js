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
                                ${person.money} $   
                                   `
        main.appendChild(personElement)                                       
    });

}