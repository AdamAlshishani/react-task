import React from "react";
import UploadArea from "./UploadArea";
import ForApprovalContainer from "./ForApprovalWidget";
import LatestVacationsContainer from "./LatestVacationsWidget";
import MySubmissionsContainer from "./MySubmissionsWidget";

export default function InformationContainer(props) {
  return (
    <div className="informationContainer">
      <div className="col-1">
        <LatestVacationsContainer
          toggleAllVacations={props.toggleAllVacations}
          dataSource={props.dataSource}
        />
        <UploadArea />
      </div>
      <div className="col2">
        <MySubmissionsContainer
          dataSource={props.dataSource}
          userName={props.userName}
        />
        <ForApprovalContainer
          handleCheckBox={props.handleCheckBox}
          handleChangeVacationStatus={props.handleChangeVacationStatus}
          dataSource={props.dataSource}
          userName={props.userName}
        />
      </div>
    </div>
  );
}
