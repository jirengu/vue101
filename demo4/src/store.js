const state = {
  themeDark: false,
  weather: null
}

/**
 * store.state.themeDark
 */

const getters = {
  themeText(state) {
    return state.themeDark ? '黑色模式': '白色模式'
  } 
}

/**
 * store.getters.themeText
 */

const mutations = {
  setDarkMode(state) {
    state.themeDark = true
  },

  toggleTheme(state) {
    state.themeDark = !state.themeDark
  },

  setWeather(state, payload) {
    state.weather = payload
  }

}
/**
 * store.commit('setWeather', {...})
 */

const actions = {
  getWeather(context, city) {
    return fetch('http://api.jirengu.com/getWeather.php?city=' + city)
        .then(res => res.json())
        .then(ret => {
        console.log(ret.results[0])
        context.commit('setWeather', ret.results[0])
      })
  }
}
/**
 * store.dispatch('getWeather', '杭州')
 */


export default {
  state,
  getters,
  mutations,
  actions
}