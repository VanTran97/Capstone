console.log('Client side js is loaded')

const cryptoForm = document.querySelector('form')
const cryptoSelect = document.querySelector('#select-crypto')
const currencySelect = document.querySelector('#select-currency')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

messageOne.textContent = 'From JavaScript'

cryptoForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const crypto = cryptoSelect.value
    const currency = currencySelect.value

    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''

    fetch('http://crypto-g-test.herokuapp.com/crypto?crypto=' + crypto + '&currency=' + currency)
    .then((response) => {
        response.json()
        .then((data) => {
            if (data.error) {
                messageOne.textContent = data.error
            } else {
                messageOne.textContent = data.rate
                messageTwo.textContent = 'Rate correct as of: ' + new Date(data.time)
            }
        })
    })
})