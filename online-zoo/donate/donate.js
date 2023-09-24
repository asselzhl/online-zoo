import '/src/scss/donate.scss';

const amountRadioButtons = document.querySelectorAll('.progressbar__input');
const amountInput = document.getElementById('moneyAmount');


amountRadioButtons.forEach(amountRadioButton => {
    amountRadioButton.addEventListener('click', (e) => {
        amountInput.value = e.target.value;
    })
})

amountInput.addEventListener('input', () => {
    amountRadioButtons.forEach(amountRadioButton => {
        if (amountInput.value == amountRadioButton.value) {
            amountRadioButton.checked = true;
        }
    })
})