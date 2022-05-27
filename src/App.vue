<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import jsonp from 'jsonp'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  mounted(){
    /* //Cors跨域
    let url = "接口地址"
    axios.get(url).then(()=>{
      
    }) */

    //jsonp跨域
    let url = "接口地址"
    jsonp(url,()=>{
      
    })
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
