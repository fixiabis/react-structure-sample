import { Purchase } from '../../../core/erp/purchase';

export interface PurchaseFormProps {
  dataPurchase: Purchase;
  onDataPurchase: (purchase: Purchase) => void;
  onSubmit: () => void;
  onCancel: () => void;
}

function PurchaseForm(props: PurchaseFormProps) {
  return null;
}

export default PurchaseForm;
