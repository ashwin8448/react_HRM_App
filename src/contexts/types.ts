export interface IEmployeeContextProps {
  sortConfig: {sortColumn:string, sortOrder:string};
  updateSortConfig: (sortColumn: string) => void;
  filters: string[];
  updateFilters: ([]: string[]) => void;
}
