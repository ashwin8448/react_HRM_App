const Dropdown = ({
  options,
  inputField,
}: {
  options: string[];
  inputField: string;
}) => {
  return (
    <select autoComplete="off" defaultValue={`Select a ${inputField}`}>
      <option value={`Select a ${inputField}`} disabled>
        Select a {inputField}
      </option>
      {options.map((element) => (
        <option key={element} value={element}>
          {element}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
