export const moveLeft = (payload) => ({
  type: "MOVE_LEFT",
  payload,
});

export const moveRight = (payload) => ({
  type: "MOVE_RIGHT",
  payload,
});

export const leftCheckbox = (payload) => ({
  type: "LEFTCHECK/UNCHECK",
  payload,
});

export const rightCheckbox = (payload) => ({
  type: "RIGHTCHECK/UNCHECK",
  payload,
});

export const addLeftItem = (payload) => ({
  type: "ADDLEFTITEM",
  payload,
});

export const addRightItem = (payload) => ({
  type: "ADDRIGHTITEM",
  payload,
});
