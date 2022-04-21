import * as actionType from './actionType'

export const InitLogin = (data) => {
    // console.log('requesting data:',data)
    return {
        type:actionType.LOGIN_SUCCESS,
        data
    }
}