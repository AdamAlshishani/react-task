import React from "react";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import PersonIcon from "@mui/icons-material/Person";
import HouseboatIcon from "@mui/icons-material/Houseboat";

export default function NavigationDropList() {
  return (
    <div className="navigationDropList">
      <li>
        <AdminPanelSettingsIcon /> Admin Panel
      </li>
      <li>
        <ManageAccountsIcon /> Management
      </li>
      <li>
        <PersonIcon /> User Profile
      </li>
      <li>
        <HouseboatIcon /> Vacations
      </li>
    </div>
  );
}
