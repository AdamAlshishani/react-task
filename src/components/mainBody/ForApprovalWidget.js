import React from "react";
import Table from "./Table";
import { Button } from "@mui/material";

export default function ForApprovalContainer(props) {
  const forApprovalExcludedColumns = ["uploadDate", "uploaderName", "status"];

  function buttonStyles(color, left) {
    return {
      backgroundColor: color,
      fontSize: "10px",
      width: "50%",
      borderTopLeftRadius: "0",
      borderTopRightRadius: "0",
      borderBottomLeftRadius: left ? "0.5rem" : "0",
      borderBottomRightRadius: left ? "0" : "0.5rem",
    };
  }

  function getCurrentUSerPendingVacations() {
    return props.dataSource.filter(
      (vacation) =>
        vacation.uploaderName === props.userName &&
        vacation.status === "Pending"
    );
  }
  return (
    <div className="forApprovalContainer">
      <h1>For Approval</h1>
      <Table
        handleCheckBox={props.handleCheckBox}
        excludedColumns={forApprovalExcludedColumns}
        filterTable={getCurrentUSerPendingVacations}
        userName={props.userName}
      />

      <Button
        variant="contained"
        style={buttonStyles("green", true)}
        onClick={(e) => {
          props.handleChangeVacationStatus("Approved");
        }}
      >
        Approve
      </Button>
      <Button
        variant="contained"
        style={buttonStyles("red")}
        onClick={(e) => {
          props.handleChangeVacationStatus("Declined");
        }}
      >
        Decline
      </Button>
    </div>
  );
}
