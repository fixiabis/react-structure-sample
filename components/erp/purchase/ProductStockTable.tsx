import { ProductStockOfPurchase } from '../../../core/erp/purchase';

export interface ProductStockTableProps {
  stockTypeDisabled?: boolean;
  dataStocks: ProductStockOfPurchase[];
  onDataStocks: (stocks: ProductStockOfPurchase[]) => void;
  onChangeStockType?: (stockType: 'M') => void;
  onAddStock: () => void;
  onRemoveStock: (index: number) => void;
}

function ProductStockTable(props: ProductStockTableProps) {
  return null;
}

export default ProductStockTable;
