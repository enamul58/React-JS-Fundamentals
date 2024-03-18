import React, { useState } from "react";

function App() {
  let [name, setName] = useState();
  let [fullName, getFullName] = useState();
  let [fristName, setFristName] = useState();
  let [assignFirstName, assignSetFristName] = useState();
  let [lastName, setLastName] = useState();
  let [assignLastName, assignSetLastName] = useState();

  const reflectInputValue = (even) => {
    setName(even.target.value);
  };

  const onSubmit = (event_object) => {
    //event_object.preventDefault();
    getFullName(name);
  };

  const rerflectFirstName = (event_object) => {
    setFristName(event_object.target.value);
  };

  const reflectLastName = (event_object) => {
    setLastName(event_object.target.value);
  };

  const onSubmitTwo = (event_object) => {
    event_object.preventDefault();
    assignSetFristName(fristName);
    assignSetLastName(lastName);
  };

  return (
    <>
      <div className="login_form">
        <div className="singelTextFiled">
          <h1>Hello{fullName}</h1>
          <input
            type="text"
            placeholder="Enter Your Name"
            onChange={reflectInputValue}
          />
          <button onClick={onSubmit}>Click Me</button>
        </div>
        <form onSubmit={onSubmitTwo} action="" className="design_form">
          <h1>
            Hello&#160;
            <span style={{ color: "#111" }}>
              {assignFirstName}
              {assignLastName}
            </span>
          </h1>
          <label>Frist Name</label>
          <input
            type="text"
            placeholder="Enter Your Frist Name"
            onChange={rerflectFirstName}
          />
          <label>Last Name</label>
          <input
            type="text"
            placeholder="Enter Your Last Name"
            onChange={reflectLastName}
          />
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
