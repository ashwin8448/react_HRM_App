import { IEmployee } from "../components/Table/types";
import { ISkill } from "../pages/FormPage/types";

export const filterArray = (
  unfilteredEmployees: IEmployee[],
  filters: { skills?: ISkill[]; search?: string[] }
) => {
  let filteredArray = unfilteredEmployees.filter(
    (employee) =>
      (filters.skills?.every((skill) => {
        console.log(filters.search, "aaaaaaaaaaaaaaaaaa");
        return JSON.stringify(employee.skills).includes(JSON.stringify(skill));
      }) &&
        employee.firstName
          ?.toLowerCase()
          .startsWith(filters.search![0].toLowerCase())) ||
      employee.lastName
        ?.toLowerCase()
        .startsWith(filters.search![0].toLowerCase())
  );
  return filteredArray;
};

export const filterSkills = (allSkills: string[], input: string) => {
  let filteredSkillOptions = allSkills.filter((skill) => {
    return skill.toLowerCase().includes(input.toLowerCase());
  });
  return filteredSkillOptions;
};
