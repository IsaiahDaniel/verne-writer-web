import axios from '../axiosinstance';

export function getProfile(userId: string){
        return axios.get('/writers/'+userId)
}

export function findByUsername(username: string){
    return axios.get('/writers/find/by-username', { params: { username: username } })
}

export function updateProfileSetting(initData: any){
    return axios.patch('/writers/'+initData?.id, initData)
}
