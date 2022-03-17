import { MaterialStockOfPurchase } from '../../../core/erp/purchase';

export interface MaterialStockTableProps {
  variantStockTypeDisabled?: boolean;
  dataStocks: MaterialStockOfPurchase[];
  onDataStocks: (stocks: MaterialStockOfPurchase[]) => void;
  onChangeStockType?: (stockType: 'P') => void;
  onAddStock: () => void;
  onRemoveStock: (index: number) => void;
}

function MaterialStockTable(props: MaterialStockTableProps) {
  return null;
}

export default MaterialStockTable;
