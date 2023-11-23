// import { IEmployee } from "../components/Table/types";

// //Function to sort details
// export const sortEmployees = (
//   employees: IEmployee[],
//   sortConfig: { sortColumn: string; sortOrder: string }
// ) => {
//   let sortFlag: number;
//   sortConfig.sortOrder === "asc" ? (sortFlag = 1) : (sortFlag = -1);
//   //Sorting numbers)
//   if (employees.length != 0) {
//     if (sortConfig.sortColumn === "id") {
//       employees.sort((a: IEmployee, b: IEmployee) => {
//         return (a.id! - b.id!) * sortFlag;
//       });
//     }
//     //Sorting Strings
//     else if (sortConfig.sortColumn === "name") {
//       employees.sort((a: IEmployee, b: IEmployee) => {
//         if (
//           `${a.firstName} ${a.lastName}`.toLowerCase() >
//           `${b.firstName} ${b.lastName}`.toLowerCase()
//         ) {
//           return 1 * sortFlag;
//         } else if (
//           `${a.firstName} ${a.lastName}`.toLowerCase() <
//           `${b.firstName} ${b.lastName}`.toLowerCase()
//         ) {
//           return -1 * sortFlag;
//         }
//         return 0;
//       });
//     } else {
//       employees.sort((a, b) => {
//         if (
//           (a as any)[sortConfig.sortColumn].toLowerCase() >
//           (b as any)[sortConfig.sortColumn].toLowerCase()
//         ) {
//           return 1 * sortFlag;
//         } else if (
//           (a as any)[sortConfig.sortColumn].toLowerCase() <
//           (b as any)[sortConfig.sortColumn].toLowerCase()
//         ) {
//           return -1 * sortFlag;
//         }
//         return 0;
//       });
//     }
//   }

//   return employees;
// };
