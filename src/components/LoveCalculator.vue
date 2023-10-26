<template>
    <div class="content ">
        <h1>Любовный калькулятор</h1>
    <form @submit.prevent="calculateLove">
      <label for="name1">Ваше имя:</label>
      <input type="text" id="name1" v-model="name1" required>
      <br>
      <label for="name2">Имя партнера:</label>
      <input type="text" id="name2" v-model="name2" required>
      <br>
      <button  type="submit">Расчитать</button>
    </form>
    <div v-if="result">
      <h2>Результат:</h2>
      <p>{{ result }}</p>
    </div>
    </div>
</template>

<script>
export default {
    name: 'LoveCalculator',
    data() {
        return{
            name1: '',
            name2: '',
            result: ''
        }
    },
    methods: {
        calculateLove() {
            const url = `https://love-calculator.p.rapidapi.com/getPercentage?fname=${this.name1}&sname=${this.name2}`;
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': '7dbc89d6f1msh920bda82c79596dp1c8a00jsn183d0bef7c3f',
                    "X-RapidAPI-Host": 'love-calculator.p.rapidapi.com'
                }
            }
            fetch(url,options)
            .then(response => response.json())
            .then(data => {
                this.result = data.result;
            })
            .catch(error => {
                console.log(error);
            });
        }
    }
}
</script>

<style scoped>
.content{
    height: 300px;
    width: 300px;
    padding-left: 40%;
    
}

h1 {
    font-size: 40px;
}

h2 {
    color: white;
    font-family: 'Balsamiq Sans', sans-serif;
}

label {
    font-family: 'Commissioner', sans-serif;
    font-size: 18px;
    color: aliceblue;
}

p {
    font-size: 22px;
}

input {
    margin: 5px;
}

button{
    margin: 10px;
}


</style>