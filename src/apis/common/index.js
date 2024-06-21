import Http from '@/request/request'

// 协议获取
export function getNewsList(params){
    return Http.get(`/m_yimin_v3/api/more_new`,params)
}

export default{
	getNewsList
}
