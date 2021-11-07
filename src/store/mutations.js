import Vue from 'vue'

export const mutations = {
    auth_request(state){
        state.status = 'loading'
    },
        auth_success(state, token, user){
        state.status = 'success'
        state.token = token
        state.user = user
    },
    auth_error(state){
        state.status = 'error'
    },
    logout(state){
        state.status = ''
        state.token = ''
    },
    setNewItem(state, payload){
        let item = {...payload, id: state.lessons[state.lessons.length-1].id + 1};        
        Vue.set(state, 'lessons', [...state.lessons, item]);
        
    }
}