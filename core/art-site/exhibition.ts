export interface Exhibition {}

export interface ExhibitionDataService {
  exhibitions: Exhibition[];
  loadMoreExhibitions: () => void;
}
