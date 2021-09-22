import React, { Component } from "react";

type User = { name: string; age: number };
interface UserSearchProps {
  users: User[];
}
interface UserSearchState {
  name: string;
  user: { name: string; age: number } | undefined;
}

class UserSearch extends Component<UserSearchProps> {
  state: UserSearchState = {
    name: "",
    user: undefined,
  };
  searchUsersEventHandler = () => {
    const foundUser = this.props.users.find(
      (user) => this.state.name === user.name
    );
    this.setState({ user: foundUser });
  };
  render() {
        const { user, name } = this.state;
    return (
      <div>
        <h1>user search</h1>
        <input
          value={name}
          onChange={(e) => this.setState({ name: e.target.value })}
          type="text"
        />
        <button onClick={this.searchUsersEventHandler}>Find User</button>
        <div>
          {user?.age}
          {user?.name}
        </div>
      </div>
    );
  }
}

export default UserSearch;