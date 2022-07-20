import React from "react";
import { useState } from "react";
import "./EmployeeTab.scss";
import leftArrow from "../../images/left-arrow.png"
import rightArrow from "../../images/right-arrow.png"

const EmployeeTab = ({employeeName, employeeRole}) => {

  const [counter, setCounter] = useState(0);

  const handleDecrement = () => {
    if(counter==0) {
      return;
    }
    else{
      setCounter(counter-1);
    }
  };

  const handleIncrement = () => {
    setCounter(counter+1);
  };

  return(
    <div className="ticket">
      <div>Name: {employeeName}</div>
      <div>Role: {employeeRole}</div>
      <img
        src={leftArrow}
        onClick={handleDecrement}
        alt=""
      />
      <div>Tickets: {counter}</div>
      <img
        src={rightArrow}
        onClick={handleIncrement}
        alt=""
      />
    </div>
  );
};

export default EmployeeTab; 