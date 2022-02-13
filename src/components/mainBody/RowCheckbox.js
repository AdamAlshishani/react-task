import React, { useState } from "react";

export default function RowCheckbox(props) {
  const [checked, setChecked] = useState(false);

  return (
    <input
      type="checkbox"
      value={props.name}
      name={props.name}
      checked={checked}
      onChange={(e) => {
        setChecked(!checked);
        props.handleCheckBox(e);
      }}
    />
  );
}
