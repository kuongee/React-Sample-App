import React, { useEffect, useState } from "react";
import TextField from "./TextField";

const FunctionComponent = props => {
  const { defaultValue } = props;
  const [textValue, setTextValue] = useState("");

  useEffect(() => {
    // Initialize with props defaultValue
    setTextValue(defaultValue);
  }, [defaultValue]);

  const handleChange = e => {
    setTextValue(e.target.value);
  };

  return (
    <div className="ComponentWrapper">
      <span> Function Component </span>
      <div className="FunctionComponent">
        <TextField value={textValue} onChange={handleChange} />
      </div>
    </div>
  );
};

export default FunctionComponent;
