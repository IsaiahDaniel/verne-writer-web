import axios from 'axios'
import { toast } from 'react-toastify';
import { clearAuth, getToken, getUser } from './services/AuthService';

//const baseURL = 'https://boom-33.herokuapp.com/api/v1/';
//const baseURL = 'http://cliquebe.us-east-1.elasticbeanstalk.com/api/v1/'
// const baseURL = 'https://verne-api.onrender.com/api/v1/writer/'
const baseURL = 'https://verne-app-mwugv.ondigitalocean.app/api/v1/writer/'

//const baseURL = 'http://localhost:5000/api/v1/writer/';
//const LOCAL_STORAGE_API_KEY = 'token'
const user: any = getUser();

const instance = axios.create({
        baseURL: baseURL,
        headers: {
                Authorization: `Bearer ${getToken()}`,
                writerid: user?._id
        },
})

instance.interceptors.request.use(request => {
        const token = localStorage.getItem("token");
        const user: any = getUser();

        // console.log("token", token)
        if (token) {
                request.headers.Authorization = `Bearer ${token}`;
                request.headers.writerid = `${user?._id}`;
        }
        // console.log("REQUEST", request)
        return request;
}, error => {
        console.log("REQUEST ERROR", error)
})

instance.interceptors.response.use(response => {
        // console.log("RESPONSE", response)
        return response;
},
        error => {
                console.log("RESPONSE ERROR", error.response)
                console.log("RESPONSE ERROR", error);

                // if (error) {
                if(error.response == undefined){
                  console.log("undefined error", error)
                  toast.error(error.message);
                }

                if (error.response.status === 401) {
                   clearAuth()
                   toast.error(error.response.message ? error.response.message : "You are logged out");
                   window.location.href = '/login';
                }

                if (!error.response?.data?.success) {
                   toast.error(error.response?.data?.message);
                }
        })

export default instance;