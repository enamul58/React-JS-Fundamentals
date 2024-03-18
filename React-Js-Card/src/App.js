import React from "react";
import Card from "./components/Card";
import Data from "./data.json";

// let items = [];
// for (let i = 0; i < Data.length; i++) {
//   items.push(<Card toDoTitle={Data[i].title} cardDesc={Data[i].description} />);
// }

function App() {
  return (
    <>
      <h1 className="headingStyle">Todo App</h1>
      {/* using map */}
      {Data.map((item) => (
        <Card toDoTitle={item.title} cardDesc={item.description} />
      ))}
    </>
  );
  //toDoTitle={toDoTitle} cardDesc={cardDesc}
}

export default App;
import React from "react";
import ReactDOM from "react-dom";
