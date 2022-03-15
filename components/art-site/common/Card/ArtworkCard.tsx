import { Artwork } from '../../../../core/art-site/artwork';
import { CardLayoutProps } from './Card';

export interface ArtworkCardProps extends CardLayoutProps {
  dataArtwork: Artwork;
}

function ArtworkCard(props: ArtworkCardProps) {
  return null;
}

export default ArtworkCard;
