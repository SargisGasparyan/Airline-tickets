import { ITransferFilterType } from '../../types.ts';

export const currenciesData = [
  {
    id: 0,
    currency: 'rub',
    selected: true,
  },
  {
    id: 1,
    currency: 'usd',
    selected: false,
  },
  {
    id: 2,
    currency: 'eur',
    selected: false,
  },
];

export const transferCount: ITransferFilterType[] = [
  {
    id: 0,
    checked: true,
    value: 'Все',
    ticketTransfer: -1,
  },
  {
    id: 1,
    checked: false,
    value: 'Без пересадок',

    ticketTransfer: 0,
  },
  {
    id: 2,
    checked: false,
    value: '1 пересадка',
    ticketTransfer: 1,
  },
  {
    id: 3,
    checked: false,
    value: '2 пересадки',
    ticketTransfer: 2,
  },
  {
    id: 4,
    checked: false,
    value: '3 пересадки',
    ticketTransfer: 3,
  },
];
