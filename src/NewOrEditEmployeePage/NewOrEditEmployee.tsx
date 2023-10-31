import Dropdown from "../components/Dropdown/Dropdown";

const data: { skills: string[]; departments: string[]; roles: string[] } = {
  skills: ["Git", "CSS", "HTML", "JavaScript", "React"],
  departments: ["BDG", "FEED", "Backend", "Accounts"],
  roles: ["Business Analyst", "Engineer", "Architect", "Intern"],
};

const NewOrEditEmployee = () => {
  return (
    <form>
      <fieldset>
        <legend>Personal Details</legend>
        <label>
          First name:
          <input type="text" />
          <p>Error placeholder</p>
        </label>

        <label>
          Last name:
          <input type="text" />
          <p>Error placeholder</p>
        </label>

        <label>
          Date of birth:
          <input type="date" />
          <p>Error placeholder</p>
        </label>
      </fieldset>
      <fieldset>
        <legend>Contact Details</legend>
        <label>
          Address:
          <input type="text" />
          <p>Error placeholder</p>
        </label>
        <label>
          Phone:
          <input type="tel" maxLength={10} />
          <p>Error placeholder</p>
        </label>
        <label>
          Email:
          <input type="text" />
          <p>Error placeholder</p>
        </label>
      </fieldset>
      <fieldset>
        <legend>Employment Details</legend>
        <label>
          Date of joining:
          <input type="date" name="doj" data-type="date" />
          <p>Error placeholder</p>
        </label>
        <label>
          Department:
          <Dropdown
            inputField="department"
            options={data.departments}
          ></Dropdown>
          <p>Error placeholder</p>
        </label>
        <label>
          Role:
          <Dropdown inputField="role" options={data.roles}></Dropdown>
          <p>Error placeholder</p>
        </label>
        <label>
          Skills:
          <input id="skills" type="text" placeholder="Click to choose skills" />
          <p>Error placeholder</p>
        </label>
        <div>
          <span>Added skills:</span>
          <div></div>
        </div>
      </fieldset>
      <fieldset>
        <input type="reset" />
        <input type="submit" value="Submit" />
      </fieldset>
      <fieldset>
        <input type="submit" value="Save" />
      </fieldset>
    </form>
  );
};

export default NewOrEditEmployee;
