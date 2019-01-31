import axios from 'axios'

export const FETCH_FRIENDS_START = 'FETCH_FRIENDS_START';
export const FETCH_FRIENDS_SUCCESS = 'FETCH_FRIENDS_SUCCESS';
export const FETCH_FRIENDS_FAIL = 'FETCH_FRIENDS_FAIL';
export const ADD_FRIENDS_START = 'ADD_FRIENDS_START';
export const ADD_FRIENDS_SUCCESS = 'ADD_FRIENDS_SUCCESS';
export const ADD_FRIENDS_FAIL = 'ADD_FRIENDS_FAIL';

export const getFriends = () => dispatch => {
    dispatch({ type: FETCH_FRIENDS_START});
    axios.get('http://localhost:5000/api/friends')
        .then(res => dispatch({ type: FETCH_FRIENDS_SUCCESS, payload: res.data }))
        .catch(err => dispatch({ type: FETCH_FRIENDS_FAIL, payload: err }))
}
