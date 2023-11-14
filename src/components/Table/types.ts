export interface IEmployee {
  id: number;
  firstName: string;
  lastName: string;
  dob: string;
  address: string;
  phone: string;
  email: string;
  doj: string;
  department: string;
  role: string;
  skills: string[];
}

export interface ITableHeader {
  tableHeader: { id: string; headerName: string };
  isSortable?: boolean;
}
