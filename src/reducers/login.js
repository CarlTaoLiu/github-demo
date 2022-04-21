/* eslint-disable import/no-anonymous-default-export */
import * as actionType from '../actions/actionType'
const initState = {
    data:[]
}

export default (state = initState,action) => {
    
    // console.log(action, 'action')
    switch(action.type){
        case actionType.LOGIN_SUCCESS:
            {
                return {...action}
            }
        default:
            {
                return state
            }
    }
}