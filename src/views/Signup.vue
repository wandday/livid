<template>

<div>
 
  <div class=" w-full h-screen RegisterLoginBackground flex justify-center  align-center ">

  
    <div class=" flex justify-center  align-center mt-16 absolute ">
        
      <div class="block px-6 py-6 rounded-lg shadow-lg bg-white bg-opacity-100 max-w-md  ">
        <form @submit.prevent="handleSubmit">
          
          <div class="mb-6 flex align-middle justify-center font-semibold text-3xl">
            <h1>Register</h1>
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div class="form-group mb-6">
              <input type="text" class="form-control
                block
                w-full
                px-3
                py-2
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput123"
                aria-describedby="emailHelp123" placeholder="First name" onkeypress="return /[a-z]/i.test(event.key)"  v-model="firstName">
            </div>
            <div class="form-group mb-6">
              <input type="text" class="form-control
                block
                w-full
                px-3
                py-2
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput124"
                aria-describedby="emailHelp124" placeholder="Last name" onkeypress="return /[a-z]/i.test(event.key)" v-model="lastName">
            </div>
          </div>
          <div class="form-group mb-6">
            <input type="email" class="form-control block
              w-full
              px-3
              py-2
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput125"
              placeholder="Email address" v-model="email">
          </div>
          <div class="form-group mb-6">
            <input type="password" class="form-control block
              w-full
              px-3
              py-2
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput126"
              placeholder="Password" v-model="password">
          </div>
          <!-- <div class="form-group form-check text-center mb-6">
            <input type="checkbox"
              class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer"
              id="exampleCheck25" checked>
            <label class="form-check-label inline-block text-gray-800" for="exampleCheck25">Subscribe to our newsletter</label>
          </div> -->
          <button type="submit" class="
            w-full
            px-6
            py-3
            bg-lividPurple
            text-white
            font-medium
            text-xs
            leading-tight
            uppercase
            rounded
            shadow-md
            hover:bg-blue-700 hover:shadow-lg
            focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
            active:bg-blue-800 active:shadow-lg
            transition
            duration-150
            ease-in-out">Sign up</button>

            <div class="mt-6 mx-16">
              Already have an account? <router-link to="/login"><span class="text-lividPurple font-medium" > Login </span></router-link>
            </div>

            <div class="text-red mx-10 mt-2 text-1xl" >{{error}}</div>
        </form>
      </div>
    </div>
  </div>
</div>



</template>

<script>

import { ref } from 'vue'
import {useStore} from 'vuex'
import {useRouter} from 'vue-router'
import RegisterLogin from '../components/RegisterLogin'

export default {
    components: {RegisterLogin},

    setup() {
    const firstName = ref('')
    const lastName = ref('')
    const email = ref('')
    const password = ref('')
    const error =ref(null)

    const store = useStore()
    const router = useRouter()

    const handleSubmit = async () => {
      try {
        await store.dispatch('createUser', {firstName: firstName.value, lastName: lastName.value, email: email.value, password: password.value
        })
        router.push('/login')
      } catch(err) {
        error.value = err.response.data.error
        console.log(error.value)
      }
    }
    return { handleSubmit, firstName, lastName, email, password, error }
    
  }

}


</script>



<style>



</style>