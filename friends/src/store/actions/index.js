import axios from 'axios'

export const FETCH_FRIENDS_START = 'FETCH_FRIENDS_START';
export const FETCH_FRIENDS_SUCCESS = 'FETCH_FRIENDS_SUCCESS';
export const FETCH_FRIENDS_FAIL = 'FETCH_FRIENDS_FAIL';
export const ADD_FRIENDS_START = 'ADD_FRIENDS_START';
export const ADD_FRIENDS_SUCCESS = 'ADD_FRIENDS_SUCCESS';
export const ADD_FRIENDS_FAIL = 'ADD_FRIENDS_FAIL';
export const DELETE_FRIEND_START = 'DELETE_FRIEND_START';
export const DELETE_FRIEND_SUCCESS = 'DELETE_FRIEND_SUCCESS';
export const DELETE_FRIEND_FAIL = 'DELETE_FRIEND_FAIL'

export const getFriends = () => dispatch => {
    dispatch({ type: FETCH_FRIENDS_START});
    axios.get('http://localhost:5000/api/friends')
        .then(res => dispatch({ type: FETCH_FRIENDS_SUCCESS, payload: res.data }))
        .catch(err => dispatch({ type: FETCH_FRIENDS_FAIL, payload: err }))
}

export const addFriend = friend => dispatch => {
    dispatch({ type: ADD_FRIENDS_START});
    axios.post('http://localhost:5000/api/friends', friend)
        .then(res => dispatch({ type: ADD_FRIENDS_SUCCESS, payload: res.data }))
        .catch(err => dispatch({ type: ADD_FRIENDS_FAIL, payload: err }))
}

export const deleteFriend = index => dispatch => {
    dispatch({ type: DELETE_FRIEND_START });
    axios.delete(`http://localhost:5000/api/friends/${index}`)
        .then(res => dispatch({ type: DELETE_FRIEND_SUCCESS, payload: res.data }))
        .catch(err => dispatch({ type: DELETE_FRIEND_FAIL, payload: err}))
}
