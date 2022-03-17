import { Purchase, StockOfPurchase } from '../../../../core/erp/purchase';
import MaterialStockTable from '../MaterialStockTable';
import ProductStockTable from '../ProductStockTable';
import PurchaseForm from '../PurchaseForm';
import StockDetailTable from '../StockDetailTable';

export interface PurchaseInputSectionLayoutProps {}

export interface PurchaseInputSectionProps extends PurchaseInputSectionLayoutProps {
  dataStockTypeDisabled?: boolean;
  dataStockType: 'P' | 'M';

  dataPurchase: Purchase;
  onDataPurchase: (purchase: Purchase) => void;

  dataStocks: StockOfPurchase[];
  onDataStocks: (stocks: StockOfPurchase[]) => void;

  onSubmit: () => void;
  onCancel: () => void;
  onAddStock: () => void;
  onRemoveStock: (index: number) => void;
  onStockTypeChange?: (stockType: 'P' | 'M') => void;
}

interface StockTableProps {
  dataStockTypeDisabled?: boolean;
  dataStocks: StockOfPurchase[];
  onDataStocks: (stocks: StockOfPurchase[]) => void;
  onChangeStockType?: (stockType: 'P' | 'M') => void;
  onAddStock: () => void;
  onRemoveStock: (index: number) => void;
}

function PurchaseInputSection(props: PurchaseInputSectionProps) {
  const {
    dataStockType,
    dataPurchase,
    onDataPurchase: emitDataPurchase,
    dataStocks,
    onDataStocks: emitDataStocksOfPurchase,
    onSubmit: emitSubmit,
    onCancel: emitCancel,
    onAddStock: emitAddStock,
    onRemoveStock: emitRemoveStock,
    onStockTypeChange: emitStockTypeChange,
    ...layoutProps
  } = props;

  const StockTable: React.ComponentType<StockTableProps> =
    dataStockType === 'M' ? MaterialStockTable : ProductStockTable;

  return (
    <section {...layoutProps}>
      <PurchaseForm
        dataPurchase={dataPurchase}
        onDataPurchase={emitDataPurchase}
        onSubmit={emitSubmit}
        onCancel={emitCancel}
      />
      <StockTable
        dataStocks={dataStocks}
        onDataStocks={emitDataStocksOfPurchase}
        onAddStock={emitAddStock}
        onRemoveStock={emitRemoveStock}
        onChangeStockType={emitStockTypeChange}
      />
      <StockDetailTable dataStocks={dataStocks} onDataStocks={emitDataStocksOfPurchase} />
    </section>
  );
}

export default PurchaseInputSection;
