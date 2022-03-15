import React, { useCallback, useState } from 'react';
import LayoutContext from '../../../components/common/LayoutContext';
import ServiceContext, { useServiceContext } from '../../../components/common/ServiceContext';
import ArtworkFilterSection from '../../../components/art-site/artwork/ArtworkFilterSection';
import ArtworkCard from '../../../components/art-site/common/Card/ArtworkCard';
import CommonCardSection from '../../../components/art-site/common/CardSection/CommonCardSection';
import CardSection from '../../../components/art-site/common/CardSection/CardSection';
import DefaultTemplate from '../../../components/art-site/common/DefaultTemplate';
import { Artwork } from '../../../core/art-site/artwork';

const layouts = { CardSection };

const renderArtworkCard = (artwork: Artwork, index: number) => <ArtworkCard key={index} dataArtwork={artwork} />;

function ArtworksPage() {
  const [artworkFilter, setArtworkFilter] = useState({});

  const changeArtworkFilter = useCallback(
    (type: string, value: any) => setArtworkFilter((filter) => ({ ...filter, [type]: value })),
    []
  );

  const artworkFilterService = { filter: artworkFilter, changeFilter: changeArtworkFilter };
  const artworkDataService = { data: [] };
  const services = { ArtworkData: () => artworkDataService, ArtworkFilter: () => artworkFilterService };

  const sections = (
    <React.Fragment>
      <ArtworkFilterSection />
      <CommonCardSection<Artwork> dataServiceName="ArtworkData" renderCard={renderArtworkCard} />
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

export default ArtworksPage;
