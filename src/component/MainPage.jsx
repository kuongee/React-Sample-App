import React, { useState } from "react";
import ClassComponent from "./ClassComponent";
import FunctionComponent from "./FunctionComponent";

const MainPage = props => {
  const [defaultValue, setDefaultValue] = useState("This is default.");
  const [countValue, setCountValue] = useState(0);

  const handleInit = () => {
    console.log("init");
    setDefaultValue("");
  };

  const handleCount = op => {
    let value = countValue;
    if (op === "minus") {
      value -= 1;
      if (value >= 0) {
        setCountValue(value);
      }
    } else if (op === "plus") {
      setCountValue(++value);
    }
  };

  return (
    <div className="MainWrapper">
      <div>
        <button onClick={handleInit}> 초기화 </button>
        <div>
          <button onClick={() => handleCount("minus")}> - </button>
          <span> {countValue} </span>
          <button onClick={() => handleCount("plus")}> + </button>
        </div>
      </div>
      <ClassComponent defaultValue={defaultValue} />
      <FunctionComponent defaultValue={defaultValue} />
    </div>
  );
};

export default MainPage;
