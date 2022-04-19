/* eslint-disable import/no-anonymous-default-export */

import * as actionType from '../actions/actionType'

const initState = {
    isREQUEST_SUCCESS:false,
    name : '',
    html_url : ''
}

export default (state = initState,action) => {
    switch(action.type){
        case actionType.REQUEST_SUCCESS:
            {
                return {
                    ...state,
                    ...action.data,
                    isREQUEST_SUCCESS:true
                }
            }
        default:
            {
                return state
            }
    }
}