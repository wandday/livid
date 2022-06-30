import { createStore } from 'vuex'

import axios from 'axios'



const store = createStore({
  state: {
    user: null,
  },

  mutations:{
    setUser(state, payload){
      state.user = payload
      console.log('new user login:', state.user)
    },
  },

  actions:{
    async createUser(context, {firstName, lastName, email, password}){
      const user_data = await axios.post('http://localhost:3000/api/users',{
        "first_name": firstName,
        "last_name": lastName,
        "email": email,
        "password": password,
      })
      if (user_data){
        console.log(user_data)
        context.commit('setUser', null)
        alert('Your account have been created successfully. Login now')
      } else {
        console.log('err')
        throw new Error('could not complete signup')
      }
       

    },

    async loginUser(context, {email, password}){
      const res = await axios.post('http://localhost:3000/api/users/login',{
        "email": email,
        "password": password,
      })
      if (res){
        console.log(res)
        context.commit('setUser', res.data)
      } else {
        console.log('err')
        throw new Error('could not complete login')
      }
    },

    logout(context){
      console.log('logout action')

      context.commit('setUser', null)
      router.push('/')
    }
  }

})




// Export store
export default store
