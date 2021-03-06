import { MaterialStockOfPurchase, ProductStockOfPurchase, Purchase } from '../../../../core/erp/purchase';
import { useLayoutContext } from '../../../common/LayoutContext';
import { PurchaseInputSectionLayoutProps, PurchaseInputSectionProps } from './PurchaseInputSection';

export interface PurchaseInputSectionBaseProps extends PurchaseInputSectionLayoutProps {
  dataStockTypeDisabled?: boolean;

  dataStockType: 'P' | 'M';

  dataPurchase: Purchase;
  onDataPurchase: (purchase: React.SetStateAction<Purchase>) => void;

  onSubmit: () => void;
  onCancel: () => void;
  onStockTypeChange?: (stockType: 'P' | 'M') => void;
}

function PurchaseInputSectionBase(props: PurchaseInputSectionBaseProps) {
  const {
    dataStockTypeDisabled,
    dataStockType,
    dataPurchase,
    onDataPurchase: emitDataPurchase,
    onSubmit: emitSubmit,
    onCancel: emitCancel,
    onStockTypeChange: emitStockTypeChange,
    ...layoutProps
  } = props;

  const PurchaseInputSection = useLayoutContext<PurchaseInputSectionProps>('PurchaseInputSection');
  const stocks = dataStockType === 'M' ? dataPurchase.materialStocks : dataPurchase.stocks;

  const setStocks =
    dataStockType === 'M'
      ? (stocks: MaterialStockOfPurchase[]) => emitDataPurchase((purchase) => purchase.changeMaterialStocks(stocks))
      : (stocks: ProductStockOfPurchase[]) => emitDataPurchase((purchase) => purchase.changeStocks(stocks));

  const addStock =
    dataStockType === 'M'
      ? () => emitDataPurchase((purchase) => purchase.addMaterialStock())
      : () => emitDataPurchase((purchase) => purchase.addStock());

  const removeStock =
    dataStockType === 'M'
      ? (index: number) => emitDataPurchase((purchase) => purchase.removeMaterialStock(index))
      : (index: number) => emitDataPurchase((purchase) => purchase.removeStock(index));

  return (
    <PurchaseInputSection
      {...layoutProps}
      dataStockType={dataStockType}
      dataPurchase={dataPurchase}
      onDataPurchase={emitDataPurchase}
      dataStocks={stocks}
      onDataStocks={setStocks}
      onSubmit={emitSubmit}
      onCancel={emitCancel}
      onStockTypeChange={emitStockTypeChange}
      onAddStock={addStock}
      onRemoveStock={removeStock}
    />
  );
}

export default PurchaseInputSectionBase;
