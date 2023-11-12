<script setup>
import HelloWorld from '@/components/HelloWorld.vue';
import SideBar from '@/components/sidebar.vue'
import HeaderScreen from '@/components/header.vue'
import MainScreen from '@/components/main.vue'
import FooterScreen from '@/components/footer.vue'

</script>
<template>
  <!-- <h1>Hello vue</h1> -->
  <!-- <HelloWorld></HelloWorld> -->
  <!-- <hello-world></hello-world> -->
  <!-- <HelloWorld/> -->
  
  <div class="container" >
    
    <side-bar></side-bar>
    <div class="contain">
      <header-screen></header-screen>
      <main-screen></main-screen>
      <FooterScreen></FooterScreen>
      
    </div>
    
  </div>
  
</template>
<style scoped>
  .container{
    width: 100%;
    height: 100vh;
    display: flex;
   
  }
  .contain{
    width: 90%;
    height: 100vh;
    /* background-color: blue; */
  }
 
</style>