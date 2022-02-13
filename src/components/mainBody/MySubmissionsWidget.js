import React from "react";
import Table from "./Table";
import ViewMoreButton from "./ViewMoreButton";

export default function MySubmissionsContainer(props) {
  const mySubmissionsExcludedColumns = [
    "id",
    "uploadDate",
    "attachment",
    "uploaderName",
  ];

  function getCurrentUserVacations() {
    return props.dataSource.filter(
      (vacation) => vacation.uploaderName == props.userName
    );
  }

  return (
    <div className="mySubmissionsContainer">
      <h1>My Submission</h1>
      <Table
        excludedColumns={mySubmissionsExcludedColumns}
        filterTable={getCurrentUserVacations}
      />
      <ViewMoreButton />
    </div>
  );
}
