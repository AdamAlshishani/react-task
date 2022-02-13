import React from "react";

export default function StatusTableRow(props) {
  function circleColor(status) {
    switch (status) {
      case "Pending":
        return "yellow circle";
      case "Approved":
        return "green circle";
      default:
        return "red circle";
    }
  }
  return (
    <div className="statusRow">
      <div className={circleColor(props.vacation[props.column])}></div>
      {props.vacation[props.column]}
    </div>
  );
}
