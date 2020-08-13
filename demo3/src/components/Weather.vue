<template>
  <div>

        <ol v-if="weather">
          <li>城市: {{weather.currentCity}}</li>
          <li>PM2.5: {{weather.pm25}}</li>
          <li>建议:
            <ol>
              <li v-for="(item, index) in weather.index" :key="index">{{item.des}}</li>
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
      weather: null
    }
  },

  watch: {
    city(newValue) {
      console.log(newValue)
      this.getData(newValue)
    }
  },

  created() {
    console.log(this.getData)
    this.getData(this.city)
  },

  methods: {
    getData(city) {
      fetch('http://api.jirengu.com/getWeather.php?city=' + city)
        .then(res => res.json())
        .then(ret => {
        console.log(ret.results[0])
        this.weather = ret.results[0]
      })
    }
  }



}
</script>

<style socped>

</style>