import React from "react";

function RightItem({ index, el, onAddingItemright }) {
  return (
    <>
      <div className="checkbox checkbox-circle checkbox-color-scheme">
        <label className="checkbox-checked">
          <input
            type="checkbox"
            value={el.name}
            checked={el.isChecked}
            onChange={() => onAddingItemright(index)}
          />{" "}
          <span className="label-text">{el.name}</span>
        </label>
      </div>
    </>
  );
}

export default RightItem;
