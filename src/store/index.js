import {createStore} from 'vuex';

const store=createStore({
     state:{
        accessToken:null,
        isLoggedIn:false,
        playerVisited:false,
     },
     mutations:{
          logut:(state)=>{
               state.accessToken=null,
               state.isLoggedIn=false,
               localStorage.removeItem("accessToken");

          },
          setaccessToken(state, accessToken) {
               if (state.accessToken != null) {
                 state.isLoggedIn = true;
               } else {
                 state.isLoggedIn = false;
               }
             },
             fetchAccessToken(state, accessToken) {
               state.accessToken = accessToken;
             },
     },
     actions:{
          fetchAccessToken({ commit }) {
               commit("fetchAccessToken", localStorage.getItem("accessToken"));
             },
         
             setaccessToken({ commit }, accessToken) {
               commit("setaccessToken", accessToken);
             },
         
             logout({ commit }) {
               commit("logout");
             },
     },
     getters:{
        
     }
})