import { useEffect, useState } from 'react';
import { NotificationService, ConfirmationService } from '../../../../core/erp/common';
import { Purchase, PurchaseService } from '../../../../core/erp/purchase';
import { useServiceContext } from '../../../common/ServiceContext';
import PurchaseInputSectionBase from './PurchaseInputSectionBase';
import { PurchaseInputSectionLayoutProps } from './PurchaseInputSection';

export interface UpdatePurchaseInputSectionProps extends PurchaseInputSectionLayoutProps {
  dataPurchaseId: string;
}

function PurchaseUpdateSection(props: UpdatePurchaseInputSectionProps) {
  const { dataPurchaseId, ...layoutProps } = props;
  const notificationService = useServiceContext<NotificationService>('Notification');
  const confirmationService = useServiceContext<ConfirmationService>('Confirmation');
  const purchaseService = useServiceContext<PurchaseService>('Purchase');
  const [prevPurchase, setPrevPurchase] = useState<Purchase>(new Purchase({ stocks: [] } as any));
  const [purchase, setPurchase] = useState<Purchase>(new Purchase({ stocks: [] } as any));
  const stockType = purchase.materialStocks.length ? 'M' : 'P';

  useEffect(() => {
    purchaseService.getPurchase(dataPurchaseId).then((purchase) => {
      setPrevPurchase(purchase);
      setPurchase(purchase);
    });
  }, [dataPurchaseId, purchaseService]);

  const submitPurchaseUpdate = async () => {
    const isConfirmed = await confirmationService.getConfirmation();

    try {
      if (!isConfirmed) {
        await purchaseService.createPurchase(purchase);
        notificationService.notify('更新完成');
      }
    } catch {
      notificationService.notify('更新失敗');
    }
  };

  const resetPurchase = () => setPurchase(prevPurchase);

  return (
    <PurchaseInputSectionBase
      {...layoutProps}
      dataStockTypeDisabled
      dataStockType={stockType}
      dataPurchase={purchase}
      onDataPurchase={setPurchase}
      onSubmit={submitPurchaseUpdate}
      onCancel={resetPurchase}
    />
  );
}

export default PurchaseUpdateSection;
