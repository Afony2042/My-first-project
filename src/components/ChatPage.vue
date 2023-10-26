<template>
    <div class="content" v-if="username">
      <h1>Чат для общения</h1>
      <div class="chatContainer"> 
        <div class="messageContainer">

          <div class="text" v-for="message in messages" :key="message.id">
           <p> {{ message.user}}: {{ message.text }} </p>
          </div>

          <div v-show="emptyMsg" class="empty">
            <p>Сообщений нет</p>
          </div>
        </div>
      </div>
      <div id="inputField"> 
        <input v-model="newMessage" placeholder="Введите сообщение">
        <button @click="sendMessage" @keyup.enter="sendMessage">Отправить</button>
        <button v-show="deleteBtn" @click="delMessage">Удалить</button>
       </div>
    </div>

    <div class="alert" v-else>
     <p class="alertMsg"> Вы не авторизованы! Нажмите <router-link class="route" :to="{name: 'main'}" > сюда </router-link> для регистрации </p>
    </div>
</template>

<script>
export default {
  name: 'ChatPage',
  data(){
    return{
      messages: [],
      newMessage: '',
      emptyMsg: true ,
      deleteBtn: false,
      username: localStorage.getItem('username')
    }
  },
  computed() {
    localStorage.setItem('username',this.$route.query.username)
  },
  methods: {
    sendMessage() {
      if(!this.username) {
        this.username = 'Anonimus'
      }
      if(this.newMessage !== ''){
        this.emptyMsg = false
        console.log('Вы ввели сообщение', this.newMessage )
        this.messages.push(
          {
            id: new Date().getTime(),
            text: this.newMessage,
            user: this.username
          }
        )
        this.saveChatRecords()
        this.newMessage = ''
        this.deleteBtn = true
      }else{
        console.log('Пожалуйста введите сообщение')
        alert('Пожалуйста введите сообщение')
      }
    },
    delMessage() {
      this.messages = []
      localStorage.removeItem(`messages_${this.username}`, JSON.stringify(this.message))
      console.log('Все сообщения удалены')
      this.emptyMsg = true
    },
    saveChatRecords(){
      const records = this.messages
      console.log(records)
      localStorage.setItem(`messages_${this.username}`, JSON.stringify(records))
    },
    loadChatRecords() {
      const records = JSON.parse(localStorage.getItem(`messages_${this.username}`))
      if(records) {
        this.messages = records
        this.emptyMsg = false
      }
    }
  },
  created() {
    this.loadChatRecords()
  }
}
</script>
<!--h2-->
<style scoped>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: center;
}

.text {
  padding-left: 5px;
  height: 40px;
  display: flex;
  justify-content: flex-start;
}

p {
  font-family: 'Commissioner', sans-serif;
  color: rgb(0, 0, 0);
  font-size: 18px;
}
.chatContainer {
  width: 600px;
  height: 500px;
  margin: 20px ;
  padding: 15px;
  font-weight: 20px;
  background-color: rgba(255, 255, 255, 0.6);
  border-radius:15px ;
  border: 6px solid #af00be;
  overflow-y: auto;
}

.messageContainer {
  padding: 10px;
}

#inputField {
  display: flex;
  align-items: baseline;
}
.empty {
  margin-bottom: 30px;
  color: black;
}

input {
  margin-right: 15px;
}

button {
  margin-left: 5px;
  margin-bottom: 20px;
}

.alert {
  padding: 30px;
}
.alertMsg{
  font-family: 'Commissioner', sans-serif;
  color: rgb(255, 254, 254);
  font-size: 30px;
  margin: 10%;
}

.route {
    font-family: 'Commissioner', sans-serif;
    text-decoration: none;
    font-style: normal;
    color: rgb(230, 170, 255);
}
</style>