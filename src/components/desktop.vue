<template>
  <div>
    <left-content :user_info="user_info" @changeRight="changeRight" :table_config="table_config"/>
    <right-content :user_info="user_info" :table_config="table_config"/>
  </div>
</template>

<script>
import LeftContent from './LeftContent'
import RightContent from './RightContent'
// import "../../static/js/jquery-3.2.1.min.js";
// import "../../static/js/cookie.js";
// import "../../static/js/fundebug.0.3.6.min.js";
// import "../../static/js/bootstrap.min.js";
// import "../../static/js/inspinia.js";
// import "../../static/js/jquery.metismenu.js";
// import "../../static/js/jquery.slimscroll.min.js";
// import "../../static/js/pace.min.js";
// // import "../../static/js/toastr.min.js";
// import "../../static/js/spin.min.js";
// import "../../static/js/ladda.min.js";
// import "../../static/js/ladda.jquery.min.js";
// import "../../static/js/jquery.validate.min.js";
// import "../../static/js/validate_msg_cn.js";
// import "../../static/js/switchery.min.js";
// import "../../static/js/sweetalert.min.js";
// import "../../static/js/iconfont.js";
// import "../../static/js/jquery.resizablecolumns.js";
// import "../../static/js/footable.all.min.js";
export default {
  name: 'desktop',
  mounted: function () {
    this.$nextTick(function () {
      this.getUserInfo();
    })
  },
  components: { LeftContent,RightContent },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App..........',
      user_info:{},
      table_config:{name:'baidu_speed'}
    }
  },
  methods:{
    getUserInfo:function(){
      var url = this.HOST+'/service/urlcore/webreg.php?m=getUserInfo';
      this.$http.post(url,{f:7},{emulateJSON:true,withCredentials:true}).then(response => {
        if (response.body) {
          this.user_info = response.body
        }
      },response => {

      });
    },
    changeRight:function(data){
      // console.log('changeRight1======>',data);
      this.table_config=data;
      // console.log('changeRight2======>',this.$refs);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
@import "../../static/css/bootstrap.min.css";
@import "../../static/css/font-awesome.min.css";
@import "../../static/css/toastr.min.css";
@import "../../static/css/sweetalert.css";
@import "../../static/css/animate.css";
@import "../../static/css/style.css";
@import "../../static/css/iconfont.css";
@import "../../static/css/switchery.min.css";
@import "../../static/css/index.css";
@import "../../static/css/ladda-themeless.min.css";
</style>
