import ReactDOM from "react-dom";
import React from "react";

import Pet from "./pet";

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Luna",
      animal: "Dog",
      bread: "Habanese",
    }),
    React.createElement(Pet, {
      name: "Pepper",
      animal: "Bord",
      bread: "Cookatiel",
    }),
    React.createElement(Pet, {
      name: "Sudo",
      animal: "Dog",
      bread: "Wheaten Terrier",
    }),
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
