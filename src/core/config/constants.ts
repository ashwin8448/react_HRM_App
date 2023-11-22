// export const skills = [
//   "HTML",
//   "CSS",
//   "Vue.js",
//   "Node.js",
//   "JavaScript",
//   "Angular.js",
//   "React",
//   "Adobe XD",
//   "GIT",
//   "Wordpress",
// ];

// export const employees = [
//   {
//     id: 19,
//     firstName: "Ashiban",
//     lastName: "Naiir",
//     isActive: true,
//     dob: "2000-02-22",
//     email: "aswin@example.com",
//     phone: "1234567890",
//     designation: "Engineer",
//     salary: "string",
//     dateOfJoining: "2000-02-22",
//     address: "Kulathoor",
//     moreDetails: null,
//     role: "Developer",
//     department:"Marketing",
//     skills:["HTML", "JavaScript"]
// role: {
//   id: 1,
//   role: "Developer",
// },
// department: {
//   id: 2,
//   department: "Marketing",
// },
// skills: [
//   {
//     id: 4,
//     skill: "HTML",
//   },
//   {
//     id: 5,
//     skill: "JavaScript",
//   },
// ],
// },
// {
//   id: 10000,
//   firstName: "JacobD",
//   lastName: "RoyD",
//   dob: "1111-01-07",
//   address: "ABC4",
//   phone: "0123456784",
//   email: "a4@y.com",
//   doj: "1111-01-08",
//   department: "BDG",
//   role: "Intern",
//   skills: ["React", "Node"],
// },
// {
//   id: 1000,
//   firstName: "JacobA",
//   lastName: "RoyA",
//   dob: "1111-01-01",
//   address: "ABC1",
//   phone: "0123456781",
//   email: "a1@y.com",
//   doj: "1111-01-02",
//   department: "BDG",
//   role: "Engineer",
//   skills: ["HTML", "CSS"],
// },
// {
//   id: 1001,
//   firstName: "JacobB",
//   lastName: "RoyB",
//   dob: "1111-01-03",
//   address: "ABC2",
//   phone: "0123456782",
//   email: "a2@y.com",
//   doj: "1111-01-04",
//   department: "Accounts",
//   role: "Intern",
//   skills: ["CSS"],
// },
// {
//   id: 1002,
//   firstName: "JacobC",
//   lastName: "RoyC",
//   dob: "1111-01-05",
//   address: "ABC3",
//   phone: "0123456783",
//   email: "a3@y.com",
//   doj: "1111-01-06",
//   department: "HR",
//   role: "Intern",
//   skills: ["HTML", "CSS", "React"],
// },
// {
//   id: 1003,
//   firstName: "JacobD",
//   lastName: "RoyD",
//   dob: "1111-01-07",
//   address: "ABC4",
//   phone: "0123456784",
//   email: "a4@y.com",
//   doj: "1111-01-08",
//   department: "BDG",
//   role: "Intern",
//   skills: ["React", "Node"],
// },
// {
//   id: 999,
//   firstName: "JacobD",
//   lastName: "RoyD",
//   dob: "1111-01-07",
//   address: "ABC4",
//   phone: "0123456784",
//   email: "a4@y.com",
//   doj: "1111-01-08",
//   department: "BDG",
//   role: "Intern",
//   skills: ["React", "Node"],
// },
// ];

export const tableHeaders = [
  {
    id: "id",
    headerName: "Employee Number",
  },
  {
    id: "firstName",
    headerName: "First Name",
  },
  {
    id: "lastName",
    headerName: "Last Name",
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

export const formData = [
  {
    legend: "Personal Details",
    fields: [
      {
        description: "First name",
        inputType: "text",
        name: "firstName",
        isMandatory: true,
      },
      {
        description: "Last name",
        inputType: "text",
        name: "lastName",
        isMandatory: true,
      },
      {
        description: "Date of birth",
        inputType: "date",
        name: "dob",
        isMandatory: true,
      },
    ],
  },
  {
    legend: "Contact Details",
    fields: [
      {
        description: "Address",
        inputType: "text",
        name: "address",
        isMandatory: true,
      },
      {
        description: "Phone",
        inputType: "tel",
        name: "phone",
        isMandatory: true,
      },
      {
        description: "Email",
        inputType: "text",
        name: "email",
        isMandatory: true,
      },
    ],
  },
  {
    legend: "Employment Details",
    fields: [
      {
        description: "Date of joining",
        inputType: "date",
        name: "dateOfJoining",
        isMandatory: true,
      },
      {
        description: "Department",
        inputType: "select",
        name: "department",
        isMandatory: true,
      },
      {
        description: "Role",
        inputType: "select",
        name: "role",
        isMandatory: true,
      },
      {
        description: "Skills",
        inputType: "custom",
        name: "skill",
        isMandatory: false,
      },
    ],
  },
];
export const rowsPerPage=5;