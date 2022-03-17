import { Purchase } from '../../../core/erp/purchase';

export interface PurchaseFormProps extends IntrinsicElementProps<'form'> {
  dataPurchase: Purchase;
  onDataPurchase: (purchase: Purchase) => void;
  onActionSubmit: () => void;
  onActionCancel: () => void;
}

function PurchaseForm(props: PurchaseFormProps) {
  return null;
}

export default PurchaseForm;
