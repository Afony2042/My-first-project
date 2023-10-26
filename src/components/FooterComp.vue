<template>
    <div class="container">
        <nav>
            <p>Сделано <a target="_blank" href="http://vk.com/id588422205">Афониным Андреем</a> </p>
            <p> Время проведенное на сайте 
                <br>
            {{formattedElapsedTime}}</p>
            <p> Используется фреймворк <a target="_blank" href="https://vueframework.com/">Vue.js</a> </p>
        </nav>
    </div>
</template>

<script>
export default {
    name: "FooterComp",
    data() {
    return {
      elapsedTime: 0,
      timer: undefined
    };
  },
  computed: {
    formattedElapsedTime() {
      const date = new Date(null);
      date.setSeconds(this.elapsedTime / 1000);
      const utc = date.toUTCString();
      return utc.substr(utc.indexOf(":") - 2, 8);
    }
  },
  mounted() {
      this.timer = setInterval(() => {
        this.elapsedTime += 1000;
      }, 1000);
    
  }
}
</script>

<style scoped>
.container {
    position: fixed;
    right: 0;
    bottom: 0;
    background-color: #37004e;
    color: aliceblue;
    height: 80px;
}
nav {
    display: flex;
    justify-content: space-around;
    align-items: baseline;
    width: 100%;
}

p {
  padding-top: 10px ;
  font-family:'Commissioner', sans-serif;
  font-size: 16px;
}

a {
  font-family:'Commissioner', sans-serif;
  text-decoration: none;
  color: rgb(203, 176, 255);
}

a:hover {
  color: rgb(187, 150, 254);
}
</style>