import React from "react";
import { IProps, IState } from "./interfaces";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { getUserApi } from "./store/actions";
import { Redirect } from "react-router-dom";
import { get } from "lodash";
import { IUser } from "../../common/interfaces";
import UserListRow from "./components/userListRow";

class Home extends React.Component<IProps, IState> {
  componentDidMount() {
    this.props.getUserApi();
  }
  renderRedirect = () => {
    if (this.props.isLoggedIn === false) {
      return <Redirect to="/login" />;
    }
    return null;
  };
  renderUserList = () => {
    const userList: IUser[] = get(this.props, "users", []);
    return (
      <div>
        <h3>User List</h3>
        <ul>
          {userList.length > 0
            ? userList.map((user, index) => {
                return <UserListRow user={user} key={index} />;
              })
            : null}
        </ul>
      </div>
    );
  };
  public render(): JSX.Element {
    return (
      <div>
        {/* this.renderRedirect()*/}
        <h2 id="welcome-text">Welcome to Home Page !</h2>
        {this.renderUserList()}
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    users: state.home.users,
    errorMsg: state.home.errorMsg,
    isLoggedIn: state.login.isLoggedIn,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    getUserApi: bindActionCreators(getUserApi, dispatch),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
