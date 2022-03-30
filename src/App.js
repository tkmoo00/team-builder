import "./App.css";
import React, { useState, useEffect } from "react";
import { TeamForm, TeamMembers } from "./TeamForm";
import axios from "axios";

const initialValues = {
  codename: "",
  number: 0,
  job: "",
};

function App() {
  const [team, setTeam] = useState([]);
  const [formValues, setFormValues] = useState(initialValues);
  const [formError, setFormError] = useState("");

  const onSubmit = () => {
    setTeam({ formValues, ...team });
  };

  const updateForm = (inputName, inputVal) => {
    setFormValues({ ...formValues, [inputName]: inputVal });
  };

  // const submitForm = () => {
  //   const newMember = {
  //     codename: formValues.codename,
  //     number: formValues.number,
  //     job: formValues.job,
  //   };

  // if (!newMember.codename || !newMember.number || !newMember.job) {
  //   setFormError("one or all of the data is missing!");
  //   return;
  // }

  return (
    <div className="App">
      <h1>Team Form Info Thingy</h1>
      {formError && <p className="error">{formError}</p>}
      <TeamForm values={formValues} update={updateForm} submit={onSubmit} />

      {team.map((t, idx) => {
        return (
          <div key={idx}>
            {t.name}, {t.number}, {t.job}
          </div>
        );
      })}
    </div>
  );
}

export default App;
