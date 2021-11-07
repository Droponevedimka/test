export const actions = {
    login({commit}, users){
        const token = 'fdsfsdf'
        const user = '114324'
        localStorage.setItem('token', token)
        // axios.defaults.headers.common['Authorization'] = token
        commit('auth_success', token, user)
        
        // return new Promise((resolve, reject) => {
        //   commit('auth_request')
        //     axios({url: '', data: user, method: 'POST' })
        //     .then(resp => {
        //         const token = resp.data.token
        //         const user = resp.data.user
        //         localStorage.setItem('token', token)
        //         axios.defaults.headers.common['Authorization'] = token
        //         commit('auth_success', token, user)
        //         resolve(resp)
        //     })
        //     .catch(err => {
        //         commit('auth_error')
        //         localStorage.removeItem('token')
        //         reject(err)
        //   })
        // })
    },
    logout({commit}){
        commit('logout')
        localStorage.removeItem('token')
        delete axios.defaults.headers.common['Authorization']
        

        // return new Promise((resolve, reject) => {
        //   commit('logout')
        //   localStorage.removeItem('token')
        //   delete axios.defaults.headers.common['Authorization']
        //   resolve()
        // })
      }
}