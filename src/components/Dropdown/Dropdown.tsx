import IDropdown from "./types";

const Dropdown = ({ options, description, name }: IDropdown) => {
  return (
    <select
      autoComplete="off"
      defaultValue={`Select a ${description?.toLowerCase()}`}
      name={name}
    >
      <option value={`Select a ${description?.toLowerCase()}`} disabled>
        Select a {description?.toLowerCase()}
      </option>
      {options?.map((element) => (
        <option key={element} value={element}>
          {element}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
