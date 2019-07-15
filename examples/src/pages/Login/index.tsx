import React from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { IProps, IState } from "./interfaces";
import { IReduxStoreState } from "../../common/interfaces";
import { doLogin } from "./store/actions";

import "./style.css";

class Login extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      email: "",
      password: "",
      errorMsg: "",
      errorFor: "",
    };
  }

  // public componentDidMount() {}

  public handleText = (e: any) => {
    const { name, value } = e.target;
    switch (name) {
      case "email":
        this.setState({ email: value });
        break;
      case "password":
        this.setState({ password: value });
        break;
      default:
        break;
    }
  };

  public validateForm = (): boolean => {
    const { email = "", password = "" } = this.state;
    if (email === "") {
      this.setState({
        errorFor: "email",
        errorMsg: "Invalid email",
      });
      return false;
    } else if (password === "") {
      this.setState({
        errorFor: "password",
        errorMsg: "Invalid password",
      });
      return false;
    } else {
      return true;
    }
  };

  public handleSubmit = async (e: any) => {
    e.preventDefault();
    if (this.validateForm()) {
      const { email, password } = this.state;
      await this.props.login(email, password);
      if (this.props.isLoggedIn) {
        this.props.history.push("/");
      }
    }
  };

  public render(): JSX.Element {
    const { email, password, errorFor, errorMsg } = this.state;
    return (
      <div className="login-container">
        <p>{this.props.errorMsg !== "" ? <label>{this.props.errorMsg}</label> : null}</p>
        <form method="POST" className="login-form" name="loginForm">
          <div>
            <label className="form-label">Email :</label>
            <input
              type="text"
              id="email"
              name="email"
              value={email}
              onChange={this.handleText}
              className="form-input"
              placeholder="Enter email"
            />
            {errorFor === "email" ? (
              <div>
                <span>{errorMsg}</span>
              </div>
            ) : null}
          </div>
          <div>
            <label className="form-label">Password :</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={this.handleText}
              className="form-input"
              placeholder="Enter password"
            />
            {errorFor === "password" ? (
              <div>
                <span>{errorMsg}</span>
              </div>
            ) : null}
          </div>
          <div>
            <button className="submit-btn" onClick={this.handleSubmit}>
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state: IReduxStoreState) => {
  return {
    errorMsg: state.login.errorMsg,
    isLoggedIn: state.login.isLoggedIn,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    login: bindActionCreators(doLogin, dispatch),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
