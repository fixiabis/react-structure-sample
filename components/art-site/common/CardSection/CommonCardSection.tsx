import { CommonDataService } from '../../../../core/art-site/common';
import { useLayoutContext } from '../../../common/LayoutContext';
import { useServiceContext } from '../../../common/ServiceContext';
import { CardSectionLayoutProps, CardSectionProps } from './CardSection';

export interface CommonCardSectionProps<T> extends CardSectionLayoutProps {
  dataServiceName: string;
  renderCard: (data: T, index: number) => React.ReactNode;
}

function CommonCardSection<T>(props: CommonCardSectionProps<T>) {
  const { dataServiceName, renderCard, ...layoutProps } = props;
  const CardSection = useLayoutContext<CardSectionProps>('CardSection');
  const { data, loadMoreData } = useServiceContext<CommonDataService<T>>(dataServiceName);
  const renderCards = () => data.map(renderCard);
  return <CardSection {...layoutProps} renderCards={renderCards} onLoad={loadMoreData} />;
}

export default CommonCardSection;
