import InputField from "../../components/Input/Input";
import SelectedSkills from "../../components/SelectedSkills/SelectedSkills";
import { formData } from "../../core/config/constants";
import FormWrapper from "./styles";

const NewOrEditEmployee = () => {
  return (
    <FormWrapper className=" employee-details-form">
      <h2>Add New Employee</h2>
      {formData.map((fieldsetObj) => {
        return (
          <fieldset key={fieldsetObj.legend} className="flex">
            <legend>{fieldsetObj.legend}</legend>
            {fieldsetObj.fields.map((field) => {
              return (
                <InputField
                  key={field.description}
                  description={field.description}
                  inputType={field.inputType}
                  isMandatory={field.isMandatory}
                />
              );
            })}
          </fieldset>
        );
      })}
      <div>
      <SelectedSkills description="Selected skill(s)" isView={false}></SelectedSkills>
      </div>
      <div className="buttons-container flex">
        <input className="primary-button" type="reset" />
        <input className="primary-button" type="submit" value="Submit" />
      </div>
      <div className="buttons-container flex">
        <input className="primary-button" type="submit" value="Save" />
      </div>
    </FormWrapper>
  );
};

export default NewOrEditEmployee;
