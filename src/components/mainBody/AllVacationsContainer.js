import { Button } from "@mui/material";
import React, { useState } from "react";
import Table from "./Table";
import TableActions from "./TableActions";
import AddNewVacationWidget from "./AddNewVacationWidget";

export default function AllVacationsContainer(props) {
  const [isAddNewVacation, setIsAddNewVacation] = useState(false);

  function sortVacationsByDate() {
    return props.dataSource.sort((a, b) => {
      return new Date(b.uploadDate) - new Date(a.uploadDate);
    });
  }

  function handleToggleAddNewVacation() {
    setIsAddNewVacation(!isAddNewVacation);
  }

  return isAddNewVacation ? (
    <AddNewVacationWidget
      handleAddNewVacation={props.handleAddNewVacation}
      userName={props.userName}
      handleToggleAddNewVacation={handleToggleAddNewVacation}
    />
  ) : (
    <div className="allVacationsContainer">
      <div className="row">
        <h1>All Vacations</h1>
        <TableActions
          handleDeleteVacation={props.handleDeleteVacation}
          handleChangeVacationStatus={props.handleChangeVacationStatus}
          handleToggleAddNewVacation={handleToggleAddNewVacation}
        />
      </div>

      <Table
        filterTable={sortVacationsByDate}
        excludedColumns={[]}
        handleCheckBox={props.handleCheckBox}
        userName={props.userName}
      />
      <Button
        variant="text"
        onClick={(e) => {
          props.toggleAllVacations();
        }}
      >
        {"<<"}back
      </Button>
    </div>
  );
}
