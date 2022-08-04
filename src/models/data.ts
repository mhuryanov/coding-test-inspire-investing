import { FundModel } from './fund';
import { HoldingModel } from './holding';

export interface DataModel {
  fund: FundModel;
  holdings: HoldingModel[];
  holdingsAmount: number;
  currentPage: number;
  totalPages: number;
  totalHoldings: number;
}
