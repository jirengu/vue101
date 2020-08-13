# Vue 快速入门
## 传统思路
1. 选择元素
2. 绑定事件
3. 获取数据（可选）
4. 直接修改DOM内容或者属性，或者拼接DOM挂载到目标结点

##MVVM思路

1. 数据、模版
2. 数据变自动触发视图改变，只需关注数据的操作
Vue使用范例
```
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <title>Vue 使用范例1</title>
    <style>
      div {
        margin-top: 30px;
      }
      .theme-dark {
        background: #000;
        color: #fff;
      }
    </style>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.6.11/vue.js"></script>
  </head>
  <body>
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
        <h2>天气预报 <button @click="getWeather">获取天气</button></h2>
        <ol v-if="weather">
          <li>城市: {{weather.currentCity}}</li>
          <li>PM2.5: {{weather.pm25}}</li>
          <li>建议:
            <ol>
              <li v-for="(item, index) in weather.index">{{item.des}}</li>
            </ol>
          </li>
        </ol>
      </div>
    </div>
    <script>
      var app = new Vue({
        el: '#app',
        data: {
          message: 'Hello Vue!',
          list: ['HTML', 'CSS', 'JavaScript'],
          count: 0,
          isDark: true,
          weather: null
        },
        methods: {
          addCounter() {
            this.count++
          },
          toggleTheme() {
            this.isDark = !this.isDark 
          },
          getWeather() {
            fetch('http://api.jirengu.com/getWeather.php')
              .then(res => res.json())
              .then(ret => {
              console.log(ret.results[0])
              this.weather = ret.results[0]
            })
          }
        }
      })
    </script>
  </body>
</html>

```
见demo1

>当项目越来越复杂...

## 模块化与组件化

• 一个模块一个文件
• 组件可复用
• 把源码构建为可上线运行的代码的工具和一系列插件
• 脚手架：快速搭建项目结构的工具

#### 使用vue-cli脚手架搭建项目结构
```
yarn global add @vue/cli
vue create demo
cd demo
yarn serve
```

相关概念

• 组件
• 生命周期

>当一个页面变成一个有多个“页面”当项目
## 路由

假设

• 页面pageA，真实结构为： 组件a + 组件x + 组件b
• 页面pageB，真实结构为： 组件a + 组件y+ 组件b

则 组件x 和 组件y 是根据页面url（或者哈希）变化需要切换展示的部分。

对于任意页面，我们都可以设置页面结构为： 组件a + `<router-view>` + 组件b，其中 <router-view>会根据url变化切换展示合适组件。

只需要提前做好配置 ： 

• 对于 路由 /pageA ， `<router-view>` 设置为组件x
• 对于 路由 /pageB,  `<route-view>` 设置为组件y

那么当url变为 /pageA 时， 组件a + `<router-view>` + 组件b 会变成  组件a + 组件x + 组件b

用法范例

```
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Home from './Home.vue'
import Weather from './Weather.vue'
Vue.use(VueRouter)
const router = new VueRouter({
  routes: [
    {
      path: '/', component: Home
    },
    {
      path: '/Weather', component: Weather
    }
  ]
})
new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')
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
  name: 'App'
}
</script>

```
>当不同组件状态越来越多，并且需要互用时，情况变得越来越复杂

## 全局状态管理

思路：

• 把一些需要共享的数据放到全局
• 任意组件都能轻易获取并修改数据
• 修改数据遵循一定规则

概念

• state
• getter
• mutation
• action

课程代码 https://github.com/jirengu/vue101