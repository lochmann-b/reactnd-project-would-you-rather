export const LOADING_DONE = 'LOADING_DONE'

export function loadingDone() {
    return {
        type: LOADING_DONE,
        loading: false
    }
}