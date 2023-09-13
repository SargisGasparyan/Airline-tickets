import { currencyType } from "./store/slices/ticketsSlice"

export const getActualPrice=(price:number,currency:currencyType)=>{
    switch(currency) {
      case 'rub':
        return price
      case 'usd':
        return (price * 0.011).toFixed(2)
        case 'eur':
          return (price * 0.0098).toFixed(2)
      default:
        return price
    }
  }