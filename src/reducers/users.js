import { RECEIVE_USERS } from '../actions/users'
import { SAVE_ANSWER, ADD_QUESTION } from '../actions/questions'

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
        case ADD_QUESTION:
            return {
                ...state,
                [action.question.author]: {
                    ...state[action.question.author],
                    questions:[...state[action.question.author].questions, action.question.id]
                }
            }
        default:
            return state
    }
}