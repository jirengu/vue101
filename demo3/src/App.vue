<template>
  <div id="app">
    <h1>{{ message }}</h1>
    <router-view></router-view>

    <div>
      <router-link to="/weather">到天气页</router-link>
    </div>
    <div>
      <router-link to="/">到首页</router-link>
    </div>
    
  </div>
</template>

<script>


export default {
  name: 'App',
  data: () => ({
    message: 'Hello Vue!'
  })
}
</script>

<style>
div {
  margin-top: 30px;
}

.theme-dark {
  background: #000;
  color: #fff;
}
</style>
