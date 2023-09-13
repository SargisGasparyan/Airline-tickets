import { ITicket } from '../../types.ts';
import { useEffect, useState } from 'react';

interface IUpdateTicket {
  tickets: ITicket[];
  activeFilter: number[];
}

export const useUpdateTicket = ({ tickets, activeFilter }: IUpdateTicket) => {
  const [updatedTicket, setUpdatedTicket] = useState<ITicket[] | null>([]);

  useEffect(() => {
    const filteredTicketsArr = tickets.filter((card: ITicket) => activeFilter.includes(card.stops));
    activeFilter.includes(-1) ? setUpdatedTicket(tickets) : setUpdatedTicket(filteredTicketsArr);
  }, [activeFilter, tickets]);

  return { updatedTicket };
};
