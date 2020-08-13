<template>
  <div id="app">
      <h2>{{ message }}</h2>

      <ul>
        <li v-for="(item, index) in list" :key="index">{{item}}</li>
      </ul>

      <div>
        {{count}}
        <button @click="addCounter">加1</button>
      </div>

      <div v-bind:class="{'theme-dark': isDark}">
        修改样式

        <button @click="toggleTheme">切换样式</button>
      </div>

      <div >
        <h2>天气预报 </h2>
        <input type="text" placeholder="输入城市" v-model="city">
        {{city}}
        <Weather :city="city" />

      </div>
  </div>
</template>

<script>
import Weather from './components/Weather.vue'

export default {
  name: 'App',
  components: {
    Weather
  },
    data: () => ({
    message: 'Hello Vue!',
    list: ['HTML', 'CSS', 'JavaScript'],
    count: 0,
    isDark: true,
    city: '上海'
  }),
  
  methods: {
    addCounter() {
      this.count++
    },
    
    toggleTheme() {
      this.isDark = !this.isDark 
    }
  }
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
