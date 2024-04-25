import './FilterPage.css';
import { currenciesData } from './constants.ts';
import Currency from '../Currency/Currency.tsx';
import Checkbox from '../Checkbox/Checkbox.tsx';
import { useDispatch } from 'react-redux';
import { changeFilter, changeCurrency } from '../../store/slices/ticketsSlice.ts';
import { useAppSelector } from '../../store/hooks.ts';

const Filter = () => {
  const dispatch = useDispatch();

  const { currency: activeCurrency } = useAppSelector((state) => state.tickets);

  const handleCurrency = (currency: string) => {
    dispatch(changeCurrency(currency));
  };

  const changeFilterHandler = (checkboxId: number, isOnly?: boolean) => {
    dispatch(changeFilter({ checkboxId, isOnly }));
  };

  const currenciesArray = currenciesData.map(({ id, currency }) => {
    return <Currency key={id} currency={currency} activeCurrency={activeCurrency} changeCurrency={handleCurrency} />;
  });

  const { filterTypes } = useAppSelector((state) => state.tickets);

  const transfersRender = filterTypes.map(({ id, checked, value }) => {
    return (
      <Checkbox
        key={id}
        checked={checked}
        value={value}
        id={id}
        changeFilter={(currency, isOnly) => changeFilterHandler(currency, isOnly)}
      />
    );
  });

  return (
    <div className={'transfer-info'}>
      <div className={'group'}>
        <span className={'title'}>валюта</span>
        <div className={'currencies-wrapper'}>{currenciesArray}</div>
      </div>

      <div className={'group'}>
        <span className={'title'}>количество пересадок</span>
        <div className={'transfers-wrapper'}>{transfersRender}</div>
      </div>
    </div>
  );
};

export default Filter;
