import React, { useState } from "react";

function FullName() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const fullName = `${firstName} ${lastName}`;
    setFullName(fullName);
    console.log(fullName);
  };

  return (
    <div>
      <h2>Full Name Display</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            First Name:
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Last Name:
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
      {fullName && (
        <p>
          Full Name: {firstName} {lastName}
        </p>
      )}
    </div>
  );
}

export default FullName;
