import React from 'react';
import LayoutContext from '../../../components/common/LayoutContext';
import ServiceContext from '../../../components/common/ServiceContext';
import VariousNewsCard from '../../../components/art-site/common/Card/VariousNewsCard';
import CommonCardSection from '../../../components/art-site/common/CardSection/CommonCardSection';
import CardSection from '../../../components/art-site/common/CardSection/CardSection';
import DefaultTemplate from '../../../components/art-site/common/DefaultTemplate';
import { VariousNews } from '../../../core/art-site/news';

const services = { VariousNewsData: () => ({ data: [] }) };
const layouts = { CardSection };

const renderVariousNewsCard = (variousNews: VariousNews, index: number) => (
  <VariousNewsCard key={index} dataVariousNews={variousNews} />
);

function VariousNewsesPage() {
  const sections = (
    <CommonCardSection<VariousNews> dataServiceName="VariousNewsData" renderCard={renderVariousNewsCard} />
  );

  return (
    <ServiceContext.Provider value={services}>
      <LayoutContext.Provider value={layouts}>
        <DefaultTemplate>{{ sections }}</DefaultTemplate>
      </LayoutContext.Provider>
    </ServiceContext.Provider>
  );
}

export default VariousNewsesPage;
