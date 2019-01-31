import React, { Component } from 'react';
import { connect } from 'react-redux'

import { getFriends } from './store/actions'

import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.getFriends()
  }

  render() {
    return (
      <div className="App">
        {this.props.friends && 
          this.props.friends.map(friend => 
            <div className='friend'>
              <h3>{friend.name}</h3>
              <h4>Age: {friend.age}</h4>
              <h4>Email: {friend.email}</h4>
            </div>  
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  friends: state.friends,
  isFetchingFriends: state.isFetchingFriends,
  error: state.error
})

export default connect(mapStateToProps, { getFriends })(App);
