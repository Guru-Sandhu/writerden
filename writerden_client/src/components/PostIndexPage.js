import React, { Component } from 'react';
import { Post } from '../api/requests';
import { Link } from 'react-router-dom';
import { Spinner } from './Spinner';

class PostIndexPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: [],
      isLoading: true
    }
  }

  componentDidMount() {
    Post.all().then(posts => {
      this.setState({
        posts,
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
      <main>
        <h2 className="ui horizontal divider header">Posts</h2>
        <ul className="ui list">
          { this.state.posts.map((post) => (
            <div className="ui raised clearing segment" key={post.id} >
              <h3 className="ui header">
                <Link to={`/posts/${post.id}`}>{post.title}</Link>
              </h3>
            </div>
          ))}
        </ul>
      </main>
    )
  }
}

export default PostIndexPage