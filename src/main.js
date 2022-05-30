import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios';
import VueAxios from 'vue-axios';


// 根据前端的跨域方式做调整  /a/b : /api/a/b => /a/b
axios.defaults.baseURL = '/api';
axios.defaults.timeout = 8000;
// 接口错误拦截
axios.interceptors.response.use(function(response){
    let res = response.data;
    if(res.status == 0){
        return res.data;
    }else if(res.status == 10 ){
        window.location.href = '/#/login';
    }else{
        alert(res.msg);
    }

})

const app = createApp(App);
app.use(router)
app.mount('#app')