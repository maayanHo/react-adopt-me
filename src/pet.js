import React from "react";

const Pet = (proops) => {
  return React.createElement("div", {}, [
    React.createElement("h2", {}, proops.name),
    React.createElement("h3", {}, proops.animal),
    React.createElement("h3", {}, proops.bread),
  ]);
};

export default Pet;
