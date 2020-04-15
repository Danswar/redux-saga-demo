import React from "react";
import Proptypes from "prop-types";

const Button = ({ onClick, isLoading, text, ...rest }) => {
  const handleClick = () => {
    !isLoading ? onClick() : null;
  };

  return (
    <button onClick={handleClick} data-test="button-test" {...rest}>
      {!isLoading ? text : "loading..."}
    </button>
  );
};

Button.propTypes = {
  onClick: Proptypes.func.isRequired,
  isLoading: Proptypes.bool.isRequired,
  text: Proptypes.string
};
Button.defaultProps = {
  isLoading: false,
  text: "Click me"
};

export default Button;
