import axios from '../axiosinstance';
import { ILogin } from '../interfaces/IAuth';

export function signUp(formData: ILogin){

        const { email, password } = formData;

        const postData = {
                email,
                password,
        }

        return axios.post('/web/sign-up', postData)
}

export function signUp2(data: any){
        return axios.post('/verify', data)
}

export function login(data: any){
        return axios.post('/login', data)
}

export function completeOnboarding(data: any){
        return axios.post('/web/complete-profile', data)
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
        localStorage.removeItem('userInfo');
        localStorage.removeItem('token');
}