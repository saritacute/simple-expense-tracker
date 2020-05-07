import * as actions from './actions'
export const actionAddNew = (payload) => {
    return ({
        type: actions.ADD_NEW,
        payload
    })
}