import axios from "axios";

const ajax = axios.create({
    baseURL : 'https://api.github.com'
})

ajax.interceptors.request.use((config)=>{
    // console.log(config)
    return config
})

ajax.interceptors.response.use((resp)=>{
    if(resp.status===200){
        return resp.data
    }else{
        return{
            Msg:'Unknown Error'
        }
    }

})

export default ajax