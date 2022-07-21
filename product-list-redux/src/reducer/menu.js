export default function menu(state = { activemenu: window.location.pathname }, action) {
    switch (action.type) {
        case 'ACTIVE_MENU':
            state = { ...state }
            state.activemenu = action.path
            
            return state
        default: return state
    }
}