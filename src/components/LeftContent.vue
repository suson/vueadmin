<template>
  <nav class="navbar-default navbar-static-side" role="navigation">
    <div class="sidebar-collapse">
      <ul class="nav metismenu" id="side-menu">
        <li class="nav-header">
          <div class="dropdown profile-element open">
            <span>
<a href="/ucenter.html">
<img src="../../static/picture/thumb_551964ffc06a5.png" style="width: 50px;border-radius: 50%">
</a>
</span>
            <a data-toggle="dropdown" class="dropdown-toggle" href="javascript:;" aria-expanded="true">
<span class="clear"> <span class="block m-t-xs"> <strong class="font-bold"></strong>
</span> <span class="text-muted text-xs block">欢迎回来,{{user_info.name}} <b class="caret"></b></span> </span> </a>
            <ul class="dropdown-menu animated fadeInRight m-t-xs">
              <li><a href="/signout">退出</a></li>
            </ul>
          </div>
          <div class="logo-element">
            帮站
          </div>
        </li>
        <li>
          <a href="/"><i class="fa fa-th-large"></i> <span class="nav-label">首页</span></a>
        </li>
        <li class="" v-for="tabItem in tabList">
          <a href="javascript:void(0);"> <i :class="tabItem.class"></i> <span class="nav-label">{{tabItem.title}}</span><i class="fa arrow"></i></a>
          <ul class="nav nav-second-level collapse" style="height: 0px;">
            <li v-for="subItem in tabItem.subtab"><a href="javascript:void(0);" :style="subItem.style" @click="select_tab(subItem,tabItem.subtab)">{{subItem.title}}<span v-if="subItem.total>=0" class="label label-success pull-right">{{subItem.total}}</span></a>
            </li>
          </ul>
        </li>
        <!-- <li class="">
          <a href="javascript:void(0);"> <i class="iconfont icon-baidu"></i> <span class="nav-label">百度任务</span><i class="fa arrow"></i></a>
          <ul class="nav nav-second-level collapse" style="height: 0px;">
            <li><a href="/3.html">百度排名<span class="label label-success pull-right">0</span></a>
            </li>
            <li><a href="/6.html">百度指数<span class="label label-success pull-right">0</span></a>
            </li>
            <li><a href="/9.html">手机百度<span class="label label-success pull-right">0</span></a>
            </li>
            <li><a href="/10.html">百度下拉<span class="label label-success pull-right">0</span></a>
            </li>
            <li><a href="/11.html">相关搜索<span class="label label-success pull-right">0</span></a>
            </li>
            <li><a href="/12.html">手机百度指数<span class="label label-success pull-right">0</span></a>
            </li>
            <li><a href="/13.html">手机百度下拉<span class="label label-success pull-right">0</span></a>
            </li>
            <li><a href="/14.html">手机相关搜索<span class="label label-success pull-right">0</span></a>
            </li>
            <li><a href="/27.html" style="color: red">百度极速排名<span class="label label-success pull-right">0</span></a>
            </li>
          </ul>
        </li>
        <li class="">
          <a href="javascript:void(0);"> <i class="iconfont icon-360"></i> <span class="nav-label">360任务</span><i class="fa arrow"></i></a>
          <ul class="nav nav-second-level collapse" style="height: 0px;">
            <li><a href="/7.html">360排名<span class="label label-success pull-right">0</span></a>
            </li>
            <li><a href="/16.html">360下拉<span class="label label-success pull-right">0</span></a>
            </li>
          </ul>
        </li>
        <li class="">
          <a href="javascript:void(0);"> <i class="iconfont icon-sougou"></i> <span class="nav-label">搜狗任务</span><i class="fa arrow"></i></a>
          <ul class="nav nav-second-level collapse" style="height: 0px;">
            <li><a href="/8.html">搜狗排名<span class="label label-success pull-right">0</span></a>
            </li>
            <li><a href="/15.html">搜狗下拉<span class="label label-success pull-right">0</span></a>
            </li>
            <li><a href="/30.html">手机搜狗<span class="label label-success pull-right">0</span></a>
            </li>
            <li><a href="/37.html">搜狗极速排名<span class="label label-success pull-right">0</span></a>
            </li>
          </ul>
        </li>
        <li class="">
          <a href="javascript:void(0);"> <i class="fa fa-bar-chart-o"></i> <span class="nav-label">常规流量</span><i class="fa arrow"></i></a>
          <ul class="nav nav-second-level collapse" style="height: 0px;">
            <li><a href="/1.html">普通任务<span class="label label-success pull-right">0</span></a>
            </li>
            <li><a href="/17.html">刷网站流量<span class="label label-success pull-right">0</span></a>
            </li>
            <li><a href="/29.html">刷小说流量<span class="label label-success pull-right">0</span></a>
            </li>
          </ul>
        </li>
        <li class="">
          <a href="javascript:void(0);"> <i class="fa fa-bar-chart-o"></i> <span class="nav-label">神马搜索</span><i class="fa arrow"></i></a>
          <ul class="nav nav-second-level collapse" style="height: 0px;">
            <li><a href="/32.html">神马搜索移动端<span class="label label-success pull-right">0</span></a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#"><i class="fa fa-users"></i> <span class="nav-label">用户中心</span><i class="fa arrow"></i></a>
          <ul class="nav nav-second-level collapse">
            <li><a href="/ucenter.html">用户中心</a></li>
            <li><a href="/profile.html">编辑资料</a></li>
            <li><a href="/invited.html">我邀请的好友</a></li>
          </ul>
        </li>
        <li class="">
          <a href="#"><i class="fa fa-rmb"></i> <span class="nav-label">积分管理</span><i class="fa arrow"></i></a>
          <ul class="/nav nav-second-level collapse" style="height: 0px;">
            <li><a href="/give.html">积分转赠</a></li>
            <li><a href="/points.html">积分记录</a></li>
            <li><a href="/mall.html">积分充值</a></li>
            <li><a href="/recharge.html">充值记录</a></li>
          </ul>
        </li> -->
        <li>
          <a @click="logout" href="javascript:void(0);" >
