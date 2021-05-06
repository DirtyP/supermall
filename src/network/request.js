import axios from 'axios'
export function request(config){
  const instance1=axios.create({
    baseURL:'http://152.136.185.210:7878/api/m5',
    timeout:10000
  })
  instance1.interceptors.request.use(config=>{
    return config
    },err=>{
    })
    instance1.interceptors.response.use(res=>{
      return res.data
    },err=>{
      console.log(err)
    })
  return instance1(config)
}

