import React from "react";
import { IRowProps } from "../interfaces";

export default class UserListRow extends React.Component<IRowProps, {}> {
  public render(): JSX.Element {
    const { user } = this.props;
    return (
      <ol key={user.id} className="ol">
        {user.username} - {user.email}
      </ol>
    );
  }
}
