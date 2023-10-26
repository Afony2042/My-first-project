<template>
  
  <div class="container">
    <NavComp/>
    <div class="content"><router-view></router-view></div>
    <FooterComp/>
  </div>
</template>

<script>
import NavComp from './components/NavComp.vue';
import FooterComp from './components/FooterComp.vue';
import 'fontsource-neucha' 

export default {
  name: 'App',
  components: {
    NavComp,
    FooterComp
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Commissioner:wght@300&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Balsamiq+Sans:wght@400;700&family=Commissioner:wght@300&family=Rubik+Mono+One&display=swap');
#app {
  font-family: Aven, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: 100%;
  width: 100%;
  background-image: url(~/src/assets/1612234617_165-p-fioletovii-zvezdnii-fon-207.jpeg);
  background-size: cover;
  background-position: center;
  min-width: 100vw;
  min-height: 100vh;
}
.container {
  
  text-align: center;
  height: 100%;
  width: 100%;
}

.content {
  padding: 100px;
}

h1{
    color: white;
    font-family: 'Balsamiq Sans', sans-serif;
}

button{
    margin-left: 10px;
    background-color: #bc04f9;
    color: #fff;
    padding: 10px 20px;
    border-width: 2px;
    border-color: #8c00dd;
    border-radius: 30px;
    font-size: 16px;
    transition: 0.3s ease;
    border-style: outset;
}

button:hover {
    background-color: #9e00d3;
    border-color: #7601ba;
    color: #d2d2d2;
    transform: scale(0.95);
}

input {
    border: 2px solid #a700e4;
    background-color: #ffffff;
    border-radius: 10px;
    margin-left: 10px;
    padding: 3px;       
    font-size: 20px;
    
}

p {
    font-family: 'Commissioner', sans-serif;
    font-size: 18px;
    color: aliceblue;
}
</style>
