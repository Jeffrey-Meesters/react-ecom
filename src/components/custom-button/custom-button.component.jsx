import React from "react";
import { CustomButtonCOntainer } from "./custom-button.styles"

const CustomButton = ({children, ...props}) => (
  <CustomButtonCOntainer {...props}>
    {children}
  </CustomButtonCOntainer>
);

export default CustomButton;
