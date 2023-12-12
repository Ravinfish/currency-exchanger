export default class ConvertCurrency {

static async convertCurrency(cur1, cur2, amount) {
  try {
    const response = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/${cur1}/${cur2}`);
    const responseData = await response.json();

    if (!response.ok) {
      const errorMessage = `${response.status} ${response.statusText} ${responseData["error-type"]}`;
      throw new Error(errorMessage);
    }

    const exchangeRate = responseData.conversion_rate;
    if (exchangeRate === undefined) {
      throw new Error("Exchange rate is undefined.");
    }

    const convertedAmount = amount * exchangeRate;

    return {
      exchangeRate,
      convertedAmount,
      fromCurrency: cur1,
      toCurrency: cur2,
    };

    } catch (error) {
      return  {
        error: error.message || 'An error occured during currency conversion.'
      };
    }
  }
}
