export interface IEmployee {
  id: string;
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
  tableHeader?: string;
  isSortable?: boolean;
}
