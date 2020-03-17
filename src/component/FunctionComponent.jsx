import React, { useEffect, useState } from "react";
import TextField from "./TextField";
import CountField from "./CountField";

const FunctionComponent = props => {
  const { defaultValue } = props;
  const [textValue, setTextValue] = useState("");
  const [countValue, setCountValue] = useState(0);

  useEffect(() => {
    // Initialize with props defaultValue
    console.log("default value changed");
    setTextValue(defaultValue.textValue);
    setCountValue(defaultValue.countValue);
  }, [defaultValue]);

  const handleChange = e => {
    setTextValue(e.target.value);
  };

  const handleCountChange = e => {
    setCountValue(e);
  };

  return (
    <div className="ComponentWrapper">
      <span> Function Component </span>
      <div className="FunctionComponent">
        <TextField value={textValue} onChange={handleChange} />
        <CountField defaultValue={countValue} onChange={handleCountChange} />
      </div>
    </div>
  );
};

export default FunctionComponent;
