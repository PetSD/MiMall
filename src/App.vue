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
      res:{}
    }
  },
  mounted(){
    // storage.setItem('a',1);  新增一个参数
    // storage.setItem('user',{a:1});  重写user模块
    // storage.setItem('abc',{a:1},'user'); //在user模块上新增abc

    // 本地加载请求静态json文件的形式
    /* this.axios.get('/mock/user/login.json').then((res)=>{
      this.res = res;
    }) */

    // 通过easy-mock平台实现数据mock
    /* this.axios.get('/user/login').then((res)=>{
      this.res = res;
    }); */
 
    // 本地集成mockjs实现数据mock
/*     this.axios.get('/user/login').then((res)=>{
      this.res = res;
    });
 */


  }
}
</script>

<style>
@import './assets/scss/reset.scss'
</style>
