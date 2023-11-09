export interface IEmployeeRow {
  id: string;
  employeeName: string;
  department: string;
  role: string;
}

export interface ITableHeader{
  tableHeader?: string;
  isSortable?: boolean;
}