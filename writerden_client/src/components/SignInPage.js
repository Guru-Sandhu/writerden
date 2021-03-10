import React, { Component } from 'react';
import { Session } from '../api/requests'
import { Link } from 'react-router-dom'

export class SignInPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: []
    }
  }

  createSession = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    // submit a request to sessions#create
    Session.create({
      email: formData.get('email'),
      password: formData.get('password')
    }).then(data => {
      if (data.status === 404) {
        this.setState({
          errors: [{ message: 'Wrong credentails'}]
        })
      } else {
        this.props.history.push('/posts')
      }
    })
  }

  render() {
    return(
      <main>
        <h1>Sign In</h1>
        {
          this.state.errors.length > 0 ? (
            <div>
              { this.state.errors.map(e => e.message).join(', ')}
            </div>
          ) : null
        }
        <form onSubmit={this.createSession} className="ui large form clearing segment">
          <div className="field">
            <label htmlFor='email'>Email</label>
            <input type='email' name='email' id='email' />
          </div>
          <div className="field">
            <label htmlFor='password'>Password</label>
            <input type='password' name='password' id='password' />
          </div>
          <Link to='/users/new' className='ui floated positive button'>Create New User</Link>
          <input type='submit' value='Sign In' className="ui right floated positive button" />
        </form>
      </main>
    )
  }
}