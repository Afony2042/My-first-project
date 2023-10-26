<template>
    <div class="main" >
        <div v-if="isAuthorized">
            <h1>Добро пожаловать на мой итоговый сайт!
               <p>Ваше имя: {{ username }} </p>
            </h1>
            <button @click="logout"> Выйти</button>
        </div>

        <div v-else  >
            <h1>Регистрация</h1>
            <label>Имя:</label>
            <input v-model="username" @keyup.enter="login">
            <button @click="login">Войти </button>
        </div>
    </div>
</template>

<script>
export default {
  name: 'MainPage',
  data(){
    return{
        isAuthorized: false,
        username: ''
    }
  },
  methods: {
    login() {
        if(this.username !== '') {
            console.log('Вы вошли в учетную запись как ', this.username)
            this.isAuthorized = true
            localStorage.setItem('isAuthorized',true)
            localStorage.setItem('username', this.username)
            this.$router.push({
                name: 'chat',
                query: {username: this.username}
            })
        } else {
            console.log('Вы не ввели свое имя. Пожалуйста исправьте это.')
        }
    },
    logout() {
        this.isAuthorized = false
        this.username = ''
        localStorage.removeItem('isAuthorized')
        localStorage.removeItem('username')
    }
  },
  created() {
    if(localStorage.getItem('isAuthorized')) {
        this.isAuthorized = true
        this.username =  localStorage.getItem('username')
    }
  }
}
</script>

<style scoped>
.main {
    padding-top: 300px;
}

div {
    padding: 20px;
    font-size: 25px;
}

label{
    margin: 1px
    
}

p {
    font-size: 26px;
}
</style>