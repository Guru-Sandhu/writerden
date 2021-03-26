import React, { Component } from "react";
import { User } from "../api/requests";
import { Spinner } from "./Spinner";

export class UserShowPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: null,
      isLoading: true
    }
  }
  componentDidMount() {
    User.current().then(user => {
      this.setState({
        user,
        isLoading: false
      })
    })
  }

  render() {
    if (this.state.isLoading) {
      return (
        <main className="Page">
          <Spinner message="User Doesn't Exist" />
        </main>
      );
    }
    return (
    <main className="UserShowPage">
      <div className="ui teal clearing segment ">
        <div>
          <h2>{this.state.user.first_name} {this.state.user.last_name}</h2>
          <p>
            <small>
              Followers {this.state.user.followers} - Following {this.state.user.following}
            </small>
          </p>
        </div>
      </div>
    </main>);
  }
};