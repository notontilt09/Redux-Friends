import { 
    FETCH_FRIENDS_START,
    FETCH_FRIENDS_SUCCESS,
    FETCH_FRIENDS_FAIL,
    ADD_FRIENDS_START,
    ADD_FRIENDS_SUCCESS,
    ADD_FRIENDS_FAIL,
} from '../actions'

const initialState = {
    friends: [],
    isFetchingFriends: false,
    error: ''
}

const friendReducer = (state = initialState, action) => {
    console.log(action);
    switch(action.type) {
        case FETCH_FRIENDS_START:
            return {
                ...state,
                isFetchingFriends: true
            }
        case FETCH_FRIENDS_SUCCESS:
            return {
                ...state,
                friends: action.payload,
                isFetchingFriends: false
            }
        case FETCH_FRIENDS_FAIL:
            return {
                ...state,
                error: action.payload,
                isFetchingFriends: false
            }
        case ADD_FRIENDS_SUCCESS:
            return {
                ...state,
                friends: action.payload
            }
        default:
            return {
                state
            }
    }
}

export default friendReducer