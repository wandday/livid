<template>
  
<!-- HERO SECTION -->
<div>

<div class="w-full h-screen bannerHome text-white flex flex-col  justify-center align-middle ">

  <div class=" m-auto flex flex-col mt-20 text-center font-poppins">
    <h1 class="text-5xl font-semibold" >
      Watch your favourite <br> African movies
    </h1>
    <h3 class="text-center mt-2 text-xl">



      
      for as low as ₦ 100
    </h3>

    <div class="">
      <div class="flex md:order-2">
        <router-link to="/signup" class="w-full"><button type="button" class="text-white  bg-lividPurple hover:bg-purple focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-3 text-center mr-3 md:mr-0 dark:bg-purple dark:hover:bg-purple-700 dark:focus:ring-purple w-full mt-7">Get Started</button></router-link>
      </div>
  
    </div>
  </div>
    
</div>

<div class="bg-black w-full py-14 px-56 h-max flex justify-between">
  <div class=" mt-16 flex flex-col  text-left font-poppins" >
    <h1 class="text-5xl font-semibold text-white mt-10" >
      Pay Per View
    </h1>
    <h3 class=" mt-4 text-xl text-white">
      watch latest nollywood movies <br> without breaking the bank
    </h3>
  </div>

  <div class="">
    <img src="../assets/images/bloodSister.jpg" alt="" class="h-96 w-12/12" />
  </div>
</div>



<div class=" px-32 w-full h-screen movieFlyer text-white flex  justify-center align-middle items-center">
  <div class=" mt-16 flex flex-col  text-left font-poppins" >
    <h1 class="text-5xl font-semibold text-white mt-10" >
      Nollywood <br> Blockbuster
    </h1>
    <h3 class=" mt-4 text-xl text-white">
      Our collection of trillers will keep you <br> glued to your screen. From romance to crime and comedy
    </h3>
  </div>

  <div class="flex ml-8">
    <div><img src="../assets/images/movie1.webp" alt="" class="w-12/12 h-80 mt-6" /></div>
    <div><img src="../assets/images/movie2.jpg" alt="" class="h-96 w-12/12" /></div>
    <div><img src="../assets/images/movie3.jpg" alt="" class="h-80 w-12/12 mt-6" /></div>
    
  </div>
  
</div>


<div class="bg-black w-full py-14 px-32 h-max flex flex-row-reverse justify-between align-middle">
  <div class="  flex flex-col justify-center text-left font-poppins align-middle" >
    <h1 class="text-5xl font-semibold text-lividPurple mt-10 " >
      Watch your <br> movies offline
    </h1>
    <h3 class=" mt-4 text-xl text-white">
      Save your favourite movies and <br> watch without internet or data 
    </h3>

    <div>
      <div class="flex md:order-2">
      <router-link to="/signup" class="w-full"><button type="button" class="text-white bg-lividPurple hover:bg-purple focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-3 text-center mr-3 md:mr-0 dark:bg-purple-600 dark:hover:bg-purple dark:focus:ring-blue-800 w-full mt-7">Get Started</button></router-link>
      </div>
  
    </div>
  </div>
  

  <div class="">
    <img src="../assets/images/desktopPix.png" alt="" class="h-96 w-12/12" />
  </div>
</div>


</div>

</template>



<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  // name: 'Home',
  // components: {
  //   HelloWorld
  // }
}
</script>


<style scoped>
.bannerHome{
    background-image: linear-gradient(
        rgba(0, 0, 0, 0.8),
        rgba(0, 0, 0, 0.8)

    ),url('../assets/images/bannerHome.jpg');
}

.movieFlyer{
    background-image: linear-gradient(
        rgba(16, 0, 26, 0.9),
        rgba(21, 1, 34, 0.9)

    ),url('../assets/images/movieBanner.jpg');
}

</style>
