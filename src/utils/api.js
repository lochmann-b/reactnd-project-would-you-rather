import {
    _getQuestions,
    _getUsers
} from './_DATA'

export function getInitialData() {
    return Promise.all([
        _getQuestions(),
        _getUsers()
    ]).then(([users, questions]) => ({
        users,
        questions
    }))
}