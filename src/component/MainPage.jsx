import React, { useState } from "react";
import ClassComponent from "./ClassComponent";
import FunctionComponent from "./FunctionComponent";

const MainPage = props => {
  const [defaultValue, setDefaultValue] = useState({
    textValue: "FromMain",
    countValue: 0
  });

  const [rerender, setRerender] = useState(0);

  const handleInit = () => {
    console.log("init");
    setDefaultValue({ textValue: "FromMain", countValue: 0 });
  };

  const handleRender = () => {
    console.log("rerender");
    const value = rerender;
    setRerender(value + 1);
  };

  return (
    <div className="MainWrapper">
      <div>
        <button onClick={handleInit}> 초기화 </button>
        <button onClick={handleRender}> 다시 그려 </button>
      </div>
      <ClassComponent defaultValue={defaultValue} />
      <FunctionComponent defaultValue={defaultValue} />
      <div>
        <span>{rerender}</span>
      </div>
    </div>
  );
};

export default MainPage;
