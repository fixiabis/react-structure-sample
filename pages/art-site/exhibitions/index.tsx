import React from 'react';
import LayoutContext from '../../../components/common/LayoutContext';
import ServiceContext, { useServiceContext } from '../../../components/common/ServiceContext';
import CardSection from '../../../components/art-site/common/CardSection/CardSection';
import CommonCardSection from '../../../components/art-site/common/CardSection/CommonCardSection';
import DefaultTemplate from '../../../components/art-site/common/DefaultTemplate';
import ExhibitionCard from '../../../components/art-site/common/Card/ExhibitionCard';
import { Exhibition } from '../../../core/art-site/exhibition';

const services = {
  ExhibitionData: () => ({ data: [] }),
  ArtFairsExhibitionData: () => useServiceContext('ExhibitionData', ['ArtFairs']),
  CurrentExhibitionData: () => useServiceContext('ExhibitionData', ['Current']),
  ForthComingExhibitionData: () => useServiceContext('ExhibitionData', ['ForthComing']),
  PastExhibitionData: () => useServiceContext('ExhibitionData', ['Past']),
};

const layouts = { CardSection };

const renderExhibitionCard = (data: Exhibition, index: number) => <ExhibitionCard key={index} dataExhibition={data} />;

const renderWideExhibitionCard = (data: Exhibition, index: number) => (
  <ExhibitionCard key={index} dataExhibition={data} variantWide />
);

const wideCardSectionProps = {
  variantWide: true,
  variantFullLoaded: true,
  renderCard: renderWideExhibitionCard,
};

function ExhibitionsPage() {
  const sections = (
    <React.Fragment>
      <CommonCardSection<Exhibition>
        dataServiceName="ArtFairsExhibitionData"
        variantHeaderTitle="ART FAIRS"
        {...wideCardSectionProps}
      />
      <CommonCardSection<Exhibition>
        dataServiceName="CurrentExhibitionData"
        variantHeaderTitle="CURRENT"
        {...wideCardSectionProps}
      />
      <CommonCardSection<Exhibition>
        dataServiceName="ForthComingExhibitionData"
        variantHeaderTitle="FORTH COMING"
        {...wideCardSectionProps}
      />
      <CommonCardSection<Exhibition>
        dataServiceName="PastExhibitionData"
        variantHeaderTitle="PAST"
        renderCard={renderExhibitionCard}
      />
    </React.Fragment>
  );

  return (
    <ServiceContext.Provider value={services}>
      <LayoutContext.Provider value={layouts}>
        <DefaultTemplate>{{ sections }}</DefaultTemplate>
      </LayoutContext.Provider>
    </ServiceContext.Provider>
  );
}

export default ExhibitionsPage;
