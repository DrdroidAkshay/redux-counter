import React from "react";
import Counter from "./components/Counter";
import Header from "./components/Header";
import Auth from "./components/Auth";
import UserProfile from "./components/UserProfile";
import { useSelector } from "react-redux";

function App() {
  const loginstatus = useSelector((state) => state.auth.isAuthenticated);
  return (
    <React.Fragment>
      <Header />
      {!loginstatus && <Auth />}
      {loginstatus && <UserProfile />}
      <Counter />
    </React.Fragment>
  );
}
export default App;
