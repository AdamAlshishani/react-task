import React from "react";
import LoginForm from "./LoginForm";

export default function LoginContainer(props) {
  return (
    <div className="loginContainer">
      <h1>Sign in</h1>
      <LoginForm handleLogin={props.handleLogin} />
    </div>
  );
}
