import { useField } from "formik";

export const MyTextInput = ({ label, ...props }: any) => {
  const [field, meta] = useField(props);

  return (
    <div className="flex flex-column input-field">
      <label htmlFor={props.id || props.name}>
        {props.isRequired && <span className="required">*</span>} {label}
      </label>
      <input id={props.name} className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : <div className="error-placeholder">Error placeholder</div>}
    </div>
  );
};

export const MySelect = ({ label, ...props }: any) => {
  const [field, meta] = useField(props);
  return (
    <div className="flex flex-column input-field">
      <label htmlFor={props.id || props.name}>
        {props.isRequired && <span className="required">*</span>} {label}
      </label>
      <select id={props.name} {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
};
