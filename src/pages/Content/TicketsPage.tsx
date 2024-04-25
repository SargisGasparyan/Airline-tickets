import { useEffect } from 'react';

import initialData from '../../json-data/tickets.json';
import CardsList from '../../components/TicketList/TicketList.tsx';
import './TicketPage.css';
import { useDispatch } from 'react-redux';
import { setInitialTickets } from '../../store/slices/ticketsSlice.ts';
import Filter from '../../components/FilterPage/FilterPage.tsx';

const { tickets } = initialData;

const TicketsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setInitialTickets(tickets));
  }, []);

  return (
    <div className={'tiket_page'}>
      <Filter />
      <CardsList />
    </div>
  );
};

export default TicketsPage;
