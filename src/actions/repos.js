// import { getRepos } from "../getInfo";
// import store from "../store";
import * as actionType from './actionType'

 
export const InitRequest = (username,data) => {
    // console.log('requesting data:',data)
    return {
        type:actionType.REQUEST_SUCCESS,
        username,
        data
    }
}

// export const requestAction = (username) => {
//     getRepos(username)
//         .then(resp => {
//             store.dispatch(InitRequest(username,resp))
//         }).catch((Error) => {
//             console.log(Error)
//         })
// }