import React, { useState } from "react";

function FormTwo() {
  const [firstName, setFristName] = useState();
  const [lastName, setSecondName] = useState();
  const [show, setShow] = useState();

  const setFormvalue = (event) => {
    if (event.target.name === "firstName") {
      setFristName(event.target.value);
    } else if (event.target.name === "lastName") {
      setSecondName(event.target.value);
    }
  };

  const showName = (e) => {
    e.preventDefault();
    setShow(firstName + " " + lastName);
  };

  return (
    <>
      <h1>{show}</h1>
      <form action="" onSubmit={showName}>
        <input
          type="text"
          name="firstName"
          onChange={setFormvalue}
          value={firstName}
        />
        <br />
        <input
          type="text"
          name="lastName"
          onChange={setFormvalue}
          value={lastName}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default FormTwo;
