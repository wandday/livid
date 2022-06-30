<template>
<!-- TOP MOVIE SECTION -->
  <div>
      <div  class="w-full h-screen topMovie text-white flex">
          <div  class=" pt-8 px-16 h-max flex font-poppins">
              <div></div>
                <div class="flex flex-col">
                        <div class="flex justify-between">
                            <div><h1 class="  text-2xl font-medium mb-4 ">No 1 on LIVID</h1></div>
                            <div class="absolute right-0 mr-16 p-2 bg-white bg-opacity-10" ><h1 class="  text-1xl font-medium mb-4 ">Rated <br> {{topMovie.notice}}</h1></div>
                            <div class="absolute h-20 mr-14 right-0 p-1 bg-lividPurple"></div>
                        </div>
                        <div @click="singleMovie(topMovie.movie_id)">
                            <img :src="topMovie.poster" alt="" class="h-96 w-12/12 cursor-pointer"/>
                        </div>
                </div>
                
                <div>
                    
                    <div class="pl-12 font-poppins flex flex-col">
                        <div class=" text-left  ">
                            <h1 class="text-2xl font-medium">{{topMovie.title}}</h1>
                            <h1 class="mt-2"> {{topMovie.year}} <span class="ml-1">-</span> <span>{{topMovie.duration}}</span> </h1>
                            <h1 class="p-1 bg-white bg-opacity-10 text-lg">  ₦ {{topMovie.price}}</h1>
                        </div>

                        <div class="mt-8 bg-lividPurple px-2 py-1 text-center rounded ">
                            <button @click="singleMovie(topMovie.movie_id)" class="font-medium" >Watch Now</button>
                        </div>
                    </div>

                

                <div class="absolute pl-12 mt-12 w-7/12">
                    <p>{{topMovie.description}}</p>
                    
                    <div class="flex">
                        <div class="mt-8 text-sm font-medium flex flex-col">
                            <h1 class="my-1">DIRECTED BY </h1>
                            <h1 class="my-1">WRITTEN BY </h1>
                            <h1 class="my-1">CAST </h1>
                            <h1 class="my-1">GENRE </h1>
                            <h1 class="my-1">PRODUCED BY </h1>
                        </div>
                        <div class="mt-8 ml-8 text-sm flex flex-col">
                            <h1 class="my-1"> {{topMovie.director}} </h1>
                            <h1 class="my-1">  {{topMovie.writer}}  </h1>
                            <h1 class="my-1"> {{topMovie.cast}} </h1>
                            <h1 class="my-1"> {{topMovie.genre}} </h1>
                            <h1 class="my-1">{{topMovie.producer}} </h1>
                        </div>
                    </div>

                </div>

              </div>
                  
          </div>
      </div>

<!-- LATEST MOVIE SECTION -->
      <div class="bg-black  w-full py-10 px-16 h-max flex flex-col justify-between">

          <div class="  flex  justify-between text-left font-poppins text-white">
              <div>
                  <h1 class="text-lg font-normal">Latest Titles</h1>
              </div>
              <div class=" bg-lividPurple px-2 py-1 text-center rounded">
                  <button class="font-medium ">BROWSE ALL</button>
              </div>
          </div>
          <div   class="flex justify-between mt-6">
              <div @click="singleMovie(movie.movie_id)"  v-for="movie in lastestFour" :key="movie.movie_id" >
                  <img  :src="movie.poster" alt="" class=" h-96 w-64 scale-90 hover:scale-100 ease-in duration-300 cursor-pointer" />
              </div>
              
          </div>

      </div>


      <!-- PURCHASED MOVIE SECTION -->
      <div class="bg-black bg-opacity-90 w-full py-10 px-16 h-max flex flex-col justify-between">

          <div class="  flex  justify-between text-left font-poppins text-white">
              <div>
                  <h1 class="text-lg font-normal">Titles You've Bought</h1>
              </div>
              <div class=" bg-lividPurple px-2 py-1 text-center rounded">
                  <button class="font-medium ">BROWSE ALL</button>
              </div>
          </div>
          <div class="flex justify-between mt-6">
              <div >
                  <img src="../assets/movies/posters/namasle_wahala.png" alt="" class="h-96 w-64 scale-90 hover:scale-100 ease-in duration-300 cursor-pointer" />
              </div>
              <div>
                  <img src="../assets/movies/posters/omogetto.jpg" alt="" class="h-96 w-64 scale-90 hover:scale-100 ease-in duration-300 cursor-pointer" />
              </div>
              <div>
                  <img src="../assets/movies/posters/the_therapist.jpg" alt="" class="h-96 w-64 scale-90 hover:scale-100 ease-in duration-300 cursor-pointer" />
              </div>
              <div>
                  <img src="../assets/movies/posters/bloodSister.jpg" alt="" class="h-96 w-64 scale-90 hover:scale-100 ease-in duration-300 cursor-pointer" />
              </div>
          </div>

      </div>
  </div>
</template>

<script>

import axios from 'axios'
import { reactive } from '@vue/reactivity'

export default {

    data(){
        return{
            allMovies: [],
            topMovie: {},
            lastestFour:[],
           
        }
    },

    methods: {
        async fetchMovies() {
            try{
                const response = await axios.get('http://localhost:3000/api/users/movies/')
                console.log(response.data.data)

                 const getMovies = response.data.data
                 const movieStatus = getMovies.find(movie => movie.istopmovie)
                 this.topMovie = movieStatus
                 console.log(movieStatus);

            } catch (error) {}
        },


        async lastestMovie(){
            try{
                const response = await axios.get('http://localhost:3000/api/users/movies/latest')
                console.log(response.data.data)

                const getLastestFour = response.data.data
                this.lastestFour = getLastestFour
                console.log(getLastestFour)
            
            } catch (error) {}

        },

        singleMovie(id){
        this.$router.push(`/movie/${id}`); 
      }

        
    },

    
    mounted(){
        this.fetchMovies(),
        this.lastestMovie()
    },

    
}


</script>




<style>

.topMovie{
    background-image: linear-gradient(
        rgba(16, 0, 26, 0.9),
        rgba(21, 0, 34, 0.9)

    ),url('../assets/movies/scenes/chief_daddy_scene.jpg');
}


</style>



