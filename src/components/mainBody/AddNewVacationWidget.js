import React from "react";
import NewVacationForm from "./NewVacationForm";

export default function AddNewVacationWidget(props) {
  return (
    <div className="addNewVacationWidget">
      <div className="row">
        <h1>Add New Vacation</h1>
      </div>
      <NewVacationForm
        userName={props.userName}
        handleAddNewVacation={props.handleAddNewVacation}
        handleToggleAddNewVacation={props.handleToggleAddNewVacation}
      />
    </div>
  );
}
