import {
    _getQuestions,
    _getUsers,
    _saveQuestionAnswer,
    _saveQuestion
} from './_DATA'

export function getInitialData() {
    return Promise.all([        
        _getUsers(),
        _getQuestions()
    ]).then(([users, questions]) => ({
        users,
        questions
    }))
}

export function saveQuestionAnswer(qid, answer, authedUser) {
    return _saveQuestionAnswer({
        authedUser,
        qid,
        answer
    })
}

export function saveQuestion(question) {
    return _saveQuestion(question)
}