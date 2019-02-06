import { RECEIVE_QUESTIONS, SAVE_ANSWER } from '../actions/questions'

export default function questions(state = {}, action) {
    switch (action.type) {
        case RECEIVE_QUESTIONS:
            return {
                ...action.questions
            }
        case SAVE_ANSWER:
            const { authedUser, answerId, questionId } = action
            const answeredQuestion = state[questionId]
            const answer = answeredQuestion[answerId]
            const votes = answer.votes
    
            return {
                ...state,
                [questionId]: {
                    ...answeredQuestion,
                    [answerId]: {
                        ...answer,
                        votes: [...votes, authedUser]
                    }
                }
            }
        default:
            return state
    }
}