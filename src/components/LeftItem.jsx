import React from "react";

function LeftItem({ index, el, onAddingItemleft }) {
  return (
    <>
      <div className="checkbox checkbox-circle checkbox-color-scheme">
        <label className="checkbox-checked">
          <input
            type="checkbox"
            value={el.name}
            checked={el.isChecked}
            onChange={() => onAddingItemleft(index)}
          />{" "}
          <span className="label-text">{el.name}</span>
        </label>
      </div>
    </>
  );
}

export default LeftItem;
