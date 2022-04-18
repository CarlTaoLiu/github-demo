/* eslint-disable import/no-anonymous-default-export */

import actionType from '../actions/actionType'

const initState = {
    repoName : '',
    repoUrl : ''
}

export default (state = initState,action) => {
    switch(action.type){
        case actionType.REQUEST_SUCCESS:
            {
                return {
                    ...state
                }
            }
        default:
            {
                return state
            }
    }
}