import * as api from '../api/index';
import { userActions } from '../reducers/userReducer';


export const login=(formData)=> async (dispatch)=>{
    console.log(formData);
    const sendRequest=async ()=>{
        const {data}=await api.login(formData);
        return data.user;
    }
        try{
            dispatch(userActions.START_LOADING());
            const user=await sendRequest();
            console.log(user);  

            dispatch(userActions.REGISTER_LOGIN_LOAD(user));
            dispatch(userActions.END_LOADING());
        }
        catch(error)
        {
            console.log(error.response.data.message);
            dispatch(userActions.REGISTER_LOGIN_LOAD_ERROR(error.response.data.message));

        }
}


export const clearErrors=()=> async (dispatch)=>{
    dispatch(userActions.CLEAR_ERRORS());
}


export const register=(formData)=> async (dispatch)=>{
    console.log(formData);
    const sendRequest=async ()=>{
        const {data}=await api.register(formData);
        return data.user;
    }
        try{
            dispatch(userActions.START_LOADING());
            const user=await sendRequest();
            console.log(user);  

            dispatch(userActions.REGISTER_LOGIN_LOAD(user));
            dispatch(userActions.END_LOADING());
        }
        catch(error)
        {
            console.log(error.response.data.message);
            dispatch(userActions.REGISTER_LOGIN_LOAD_ERROR(error.response.data.message));

        }
}



export const loadUser=()=> async (dispatch)=>{
    
    const sendRequest=async ()=>{
        console.log("sending requests")
        const {data}=await api.loadUser();
        console.log(data)
        return data.user;
    }
        try{
            dispatch(userActions.START_LOADING());
            const user=await sendRequest();
            console.log(user);  

            dispatch(userActions.LOGIN_LOAD(user));
            dispatch(userActions.END_LOADING());
        }
        catch(error)
        {
            console.log(error.response.data.message);
            dispatch(userActions.LOGIN_LOAD_ERROR(error.response.data.message));

        }
}


export const logout=()=> async (dispatch)=>{
    
    const sendRequest=async ()=>{
        await api.logout();
       
    }
        try{
            dispatch(userActions.START_LOADING());
            await sendRequest(); 

            dispatch(userActions.LOGOUT());
            dispatch(userActions.END_LOADING());
        }
        catch(error)
        {
            console.log(error.response.data.message);
            dispatch(userActions.RESET_PASSWORD_FORGOT_PASSWORD_UPDATE_PASSWORD_UPDATE_PROFILE_LOGOUT_ERROR(error.response.data.message));

        }
}


export const updateProfile=(formData)=> async (dispatch)=>{
    console.log(formData);
    const sendRequest=async ()=>{
        const {data}=await api.updateProfile(formData);
        return data;
    }
        try{
            dispatch(userActions.START_LOADING());
            const user=await sendRequest();
            console.log(user);  

            dispatch(userActions.UPDATE_PASSWORD_UPDATE_PROFILE(user));
            dispatch(userActions.END_LOADING());
        }
        catch(error)
        {
            console.log(error.response.data.message);
            dispatch(userActions.RESET_PASSWORD_FORGOT_PASSWORD_UPDATE_PASSWORD_UPDATE_PROFILE_LOGOUT_ERROR(error.response.data.message));

        }
}


export const updatePassword=(passwords)=> async (dispatch)=>{
    console.log(passwords);
    const sendRequest=async ()=>{
        const {data}=await api.updatePassword(passwords);
        return data;
    }
        try{
            dispatch(userActions.START_LOADING());
            const user=await sendRequest();
            console.log(user);  

            dispatch(userActions.UPDATE_PASSWORD_UPDATE_PROFILE(user));
            dispatch(userActions.END_LOADING());
        }
        catch(error)
        {
            console.log(error.response.data.message);
            dispatch(userActions.RESET_PASSWORD_FORGOT_PASSWORD_UPDATE_PASSWORD_UPDATE_PROFILE_LOGOUT_ERROR(error.response.data.message));

        }
}


export const sendEmail=(formData)=> async (dispatch)=>{
    console.log(formData);
    const sendRequest=async ()=>{
        const {data}=await api.sendEmail(formData);
        return data;
    }
        try{
            dispatch(userActions.START_LOADING());
            const data=await sendRequest();
            console.log(data);  

            dispatch(userActions.SEND_EMAIL(data.success));
            dispatch(userActions.END_LOADING());
        }
        catch(error)
        {
            console.log(error.response.data.message);
            dispatch(userActions.SEND_EMAIL_ERROR(error.response.data.message));

        }
}
