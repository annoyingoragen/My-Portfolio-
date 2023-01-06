import axios from  'axios';

const API=axios.create({baseURL:'https://us-central1-portfolio-mern-backend.cloudfunctions.net/app' ,withCredentials: true,});

API.interceptors.request.use((req)=>{
    console.log(req);
    
    return req;
});

const config = { headers: { "Content-Type": "application/json" } };



export const login=(formData)=>API.post('/login',formData,config);

export const register=(formData)=>API.post('/register',formData,config);
export const loadUser=()=>API.get('/user');
export const loadAuthenticatedUser=()=>API.get('/me');
export const logout=()=>API.get('/logout');
export const updateProfile=(formData)=>API.put('/me/update',formData);
export const updatePassword=(passwords)=>API.put('/password/update',passwords,config);
export const sendEmail=(formData)=>API.post('/contact',formData);

