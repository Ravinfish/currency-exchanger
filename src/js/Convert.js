static async convertCurrency(cur1, cur2) {
  try {
    const response = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/${cur1}/${cur2}`);
  }
}