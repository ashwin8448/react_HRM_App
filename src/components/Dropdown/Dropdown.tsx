const Dropdown = ({
  options,
  inputField,
}: {
  options: string[];
  inputField: string;
}) => {
  return (
    <select autoComplete="off">
      <option value={`Select a ${inputField}`} selected disabled>
        Select a {inputField}
      </option>
      {options.map((element) => (
        <option value={element}>{element}</option>
      ))}
    </select>
  );
};

export default Dropdown;
