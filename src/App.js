import "./App.css";
import React, { useState } from "react";
import { TeamForm } from "./TeamForm";
import Schema from "./schema";
import * as yup from "yup";
import axios from "axios";

const initialValues = {
  codename: "",
  squadnumber: "",
  job: "",
};

const initialErrors = {
  codename: "",
  squadnumber: "",
  job: "",
};

function App() {
  // const [team, setTeam] = useState([]);
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState(initialErrors);
  const [members, setMembers] = useState([]);

  const updateForm = (name, input) => {
    validate(name, input);
    setFormValues({ ...formValues, [name]: input });
  };

  const onSubmit = () => {
    axios
      .post("https://reqres.in/api/users", formValues)
      .then((res) => {
        console.log(res);
        setMembers([res.data, ...members]);
      })
      .catch((err) => console.error(err))
      .finally(setFormValues(initialValues));
  };

  const validate = (name, value) => {
    yup
      .reach(Schema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: "" }))
      .catch((err) => setFormErrors({ ...formErrors, [name]: err.errors[0] }));
  };

  return (
    <div className="App">
      <h1>Team Form Info Thingy</h1>

      <TeamForm
        values={formValues}
        update={updateForm}
        submit={onSubmit}
        errors={formErrors}
      />

      {members.map((member) => {
        return (
          <div key={member.id}>
            <p>{member.codename}</p>
            <p>{member.number}</p>
            <p>{member.job}</p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
