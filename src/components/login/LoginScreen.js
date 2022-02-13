import React from "react";
import LoginContainer from "./LoginWidget";

export default function LoginScreen(props) {
  return (
    <div className="loginScreen">
      <LoginContainer handleLogin={props.handleLogin} />
    </div>
  );
}
