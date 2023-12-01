import { IEmployee } from "../components/Table/types";
import { ISkill } from "../pages/FormPage/types";

export const filterArray = (
  unfilteredEmployees: IEmployee[],
  filters: { skills?: ISkill[]; search?: string[] }
) => {
  let filteredArray = unfilteredEmployees.filter((employee) => {
    return (
      filters.skills?.every((skill) =>
        JSON.stringify(employee.skills).includes(JSON.stringify(skill))
      ) &&
      (employee.firstName
        ?.toLowerCase()
        .startsWith(filters.search![0].toLowerCase()) ||
        employee.lastName
          ?.toLowerCase()
          .startsWith(filters.search![0].toLowerCase()))
    );
  });
  return filteredArray;
};


