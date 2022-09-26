const initialState = {
    users: [],
    loading: false,
    error: undefined
}

export function userReducer(state = initialState, action) {
    switch(action.type){
        case 'ADD_USER':
            return {...state, users:[...state.users, action.user]}
        case 'DELETE_USER':
            return {...state, users: state.users.filter(user => user.id !== action.id)}
        case 'FETCH_USERS':
            return {...state, loading: true}
        case 'FETCH_USERS_SUCCESS':
            return {...state, loading: false, users: action.data}
        case 'FETCH_USERS_SUCCESS':
            return {...state, loading: false, error: action.error}
        default:
            return state;
    }
}