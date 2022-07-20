import React from "react";
import { useState } from "react";
import "./EmployeeTab.scss";
import leftArrow from "../../images/left-arrow.png"
import rightArrow from "../../images/right-arrow.png"

const EmployeeTab = ({employeeName, employeeRole}) => {

  const [counter, setCounter] = useState(0);

  const handleDecrement = () => {
    if(counter===0) {
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
      <div> <span className="label">Name: </span> {employeeName}</div>
      <div><span className="label">Role: </span> {employeeRole}</div>
      <button onClick={handleDecrement}>-</button>
      <div><span className="label">Tickets: </span> {counter}</div>
      <button onClick={handleIncrement}>+</button>
    </div>
  );
};

export default EmployeeTab; 