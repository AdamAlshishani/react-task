import React from "react";
import Table from "./Table";
import ViewMoreButton from "./ViewMoreButton";

export default function LatestVacationsContainer(props) {
  const latestVacationsExcludedColumns = ["attachment", "id"];

  function getLatestVacations() {
    return props.dataSource.slice(0, 3).sort((a, b) => {
      return new Date(b.uploadDate) - new Date(a.uploadDate);
    });
  }

  return (
    <div className="latestVacationsContainer">
      <h1>Latest Vacations - {new Date().toLocaleDateString("en-GB")}</h1>
      <Table
        excludedColumns={latestVacationsExcludedColumns}
        filterTable={getLatestVacations}
      />
      <ViewMoreButton toggleAllVacations={props.toggleAllVacations} />
    </div>
  );
}
