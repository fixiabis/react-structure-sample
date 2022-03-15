export interface CommonDataService<T> {
  data: T[];
  loadMoreData: () => void;
}
