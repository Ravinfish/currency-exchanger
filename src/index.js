import ConvertCurrency from './js/ConvertCurrency';
import "./css/styles.css"

async function handleExchangeForm(e) {
  e.preventDefault();
  const cur1 = document.getElementById("cur1").value;
  const cur1Name = cur1.options[cur1.selectedIndex].text;
  const cur2 = document.getElementById("cur2").value;
  const cur2Name = cur2.options[cur2.selectedIndex].text;
  const amount = document.getElementById("amount").value;
  const { result, error } = await ConvertCurrency(cur1, cur2, amount);
  if (error) {
    const errorMessage = {
      message: 'An error occured during currency conversion.',
      errorType: error.message,
    };
    const displayError = document.createElement("p");
    displayError.append(errorMessage.message + "." + errorMessage.errorType + ".");
    const result = document.getElementById("result");
    result.innerHTML = "";
    result.removeAttribute("class");
    result.append(displayError);
  } else if (typeof result.conversion_result !== 'undefined') {
    const conversion = document.createElement("p");
    conversion.innerHTML = `${amount} ${cur1Name} is equal to ${result.conversion_result} ${cur2Name}`;
    const result = document.getElementById("result");
    result.innerHTML = "";
    result.removeAttribute("class");
    result.append(conversion);
  } else {
    const blank = document.createElement("p");
    blank.innerHTML = `ERROR. Please input amount.`;
    const result = document.getElementById("result");
    result.innerHTML = "";
    result.removeAttribute("class");
    result.append(blank);
  }
}

document.getElementById("convertExchange").addEventListener("submit", handleExchangeForm);

// document.addEventListener('DOMContentLoaded', () => {
//   const exchangeForm = document.getElementById('exchangeForm');
//   const resultDiv = document.getElementById('result');

//   exchangeForm.addEventListener('submit', async (event) => {
//     event.preventDefault();

//     const amount = parseFloat(document.getElementById('amount').value);
//     const cur1 = document.getElementById('cur1').value;
//     const cur2 = document.getElementById('cur2').value;

//     const result = await ConvertCurrency.convertCurrency(cur1, cur2, amount);

//     if (result.error) {
//       resultDiv.innerHTML = `<p>Error: ${result.error}</p>`;
//     } else {
//       resultDiv.innerHTML = `
//         <p>${amount} ${cur1} is equal to ${result.convertedAmount} ${cur2}</p>
//         <p>Exchange rate: 1 ${cur1} = ${result.exchangeRate} ${cur2}</p>`;
//     }

//     resultDiv.classList.remove('hidden')
//   });
// });