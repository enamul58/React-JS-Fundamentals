import React from "react";
import Card1 from "./components/Card1";
import Card2 from "./components/Card2";
import { FaFacebook, FaYoutube } from "react-icons/fa";
import ReactBootstrap from "./components/React-Bootstrap/ReactBootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <Card1 name="enamul" subject="Engineering" />
      <Card2 name="jhon" subject="Doctor" />
      <FaFacebook className="icon" />
      <FaYoutube className="icon" />
      <ReactBootstrap />
    </div>
  );
}

export default App;
