import PropTypes from "prop-types";

import logo from "../../../assets/images/logo.svg";

import "./styles.css";

const Navbar = ({ children }) => {
  return (
    <nav>
      <span>
        <img src={logo} height="55" alt="logo of the page" />
      </span>
      <div>{children}</div>
    </nav>
  );
};

Navbar.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Navbar;
