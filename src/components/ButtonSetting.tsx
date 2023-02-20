import React from "react";

const ButtonSetting = (idx: number) => {
  if (idx === 1) {
    return [0, 1, 2, 3, 4];
  } else if (idx === 2) {
    return [1, 0, 2, 3, 4];
  } else if (idx === 3) {
    return [2, 0, 1, 3, 4];
  } else if (idx === 4) {
    return [3];
  } else if (idx === 5) {
    return [4];
  }
};

export default ButtonSetting;
