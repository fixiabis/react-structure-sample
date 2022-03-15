import { ProductStockOfPurchase } from '../../../core/erp/purchase';

export interface ProductStockTableProps {
  variantStockTypeDisabled?: boolean;
  dataStocks: ProductStockOfPurchase[];
  onDataStocks: (stocks: ProductStockOfPurchase[]) => void;
  onActionChangeStockType?: (stockType: 'M') => void;
  onActionAddStock: () => void;
  onActionRemoveStock: (index: number) => void;
}

function ProductStockTable(props: ProductStockTableProps) {
  return null;
}

export default ProductStockTable;
