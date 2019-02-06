import { showLoading, hideLoading } from "react-redux-loading";
import { saveQuestionAnswer, saveQuestion } from '../utils/api'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const SAVE_ANSWER = 'SAVE_ANSWER'
export const ADD_QUESTION = 'ADD_QUESTION'

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

function addQuestion(question) {
    return {
        type: ADD_QUESTION,
        question
    }
}

export function handleAddQuestion(optionOneText, optionTwoText) {
    return (dispatch, getState) => {
        const { authedUser } = getState()
        dispatch(showLoading)
        return saveQuestion({ optionOneText, optionTwoText, author: authedUser })
            .then((question) => {
                dispatch(addQuestion(question))
            }).then(() => dispatch(hideLoading()))
            .catch(e => {
                dispatch(hideLoading())
                console.log('Error in handleAddQuestion', e)
                alert('Could not add question. Try again later')
            })
    }
}

export function handleSaveAnswer(questionId, answerId) {
    return (dispatch, getState) => {
        const { authedUser } = getState()
        dispatch(showLoading())
        return saveQuestionAnswer(questionId, answerId, authedUser)
            .then(() => {
                dispatch(saveAnswer(questionId, answerId, authedUser))
            })
            .then(() => {
                dispatch(hideLoading())
            })
            .catch(e => {
                dispatch(hideLoading())
                console.log('Error in handleSaveAnswer', e)
                alert('Could not save answer. Try again later')
            })
    }
}

