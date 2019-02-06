import { showLoading, hideLoading } from "react-redux-loading";
import { saveQuestionAnswer } from '../utils/api'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const SAVE_ANSWER = 'SAVE_ANSWER'

export function receiveQuestions(questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions
    }
}

function saveAnswer(questionId, answerId, authedUser) {
    return {
        type: SAVE_ANSWER,
        questionId,
        authedUser,
        answerId
    }
}

export function handleSaveAnswer(questionId, answerId) {
    return (dispatch, getState) => {
        const { authedUser } = getState()
        dispatch(showLoading())
        return saveQuestionAnswer(questionId, answerId, authedUser)
            .then( () => {
                dispatch(saveAnswer(questionId, answerId, authedUser))
            })
            .then ( () => {
                dispatch(hideLoading())
            })
            .catch(e => {
                dispatch(hideLoading())
                console.log('Error in handleSaveAnswer', e)
                alert('Could not save answer. Try again later')
            })
    }
}

