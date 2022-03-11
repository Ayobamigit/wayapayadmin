import axios from "axios";

let authToken= null
if (typeof window !== "undefined") {
    if(localStorage.getItem('userDetails'))
    {
        const {token}= JSON.parse(localStorage.getItem('userDetails'));
        authToken = token;
    }
}
const instance = axios;

if (authToken){
    instance.defaults.headers.common['Authorization'] = `serial ${authToken}`
}
instance.defaults.headers.common['Content-Type'] = 'application/json';

export default instance;