import { RECEIVE_USERS } from '../actions/users'
import { SAVE_ANSWER } from '../actions/questions'

export default function users(state = {}, action) {
    switch (action.type) {
        case RECEIVE_USERS:
            return {
                ...action.users
            }
        case SAVE_ANSWER:
            const { authedUser, questionId, answerId } = action
            const user = state[authedUser]
            return {
                ...state,
                [authedUser]: {
                    ...user,
                    answers: {
                        ...user.answers,
                        [questionId]: answerId
                    }
                }
            }
        default:
            return state
    }
}