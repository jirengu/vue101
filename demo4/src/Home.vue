<template>
  <div id="home" v-bind:class="{'theme-dark': $store.state.themeDark}">
      <h3>首页</h3>
      <ul>
        <li v-for="(item, index) in list" :key="index">{{item}}</li>
      </ul>

      <div>
        {{count}}
        <button @click="addCounter">加1</button>
      </div>

      <div >
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
    count: 0
  }),
  
  methods: {
    addCounter() {
      this.count++
    },
    
    toggleTheme() {
      this.$store.commit('toggleTheme')
    }
  }
}
</script>

<style>

</style>
