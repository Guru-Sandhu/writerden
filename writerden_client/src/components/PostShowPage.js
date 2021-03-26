import React, { Component } from "react";
import { PostDetails } from "./PostDetails";
import { Post } from "../api/requests";
import { Spinner } from "./Spinner";
import { CommentList } from './CommentList'

export class PostShowPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      post: null,
      isLoading: true
    }
  }
  componentDidMount() {
    Post.one(this.props.match.params.id).then(post => {
      this.setState({
        post,
        isLoading: false
      })
    })
  }

  render() {
    if (this.state.isLoading) {
      return (
        <main className="Page">
          <Spinner message="Post Doesn't Exist" />
        </main>
      );
    }
    return (
    <main className="PostShowPage">
      <div className="ui teal clearing segment ">
        <PostDetails {...this.state.post } />
      </div>
      <h2 className="ui horizontal divider header">Comments</h2>
      {/* <div className="ui segment">
        <CommentList answers={this.state.post.reviews} />
      </div> */}
    </main>);
  }
};