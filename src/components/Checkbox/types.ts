export interface Props {
  checked: boolean;
  value: string;
  id: number;
  changeFilter: (checkboxId: number, isOnly?: boolean) => void;
}
