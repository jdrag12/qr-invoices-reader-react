import PropTypes from "prop-types";

import "./styles.css";

const Badge = ({ children }) => {
  return <div className="badge">{children}</div>;
};

Badge.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Badge;
