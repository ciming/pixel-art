
import React from "react";

import { ReactComponent as PenIcon } from "../../Icons/pen.svg";


const Parse = ({ icon, props }) => {
 switch (icon) {
   case "pen": return <PenIcon {...props} />;
  default: return <span>Icon</span>; // or some icon default
 }
};

const Icon = ({ icon, ...rest }) => {
 return <Parse icon={icon} props={rest} />;
};
 
export default Icon;