export interface Artwork {}

export interface ArtworkFilterService {
  changeFilter: (type: string, value: any) => void;
}

export interface ArtworkDataService {
  artworks: Artwork[];
  loadMoreArtworks: () => void;
}
