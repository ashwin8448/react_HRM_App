import React, { useState } from "react";
import CustomDropdownWrapper from "./styles";
import { skills } from "../../core/config/constants";
import ICustomDropdown from "./types";

const CustomDropdown = ({
  handleAddToSelectedSkills,
  handleSkillsToDisplay,
  selectedSkills,
  skillsToDisplay,
  children,
  placeholder,
  inputTag,
}: ICustomDropdown) => {
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
      skills.filter(
        (skill) =>
          skill.toLowerCase().includes(e.target.value.toLowerCase()) &&
          !selectedSkills.includes(skill)
      )
    );
  };
  return (
    <CustomDropdownWrapper>
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
      {showSkills && skillsToDisplay.length != 0 ? (
        <ul className="options" tabIndex={0}>
          {skillsToDisplay.map((skill) => (
            <li
              key={skill}
              className="option flex"
              onClick={() => {
                handleAddToSelectedSkills(skill);
              }}
            >
              {skill}
            </li>
          ))}
        </ul>
      ) : null}
    </CustomDropdownWrapper>
  );
};

export default CustomDropdown;
