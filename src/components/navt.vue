<template>
  <div class="row border-bottom">
  <nav class="navbar navbar-static-top" role="navigation" style="margin-bottom: 0;background: #FFFFFF;height: 30px">
    <div class="navbar-header">
      <a class="navbar-minimalize minimalize-styl-2 btn btn-primary " href="javascript:void(0);"><i class="fa fa-bars"></i> </a>
    </div>
    <div class="collapse pos-rlt navbar-collapse b-b bg-white-only">
      <ul class="nav navbar-nav navbar-left">
        <li class="hidden-xs hidden-sm hidden-md" style="padding:15px 10px 10px 20px;">
          <span><label class="control-label m-r-xs">会员</label><a class="text-u-l text-danger" href="/">{{user_info.name}}</a>
</span>
        </li>
        <li style="padding: 15px 10px 10px 20px;">
          <span>
<label class="control-label m-r-xs">余额</label>
<a class="text-u-l" href="/points.html">10</a>点
<a class="btn-rounded-xxs m-l-sm w-3xs hidden-sm btn btn-info btn-xs" href="/mall" style="background: red;border: red solid 1px;">
积分充值
</a>
</span>
        </li>
        <li style="padding: 15px ;" class="hidden-xs hidden-sm hidden-md">
          <span>
<a href="/give.html" target="_blank">
积分转赠
</a>
</span>
        </li>
        <li style="padding: 15px ;" class="hidden-xs ">
          <span>
<a href="/wenti.html" target="_blank">
常见问题
</a>
</span>
        </li>
        <li style="padding: 15px ;" class="hidden-xs hidden-sm hidden-md hidden-lg">
          <span>
<a href="/">
旧模板
</a>
</span>
        </li>
        <li style="padding: 15px ;" class="hidden-xs  hidden-sm">
          <span>
<a href="share.html">
赚积分
</a>
</span>
        </li>
        <li style="padding: 15px ;color: red" class="hidden-xs hidden-sm">
          <span>
<a href="/trace.html">
关键字查询
</a>
</span>
        </li>
        <li style="padding: 15px ;color: red" class="hidden-xs hidden-sm">
          <span>
<a href="/guide.html">
新手指南
</a>
</span>
        </li>
        <li style="padding: 15px ;" class="hidden-xs ">
          <span>
<a href="/" target="_blank">
帮站首页
</a>
</span>
        </li>
      </ul>
    </div>
  </nav>
</div>

</template>
<script>
export default {
  name: 'navt',
  props: ['user_info'],
  data() {
    return {
      msg: 'this is nav'
    }
  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
