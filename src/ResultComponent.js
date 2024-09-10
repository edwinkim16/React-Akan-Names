// src/ResultComponent.js
import React from "react";

const ResultComponent = ({ akanName }) => {
  return (
    <div>
      {akanName ? <h3>Your Akan name is: {akanName}</h3> : null}
    </div>
  );
};

export default ResultComponent;
