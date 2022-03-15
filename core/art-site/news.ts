import { Exhibition } from './exhibition';

export interface News {}

export type VariousNews = { type: 'news'; data: News } | { type: 'exhibition'; data: Exhibition };

export interface VariousNewsDataService {
  variousNewses: VariousNews[];
  loadMoreVariousNewses: () => void;
}
