export interface IEmployeeContextProps {
  sortConfig: { sortColumn: string; sortOrder: string };
  updateSortConfig: (sortColumn: string) => void;
  filters: { skills?: string[]; search?: string[] };
  updateFilters: ({ skills, search }: { skills?: string[]; search?: string[]}) => void;
}

