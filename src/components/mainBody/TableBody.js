import React from "react";
import { getVacationsObjectKeys } from "../../data/vacations";
import RowCheckbox from "./RowCheckbox";
import StatusTableRow from "./StatusTableRow";

export default function TableBody(props) {
  const tableColumns = getVacationsObjectKeys().filter((key) => {
    return !props.excludedColumns.includes(key);
  });

  function showCheckBoxForCurrentUser(vacation, column) {
    if (props.userName) {
      return props.userName == vacation.uploaderName ? (
        <RowCheckbox
          name={vacation[column]}
          handleCheckBox={props.handleCheckBox}
        />
      ) : (
        <></>
      );
    }
    return <></>;
  }

  function createTableRow(vacation, column) {
    switch (column) {
      case "status":
        return <StatusTableRow vacation={vacation} column={column} />;
      case "id":
        return showCheckBoxForCurrentUser(vacation, column);
      case "attachment":
        return (
          <a href={vacation[column]} download>
            Download
          </a>
        );
      case "uploadDate":
        let date = new Date(vacation[column]).toLocaleDateString("en-GB");
        return date;
      default:
        return vacation[column];
    }
  }

  return (
    <tbody>
      {props.filterTable().map((vacation, index) => {
        return (
          <tr key={vacation.id}>
            {tableColumns.map((column) => {
              return (
                <td key={vacation.id + vacation[column]}>
                  {createTableRow(vacation, column)}
                </td>
              );
            })}
          </tr>
        );
      })}
    </tbody>
  );
}
