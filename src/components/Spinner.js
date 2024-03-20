import React from 'react';
import Spin from "./Spin.gif";

function Spinner() {
  return (
    <div className="text-center">
        <img src={Spin} alt="loading"/>
    </div>
  );
};

export default Spinner;