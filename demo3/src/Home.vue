<template>
  <div id="home">
      <h3>首页</h3>
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
  </div>
</template>

<script>

export default {
  name: 'Home',
    data: () => ({
    list: ['HTML', 'CSS', 'JavaScript'],
    count: 0,
    isDark: true
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

</style>
