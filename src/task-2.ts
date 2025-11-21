type Currency = "USD" | "EUR" | "UAH";

interface CurrencyData {
  amount: number;
  currency: Currency;
}

function convertCurrency({ amount, currency }: CurrencyData): void {
  console.log(`Converting ${amount} to ${currency}`);
}

convertCurrency({ amount: 1, currency: "UAH" });
