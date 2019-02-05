import { SET_AUTHED_USER } from '../actions/authedUser'

export default function authedUser(state = {}, action) {
    switch (action.key) {
        case SET_AUTHED_USER:
            return {id: action.id}
        default:
            return state
    }

}