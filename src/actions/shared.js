import { receiveUsers } from './users'
import { receiveQuestions } from './questions'
import { getInitialData } from '../utils/api';
import { loadingDone } from './loading';
import {showLoading, hideLoading} from 'react-redux-loading'


export function handleInitialData() {
    return (dispatch) => {
        dispatch(showLoading())
        return getInitialData()
        .then( ({users, questions}) => {
            dispatch(receiveUsers(users))
            dispatch(receiveQuestions(questions))
            dispatch(loadingDone())
            dispatch(hideLoading())
        })
    }
}