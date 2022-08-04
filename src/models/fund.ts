export interface FundModel {
  id: string;
  ticker: string;
  name: string;
  impactScore: number;
  previousSharePrice: number;
  marketCapitalization: number;
  industry: any;
  domestic: boolean;
  uniqueKey: string;
  exchange: {
    description: string;
    name: string;
  };
  sector: {
    description: string;
    name: string;
  };
  exchangeLocation: {
    description: string;
    name: string;
  };
  type: {
    description: string;
    name: string;
    fund: boolean;
  };
}
