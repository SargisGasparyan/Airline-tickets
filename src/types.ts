export interface ITicket {
  origin: string;
  origin_name: string;
  destination: string;
  destination_name: string;
  departure_date: string;
  departure_time: string;
  arrival_date: string;
  arrival_time: string;
  stops: number;
  price: number;
}

export interface ITransferFilterType {
  id: number;
  checked: boolean;
  value: string;
  ticketTransfer: number;
}
