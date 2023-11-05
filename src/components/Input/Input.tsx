import { dropdownData } from "../../core/config/constants";
import Dropdown from "../Dropdown/Dropdown";

const InputField = ({
  description,
  isMandatory,
  inputType,
}: {
  description: string;
  isMandatory: boolean;
  inputType: string;
}) => {
  return (
    <label className="flex flex-column">
      <div>
        {isMandatory && <span className="asterisk">*</span>}
        <span> {description}:</span>
      </div>
      {inputType?.split(":")[0] == "custom" ? (
        <Dropdown
          inputField={inputType?.split(":")[1]}
          options={
            dropdownData[
              (inputType.split(":")[1] + "s") as keyof typeof dropdownData
            ]
          }
        ></Dropdown>
      ) : (
        <input type={inputType} />
      )}
      <p className="error-placeholder">Error placeholder</p>
    </label>
  );
};

export default InputField;
