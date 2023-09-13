import { Props } from './types.ts';
import './Currency.css';

const Currency = ({ currency, changeCurrency, activeCurrency }: Props) => {
  const isActive = activeCurrency === currency;

  return (
    <div onClick={() => changeCurrency(currency)} className={`${isActive ? 'currency active' : 'currency'}`}>
      {currency}
    </div>
  );
};

export default Currency;
