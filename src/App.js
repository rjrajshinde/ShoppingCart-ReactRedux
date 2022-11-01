import React from "react";
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";
import "bulma/css/bulma.min.css";
import { useSelector } from "react-redux";
import Cursor from "./components/Cursor";

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    <div className="App">
      <Cursor />
      {!isLoggedIn ? <Auth /> : <Layout />}
    </div>
  );
}

export default App;
