import React from "react";

function MyCustomSelect({ options, defaultValue, onChange }) {
  return (
    <div style={{paddingRight:"5%"}}>
      <select value={defaultValue} onChange={onChange} class="form-select">
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
    </div>
  );
}
export default MyCustomSelect;
