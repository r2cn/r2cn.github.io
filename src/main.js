import Vue from 'vue'
import VueRouter from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import routes from './config/routes'
import store from './store/'
import common from './component/' //加载公共组件
import ElementUI from 'element-ui'
import './theme/index.css'//自定义的element-ui主题库
import './css/reset.css'
import './less/common.less'
import './css/talent.css'
import $ from 'jquery'
import  './lib/jquery.mousewheel'

//全局注册所有src/compoment文件夹下的公共组件
Object.keys(common).forEach((key) => {
    var name = key.replace(/(\w)/, (v) => v.toUpperCase()) //首字母大写
    Vue.component(`common${name}`, common[key])
})

//Vue路由
Vue.use(VueRouter)

//ele UI库
Vue.use(ElementUI)

const router = new VueRouter({
    routes
})

//进度条设置
NProgress.configure({easing: 'ease', speed: 500,showSpinner:false});

router.beforeEach(({meta, path}, from, next) => {
    NProgress.start();
    next()
});
router.afterEach(transition => {
    NProgress.inc(0.6);
    setTimeout(function(){
        NProgress.done();
    },300)
});
//启动路由
new Vue({ store, router }).$mount('#app')