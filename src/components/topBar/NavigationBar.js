import React from "react";
import UserActions from "./UserActions";
import UserSettings from "./UserSettings";
import AssignmentIcon from "@mui/icons-material/Assignment";
import MenuIcon from "@mui/icons-material/Menu";

export default function NavigationBar(props) {
    return (
        <div className="navigationBar">
            <p>
                <MenuIcon />
                Test Assignment
            </p>
            <UserActions />
            <UserSettings
                userName={props.userName}
                handleSignOut={props.handleSignOut}
            />
        </div>
    );
}
