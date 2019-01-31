import React, { Component } from 'react';
import { connect } from 'react-redux'

import { getFriends, addFriend } from './store/actions'

import './App.css';

class App extends Component {
  state = {
    newFriend: {
      name: '',
      age: '',
      email: ''
    }
  }

  componentDidMount() {
    this.props.getFriends(this.state.newFriend)
  }

  handleChanges = e => {
    this.setState({
      newFriend : {
        ...this.state.newFriend,
        [e.target.name] : e.target.value
      }
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.addFriend();
  }

  render() {
    return (
      <div className="App">
        <div className='Friends'>
          {this.props.friends && 
            this.props.friends.map(friend => 
              <div className='friend'>
                <h3>{friend.name}</h3>
                <h4>Age: {friend.age}</h4>
                <h4>Email: {friend.email}</h4>
              </div>  
          )}
        </div>
        <form onSubmit={this.handleSubmit} className='add-friend'>
            <input onChange={this.handleChanges} type='text' name='name' placeholder='name' />
            <input onChange={this.handleChanges} type='number' name='age' placeholder='age' />
            <input onChange={this.handleChanges} type='text' name='email' placeholder='email' />
            <button type='submit'>Add Friend</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  friends: state.friends,
  isFetchingFriends: state.isFetchingFriends,
  error: state.error
})

export default connect(mapStateToProps, { getFriends, addFriend })(App);
