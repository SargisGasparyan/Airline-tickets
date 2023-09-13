import { createSlice } from '@reduxjs/toolkit';
import { ITicket, ITransferFilterType } from '../../types.ts';
import { transferCount } from '../../components/FilterPage/constants.ts';

export type currencyType = 'rub' | 'usd' | 'eur';

interface TicketsState {
  tickets: ITicket[];
  currency: currencyType;
  filterTypes: ITransferFilterType[];
  activeFilter: number[];
}

const initialState: TicketsState = {
  tickets: [],
  currency: 'rub',
  activeFilter: [-1],
  filterTypes: transferCount,
};

export const ticketsSlice = createSlice({
  name: 'tickets',
  initialState,
  reducers: {
    setInitialTickets(state, action) {
      state.tickets.push(...action.payload);
    },
    setCurrency(state, action) {
      state.currency = action.payload;
    },
    changeFilter(state, action) {
      const updatedFilters = state.filterTypes.map((filter) => {
        if (filter.id === action.payload.checkboxId) {
          return { ...filter, checked: !filter.checked };
        }
        return filter;
      });
      if (action.payload.isOnly) {
        state.filterTypes = state.filterTypes.map((item) =>
          item.id !== action.payload.checkboxId ? { ...item, checked: false } : { ...item },
        );
      } else {
        state.filterTypes = updatedFilters;
      }

      const choosenTickets = updatedFilters.reduce((acc: number[], currentItem) => {
        if (currentItem.checked === true) {
          acc.push(currentItem.ticketTransfer);
        }
        return acc;
      }, []);
      console.log(choosenTickets, 'choosenTickets');
      state.activeFilter = choosenTickets;
    },
  },
});

export const { setInitialTickets, setCurrency, changeFilter } = ticketsSlice.actions;

export default ticketsSlice.reducer;
