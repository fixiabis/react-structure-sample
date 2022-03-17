import { useRouter } from 'next/router';
import LayoutContext from '../../../../components/common/LayoutContext';
import ServiceContext from '../../../../components/common/ServiceContext';
import DefaultTemplate from '../../../../components/erp/common/DefaultTemplate';
import PurchaseInputSection from '../../../../components/erp/purchase/PurchaseInputSection/PurchaseInputSection';
import PurchaseUpdateSection from '../../../../components/erp/purchase/PurchaseInputSection/UpdatePurchaseInputSection';

const services = { Purchase: () => ({}), Notification: () => ({}), Confirmation: () => ({}) };
const layouts = { PurchaseInputSection };

function PurchaseUpdatePage() {
  const router = useRouter();
  const sections = <PurchaseUpdateSection dataPurchaseId={String(router.query.id)} />;

  return (
    <ServiceContext.Provider value={services}>
      <LayoutContext.Provider value={layouts}>
        <DefaultTemplate>{{ sections }}</DefaultTemplate>
      </LayoutContext.Provider>
    </ServiceContext.Provider>
  );
}

export default PurchaseUpdatePage;
