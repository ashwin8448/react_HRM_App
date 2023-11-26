export const tableHeaders = [
  {
    id: "id",
    headerName: "Employee Number",
    isSortable: true,
  },
  {
    id: "firstName",
    headerName: "First Name",
    isSortable: true,
  },
  {
    id: "lastName",
    headerName: "Last Name",
    isSortable: true,
  },
  {
    id: "department",
    headerName: "Department",
    isSortable: false,
  },
  {
    id: "role",
    headerName: "Role",
    isSortable: false,
  },
  { id: "actions", headerName: "Actions", isSortable: false },
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
export const rowsPerPage = 5;
