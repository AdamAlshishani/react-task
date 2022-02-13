import React, { useState } from "react";

export default function NewVacationForm(props) {
  const [file, setFile] = useState("");

  return (
    <form
      className="newVacationForm"
      onSubmit={(e) => {
        e.preventDefault();
        props.handleAddNewVacation(e, file);
        props.handleToggleAddNewVacation();
      }}
    >
      {/*  */}
      <label htmlFor="username">Username</label>
      <input
        type="text"
        name="username"
        value={props.userName}
        readOnly={true}
      />
      {/*  */}
      <label htmlFor="select">Vacation type</label>
      <select name="vacationType" id="">
        <option value="Sick">Sick</option>
        <option value="Annual">Annual</option>
        <option value="Time-off">Time-off</option>
        <option value="Leave">Leave</option>
      </select>
      {/*  */}
      <label htmlFor="status">Status</label>
      <input type="text" name="status" value="Pending" readOnly={true} />
      {/*  */}
      <label htmlFor="Upload">Upload File</label>
      <input
        type="file"
        name="file"
        onChange={(e) => {
          setFile(e.target.files[0]);
        }}
      />
      {/*  */}
      <label htmlFor="Date">Upload Date</label>
      <input
        type="date"
        name="date"
        value={new Date().toLocaleDateString("en-CA")}
        readOnly={true}
      />

      <div className="formButtons">
        <button type="submit" className="Button">
          Save
        </button>
        <button
          className="Button"
          onClick={(e) => {
            props.handleToggleAddNewVacation();
          }}
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
