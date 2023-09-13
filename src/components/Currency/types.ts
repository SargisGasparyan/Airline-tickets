export interface Props {
  currency: string;
  activeCurrency: string;
  changeCurrency: (currency: string) => void;
}
