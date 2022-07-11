import { combineReducers } from 'redux'
import menu from './menu'
import isloggedin from './isloggedin'

export default combineReducers({
    menu,
    isloggedin
})