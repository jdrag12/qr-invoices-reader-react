import PropTypes from "prop-types";

import "./styles.css";

const Button = ({ role, children, ...props }) => {
  return (
    <button
      {...props}
      className={`button ${role === "primary" && "button--primary"} ${
        role === "secondary" && "button--secondary"
      } `}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  role: "primary",
};

Button.propTypes = {
  role: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Button;
