import axios from '../axiosinstance';
import { IAuth } from '../interfaces/IAuth';

export function signUp(formData: IAuth){

        const { email, password } = formData;

        const postData = {
                email,
                password,
        }

        return axios.post('/signup', postData)
}

export function signUp2(data: any){
        return axios.post('/signup2fa', data)
}

export function login(data: any){
        return axios.post('/login', data)
}

export function saveTokenInLocalStorage(token: any){
         localStorage.setItem('token', token);
}

export function saveUserInLocalStorage(user: any){
         localStorage.setItem('user', JSON.stringify(user));
}

export function getToken(){
        return localStorage.getItem('token')
}

export function getUser(){
        const user: any = localStorage.getItem('user');
        return JSON.parse(user)
}

export function clearAuth (){
        localStorage.removeItem('user');
        localStorage.removeItem('token');
}