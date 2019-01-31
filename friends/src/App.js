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
    this.props.getFriends()
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
    this.props.addFriend(this.state.newFriend);
    this.setState({
      newFriend: {
        name: '',
        age: '',
        email: ''
      }
    })
  }

  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit} className='add-friend'>
            <input onChange={this.handleChanges} value={this.state.newFriend.name} type='text' name='name' placeholder='name' />
            <input onChange={this.handleChanges} value={this.state.newFriend.age} type='number' name='age' placeholder='age' />
            <input onChange={this.handleChanges} value={this.state.newFriend.email} type='text' name='email' placeholder='email' />
            <button type='submit'>Add Friend</button>
        </form>
        <div className='Friends'>
          {this.props.friends && 
            this.props.friends.map((friend, index) => 
              <div key={index} className='friend'>
                <h3>{friend.name}</h3>
                <h4>Age: {friend.age}</h4>
                <h4>Email: {friend.email}</h4>
              </div>  
          )}
        </div>
        
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
