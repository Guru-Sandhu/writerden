import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import PostIndexPage from './components/PostIndexPage'
import { SignInPage } from './components/SignInPage'
import { NavBar } from './components/NavBar'
import { User } from './api/requests';
import { Session } from './api/requests'
import { UserNewPage } from './components/UserNewPage'
import { PostNewPage } from './components/PostNewPage'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentUser: null
    }
  }

  componentDidMount() {
    this.getUser()
  }

  getUser() {
    User.current().then((data) => {
      this.setState(state => {
        return {
          currentUser: data
        }
      })
    })
  }

  destroySession = () => {
    Session.destroy().then(() => {
      this.setState({ currentUser: null})
    })
  }

  render() {
    return (
      <BrowserRouter>
      <NavBar currentUser={this.state.currentUser} signOut={this.destroySession} />
        <main className="ui container">
          <Switch>
            <Route exact path='/users/new' component={UserNewPage} />
            <Route exact path='/posts/new' component={PostNewPage} />
            <Route exact path='/posts' component={PostIndexPage} />
            <Route exact path='/sign_in'component={SignInPage} />
          </Switch>
        </main>
      </BrowserRouter>
    )
  }
}

export default App;
