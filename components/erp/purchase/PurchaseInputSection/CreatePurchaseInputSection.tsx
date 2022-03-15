import { useState } from 'react';
import { ConfirmationService, NotificationService } from '../../../../core/erp/common';
import { Purchase, PurchaseService } from '../../../../core/erp/purchase';
import { useServiceContext } from '../../../common/ServiceContext';
import BasePurchaseInputSection from './BasePurchaseInputSection';
import { PurchaseInputSectionLayoutProps } from './PurchaseInputSection';

export interface CreatePurchaseInputSectionProps extends PurchaseInputSectionLayoutProps {}

function CreatePurchaseInputSection(props: CreatePurchaseInputSectionProps) {
  const { ...layoutProps } = props;
  const notificationService = useServiceContext<NotificationService>('Notification');
  const confirmationService = useServiceContext<ConfirmationService>('Confirmation');
  const purchaseService = useServiceContext<PurchaseService>('Purchase');
  const [purchase, setPurchase] = useState<Purchase>(new Purchase({ stocks: [] } as any));
  const [stockType, setStockType] = useState<'P' | 'M'>('P');

  const submitPurchaseCreate = async () => {
    const isConfirmed = await confirmationService.getConfirmation();

    try {
      if (!isConfirmed) {
        await purchaseService.createPurchase(purchase);
        notificationService.notify('建立完成'); 
        resetPurchase();
      }
    } catch {
      notificationService.notify('建立失敗');
    }
  };

  const resetPurchase = () => {};

  return (
    <BasePurchaseInputSection
      {...layoutProps}
      dataStockType={stockType}
      dataPurchase={purchase}
      onDataPurchase={setPurchase}
      onActionSubmit={submitPurchaseCreate}
      onActionCancel={resetPurchase}
      onActionStockTypeChange={setStockType}
    />
  );
}

export default CreatePurchaseInputSection;
