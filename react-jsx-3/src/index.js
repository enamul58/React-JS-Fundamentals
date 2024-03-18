import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const name = "enamul";
const img_1 = "https://picsum.photos/200/300";
const img_2 = "https://picsum.photos/250/300";
const img_3 = "https://picsum.photos/300/300";

ReactDOM.render(
  <>
    <h1 className="heading">My Name is {name}</h1>
    <div className="div_img">
      <img src={img_1} alt="random_image" />
      <img src={img_2} alt="random_image" />
      <img src={img_3} alt="random_image" />
    </div>
  </>,
  document.getElementById("root")
);
