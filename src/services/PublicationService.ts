import axios from '../axiosinstance';

export function getPublication(pId: any){
        return axios.get('/publications/'+pId)
}

export function listPublication(initData: any){
    return axios.get('/publications/', { params: initData })
}

export function updatePublication(initData: any){
    return axios.patch('/publications/'+initData?.id, initData)
}

export function addPublication(data: any){
    return axios.post('/publications', data)
}
