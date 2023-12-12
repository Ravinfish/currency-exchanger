import ConvertCurrency from './js/convert';

document.addEventListener('DOMContentLoaded', () => {
  const exchangeForm = document.getElementById('exchangeForm');
  const resultsDiv = document.getElementById('results');

  exchangeForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const amount = parseFloat(document.getElementById('amount').value);
    const cur1 = document.getElementById('cur1').value;
    const cur2 = document.getElementById('cur2').value;

    const result = await ConvertCurrency.convertCurrency(cur1, cur2, amount);

    if (results.error) {
      resultsDiv.innerHTML = `<p>Error: ${result.error}</p>`;
    } else {
      resultsDiv.innerHTML = `
        <p>${amount} ${cur1} is equal to ${result.convertedAmount} ${cur2}</p>
        <p>Exchange rate: 1 ${cur1} = ${result.exchangeRate} ${cur2}</p>`;
    }

    resultsDiv.classList.remove('hidden')
  })
})