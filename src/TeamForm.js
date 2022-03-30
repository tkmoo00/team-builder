import React from "react";

export function TeamMembers(props) {
  const { stats } = props;
  if (!stats) {
    return <h3>Fetching Data...</h3>;
  }

  return (
    <div>
      <h2>{stats.codename}</h2>
      <p>Squad Num: {stats.squadnumber}</p>
      <p>Job: {stats.job}</p>
    </div>
  );
}

export function TeamForm(props) {
  const onChange = (e) => {
    const { name, value } = e.target;
    props.change(name, value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    props.submit();
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label>
          Code Name
          <input
            type="text"
            name="codename"
            value={props.values.codename}
            placeholder="Insert codename."
            maxLength="50"
            onChange={onChange}
          />
        </label>

        <label>
          Squad Number
          <input
            type="number"
            name="squadnumber"
            value={props.values.squadnumber}
            onChange={onChange}
          />
        </label>

        <label>
          Job
          <select value={props.values.job} name="job" onChange={onChange}>
            <option value="Coder">Coder</option>
            <option value="Hacker">Hacker</option>
            <option value="Bard">Bard</option>
            <option value="Hype Man">Hype Man</option>
          </select>
        </label>

        <div>
          <input type="submit" value="Add Member" />
        </div>
      </div>
    </form>
  );
}
