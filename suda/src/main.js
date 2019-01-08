import './lantu/store'
import './lantu/utils';
import './lantu/api';
import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import iView from 'iview';
import 'iview/dist/styles/iview.css';
Vue.use(iView);

let channel = utils.getUrlParam('channel');
if (channel) {
  const oldChannel = utils.getObject('channel');
  if (!oldChannel) {
    utils.saveObject('channel', channel);
  }
}
let loginSite = utils.getUrlParam('loginSite');
if (loginSite) {
  api.request('/api/ltshop/bapi/client_site/login_admin_api?siteId=' + loginSite).then(resp=>{
    if (resp.status === 0) {
      location.href = resp.model;
    } else {
      location.replace("/login");
    }
  })
} else {
  store.saveUser(utils.getObject('user') || {});
  global.router = router;
  router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requireAuth)) {
      if (!store.state.user.token) {
        next({
          path: '/login',
          query: { redirect: to.fullPath }
        })
      } else {
        next()
      }
    } else {
      next() // 确保一定要调用 next()
    }
  })
  new Vue({
    el: '#app',
    router,
    render: h => h(App)
  })
}
