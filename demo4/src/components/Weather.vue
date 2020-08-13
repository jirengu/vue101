<template>
  <div>
      <ol v-if="$store.state.weather">
        <li>城市: {{$store.state.weather.currentCity}}</li>
        <li>PM2.5: {{$store.state.weather.pm25}}</li>
        <li>建议:
          <ol>
            <li v-for="(item, index) in $store.state.weather.index" :key="index">{{item.des}}</li>
          </ol>
        </li>
      </ol>
  </div>
</template>

<script>
export default {
  props: {
    city: String
  },

  data() {
    return {
    }
  },

  watch: {
    city(newValue) {
      this.$store.dispatch('getWeather',newValue)
    }
  },

  created() {
    this.$store.dispatch('getWeather',this.city)
  },


}
</script>

<style socped>

</style>