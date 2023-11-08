import { FocusEvent, MouseEvent, useState } from "react";
import CustomDropdownWrapper from "./styles";

const CustomDropdown = ({
  handleSelectedSkills,
}: {
  handleSelectedSkills: (currentSkill: string) => void;
}) => {
  const [showSkills, setShowSkills] = useState(false);
  return (
    <CustomDropdownWrapper
      className="flex searchable-input"
      tabIndex={1}
      onFocus={(e) => {
        console.log("Focus", e.target.tagName);
        setShowSkills(true);
      }}
      onBlur={(e) => {
        console.log("Blur", e.target.tagName);
        setShowSkills(false);
      }}
    >
      <input type="text" />
      {showSkills && (
        <ul className="options">
          <li
            className="option flex"
            onClick={() => handleSelectedSkills("HTML")}
          >
            HTML
          </li>
          <li
            className="option flex"
            onClick={() => handleSelectedSkills("CSS")}
          >
            CSS
          </li>
          <li
            className="option flex"
            onClick={() => handleSelectedSkills("React")}
          >
            React
          </li>
          <li
            className="option flex"
            onClick={() => handleSelectedSkills("Js")}
          >
            Js
          </li>
        </ul>
      )}
    </CustomDropdownWrapper>
  );
};

export default CustomDropdown;
