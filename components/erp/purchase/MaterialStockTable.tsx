import { MaterialStockOfPurchase } from '../../../core/erp/purchase';

export interface MaterialStockTableProps {
  variantStockTypeDisabled?: boolean;
  dataStocks: MaterialStockOfPurchase[];
  onDataStocks: (stocks: MaterialStockOfPurchase[]) => void;
  onActionChangeStockType?: (stockType: 'P') => void;
  onActionAddStock: () => void;
  onActionRemoveStock: (index: number) => void;
}

function MaterialStockTable(props: MaterialStockTableProps) {
  return null;
}

export default MaterialStockTable;
