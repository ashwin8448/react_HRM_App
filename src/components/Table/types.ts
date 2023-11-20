export interface IEmployee {
  id: number;
  firstName: string;
  lastName: string;
  dob: string;
  address: string;
  phone: string;
  email: string;
  isActive: boolean;
  designation: string;
  salary: string;
  dateOfJoining: string;
  moreDetails: string|null;
  role: string;
  department: string;
  skills: string[];
}

export interface ITableHeader {
  tableHeader: { id: string; headerName: string };
  isSortable?: boolean;
}
