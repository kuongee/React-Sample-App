import React, { useState, useEffect } from "react";

const CountField = props => {
  const { defaultValue, onChange } = props;
  const [countValue, setCountValue] = useState(0);

  useEffect(() => {
    // Initialize with props defaultValue
    setCountValue(defaultValue);
  }, [defaultValue]);

  const handleCount = op => {
    let value = countValue;
    if (op === "minus") {
      value -= 1;
      if (value < 0) {
        value = 0;
      }
    } else if (op === "plus") {
      value++;
    }
    setCountValue(value);
    onChange(value);
  };

  return (
    <div>
      <button onClick={() => handleCount("minus")}> - </button>
      <span> {countValue} </span>
      <button onClick={() => handleCount("plus")}> + </button>
    </div>
  );
};

export default CountField;
