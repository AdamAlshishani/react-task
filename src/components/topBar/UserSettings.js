import React from "react";
import PersonIcon from "@mui/icons-material/Person";

export default function UserSettings(props) {
  return (
    <div className="userSettings">
      <li>
        <PersonIcon />
        {props.userName}
      </li>
      <li
        onClick={() => {
          props.handleSignOut();
        }}
      >
        Signout
      </li>
    </div>
  );
}
