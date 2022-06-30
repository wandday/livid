<template>
  <div>
      <div class="flex bg-lividPurple bg-opacity-20 w-full h-screen">

          <div class="w-64 bg-gray-50 h-screen" >
              <ul class="mx-8 mt-16 ">
                  <li class="flex items-center font-poppins hover:bg-gray-200 p-1 rounded-lg hover:text-lividPurple cursor-pointer">
                      <i class="ri-wallet-3-line text-2xl   "></i>
                      <span class="mx-6 font-medium">My Wallet</span>
                      
                  </li>

                  <li class="flex items-center font-poppins my-4 hover:bg-gray-200 p-1 rounded-lg hover:text-lividPurple cursor-pointer">
                      <i class="ri-user-line text-2xl"></i>
                      <span class="mx-6 font-medium">My Profile</span>
                      
                  </li>

                  <li class="flex items-center font-poppins my-4 hover:bg-gray-200 p-1 rounded-lg hover:text-lividPurple cursor-pointer">
                      <i class="ri-settings-4-line text-2xl"></i>
                      <span class="mx-6 font-medium">Settings</span>
                      
                  </li>

                   <router-link to="/" @click="handleLogout"><button><li  class="flex items-center font-poppins hover:bg-gray-200 p-1 rounded-lg hover:text-lividPurple cursor-pointer">
                       <i class="ri-logout-circle-line text-2xl "></i> 
                      <span class="mx-6 font-medium">Log Out</span> 
                      
                  </li> </button></router-link>
              </ul>
          </div>

          <!-- Wallet Section -->

          <div class="bg-gray-50 rounded-lg h-60 w-3/5 mt-16 mx-auto py-4">
            <div class=" font-medium font-poppins my-3 mx-8 ">
                <h1 class="text-lg">Total balance</h1>
                <h1 class="text-3xl my-4">₦ {{user.wallet_balance}} <span class="ml-6"><i class="ri-eye-off-fill text-2xl text-gray-700"></i></span> </h1>
                <!-- <h1 class="text-1xl bg-lividPurple p-2 text-white w-32 text-center rounded"> Add Money</h1> -->
                <div class="flex mt-6 justify-between ">
                    <ul class="mt-3">
                        <li class="text-center">
                           <i class="ri-wallet-fill bg-lividPurple py-2 px-3  rounded text-white text-2xl"></i> 
                            <h3 class="mt-3">Add Money</h3>
                        </li>
                    </ul>

                    <ul class="mt-3">
                        <li class="text-center">
                           <i class="ri-arrow-left-right-line bg-lividPurple py-2 px-3  rounded text-white text-2xl"></i> 
                            <h3 class="mt-3">Transfer</h3>
                        </li>
                    </ul>

                    <ul class="mt-3">
                        <li class="text-center">
                           <i class="ri-wallet-fill bg-lividPurple py-2 px-3  rounded text-white text-2xl"></i> 
                            <h3 class="mt-3">Request Money</h3>
                        </li>
                    </ul>
                </div>
            </div>

<!-- Transaction History Section -->

            <div class="bg-gray-50 mt-14 h-auto py-4">
                <div class="mx-8">
                    <h1 class="font-semibold">04-06-2022</h1>
                    <div class=" divide-y divide-slate-200">
                        <div class="flex py-3 justify-between">
                            <div >
                                <h1 class="font-medium">Olawande Fatodu</h1>
                                <h3 class="font-normal text-sm text-gray-500">Card Funding</h3>
                            </div>
                            <div class="text-lividPurple text-left">
                                <h1 class="font-medium"> 2000.00</h1>
                                <h3 class="font-normal text-sm">Credit</h3>
                            </div>
                        </div>

                        <div class="flex py-3 justify-between">
                            <div >
                                <h1 class="font-medium">Omo Getto</h1>
                                <h3 class="font-normal text-sm text-gray-500">Purchase Movie</h3>
                            </div>
                            <div class="text-red text-left">
                                <h1 class="font-medium"> 150.00</h1>
                                <h3 class="font-normal text-sm">Debit</h3>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
          </div>

      </div>
  </div>


<!-- class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                    > -->
</template>

<script>

import {useStore} from 'vuex'
import { computed } from 'vue'

export default {
    setup(){
        const store = useStore()

        const handleLogout = () => {
        store.dispatch('logout')
        }

        return {
        handleLogout,   
        user: computed(() => store.state.user) 

        }
    }
}
</script>

<style>

</style>


