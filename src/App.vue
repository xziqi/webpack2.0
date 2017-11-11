<!--以后项目的根组件-->
<template>
   <div>
       <!--template存放html结构-->
       <div v-text='msg' class='color'></div>
       <router-link to="/login">登录</router-link>
       <router-link to="/register">注册</router-link>
       <!--占位-->
       <router-view></router-view>

       <mt-button type="danger" size="large" @click='tip'>danger</mt-button>

       <!--mui九宫格-->
       <div class="mui-content">
           <ul class="mui-table-view mui-grid-view mui-grid-9">
               <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                   <span class="mui-icon mui-icon-home"></span>
                   <div class="mui-media-body">Home</div></a></li>
               <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                   <span class="mui-icon mui-icon-email"><span class="mui-badge">5</span></span>
                   <div class="mui-media-body">Email</div></a></li>
               <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                   <span class="mui-icon mui-icon-chatbubble"></span>
                   <div class="mui-media-body">Chat</div></a></li>
               <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                   <span class="mui-icon mui-icon-location"></span>
                   <div class="mui-media-body">location</div></a></li>
               <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                   <span class="mui-icon mui-icon-search"></span>
                   <div class="mui-media-body">Search</div></a></li>
               <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                   <span class="mui-icon mui-icon-phone"></span>
                   <div class="mui-media-body">Phone</div></a></li>
               <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                   <span class="mui-icon mui-icon-gear"></span>
                   <div class="mui-media-body">Setting</div></a></li>
               <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                   <span class="mui-icon mui-icon-info"></span>
                   <div class="mui-media-body">about</div></a></li>
               <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                   <span class="mui-icon mui-icon-more"></span>
                   <div class="mui-media-body">more</div></a></li>
           </ul>
       </div>

       <!--图文列表-->
       <ul class="mui-table-view">
           <li class="mui-table-view-cell mui-media">
               <a href="javascript:;">
                   <img class="mui-media-object mui-pull-left" src="http://www.webhm.top:8080/upload/201504/16/201504161149414479.jpg">
                   <div class="mui-media-body">
                       幸福
                       <p class='mui-ellipsis'>能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？</p>
                   </div>
               </a>
           </li>
           <li class="mui-table-view-cell mui-media">
               <a href="javascript:;">
                   <img class="mui-media-object mui-pull-left" src="http://www.webhm.top:8080/upload/201504/16/201504161149414479.jpg">
                   <div class="mui-media-body">
                       木屋
                       <p class='mui-ellipsis'>想要这样一间小木屋，夏天挫冰吃瓜，冬天围炉取暖.</p>
                   </div>
               </a>
           </li>
           <li class="mui-table-view-cell mui-media">
               <a href="javascript:;">
                   <img class="mui-media-object mui-pull-left" src="http://www.webhm.top:8080/upload/201504/16/201504161149414479.jpg">
                   <div class="mui-media-body">
                       CBD
                       <p class='mui-ellipsis'>烤炉模式的城，到黄昏，如同打翻的调色盘一般.</p>
                   </div>
               </a>
           </li>

       </ul>

   </div>
</template>

<script>
    //mint-ui里的js components在哪里用就在哪里导入
    import { Toast } from 'mint-ui';
//    es6语法，导出.vue这个组件对象（本质上是一个Vue对象）
    export default{
        data(){   //等价于es5的 data:function () {}
            return{
                msg:'Hello Vuejs2222'
            }
        },
        created(){

        },
        methods:{
            tip:function () {
                Toast('你好吗？')
            }
        }
    }
</script>

<style scoped>
    /*scoped表示这个里面写的css样式只在当前组件页面起作用，不会影响到其他页面组件，限制使用范围*/
.color{
    color:#0094ff;
}
</style>