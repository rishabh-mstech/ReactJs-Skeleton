import React from "react";
import { IProps, IState } from "./interfaces";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./style.css";

class Header extends React.Component<IProps, IState> {
  render(): JSX.Element {
    const { isLoggedIn } = this.props;
    return (
      <nav className="heder-container">
        <ul>
          <li>
            <Link to={"/"} className="nav-link">
              Home
            </Link>
          </li>
          <li>
            <Link to={"/userList"} className="nav-link" title={"User List"}>
              User list
            </Link>
          </li>
          <li>
            <Link to={"/contact-us"} className="nav-link" title={"Contact Us"}>
              Contact Us
            </Link>
          </li>
          {isLoggedIn !== true ? (
            <li>
              <Link to={"/login"} className="nav-link">
                Login
              </Link>
            </li>
          ) : (
            <li>
              <Link to={"/logout"} className="nav-link">
                Logout
              </Link>
            </li>
          )}
        </ul>
      </nav>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    isLoggedIn: state.login.isLoggedIn,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
