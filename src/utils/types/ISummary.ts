export interface ISummaryStats {
  id: string;
  difficulty: number;
  gigaHashPerSec: string;
  coinSupply: number;
  btcPrice: number;
  usdPrice: number;
  marketCapInUSD: number;
  transactions: number;
  timestamp: number;
  avgTransactionsPerSecond: number;
  nonZeroAddressesCount: number;
}

export interface ISummary {
  currentStats: ISummaryStats;
  lastDayStats: ISummaryStats;
}
