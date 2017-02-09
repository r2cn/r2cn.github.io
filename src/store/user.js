import Vue from 'vue'
let state={};
if(sessionStorage.getItem('user')){
    state = JSON.parse(sessionStorage.getItem('user'));
    //此处务必要将moduleList等用户信息从session中取出 否则可能拿不到菜单
    if(state.pmsModuleList){
        Object.assign(state, {lock:false})
    }else{
        Object.assign(state, {lock:false,pmsModuleList:[]})
    }
}else{
    state = {lock:false,pmsModuleList:[]}
}
export default {
    state: state,
    mutations: {
        /**
         * 登录
         * 
         * @param {Object} state
         * @param {Object} user
         */
        SIGNIN(state, user) {
            sessionStorage.setItem('user', JSON.stringify(user));
            Object.assign(state, user)
        },
        /**
         * 退出登录
         * 
         * @param {Object} state
         */
        SIGNOUT(state) {
            sessionStorage.removeItem('user');
            Object.keys(state).forEach(k => Vue.delete(state, k))
        },
        /**
         * ajax请求加锁
         *
         * @param {Object} state
         */
        LOCK(state) {
            //Object.assign(state, {lock:true})
            state.lock =true
        },
        /**
         * ajax请求解锁
         *
         * @param {Object} state
         */
        UNLOCK(state) {
            //Object.assign(state, {lock:false})
            state.lock =false
        },
        /**
         * 授权
         *
         * @param {Array} roleList
         */
        AUTHORIZE(state, pmsModuleList) {
            state.pmsModuleList =pmsModuleList
        }
    },
    actions: {//actions支持异步操作
        SIGNIN({commit}, user) {
            //ajax异步操作 调用登录接口 success后保存用户信息
            commit('SIGNIN', user)
        },
        SIGNOUT({commit}) {
            commit('SIGNOUT')
        },
        LOCK({commit}) {
            commit('LOCK')
        },
        UNLOCK({commit}) {
            /*setTimeout(() => {
                commit('UNLOCK')
            }, 100)*/
            commit('UNLOCK')
        },
        AUTHORIZE({commit}, pmsModuleList) {
            commit('AUTHORIZE', pmsModuleList)
        }
    }
}