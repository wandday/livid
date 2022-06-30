<template>
<!-- SELECTED MOVIE SECTION -->
  <div >
      <div  class="w-full h-screen movie_scene text-white flex relative">
          <div class=" pt-8 px-16 h-max flex font-poppins">

              <div class="flex justify-between">
                <div>
                    <img :src="movieDetails.poster" alt="" class="h-96 w-12/12"/>
                </div>
                <div class="absolute right-0 mr-16 p-2 bg-white bg-opacity-10" ><h1 class="  text-1xl font-medium mb-4 ">Rated <br> {{movieDetails.notice}}</h1></div>
                <div class="absolute h-20 mr-14 right-0 p-1 bg-lividPurple"></div>
              </div>
              
              <div>
                <div class="pl-12 font-poppins flex flex-col">
                    <div class=" text-left">
                        <h1 class="text-2xl font-medium"> {{movieDetails.title}}</h1>
                        
                        <h1 class="mt-2 ">{{movieDetails.year}} <span class="ml-1">-</span> <span>{{movieDetails.duration}}</span> </h1>
                        <h1 v-if="!isPurchased" class="p-1 bg-white bg-opacity-10 text-lg ">₦ {{movieDetails.price}}</h1>
                        <h1 v-if="isPurchased" class="p-1 bg-white bg-opacity-10 text-lg text-lividPurple ">Purchased</h1>
                    </div>

                    <div v-if="!isPurchased" class="mt-8 bg-lividPurple px-2 py-1 text-center rounded ">
                        <button @click="selectedMovie(movieDetails.movie_id)" class="font-medium">Buy This Movie</button>
                    </div>
                    <div v-if="isPurchased" class="mt-8 bg-lividPurple px-2 py-1 text-center rounded ">
                        <button @click="videoDisplay" class="font-medium">Play Movie</button>
                    </div>
                </div>

                <div class="">
                    <div class="absolute z-50">
                        <div  v-if="showVideo" class="relative">
                        <i  @click="closeVideo" class="ri-close-fill ri-1x absolute right-0 mr-4 mt-2 cursor-pointer bg-black"></i>
                        <iframe :src="movieDetails.url"  width="560" height="315" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>

                <div class="absolute pl-12 mt-12 w-7/12 text-justify">
                    <p>{{movieDetails.description}}</p>
                    
                    <div class="flex">
                        <div class="mt-8 text-sm font-medium flex flex-col">
                            <h1 class="my-1">DIRECTED BY </h1>
                            <h1 class="my-1">WRITTEN BY </h1>
                            <h1 class="my-1">CAST </h1>
                            <h1 class="my-1">GENRE </h1>
                            <h1 class="my-1">PRODUCED BY </h1>
                        </div>
                        <div class="mt-8 ml-8 text-sm flex flex-col">
                            <h1 class="my-1"> {{movieDetails.director}} </h1>
                            <h1 class="my-1"> {{movieDetails.writer}}</h1>
                            <h1 class="my-1"> {{movieDetails.cast}}</h1>
                            <h1 class="my-1"> {{movieDetails.genre}} </h1>
                            <h1 class="my-1">{{movieDetails.producer}} </h1>
                        </div>
                    </div>

                </div>

              </div>
                  
          </div>
      </div>

<!-- SIMILAR MOVIE SECTION -->
      <div class="bg-black  w-full py-10 px-16 h-max flex flex-col justify-between">

          <div class="  flex  justify-between text-left font-poppins text-white">
              <div>
                  <h1 class="text-lg font-normal">Watch Similar Movie</h1>
              </div>
              <div class=" bg-lividPurple px-2 py-1 text-center rounded">
                  <button class="font-medium ">BROWSE ALL </button>
              </div>
          </div>
          <div class="flex justify-between mt-6">
              <div >
                  <img  src="../assets/movies/posters/omogetto.jpg" alt="" class=" h-96 w-64 scale-90 hover:scale-100 ease-in duration-300 cursor-pointer" />
              </div>
              <div>
                  <img src="../assets/movies/posters/This_Lady_Called_Life_Poster.jpg" alt="" class="h-96 w-64 scale-90 hover:scale-100 ease-in duration-300 cursor-pointer" />
              </div>
              <div>
                  <img src="../assets/movies/posters/gone.jpg" alt="" class="h-96 w-64 scale-90 hover:scale-100 ease-in duration-300 cursor-pointer" />
              </div>
              <div>
                  <img src="../assets/movies/posters/fine-wine.jpg" alt="" class="h-96 w-64 scale-90 hover:scale-100 ease-in duration-300 cursor-pointer" />
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
            movieDetails:{},
            url_id: null,
            showVideo:false,
            isPurchased: false,
        }
    },

    methods: {
        async singleMovie(){
            const movie_url = this.$route.params.id
            
            console.log(movie_url)
            try{
                const response = await axios.get(`http://localhost:3000/api/user/movies/${movie_url}`)
                console.log(response.data.data)
                let eachMovie = response.data.data
                this.movieDetails = eachMovie
                console.log(eachMovie.movie_id)

                let userId = this.user.id
                const result = await axios.get(`http://localhost:3000/api/movie/paid/${userId}`)
                console.log(result.data.data)
                const checkMovie = result.data.data
                for (let i = 0; i < checkMovie.length; i++ ){
                    console.log(checkMovie[i].movie_id)
                    if (checkMovie[i].movie_id === eachMovie.movie_id){
                        this.isPurchased = true
                        console.log(this.isPurchased)
                    }
                
                }   
                
            } catch (error) {}

        },

        

        videoDisplay(){
            this.showVideo = true
        },
        closeVideo(){
            this.showVideo = false
        },

        selectedMovie(id){
        this.$router.push(`/payment/${id}`);
        }
    },

    name: 'Movie',
    mounted(){
        this.singleMovie(),
        this.url_id=this.$route.params.id;
        
    },



};


</script>




<style>

.movie_scene{
    background-image:
     linear-gradient(
        rgba(16, 0, 26, 0.9),
        rgba(21, 0, 34, 0.9)

    ),url('../assets/movies/scenes/kambili-scene.jpg');
    background-repeat: no-repeat;
    background-size: cover
}


</style>


