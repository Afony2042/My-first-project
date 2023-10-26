<template>
    <div>
        <h3> Страница не найдена </h3>
        <p>По неизвестной причине страница была не найдена</p>
        <p>Вы можете попробовать разобраться с проблемой тут</p>
        <a target="_blank" href="https://help.reg.ru/support/hosting/sayt-ne-rabotayet/oshibka-404">
          <img src="../assets/404.png" alt="404">
        </a>
    </div>
</template>

<script>
export default {
  name: 'NotFoundView',
}
</script>

<style scoped>
div {
  padding-top: 300px;
  color: aliceblue;
}

p {
  font-size: 20px;
}

img:hover {
  transform: scale(1.1);
}

img {
  padding-top: 10px;
  height: 300px;
  width: 700px;
  transition: 0.3s ease;
}
</style>