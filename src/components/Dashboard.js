import React, { useState } from "react";
import MainBody from "./mainBody/MainBody";
import NavigationBar from "./topBar/NavigationBar";
import VACATIONS from "../data/vacations";
import { v4 } from "uuid";

export default function Dashboard(props) {
  const [newVacation, setNewVacation] = useState({});
  const [vacationsData, setVacationsData] = useState(VACATIONS);
  const [checkedBoxList, setCheckedBoxList] = useState([]);

  function handleAddNewVacation(event, file) {
    var username = event.target.username.value;
    var vacationType = event.target.vacationType.value;
    var status = event.target.status.value;
    var date = event.target.date.value;
    console.log(file);

    console.log(file);
    var vacationObject = {
      id: v4(),
      name: vacationType,
      uploaderName: username,
      status: status,
      uploadDate: new Date(date),
      attachment: file.name,
    };
    setNewVacation(vacationObject);
    var newVacationList = [...vacationsData, vacationObject];
    setVacationsData(newVacationList);
  }

  function handleDeleteVacation() {
    var newList = [...vacationsData];
    checkedBoxList.forEach((boxId) => {
      newList = newList.filter((vacation) => {
        return vacation.id != boxId;
      });
    });
    setVacationsData(newList);
    setCheckedBoxList([]);
  }

  function handleChangeVacationStatus(status) {
    var newList = [...vacationsData];
    checkedBoxList.forEach((boxId) => {
      var list = newList.map((item) => {
        if (item.id == boxId) {
          const updatedItem = {
            ...item,
            status: status,
          };
          return updatedItem;
        }
        return item;
      });
      newList = list;
    });
    setVacationsData(newList);
    setCheckedBoxList([]);
  }

  function handleCheckBox(event) {
    var updatedList = [...checkedBoxList];
    if (event.target.checked) {
      updatedList = [...checkedBoxList, event.target.name];
    } else {
      updatedList.splice(checkedBoxList.indexOf(event.target.name), 1);
    }
    setCheckedBoxList(updatedList);
  }

  return (
    <div className="dashboard">
      <NavigationBar
        userName={props.userName}
        handleSignOut={props.handleSignOut}
      />
      <MainBody
        handleAddNewVacation={handleAddNewVacation}
        dataSource={vacationsData}
        handleDeleteVacation={handleDeleteVacation}
        handleCheckBox={handleCheckBox}
        userName={props.userName}
        handleChangeVacationStatus={handleChangeVacationStatus}
      />
    </div>
  );
}
