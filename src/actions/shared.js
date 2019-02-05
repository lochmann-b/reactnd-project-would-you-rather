import { receiveUsers } from './users'
import { receiveQuestions } from './questions'
import { getInitialData } from '../utils/api';
import { setAuthedUser } from './authedUser';

export function handleInitialData() {
    return (dispatch) => {
        return getInitialData()
        .then( ({users, questions}) => {
            dispatch(receiveUsers(users))
            dispatch(receiveQuestions(questions))
            dispatch(setAuthedUser(null)) // reset authed user
        })
    }
}