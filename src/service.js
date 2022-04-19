import axios from "axios";

const ajax = axios.create({
    baseURL : 'https://api.github.com'
})

ajax.interceptors.request.use((config)=>{
    console.log(config)
    return config
})

ajax.interceptors.response.use((resp)=>{
    if(resp.status===200){
        // console.log(resp.data)
        // resp.data.map((item) => {
        //     // console.log('仓库名：'+item.name)
        //     return  item.name
        // })
        return (
            resp.data.map((item) => {
                // console.log('仓库名：'+item.name)
                return  item
            })
        )
    }else{
        return{
            Msg:'Unknown Error'
        }
    }

})

export default ajax