import { SortTypes } from './models/sort-types.enum';

export interface FiltersProps {
  sortType: SortTypes;
  setSortType?: (sortType: SortTypes) => void;
}
