const initialState = {
  leftArr: [{ name: "Left item", isChecked: false }],
  rightArr: [{ name: "Right Item", isChecked: false }],
};

export default function itemPositionReducers(
  state = initialState,
  { type, payload }
) {
  switch (type) {
    case "ADDLEFTITEM":
      return { ...state, leftArr: payload };
    case "ADDRIGHTITEM":
      return { ...state, rightArr: payload };
    case "MOVE_LEFT":
      return { ...state, leftArr: payload };
    case "MOVE_RIGHT":
      return { ...state, rightArr: payload };
    case "LEFTCHECK/UNCHECK":
      return { ...state, leftArr: payload };
    case "RIGHTCHECK/UNCHECK":
      return { ...state, rightArr: payload };
    default:
      return state;
  }
}
