export default class ConvertCurrency {

  static async convertCurrency(cur1, cur2, amount) {
    try {
      const response = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/${cur1}/${cur2}/${amount}`);
      const resultText = await response.json();

      if (!response.ok) {
        const errorMessage = `${response.status} ${response.statusText} ${resultText["error-type"]}`;
        throw new Error(errorMessage);
      }

      return { resultText }
    } catch (error) {
      return { error };
    }
  }
}
