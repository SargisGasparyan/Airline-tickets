import Card from '../Ticket/Ticket.tsx';
import './Ticket.css';
import { useAppSelector } from '../../store/hooks.ts';
import { useEffect, useState } from 'react';
import { useUpdateTicket } from '../customHooks/useUpdateTicket.ts';
import { Spinner } from '../Spinner/Spinner.tsx';

const TicketList = () => {
  const [isShowLoading, setLoading] = useState(true);
  const { tickets } = useAppSelector((state) => state.tickets);
  const { activeFilter } = useAppSelector((state) => state.tickets);

  const { updatedTicket } = useUpdateTicket({
    tickets,
    activeFilter,
  });

  const isExistTickets = updatedTicket && updatedTicket.length > 0;

  useEffect(() => {
    setTimeout(() => setLoading(false), 500);
  }, []);

  if (isShowLoading) {
    return <Spinner />;
  }
  const cardsRender = isExistTickets ? (
    updatedTicket?.map(
      ({
        origin,
        origin_name,
        destination,
        destination_name,
        departure_date,
        departure_time,
        arrival_date,
        arrival_time,
        stops,
        price,
      }) => {
        return (
          <Card
            key={arrival_date + price}
            origin={origin}
            origin_name={origin_name}
            destination={destination}
            destination_name={destination_name}
            departure_date={departure_date}
            departure_time={departure_time}
            arrival_date={arrival_date}
            arrival_time={arrival_time}
            stops={stops}
            price={price}
          />
        );
      },
    )
  ) : (
    <h2 className="empty-message">Список пустой 🗑️</h2>
  );

  return <div className={'tickets-list'}>{cardsRender}</div>;
};

export default TicketList;