<i class="fa fa-sign-out"></i> <span class="nav-label" >退出</span>
</a>
        </li>
      </ul>
    </div>
  </nav>
</template>
<script>
export default {
  name: 'LeftContent',
  mounted: function () {
    this.$nextTick(function () {

    })
  },
  props: ['user_info'],
  data() {
    return {
      msg: 'Welcome to Your Vue.js App..........',
      selected_tab_style : {
        color:'red'
      },
      tabList: [{
        "name": "baidu",
        "title": "百度任务",
        "class":"iconfont icon-baidu",
        "subtab":[
          // {
          //   total:0,
          //   name:"百度排名",
          //   title:"百度排名"
          // },{
          //   total:0,
          //   name:"百度指数",
          //   title:"百度指数"
          // },{
          //   total:0,
          //   name:"手机百度",
          //   title:"手机百度"
          // },{
          //   total:0,
          //   name:"百度下拉",
          //   title:"百度下拉"
          // },{
          //   total:0,
          //   name:"相关搜索",
          //   title:"相关搜索"
          // },{
          //   total:0,
          //   name:"手机百度指数",
          //   title:"手机百度指数"
          // },{
          //   total:0,
          //   name:"手机百度下拉",
          //   title:"手机百度下拉"
          // },{
          //   total:0,
          //   name:"手机相关搜索",
          //   title:"手机相关搜索"
          // },
          {
            total:0,
            name:"百度极速排名",
            title:"百度极速排名"
          }
        ]
      }
      ]
    }
  },
  methods: {
    logout: function() {
      var url = this.HOST+'/service/urlcore/webreg.php?A=1';
      this.$http.post(url,{f:8},{emulateJSON:true,withCredentials:true}).then(response => {
        // success callback
        // this.$router.push('/')
        window.location.href = this.HOST;
      }, response => {
        // error callback
      });
    },
    select_tab: function(item,allItem){
      
      // console.log(this.user_info)
      if (typeof item.style == 'undefined') {
        this.$set(item,"style",this.selected_tab_style)
      } else {
        item.style = this.selected_tab_style;
      }
      // console.log(allItem)
      for (var i in allItem) {
        if (allItem[i].name == item.name) {
          break; 
        }
        allItem[i].style = "";
      }

    }
  }
}



</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
