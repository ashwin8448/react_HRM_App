import { IRowProps } from "../../core/interface/interface";

export const skills = [
  "HTML",
  "CSS",
  "Vue.js",
  "Node.js",
  "JavaScript",
  "Angular.js",
  "React",
  "Adobe XD",
  "GIT",
  "Wordpress",
];

export const department = [
  "BDG",
  "Accounts",
  "Human Resource",
  "Sales",
  "Software Development",
  "Research and Development",
];
export const roles = [
  "Intern",
  "Software Engineer",
  "Lead Engineer",
  "Business Analyst",
  "Architect",
];

export const employees = [
  {
    id: "1000",
    fname: "JacobA",
    lname: "RoyA",
    dob: "1111-01-01",
    address: "ABC1",
    phone: "0123456781",
    email: "a1@y.com",
    doj: "1111-01-02",
    department: "BDG",
    role: "Intern",
    skills: ["HTML", "CSS"],
  },
  {
    id: "1001",
    fname: "JacobB",
    lname: "RoyB",
    dob: "1111-01-03",
    address: "ABC2",
    phone: "0123456782",
    email: "a2@y.com",
    doj: "1111-01-04",
    department: "Accounts",
    role: "Intern",
    skills: ["CSS"],
  },
  {
    id: "1002",
    fname: "JacobC",
    lname: "RoyC",
    dob: "1111-01-05",
    address: "ABC3",
    phone: "0123456783",
    email: "a3@y.com",
    doj: "1111-01-06",
    department: "HR",
    role: "Intern",
    skills: ["HTML", "CSS", "React"],
  },
  {
    id: "1003",
    fname: "JacobD",
    lname: "RoyD",
    dob: "1111-01-07",
    address: "ABC4",
    phone: "0123456784",
    email: "a4@y.com",
    doj: "1111-01-08",
    department: "BDG",
    role: "Intern",
    skills: ["React", "Node"],
  },
];

export const tableHeaders = [
  {
    id: "id",
    headerName: "Employee Number",
  },
  {
    id: "name",
    headerName: "Name",
  },
  {
    id: "department",
    headerName: "Department",
  },
  {
    id: "role",
    headerName: "Role",
  },
];


export const dropdownData: { skills: string[]; departments: string[]; roles: string[] } = {
  skills: ["Git", "CSS", "HTML", "JavaScript", "React"],
  departments: ["BDG", "FEED", "Backend", "Accounts"],
  roles: ["Business Analyst", "Engineer", "Architect", "Intern"],
};

export const formData = [
  {
    legend: "Personal Details",
    fields: [
      { description: "First name", inputType: "text", isMandatory: true },
      { description: "Last name", inputType: "text", isMandatory: true },
      { description: "Date of birth", inputType: "date", isMandatory: true },
    ],
  },
  {
    legend: "Contact Details",
    fields: [
      { description: "Address", inputType: "text", isMandatory: true },
      { description: "Phone", inputType: "tel", isMandatory: true },
      { description: "Email", inputType: "text", isMandatory: true },
    ],
  },
  {
    legend: "Employment Details",
    fields: [
      {
        description: "Date of joining",
        inputType: "date",
        isMandatory: true,
      },
      {
        description: "Department",
        inputType: "custom:department",
        isMandatory: true,
      },
      {
        description: "Role",
        inputType: "custom:role",
        isMandatory: true,
      },
      {
        description: "Skills",
        inputType: "custom:skill",
        isMandatory: false,
      },
    ],
  },
];