import React from "react";
import { oneOf } from "prop-types";

import { DefaultButton } from "./styles";

export default function Button({ children, variant }) {
  return <DefaultButton variant={variant}>{children}</DefaultButton>;
}

Button.propTypes = {
  variant: oneOf(["contained", "outlined"]),
};

Button.defaultProps = {
  variant: "contained",
};
