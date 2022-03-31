import * as yup from "yup";

const Schema = yup.object().shape({
  codename: yup
    .string()
    .trim()
    .required("You must have a codename")
    .min(0, "Name cant be blank"),
  squadnumber: yup
    .string()
    .trim()
    .required("You must have a squadnumber")
    .min(0, "Number cant be blank"),
  job: yup.string().trim().required("You must have a job"),
});

export default Schema;
