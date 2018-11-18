// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
Vue.use(VueResource)
Vue.config.productionTip = false
Vue.prototype.HOST = 'http://www.service.com'
// Vue.prototype.HOST = ''
Vue.prototype.eventHub = new Vue();
//消息通知
toastr.options = {
  "closeButton": false, //关闭按钮
  "debug": false, //调试开关
  "progressBar": false, //进度条
  "preventDuplicates": true, //防止重复
  "positionClass": "toast-top-center", //顶部中间
  "onclick": null, //点击回调
  "showDuration": "400", //显示时间
  "hideDuration": "1000", //隐藏时间
  "timeOut": "2000", //缓冲时间
  "extendedTimeOut": "1000",
  "showEasing": "swing", //显示动画
  "hideEasing": "linear", //隐藏动画
  "showMethod": "fadeIn", //显示方式
  "hideMethod": "fadeOut" //隐藏方式
};
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})


router.beforeEach((to,from,next) => {
  window.document.title = to.meta.title;
  next()
});