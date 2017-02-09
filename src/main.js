import Vue from 'vue'
import "babel-polyfill"
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import NProgress from 'nprogress'
import moment from 'moment'
import 'nprogress/nprogress.css'
import routes from './config/routes'
import store from './store/'
import common from './component/' //加载公共组件
import ElementUI from 'element-ui'
import './theme/index.css'//自定义的element-ui主题库
//import './theme-default/index.css'//自定义的element-ui主题库
//import 'element-ui/lib/theme-default/index.css'//样式文件用到时需要单独引入
import './css/common.css'
import './css/reset.css'
import './css/font/icomoon/style.css'
import './less/common.less'

//import 'animate.css'
//全局注册所有src/compoment文件夹下的公共组件
Object.keys(common).forEach((key) => {
    var name = key.replace(/(\w)/, (v) => v.toUpperCase()) //首字母大写
    Vue.component(`common${name}`, common[key])
})

//Vue路由
Vue.use(VueRouter)

//ele UI库
Vue.use(ElementUI)

//加入ajax支持
Vue.use(VueResource)

const router = new VueRouter({
    routes
})

//进度条设置
NProgress.configure({easing: 'ease', speed: 500,showSpinner:false});

//前端判断用户是否登录
router.beforeEach(({meta, path}, from, next) => {
    var {auth = true} = meta
    var isLogin = Boolean(store.state.user.userName) //true用户已登录， false用户未登录
    if (auth && !isLogin && path !== '/login') {
        return next({ path: '/login' })
    }
    NProgress.start();
    next()
});
router.afterEach(transition => {
    NProgress.inc(0.6);
    setTimeout(function(){
        NProgress.done();
    },300)
});
/*根据ajax请求接口展示loading 并防止表单和查询重复提交 利用vue-resource的全局拦截器*/
Vue.http.interceptors.push(function(request, next) {
    // ...
    // 请求发送前的处理逻辑
    // ...
    store.dispatch('LOCK');//ajax状态 锁定
    //console.log(store.state.user)
    next(function(response) {
        // ...
        // 请求发送后的处理逻辑
        // ...
        // 根据请求的状态，response参数会返回给successCallback或errorCallback
        store.dispatch('UNLOCK');//ajax状态 解除锁定
        if(!response.ok){
            this.$message.error('网络链接异常，请检查网络设置');
        }else{
            switch(parseInt(response.data.code)){
                case 1001://session超时
                    this.$router.push({ path: '/login' })
                    break;
                case 1002://没有权限
                    this.$router.push({ path: '/login' })
                    break;
            }
        }
        return response
    })
})
/*util functions start*/
Array.prototype.remove = function(b) {
    var a = this.indexOf(b);
    if (a >= 0) {
        this.splice(a, 1);
        return true;
    }
    return false;
};
Vue.filter('moment', function (value, formatString) {
    formatString = formatString || 'YYYY-MM-DD';
    return value?moment(value).format(formatString):'--';
});
Vue.filter('float', {
    // model -> view
    // 在更新 `<input>` 元素之前格式化值
    read: function(val) {
        return val.toFixed(2)
    },
    // view -> model
    // 在写回数据之前格式化值
    write: function(val, oldVal) {
        var number = +val.replace(/[^\d.]/g, '')
        return isNaN(number) ? 0 : parseFloat(number.toFixed(2))
    }
});
Vue.filter( 'number' , function(value) {
    return isNaN(value) ? 0.00 : parseFloat(value).toFixed(2)
});
/*util functions end*/
//启动路由
new Vue({ store, router }).$mount('#app')