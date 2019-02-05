import { receiveUsers } from './users'
import { receiveQuestions } from './questions'
import { getInitialData } from '../utils/api';
import { loadingDone } from './loading';

export function handleInitialData() {
    return (dispatch) => {
        return getInitialData()
        .then( ({users, questions}) => {
            dispatch(receiveUsers(users))
            dispatch(receiveQuestions(questions))
            dispatch(loadingDone())
        })
    }
}