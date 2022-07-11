export default function isloggedin(state = {
    isloggedin: localStorage.token ? true : false
}, action) {
    switch (action.type) {
        case 'LOGIN':
            state = { ...state }
            return state;
        default:
            return state
    }
}