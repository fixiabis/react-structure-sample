import { StockOfPurchase } from '../../../core/erp/purchase';

export interface StockDetailTableProps {
  dataStocks: StockOfPurchase[];
  onDataStocks: (stocks: StockOfPurchase[]) => void;
}

function StockDetailTable(props: StockDetailTableProps) {
  return null;
}

export default StockDetailTable;
