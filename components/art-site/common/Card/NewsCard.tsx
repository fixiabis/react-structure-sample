import { News } from '../../../../core/art-site/news';
import { CardLayoutProps } from './Card';

export interface NewsCardProps extends CardLayoutProps {
  dataNews: News;
}

function NewsCard(props: NewsCardProps) {
  return null;
}

export default NewsCard;
