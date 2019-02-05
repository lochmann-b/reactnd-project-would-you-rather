import { combineReducers } from 'redux'
import { loadingBarReducer } from 'react-redux-loading'
import authedUser from './authedUser'
import users from './users'
import loading from  './loading'
import questions from './questions'

export default combineReducers({
    authedUser,
    users,
    questions,
    loading,
    loadingBar: loadingBarReducer
})