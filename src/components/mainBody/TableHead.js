import React from "react";
import { getVacationsObjectKeys } from "../../data/vacations";
import { v4 } from "uuid";

export default function TableHead(props) {
  const tableColumns = getVacationsObjectKeys().filter((key) => {
    return !props.excludedColumns.includes(key);
  });
  return (
    <thead>
      <tr>
        {tableColumns.map((column) => {
          return column === "id" ? (
            <th key={v4()}></th>
          ) : (
            <th key={v4()}>{column.toUpperCase()}</th>
          );
        })}
      </tr>
    </thead>
  );
}
