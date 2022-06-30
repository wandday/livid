<template>
  <div>
    <div class="flex my-20 justify-center">
        <div>
            <img :src="selectedMovie.poster" alt="" class="h-96 w-12/12"/>
        </div>
        <div class=" bg-white rounded drop-shadow-xl ml-8 h-96 w-1/3 relative">
            <div class="flex">
                <div class="flex flex-col mt-8 ml-4 text-base">
                    <h1 class="mb-6">Title: </h1>
                    <h1 class="mb-6">Price: </h1>
                    <h1 class="mb-6">Pay from: </h1>
                    <h1 class="mb-6">Account name: </h1>
                </div>
                <div class="flex flex-col mt-8 ml-5 text-base font-medium">
                    <h1 class=" mb-6 ">{{selectedMovie.title}}</h1>
                    <h1 class=" mb-6 "> ₦ {{eachMoviePrice}}</h1>
                    <h1 class=" mb-6 ">Wallet</h1>
                    <h1 class=" mb-6 ">Fatodu Olawande</h1>
                </div>
            </div>
             
            <div class="mt-32">
                <button @click="makePayment" class="bg-lividPurple w-full p-1 text-white ">Confirm Payment</button>
            </div>
        </div>
        
       
    </div>
  </div>
</template>

<script>

import axios from 'axios'
import {useStore} from 'vuex'
import { computed } from 'vue'

export default {
    data(){
        const store = useStore()
        return{
            user: computed(() => store.state.user),
            selectedMovie: {},
            eachMoviePrice: null,
            eachMovieId: null,
            eachMovieTitle: null
        }
    },

    methods:{
        async singleMovie(){
            const movie_url = this.$route.params.id
            
            console.log(movie_url)
            try{
                
                const response = await axios.get(`http://localhost:3000/api/user/movies/${movie_url}`)
                console.log(response.data.data)

                const eachMovie = response.data.data
                this.eachMoviePrice = eachMovie.price
                this.eachMovieId = eachMovie.movie_id
                this.eachMovieTitle = eachMovie.title
                this.selectedMovie = eachMovie
                console.log(eachMoviePrice)
            
            } catch (error) {}

        },

        async makePayment(){
            let movieTitle = this.eachMovieTitle
            let movieId = this.eachMovieId
            console.log(movieId)
            let moviePrice = this.eachMoviePrice
            let accountBalance = this.user.wallet_balance
            let userId = this.user.id
            let userFirstName = this.user.name
            console.log(userId)
            if (moviePrice > accountBalance){
                alert('You do not have sufficient amount in your wallet. Kindly fund your wallet');
                this.$router.push('/account')
            } else{
                let calculateBalance = accountBalance - moviePrice
                console.log(calculateBalance)
                let response = await axios.put(`http://localhost:3000/api/user/${userId}`, {
                    "wallet_balance": calculateBalance
                }); if (response){
                    console.log(response)
                    const saveMovie = await axios.post('http://localhost:3000/api/movie/purchased',{
                        "movie_id": movieId,
                        "user_id": userId,
                        "first_name": userFirstName,
                        "movie_title": movieTitle
                    }); if (saveMovie){
                        console.log(saveMovie)
                    }
                    alert('Movie purchased successfully')
                    this.$router.push(`/movie/${movieId}`)
                }
            }
            
            
        },

    },

  

    mounted(){
        this.singleMovie()
        // this.makePayment()
        
    },

}
</script>

<style>

</style>