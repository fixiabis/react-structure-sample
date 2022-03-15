import { Purchase, StockOfPurchase } from '../../../../core/erp/purchase';
import MaterialStockTable from '../MaterialStockTable';
import ProductStockTable from '../ProductStockTable';
import PurchaseForm from '../PurchaseForm';
import StockDetailTable from '../StockDetailTable';

export interface PurchaseInputSectionLayoutProps extends IntrinsicElementProps<'section'> {}

export interface PurchaseInputSectionProps extends PurchaseInputSectionLayoutProps {
  dataStockTypeDisabled?: boolean;
  dataStockType: 'P' | 'M';

  dataPurchase: Purchase;
  onDataPurchase: (purchase: Purchase) => void;

  dataStocks: StockOfPurchase[];
  onDataStocks: (stocks: StockOfPurchase[]) => void;

  onActionSubmit: () => void;
  onActionCancel: () => void;
  onActionAddStock: () => void;
  onActionRemoveStock: (index: number) => void;
  onActionStockTypeChange?: (stockType: 'P' | 'M') => void;
}

interface StockTableProps {
  dataStockTypeDisabled?: boolean;
  dataStocks: StockOfPurchase[];
  onDataStocks: (stocks: StockOfPurchase[]) => void;
  onActionChangeStockType?: (stockType: 'P' | 'M') => void;
  onActionAddStock: () => void;
  onActionRemoveStock: (index: number) => void;
}

function PurchaseInputSection(props: PurchaseInputSectionProps) {
  const {
    dataStockType,
    dataPurchase,
    onDataPurchase: emitDataPurchase,
    dataStocks,
    onDataStocks: emitDataStocksOfPurchase,
    onActionSubmit: emitActionSubmit,
    onActionCancel: emitActionCancel,
    onActionAddStock: emitActionAddStock,
    onActionRemoveStock: emitActionRemoveStock,
    onActionStockTypeChange: emitActionStockTypeChange,
    ...layoutProps
  } = props;

  const StockTable: React.ComponentType<StockTableProps> =
    dataStockType === 'M' ? MaterialStockTable : ProductStockTable;

  return (
    <section {...layoutProps}>
      <PurchaseForm
        dataPurchase={dataPurchase}
        onDataPurchase={emitDataPurchase}
        onActionSubmit={emitActionSubmit}
        onActionCancel={emitActionCancel}
      />
      <StockTable
        dataStocks={dataStocks}
        onDataStocks={emitDataStocksOfPurchase}
        onActionAddStock={emitActionAddStock}
        onActionRemoveStock={emitActionRemoveStock}
        onActionChangeStockType={emitActionStockTypeChange}
      />
      <StockDetailTable dataStocks={dataStocks} onDataStocks={emitDataStocksOfPurchase} />
    </section>
  );
}

export default PurchaseInputSection;
