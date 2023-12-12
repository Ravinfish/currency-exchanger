export default class ConvertCurrency {

static async convertCurrency(cur1, cur2, amount) {
  try {
    const response = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/${cur1}/${cur2}`);
    const responseData = await response.json();
    if (!response.ok) {
      const errorMessage = `${response.status} ${response.statusText} ${responseData["error-type"]}`;
      throw new Error(errorMessage);
    }
    return responseData;
  } catch (error) {
    return error;
    }
  }
}
