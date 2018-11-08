<template>
  <div>
    <left-content :user_info="user_info" @changeRight="changeRight" :table_config="table_config" />
    <div id="page-wrapper" class="gray-bg" style="min-height: 632px;">
    <div class="wrapper wrapper-content">
<div class="panel panel-default m-b-none">
<div class="panel-heading">
<div class="row">
<div class="col-xs-9 panel-heading-content">
<label class="control-label p-l">任务类型:</label>
<span class="p-r b-r">百度排名</span>
<label class="control-label m-l m-r-sm">当前任务计费</label>
<a master="#price" role="clone" class="text-u-l">
<b class="text-danger p-r b-r" role="totalPrice">
单个: <span class="label perPoint" style="margin: 0 5px;">10</span>分
合计:<span class="label label-danger totalPoints" style="margin: 0 5px;">0</span>分
</b>
</a>
</div>
<div class="col-xs-3 text-right">
<button class="btn btn-primary btn-submit  p-r " type="button" style="margin-right: 30px">
提交任务
</button>
<a href="/task/item/3" class="btn  btn-default">
返回列表
</a>
</div>
</div>
</div>
<div class="panel-body">
<form class="task form-horizontal" id="taskForm" role="form" data-toggle="validator">
<div class="setting-title">
<label>简介</label>
</div>
<div class="form-group ">
<div class="col-lg-12">
<p>1：百度排名任务是快速提升网站在百度上关键字排名，请添加百度前50名的关键字！提升手机排名请用手机百度功能。</p><p>2：任务总数代表这个任务一共能做多少次，每天次数代表每天可以做的数量。</p><p>3：每天次数建议是关键字指数的十分之一左右，具体多少根据排名高低可以适当加减。<br></p><p>4：百度排名功能需要长期使用才会见效，如果只是偶尔使用效果很小。</p><p><br></p> </div>
</div>
<div class="setting-title">
<label>基础设置</label>
</div>
<div class="form-group">
<label class="col-lg-2 control-label">任务备注</label>
<div class="col-lg-6">
<input type="text" placeholder="备注名称" name="remark" id="inputRemark" class="form-control" required="" value="">
<span class="help-block">请输入任务的备注名，以便自己识别</span>
</div>
</div>
<div class="form-group">
<label class="col-lg-2 control-label">关键字</label>
<div class="col-lg-6">
<input class="form-control" type="text" name="keyword" placeholder="添加需要刷的关键字必须排名在50名以内" value="" required="">
<span class="help-block tips">添加需要刷的关键字必须排名在50名以内</span>
</div>
</div>
<div class="form-group">
<label class="col-lg-2 control-label">域名</label>
<div class="col-lg-6">
<input type="text" class="form-control" value="" name="url" pattern="^(?=^.{3,255}$)(http(s)?:\/\/)?(www\.)?[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+(:\d+)*(\/\w+\.\w+)*([\?&amp;]\w+=\w*)*$" placeholder="例：www.seoyanfa.com " required="">
<span class="help-block">网站域名不需要带http|https或/</span>
</div>
</div>
<div class="form-group">
<label class="col-lg-2 control-label">自然排名 </label>
<div class="col-lg-6">
<input type="number" name="old_sort" min="1" max="100" placeholder="关键词在前100名才可以点击。建议点击前30名效果更好" class="form-control" value="">
<select class="form-control" name="old_sort" disabled="" style="display:none"></select>
<span class="help-block m-b-none"><a href="javascript:;" class="btn btn-xs btn-info" id="catchWebSort" data-url="http://www.seoyanfa.com/home/websort/baidu.html">自动获取排名</a>为了方便记录初始排名。<span style="color: red">如果自动获取不到排名,请手动填写排名</span></span>
</div>
</div>
<div class="form-group">
<label class="col-lg-2 control-label">结果页地址</label>
<div class="col-lg-6">
<input type="text" placeholder="结果页地址" name="completepage" required="" class="form-control" value="">
<span class="help-block m-b-none">查看百度结果页显示自己网站链接，如：www.seoyanfa.com/ 或者 www.seoyanfa.com/wenti...</span>
</div>
</div>
<div class="form-group">

</div>
</form></div>
<input type="hidden" name="times_set" value="0">
<input type="hidden" name="type" value="3">
<input type="hidden" name="id" value="0">

</div>
<div class="panel-footer">
<div class="row">
<div class="col-lg-8">

</div>
<div class="col-lg-4 text-right">
<button class="btn btn-primary btn-submit  p-r " type="button" style="margin-right: 30px">
提交任务
</button>
<a href="/task/item/3" class="btn  btn-default">
返回列表
</a>
</div>
</div>
</div>
</div>
</div>
  </div>
</template>
<script>
import LeftContent from './LeftContent'
import RightContent from './RightContent'
export default {
  name: 'addTask',
  mounted: function() {
    this.$nextTick(function() {
      this.getUserInfo();
    })
  },
  components: { LeftContent,RightContent },
  data() {
    return {
      msg: 'Welcome to Your Vue.js App..........',
      user_info: {},
      table_config: {}
    }
  },
  methods: {
    getUserInfo: function() {
      var url = this.HOST + '/service/urlcore/webreg.php?m=getUserInfo';
      this.$http.post(url, { f: 7 }, { emulateJSON: true, withCredentials: true }).then(response => {
        if (response.body) {
          this.user_info = response.body
        }
      }, response => {

      });
    },
    changeRight: function(data) {
      console.log(data);
      this.table_config = data;
      console.log(this.$refs);
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
@import '../../static/css/jquery.resizablecolumns.css';


</style>
