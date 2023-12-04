import React, { useState } from "react";
import CustomDropdownWrapper from "./styles";
import { ICustomDropdown } from "./types";
import { useEmployeeContext } from "../../core/store/AppContext";
import { CircularProgress } from "@mui/material";
import sortObject from "../../utils/sortObject";

const CustomDropdown = ({
  handleAddToSelectedSkills,
  handleSkillsToDisplay,
  selectedSkills,
  skillsToDisplay,
  children,
  placeholder,
  inputTag,
  dropdownLocation,
}: ICustomDropdown) => {
  const { state } = useEmployeeContext();
  const [showSkills, setShowSkills] = useState(false);
  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setTimeout(() => {
      if (!e.relatedTarget?.closest(".options")) {
        setShowSkills(false);
      } else {
        inputTag.current?.focus();
      }
    }, 0);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleSkillsToDisplay(
      state.skills.filter(
        (skill) =>
          skill.skill.toLowerCase().includes(e.target.value.toLowerCase()) &&
          !selectedSkills.includes(skill)
      )
    );
  };
  return (
    <CustomDropdownWrapper $dropdownLocation={dropdownLocation} className="custom-dropdown">
      <div className="flex">
        <input
          type="text"
          className="searchable-input"
          placeholder={placeholder}
          ref={inputTag}
          onFocus={() => setShowSkills(true)}
          onBlur={handleBlur}
          onChange={handleChange}
        />
        {children}
      </div>
      { showSkills? (
        state.loading.isSkillsLoading ? (
          <ul className="options loader" tabIndex={0}>
            <CircularProgress/>
          </ul>
        ) : skillsToDisplay.length != 0 ? (
          <ul className="options" tabIndex={0}>
            {skillsToDisplay
              .sort(sortObject)
              .map((skill) => (
                <li
                  key={skill.id}
                  className="option flex"
                  onClick={() => {
                    handleAddToSelectedSkills(skill);
                  }}
                >
                  {skill.skill}
                </li>
              ))}
          </ul>
        ) : null
      ) : null}
    </CustomDropdownWrapper>
  );
};

export default CustomDropdown;
