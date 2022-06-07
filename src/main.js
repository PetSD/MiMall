import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios';
import VueAxios from 'vue-axios';
// import env from './env'


// mock开关
const mock = false;
if(mock){
    require('./mock/api');
}

// 根据前端的跨域方式做调整  /a/b : /api/a/b => /a/b
// axios.defaults.baseURL = 'https://mock.apifox.cn/m1/1052385-0-default';
axios.defaults.baseURL = '/api';
axios.defaults.timeout = 8000;
// 根据部环境变量获取不同的请求地址
// axios.defaults.baseURL = env.baseURL;
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
app.use(VueAxios,axios)
app.use(router)
app.mount('#app')