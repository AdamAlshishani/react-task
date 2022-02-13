import React, { useEffect, useState } from "react";
import Dashboard from "./components/Dashboard";
import VACATIONS from "./data/vacations";
import LoginScreen from "./components/login/LoginScreen";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userName, setuserName] = useState("Adam");

  useEffect(() => {
    localStorage.setItem("VACATIONS", JSON.stringify(VACATIONS));
  }, []);

  function handleLogin(userName) {
    setLoggedIn(true);
    setuserName(userName);
    localStorage.setItem("currentUser", JSON.stringify(userName));
  }

  function handleSignOut() {
    setLoggedIn(false);
  }

  // return <Dashboard userName={userName} />;
  return loggedIn ? (
    <Dashboard userName={userName} handleSignOut={handleSignOut} />
  ) : (
    <LoginScreen handleLogin={handleLogin} />
  );
}

export default App;
