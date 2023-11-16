import * as Yup from "yup";
const validationSchema = {
  firstName: Yup.string()
    .max(15, "Must be 15 characters or less")
    .matches(/^[a-zA-Z]+[a-zA-Z\s]*?[^0-9]$/, "Only alphabets are allowed")
    .required("Required"),
  lastName: Yup.string()
    .max(15, "Must be 15 characters or less")
    .matches(/^[a-zA-Z]+[a-zA-Z\s]*?[^0-9]$/, "Only alphabets are allowed")
    .required("Required"),
  dob: Yup.string().required("Required"),
  address: Yup.string().required("Required"),
  phone: Yup.string()
    .matches(/^[0-9]+$/, "Only numbers allowed")
    .test("is-ten-digits", "Must be exactly 10 characters", (value) => {
      return value!.length === 10;
    })
    .required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  doj: Yup.string().required("Required"),
  department: Yup.string().required("Required"),
  role: Yup.string().required("Required"),
};

export default validationSchema;
