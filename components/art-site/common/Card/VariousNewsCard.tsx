import { VariousNews } from '../../../../core/art-site/news';
import { CardLayoutProps } from './Card';
import ExhibitionCard from './ExhibitionCard';
import NewsCard from './NewsCard';

export interface VariousNewsCardProps extends CardLayoutProps {
  dataVariousNews: VariousNews;
}

function VariousNewsCard(props: VariousNewsCardProps) {
  const { dataVariousNews, ...layoutProps } = props;

  if (dataVariousNews.type === 'exhibition') {
    return <ExhibitionCard {...layoutProps} dataExhibition={dataVariousNews.data} />;
  }

  return <NewsCard {...layoutProps} dataNews={dataVariousNews.data} />;
}

export default VariousNewsCard;
