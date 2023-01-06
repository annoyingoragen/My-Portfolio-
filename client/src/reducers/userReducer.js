import { createSlice } from '@reduxjs/toolkit';


const userSlice=createSlice({
    name:'user',
    initialState:{
            user:{},
            isLoading:null,
            error:null,
            isAuthenticated:false,
            isUpdated:false,
     
            message:null,
            success:null,
    },
    reducers:{
        START_LOADING(state,action){
            state.isLoading=true;
        },
        END_LOADING(state,action){
            state.isLoading=false;
        },
        LOGIN_LOAD(state,action){
            console.log('fetcing user');
            console.log(action.payload);
            state.isAuthenticated=true;
            state.user=action.payload;
            
        },
        LOGIN_LOAD_ERROR(state,action){
            state.error=action.payload; 
            state.isAuthenticated=false;
            state.isLoading=false;             
        },
        LOGOUT(state){
            state.user={};
            state.isAuthenticated=false;
        },
        UPDATE_PROFILE_LOGOUT_ERROR(state,action){
            state.error=action.payload; 
            state.isLoading=false; 
        },
        UPDATE_PROFILE(state,action){
            state.isUpdated=action.payload;
        },
        UPDATE_PROFILE_RESET(state,action){
            state.isUpdated=false;
        },
        SEND_EMAIL(state,action){
            console.log('sending mail');
            console.log(action.payload);
            state.success=action.payload;
            
        },
        SEND_EMAIL_ERROR(state,action){
            state.error=action.payload;
            state.isLoading=false; 
            
        },

    
        CLEAR_ERRORS(state){
            state.error=null;  
        },
    }

});

export const userActions=userSlice.actions;
export default userSlice;