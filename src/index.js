import ConvertCurrency from './js/ConvertCurrency';
import "./css/styles.css"

document.addEventListener('DOMContentLoaded', () => {
  const exchangeForm = document.getElementById('exchangeForm');
  const resultDiv = document.getElementById('result');

  exchangeForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const amount = parseFloat(document.getElementById('amount').value);
    const cur1 = document.getElementById('cur1').value;
    const cur2 = document.getElementById('cur2').value;

    const result = await ConvertCurrency.convertCurrency(cur1, cur2, amount);

    if (result.error) {
      resultDiv.innerHTML = `<p>Error: ${result.error}</p>`;
    } else {
      resultDiv.innerHTML = `
        <p>${amount} ${cur1} is equal to ${result.convertedAmount} ${cur2}</p>
        <p>Exchange rate: 1 ${cur1} = ${result.exchangeRate} ${cur2}</p>`;
    }

    resultDiv.classList.remove('hidden')
  });
});