// import { getRepos } from "../getInfo";
// import store from "../store";
import * as actionType from './actionType'

 
export const InitRequest = (username,data) => {
    console.log('requesting data:',data)
    return {
        type:actionType.REQUEST_SUCCESS,
        username,
        data
    }
}

// export const requestAction = (username) => {
//     getRepos(username)
//         .then(resp => {
//             const data = resp
//             const action = InitRequest(data)
//             store.dispatch(action)
//         })
//         .catch(console.log('===================================='),
//         console.log('Error'),
//         console.log('===================================='))
// }