import { CurrencyEnum } from './enums';
import { currencyType } from './store/slices/ticketsSlice';

export const getChoosenPrice = (price: number, currency: currencyType) => {
  switch (currency) {
    case CurrencyEnum.RU:
      return price;
    case CurrencyEnum.USD:
      return (price * 0.011).toFixed(2);
    case CurrencyEnum.EUR:
      return (price * 0.0098).toFixed(2);
    default:
      return price;
  }
};
