import axios from '../axiosinstance';

export function getCategory(pId: string){
        return axios.get('/categories/'+pId)
}

export function listCategory(initData: any){
    return axios.get('/categories/', { params: initData })
}

export function updateCategory(initData: any){
    return axios.patch('/publications/'+initData?.id, initData)
}

