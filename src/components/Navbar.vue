<template>

<!-- NAV SECTION -->
<div class="">
  <nav  class=" bg-black border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-800 w-f">
    <div class="container flex flex-wrap justify-between items-center mx-auto py-2">
    <a  v-if="!user" href="#"  class="flex items-center">
      <img src="../assets/images/lividlogo.png" class="mr-3 h-6 sm:h-8" alt=" Logo"  />
        <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white"></span>
    </a>

    <a  v-if="user" class="flex items-center">
      <router-link to="/movies"><img src="../assets/images/lividlogo.png" class="mr-3 h-6 sm:h-8" alt=" Logo" /></router-link>
        <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white"></span>
    </a>

    <div class="m-auto" v-if="user">

      <ul class=" flex text-white justify-between">
        <li class="mx-5 cursor-pointer"><router-link to="/movies">Home</router-link></li>
        <li class="mx-5 cursor-pointer">Categories</li>
        <li class="mx-5 cursor-pointer">Downloaded</li>
        <li class="mx-5 cursor-pointer"><router-link to="/account">Account</router-link></li>
        
      </ul>

    </div>

  <p class="text-white mr-8" v-if="user"> Welcome, {{user.name}}</p>
    <div v-if="user" class="flex md:order-2">
        <router-link to="/" @click="handleClick"><button  type="button" class="text-white bg-lividPurple hover:bg-purple focus:ring-4 focus:outline-none focus:ring-purple font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-purple dark:focus:ring-purple">Log Out</button></router-link>
    </div>

    <div v-if="!user" class="flex md:order-2">
        <router-link to="/login"><button type="button" class="text-white bg-lividPurple hover:bg-purple focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-purple dark:hover:bg-purple dark:focus:ring-purple">Login</button></router-link>
    </div>
    
    <div class="hidden justify-between items-center w-full md:flex md:w-auto md:order-1" id="mobile-menu-4"> </div>
    </div>
  </nav>
</div>

</template>


<script>

import {useStore} from 'vuex'
import { computed } from 'vue'

export default {
  
  setup(){
    const store = useStore()

    const handleClick = () => {
      store.dispatch('logout')
    }

    return { 
      handleClick,
      user: computed(() => store.state.user) 

    }
  }
  
}
</script>

