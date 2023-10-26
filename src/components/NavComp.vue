<template>
    <div class="container">
        <nav>
             <RouterLink class="route" to="/">Домашняя страница</RouterLink> 
             <RouterLink class="route" to="/chat">Общение</RouterLink> 
             <RouterLink class="route" to="/love">Любовный калькулятор</RouterLink> 
             <RouterLink class="route" to="/api">Города США</RouterLink> 
        </nav>
    </div>
</template>

<script>
export default {
  name: 'NavComp',
}
</script>

<style scoped>
.container {
    background-color: rgb(208, 138, 255);
    display: flex; 
    height: 60px;
    position: fixed;
    right: 0;
    top:  0;
}

nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 20px;
}

.route {
    font-family: 'Commissioner', sans-serif;
    text-decoration: none;
    font-style: normal;
    color: rgb(255, 255, 255);
    font-size: 25px;
    font-weight: 400;
    transition: 0.3s ease;
}

.route:hover {
    color: rgb(220, 220, 220);
    transform: scale(1.05);
}
</style>