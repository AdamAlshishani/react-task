import { Button } from "@mui/material";
import React from "react";

export default function TableActions(props) {
  return (
    <div className="tableActions">
      <Button
        variant="text"
        onClick={() => {
          props.handleToggleAddNewVacation();
        }}
      >
        Add
      </Button>
      <Button
        variant="text"
        onClick={() => {
          props.handleDeleteVacation();
        }}
      >
        Delete
      </Button>
      <Button
        variant="text"
        onClick={() => {
          props.handleChangeVacationStatus("Approved");
        }}
      >
        Approve
      </Button>
      <Button
        variant="text"
        onClick={() => {
          props.handleChangeVacationStatus("Declined");
        }}
      >
        Decline
      </Button>
    </div>
  );
}
