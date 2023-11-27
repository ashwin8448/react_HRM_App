import { IEmployee } from "../components/Table/types";
import { ISkill } from "../pages/FormPage/types";

//Function to filter employee details
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
  console.log(filteredArray);
  // let result;
  // let filteredArray = wholeArray.filter((employee: any) => {
  //   result = 1;
  //   for (let criteria in filterBy) {
  //     if (criteria == "search") {
  //       result *= filterBy[criteria].every((criteriaElement: any) => {
  //         return `${employee.firstName.toLowerCase()} ${employee.lastName.toLowerCase()}`.includes(
  //           criteriaElement.toLowerCase()
  //         );
  //       });
  //     } else {
  //       if (typeof employee[criteria] === "number") {
  //         result *= filterBy[criteria][0] === employee[criteria] ? 1 : 0;
  //       } else {
  //         result *= filterBy[criteria].every((criteriaElement: any) => {
  //           if (employee[criteria])
  //             return employee[criteria].includes(criteriaElement);
  //         });
  //       }
  //     }
  //     if (!result) {
  //       return result;
  //     }
  //   }
  //   return result;
  // });
  return filteredArray;
};

export const filterSkills = (allSkills: string[], input: string) => {
  let filteredSkillOptions = allSkills.filter((skill) => {
    return skill.toLowerCase().includes(input.toLowerCase());
  });
  return filteredSkillOptions;
};
