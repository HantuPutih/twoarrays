import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import LeftItem from "../components/LeftItem";
import RightItem from "../components/RightItem";
import {
  moveLeft,
  moveRight,
  leftCheckbox,
  rightCheckbox,
  addLeftItem,
  addRightItem,
} from "../store/actions";

function Home() {
  const dispatch = useDispatch();
  const leftArr = useSelector((state) => state.itemPosition.leftArr);
  const rightArr = useSelector((state) => state.itemPosition.rightArr);
  const [leftInput, setLeftInput] = useState("");
  const [rightInput, setRightInput] = useState("");

  const onAddingItemleft = (index) => {
    let newLeftArr = [...leftArr];
    newLeftArr[index].isChecked = !newLeftArr[index].isChecked;
    dispatch(leftCheckbox(newLeftArr));
  };

  const onAddingItemright = (index) => {
    let newRightArr = [...rightArr];
    newRightArr[index].isChecked = !newRightArr[index].isChecked;
    dispatch(rightCheckbox(newRightArr));
  };

  const onMoveLeft = () => {
    let cut = rightArr.filter((el) => {
      return el.isChecked === true;
    });
    let cut2 = rightArr.filter((el) => {
      return el.isChecked === false;
    });
    dispatch(moveRight([...cut2]));
    dispatch(moveLeft([...leftArr, ...cut]));
  };

  const onMoveRight = () => {
    let cut = leftArr.filter((el) => {
      return el.isChecked === true;
    });
    let cut2 = leftArr.filter((el) => {
      return el.isChecked === false;
    });
    dispatch(moveLeft([...cut2]));
    dispatch(moveRight([...rightArr, ...cut]));
  };
  const onAddLeftItem = () => {
    if (leftInput) {
      dispatch(
        addLeftItem([...leftArr, { name: leftInput, isChecked: false }])
      );
      setLeftInput("");
    }
  };
  const onAddRightItem = () => {
    if (rightInput) {
      dispatch(
        addRightItem([...rightArr, { name: rightInput, isChecked: false }])
      );
      setRightInput("");
    }
  };
  const onDeselect = () => {
    let left = [];
    leftArr.forEach((el) => {
      el.isChecked = false;
      left.push(el);
    });

    let right = [];
    rightArr.forEach((el) => {
      el.isChecked = false;
      right.push(el);
    });
    dispatch(addLeftItem(left));
    dispatch(addRightItem(right));
  };

  return (
    <div>
      <h1 className="heading-cstm">Two Arrays</h1>
      <div className="flex-wrapper">
        {/* div di kiri */}
        <div className="box-1">
          <h2>Left</h2>
          <div>
            <input
              value={leftInput}
              onChange={(event) => setLeftInput(event.target.value)}
              type="text"
              name="title"
              placeholder="new item"
            />
            <button disabled={!leftInput} onClick={onAddLeftItem}>
              +
            </button>
          </div>
          <div>
            {leftArr.map((el, index) => {
              return (
                <LeftItem
                  key={index}
                  el={el}
                  index={index}
                  onAddingItemleft={onAddingItemleft}
                />
              );
            })}
          </div>
        </div>
        {/* div tengah */}
        <div className="button-container">
          <button onClick={onMoveLeft} className="button-margin button-left">
            move left
          </button>
          <button onClick={onMoveRight} className="button-margin button-right">
            move right
          </button>
          <button className="button-margin" onClick={onDeselect}>
            deselect
          </button>
        </div>
        {/* div di kanan */}
        <div className="box-2">
          <h2>Right</h2>
          <div>
            <input
              value={rightInput}
              onChange={(event) => setRightInput(event.target.value)}
              type="text"
              name="title"
              placeholder="new item"
            />
            <button disabled={!rightInput} onClick={onAddRightItem}>
              +
            </button>
          </div>
          <div>
            {rightArr.map((el, index) => {
              return (
                <RightItem
                  key={index}
                  el={el}
                  index={index}
                  onAddingItemright={onAddingItemright}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
