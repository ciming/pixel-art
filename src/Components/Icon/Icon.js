
import React from "react";

import { ReactComponent as PenIcon } from "../../Icons/pen.svg";
import { ReactComponent as FillIcon } from "../../Icons/fill.svg";
import { ReactComponent as EyedropperIcon } from "../../Icons/eyedropper.svg";
import { ReactComponent as EraserIcon } from "../../Icons/eraser.svg";
import { ReactComponent as MoveIcon } from "../../Icons/move.svg";


const Parse = ({ icon, props }) => {
  switch (icon) {
    case "pen": return <PenIcon {...props} />;
    case "fill": return <FillIcon {...props} />;
    case "eyedropper": return <EyedropperIcon {...props} />;
    case "eraser": return <EraserIcon {...props} />;
    case "move": return <MoveIcon {...props} />;
    default: return <span>Icon</span>; // or some icon default
  }
};

const Icon = ({ icon, ...rest }) => {
 return <Parse icon={icon} props={rest} />;
};
 
export default Icon;