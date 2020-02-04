import React from "react";

const TextField = props => {
  return (
    <form>
      <input type="text" value={props.value} onChange={props.onChange} />
    </form>
  );
};

export default TextField;
