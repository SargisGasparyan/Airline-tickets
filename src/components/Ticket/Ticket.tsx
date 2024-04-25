import { ITicket } from '../../types.ts';
import './Ticket.css';
import logo from '../../assets/images/airline.png';
import icon from '../../assets/images/airplane.png';

import dayjs from 'dayjs';
import ru from 'dayjs/locale/ru';
import { useAppSelector } from '../../store/hooks.ts';
import { currencies } from './constants.ts';
import { getChoosenPrice } from '../../utils.ts';

const Ticket = ({
  origin,
  origin_name,
  destination,
  destination_name,
  departure_date,
  departure_time,
  arrival_time,
  arrival_date,
  stops,
  price,
}: ITicket) => {
  const currency = useAppSelector((state) => state.tickets.currency);
  const date = dayjs(arrival_date).locale(ru).format('D MMM YYYY');

  return (
    <div className={'ticket'}>
      <div className={'left-side'}>
        <div className={'logo-wrapper'}>
          <img src={logo} alt="airlines" />
        </div>
        <div className={'ticket-button'}>
          <span>Купить</span>
          <span>
            за {getChoosenPrice(price, currency)} {currencies[currency]}
          </span>
        </div>
      </div>
      <div className={'content'}>
        <div className={'content-group'}>
          <div className={'time'}>{departure_time}</div>

          <div className={'city'}>
            {origin}, {origin_name}
          </div>

          <div className={'date'}>{dayjs(departure_date).locale(ru).format('D MMM YYYY')}</div>
        </div>

        <div className={'content-div'}>
          <div className={'stops'}>{stops} пересадка</div>
          <div className={'airplane-icon-wrapper'}>
            <img src={icon} alt={'airplane icon'} />
          </div>
        </div>

        <div className={'content-group'}>
          <div className={'time'}>{arrival_time}</div>

          <div className={'city'}>
            {destination}, {destination_name}
          </div>

          <div className={'date'}>{date}</div>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
