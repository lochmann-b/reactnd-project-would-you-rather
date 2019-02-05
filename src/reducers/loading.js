import { LOADING_DONE } from "../actions/loading";

export default function loading(state = true, action) {
    switch (action.type) {
        case LOADING_DONE:
            return {
                loading: false
            }
            default:
                return state
    }

}