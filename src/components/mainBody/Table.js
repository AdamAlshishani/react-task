import React from "react";
import TableBody from "./TableBody";
import TableHead from "./TableHead";

export default function Table(props) {
  return (
    <div>
      <table className="table">
        <TableHead excludedColumns={props.excludedColumns} />
        <TableBody
          userName={props.userName}
          excludedColumns={props.excludedColumns}
          filterTable={props.filterTable}
          handleCheckBox={props.handleCheckBox}
        />
      </table>
    </div>
  );
}
