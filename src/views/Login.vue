<template>

<div class=" w-full h-screen RegisterLoginBackground pt-16">



<div class=" mx-auto block px-10 py-6  rounded-lg shadow-lg bg-white w-4/12">
  <form  @submit.prevent="handleSubmit">

     <div class="mb-6 flex align-middle justify-center font-semibold text-3xl">
        <h1>Login</h1>
      </div>
    <div class="form-group mb-6">
      <label for="exampleInputEmail2" class="form-label inline-block mb-2 text-gray-700" >Email address</label>
      <input v-model="email" required type="email" class="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInputEmail2"
        aria-describedby="emailHelp" placeholder="Enter email">
    </div>
    <div class="form-group mb-6">
      <label for="exampleInputPassword2" class="form-label inline-block mb-2 text-gray-700">Password</label>
      <input  v-model="password" required type="password" class="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInputPassword2"
        placeholder="Password">
    </div>
    <div class="flex justify-between items-center mb-6">
      <div class="form-group form-check">
        <input type="checkbox"
          class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
          id="exampleCheck2">
        <label class="form-check-label inline-block text-gray-800" for="exampleCheck2">Remember me</label>
      </div>
      <a href="#!"
        class="text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out">Forgot
        password?</a>
    </div>
    <button type="submit" class="
      w-full
      px-6
      py-2.5
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
      ease-in-out" >Sign in</button>
    <p class="text-gray-800 mt-6 text-center">Not a member? <a href="#!"
        class="text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out"><router-link to="/signup">Register</router-link></a>
    </p>
  </form>
   <div v-if="error" class="text-red mx-10 mt-2 text-1xl">{{error}}</div>
</div>

</div>

</template>

<script>

import { ref } from 'vue'
import {useStore} from 'vuex'
import {useRouter} from 'vue-router'

export default {

    setup() {
    const email = ref('')
    const password = ref('')
    const error =ref(null)

    const store = useStore()
    const router = useRouter()

    const handleSubmit = async () => {
      try {
        await store.dispatch('loginUser', { email: email.value, password: password.value
        })
        router.push('/movies')
      } catch(err) {
        error.value = err.response.data
        console.log(err)
      }

    }

    return { handleSubmit, email, password, error, }
  }

}


</script>





<style>

</style>