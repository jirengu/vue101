<template>
  <div id="weather">
    <h3>天气预报 </h3>
    <input type="text" placeholder="输入城市" v-model="city">
    {{city}}
    <Weather :city="city" />
  </div>
</template>

<script>
import Weather from './components/Weather.vue'
export default {
  name: 'Home',
  data() {
    return {
      city: '杭州'
    }
  },
  components: {
    Weather
  }
}
</script>

<style>

</style>
