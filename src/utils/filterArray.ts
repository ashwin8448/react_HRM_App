//Function to filter employee details
export const filterArray = (wholeArray: any, filterBy: any) => {
  let result;
  let filteredArray = wholeArray.filter((employee: any) => {
    result = 1;
    for (let criteria in filterBy) {
      if (criteria == "search") {
        result *= filterBy[criteria].every((criteriaElement: any) => {
          return `${employee.fname.toLowerCase()} ${employee.lname.toLowerCase()}`.includes(
            criteriaElement.toLowerCase()
          );
        });
      } else {
        result *= filterBy[criteria].every((criteriaElement: any) => {
          if (employee[criteria])
            return employee[criteria].includes(criteriaElement);
        });
      }
      if (!result) {
        return result;
      }
    }
    return result;
  });
  return filteredArray;
};

export const filterSkills = (allSkills: string[], input: string) => {
  let filteredSkillOptions = allSkills.filter((skill) => {
    return skill.toLowerCase().includes(input.toLowerCase());
  });
  return filteredSkillOptions;
};
