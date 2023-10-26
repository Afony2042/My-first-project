<template>
    <div class="container">
      <h1>Список крупных городов США</h1>
      <div v-if="isLoad" class="loading">
        <img src="../assets/1647521419_1-bigfoto-name-p-loading-1.png" alt="load">
        Загрузка данных...
      </div>
      <div v-else class="data"> 
        <div class="city" v-for="(el, i) in teamData" :key="el.id">
         <div> {{ i + 1 }}.{{ el.city }} </div> 
          <img src="../assets/X-Shape-PNG-Photo.png" @click="removeTeam(el.id)" />
        </div>
      </div>
      
    </div>
</template>

<script>
export default {
  name: 'ApiPage',
  data(){
    return{
      teamData: [],
      isLoad: true
    }
  },
  methods:{ 
    removeTeam(id){
      this.teamData = this.teamData.filter((el) => el.id !==id)
    },
  },
  mounted() {
      const url = "https://free-nba.p.rapidapi.com/teams?page=0";
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": "488f437511msh2d3854838388c55p13692cjsn135921cfebdf",
          "X-RapidAPI-Host": "free-nba.p.rapidapi.com",
        },
      };
    
    fetch(url,options)
    .then((res)=> res.json())
    .then((res)=> {
      this.teamData = res.data
      this.isLoad = false
    })
  }
}
</script>

<style scoped>

h1 {
  color: aliceblue;
  
}
.container {
  padding-top: 100px;
  padding-bottom: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
}

.data {
  color: aliceblue;
  font-style: italic;
  font-size: 20px;
  padding-top: 5px;
  text-align: left;
  position: relative;
  left: 47%;
}

.city {
  display: flex;
}

img {
  width: 20px;
  height: 20px;
  margin-left: 5px;
}



</style>