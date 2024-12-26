// app.js
const exchangeRates = {
    USD: { EUR: 0.85, PKR: 160.5 },
    EUR: { USD: 1.18, PKR: 188.3 },
    PKR: { USD: 0.0062, EUR: 0.0053 },
};

function convertCurrency() {
    const amount = document.getElementById('amount').value;
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;

    if (amount && fromCurrency && toCurrency && exchangeRates[fromCurrency] && exchangeRates[fromCurrency][toCurrency]) {
        const convertedAmount = amount * exchangeRates[fromCurrency][toCurrency];
        document.getElementById('result').innerText = `${amount} ${fromCurrency} is equal to ${convertedAmount.toFixed(2)} ${toCurrency}`;
    } else {
        document.getElementById('result').innerText = 'Please enter a valid amount and select currencies.';
    }
}
        