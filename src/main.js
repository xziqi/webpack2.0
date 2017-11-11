// 1.es6语法，导入Vue,凡是使用npm安装的包 引入的时候都不需要写相对路径 只需要写包名即可
import Vue from 'vue';
//2. 导入App.vue的vue对象
import App from './App.vue';

//4.集成vue-router到这个项目表中
import vueRouter from 'vue-router';
// 4.1将vueRouter对象绑定到Vue对象上
Vue.use(vueRouter);
//4.3引入模板
import login from './components/account/login.vue';
import register from './components/account/register.vue';

//4.2定义路由规则
var router=new vueRouter({
    routes:[
        {path:'/login',component:login},
        {path:'/register',component:register}
    ]
})

// 5.导入mint-ui
//导入mint-ui中的css
import 'mint-ui/lib/style.min.css'
import mintui from 'mint-ui';
//5.1在vue 中注册mint-ui
Vue.use(mintui);
//5.2按需导入button
import { Button } from 'mint-ui';

// 6.导入mui的 css
import '../statics/mui/css/mui.css'
// 3.利用Vue对象进行解析渲染
new Vue({
    el:'#app',
    //使用路由对象实例
    router,
    //render:function (create) {create(App) } //将App对象导入进来
    render:c=>c(App)  //es6的函数写法   =>goes to 语法
})