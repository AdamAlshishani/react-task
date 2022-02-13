import React, { useState } from "react";
import InformationContainer from "./InformationWidget";
import NavigationDropList from "../sideBar/NavigationDropList";
import AllVacationsContainer from "./AllVacationsContainer";

export default function MainBody(props) {
  const [showAllVacations, setshowAllVacations] = useState(false);

  function toggleAllVacations() {
    setshowAllVacations(!showAllVacations);
  }

  return (
    <div className="mainBody">
      <NavigationDropList />
      {showAllVacations ? (
        <AllVacationsContainer
          handleAddNewVacation={props.handleAddNewVacation}
          userName={props.userName}
          toggleAllVacations={toggleAllVacations}
          dataSource={props.dataSource}
          handleDeleteVacation={props.handleDeleteVacation}
          handleCheckBox={props.handleCheckBox}
          handleChangeVacationStatus={props.handleChangeVacationStatus}
        />
      ) : (
        <InformationContainer
          handleCheckBox={props.handleCheckBox}
          handleChangeVacationStatus={props.handleChangeVacationStatus}
          toggleAllVacations={toggleAllVacations}
          dataSource={props.dataSource}
          userName={props.userName}
        />
      )}
    </div>
  );
}
