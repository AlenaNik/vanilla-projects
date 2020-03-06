const currencyEl_one = document.getElementById('currency-one');
const amountEl_one = document.getElementById('amount-one');
const currencyEl_two = document.getElementById('currency-two');
const amountEl_two = document.getElementById('amount-two');

const rateEl = document.getElementById('rate');
const swap = document.getElementById('swap');


function calculate() {
    const currency1 = currencyEl_one.value;
    const currency2 = currencyEl_two.value;
    fetch(`https://api.exchangeratesapi.io/latest?base${currency1}`)
    .then(res => res.json())
    .then(data => {
      // console.log(data)
       const rate = data.rates[currency2]
       console.log(rate)

       rateEl.innerHTML = `1 ${currency1} = ${rate} ${currency2}`

       amountEl_two.value = (amountEl_one.value * rate).toFixed(2);
    })
}

currencyEl_one.addEventListener('change', calculate)
amountEl_one.addEventListener('input', calculate)
currencyEl_two.addEventListener('change', calculate)
amountEl_two.addEventListener('input', calculate)

calculate()