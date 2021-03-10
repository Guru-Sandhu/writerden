import React, { Component } from 'react'
import { Post } from '../api/requests'

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
          <div className="ui segment" style={{ minHeight: "10em" }}>
            <div className="ui active dimmer">
              <div className="ui text loader">Loading...</div>
            </div>
          </div>
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
                <p>{post.title}</p>
              </h3>
            </div>
          ))}
        </ul>
      </main>
    )
  }
}

export default PostIndexPage