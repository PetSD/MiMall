<template>
  <div id="app">
    <router-view></router-view>
  </div>
 
</template>

<script>
// import storage from './storage/index.js'

export default {
  name: 'app',
  components: {
    
  },
  data(){
    return{
      
    }
  },
  mounted(){
    // storage.setItem('a',1);  新增一个参数
    // storage.setItem('user',{a:1});  重写user模块
    // storage.setItem('abc',{a:1},'user'); //在user模块上新增abc
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
