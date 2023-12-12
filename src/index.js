import "./css/styles.css"
import ConvertCurrency from './js/ConvertCurrency.js';


document.addEventListener("DOMContentLoaded", function () {
async function handleExchangeForm(e) {
  e.preventDefault();
  const cur1 = document.getElementById("cur1").value;
  // const cur1 = cur1Value.value;
  // const cur1Name = cur1Value.options[cur1Value.selectedIndex].text;
  const cur2 = document.getElementById("cur2").value;
  // const cur2 = cur2Value.value;
  // const cur2Name = cur2Value.options[cur2Value.selectedIndex].text;
  const amount = document.getElementById("amount").value;

  const converter = new ConvertCurrency();
  const { result, error } = await ConvertCurrency.convertCurrency(cur1, cur2, amount);
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
  } else if (typeof result.converter_result !== 'undefined') {
    const conversion = document.createElement("p");
    conversion.innerHTML = `${amount} ${cur1} is equal to ${result.coverter_result} ${cur2}`;
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
});
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