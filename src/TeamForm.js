import React from "react";

// export function TeamMembers(props) {
//   const { stats } = props;
//   if (!stats) {
//     return <h3>Fetching Data...</h3>;
//   }

//   return (
//     <div>
//       <h2>Codename: {stats.codename}</h2>
//       <p>Squad Num: {stats.squadnumber}</p>
//       <p>Job: {stats.job}</p>
//     </div>
//   );
// }

export function TeamForm(props) {
  const { update, submit, errors } = props;
  const { codename, squadnumber, job } = props.values;

  const onChange = (e) => {
    const { name, value } = e.target;
    update(name, value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    submit();
  };
  console.log(props);
  return (
    <div>
      <h1>A form or whatever</h1>
      <p>{errors.codename}</p>
      <p>{errors.squadnumber}</p>
      <p>{errors.job}</p>
      <form onSubmit={onSubmit}>
        <div>
          <label>
            Code Name
            <input
              type="text"
              name="codename"
              value={props.values.codename}
              placeholder="Insert codename."
              onChange={onChange}
            />
          </label>

          <label>
            Squad Number
            <input
              type="text"
              name="squadnumber"
              value={props.values.squadnumber}
              onChange={onChange}
            />
          </label>

          <label>
            Job
            <input
              type="text"
              value={props.values.job}
              name="job"
              onChange={onChange}
            />
          </label>

          <div>
            <input type="submit" value="Add Member" />
          </div>
        </div>
      </form>
    </div>
  );
}
