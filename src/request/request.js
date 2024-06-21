
// 封装http方法

import { ElMessage } from 'element-plus'

const fetch = (url,options)=>{
    // 拼接请求地址
    const reqUrl = 'http://101.35.18.18:8777' + url;
    return new Promise((resolve, reject)=>{
        useFetch(reqUrl,{...options}).then(({data,error})=>{
            const res = data.value
            // resolve(value)
            // 判断是否有错误产生
            if (error.value) {
                console.log('error.value',error.value.statusCode,ElMessage)
                ElMessage.error('Oops, this is a error message.')
                reject(error.value)
            }else{
                if(res.code === 2000){
                    resolve(res)
                }else{
                    ElMessage({
                        message:res.msg,
                        type: 'error',
                        plain: true,
                    })
                    reject(res)
                }
                
            }

        }).catch((err) => {
            // 接口请求异常的操作写在这里
            console.log('接口异常',err)
            reject(err)
        })

    })
}

class  Httpclass {
    get(url, params){
        return fetch(url, { method: 'get', params })
    }
}
const Http = new Httpclass();
export default Http