import { formatNumber } from '@utils/helpers/formatNumbers/formatNumbers';

export interface SummaryItemProps {
  id: number;
  name: string;
  value: string | number | null;
  previousValue: string | number | null;
  key: string;
  difference: string | number | null;
  decimals: number;
}

export const initialSummaryList: Array<SummaryItemProps> = [
  {
    id: 1,
    name: 'Network (GH/s)',
    value: null,
    previousValue: null,
    key: 'gigaHashPerSec',
    difference: 0,
    decimals: 2,
  },
  {
    id: 2,
    name: 'Difficulty',
    value: null,
    previousValue: null,
    key: 'difficulty',
    difference: 0,
    decimals: 2,
  },
  {
    id: 3,
    name: 'Coin Supply (PSL)',
    value: null,
    previousValue: null,
    key: 'coinSupply',
    difference: 0,
    decimals: 2,
  },
  {
    id: 4,
    name: 'BTC Price',
    value: null,
    previousValue: null,
    key: 'btcPrice',
    difference: 0,
    decimals: 10,
  },
];

export const calculateDifference = (first: string | number, second: string | number) => {
  const firstValue = parseFloat(first.toString());
  const secondValue = parseFloat(second.toString());

  const difference = ((firstValue - secondValue) / ((firstValue + secondValue) / 2)) * 100;

  return formatNumber(difference, { decimalsLength: 2 });
};
