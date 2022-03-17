import LayoutContext from '../../../components/common/LayoutContext';
import ServiceContext from '../../../components/common/ServiceContext';
import DefaultTemplate from '../../../components/erp/common/DefaultTemplate';
import PurchaseCreateSection from '../../../components/erp/purchase/PurchaseInputSection/CreatePurchaseInputSection';
import PurchaseInputSection from '../../../components/erp/purchase/PurchaseInputSection/PurchaseInputSection';

const services = { Purchase: () => ({}), Notification: () => ({}), Confirmation: () => ({}) };
const layouts = { PurchaseInputSection };

function PurchaseCreatePage() {
  const sections = <PurchaseCreateSection />;

  return (
    <ServiceContext.Provider value={services}>
      <LayoutContext.Provider value={layouts}>
        <DefaultTemplate>{{ sections }}</DefaultTemplate>
      </LayoutContext.Provider>
    </ServiceContext.Provider>
  );
}

export default PurchaseCreatePage;
