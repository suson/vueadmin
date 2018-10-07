<template>
  <div id="page-wrapper" class="gray-bg" style="min-height: 632px;">
<div class="row border-bottom">
<nav class="navbar navbar-static-top" role="navigation" style="margin-bottom: 0;background: #FFFFFF;height: 30px">
<div class="navbar-header">
<a class="navbar-minimalize minimalize-styl-2 btn btn-primary " href="javascript:void(0);"><i class="fa fa-bars"></i> </a>
</div>
<div class="collapse pos-rlt navbar-collapse b-b bg-white-only">
<ul class="nav navbar-nav navbar-left">
<li class="hidden-xs hidden-sm hidden-md" style="padding:15px 10px 10px 20px;">
<span><label class="control-label m-r-xs">会员</label><a class="text-u-l text-danger" href="/ucenter.html">21549182@qq.com</a>
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
<div class="wrapper wrapper-content" style="padding:10px 5px">
<div class=" ">

<div class="ibox float-e-margins">
<div class="ibox-title">
<h5>任务列表 - 流量任务</h5>
</div>
<div class="ibox-heading" style="padding:15px">
<div class="row">
<div class="col-lg-6 col-md-12 col-sm-12">
<a role="createTask" class="btn-rounded-xxs btn btn-info btn-sm" href="./task1.html">
创建新任务
</a>
<div class="btn-group">
<button data-toggle="dropdown" class="btn btn-primary btn-sm dropdown-toggle"> 显示 null 条 <span class="caret"></span></button>
<ul class="dropdown-menu">
<li><a onclick="setTaskPerPageView(20)">20</a></li>
<li><a onclick="setTaskPerPageView(30)">30</a></li>
<li><a onclick="setTaskPerPageView(40)">40</a></li>
<li><a onclick="setTaskPerPageView(50)">50</a></li>
</ul>
</div>
</div>
<div class="col-lg-6 col-md-12 col-sm-12 text-right">
<form method="get" role="form" class="form-inline">
<div class="form-group">
<input type="text" name="key" placeholder="" class="form-control" value="">
</div>
<div class="form-group">
<select name="type" class="form-control">
<option value="keyword">关键词</option>
<option value="url">域名</option>
<option value="id">任务ID</option>
</select>
</div>
<div class="form-group">
<select name="vi" class="form-control">
<option value="all" selected="">全部任务</option>
<option value="uncheck">未审核</option>
<option value="doing">进行中</option>
<option value="done">已完成</option>
<option value="paused">暂停中</option>
<option value="error">失败过多</option>
</select>
</div>
<div class="form-group">
<span id="set-tags"><div class="el-select tags-select1"><!----><div class="el-input el-input--suffix"><!----><input autocomplete="off" placeholder="任务标签" size="" readonly="readonly" type="text" rows="2" class="el-input__inner"><!----><span class="el-input__suffix"><span class="el-input__suffix-inner"><i slot="suffix" class="el-select__caret el-input__icon el-icon-arrow-up"></i><!----></span><!----></span><!----></div><div class="el-select-dropdown el-popper" style="display: none; min-width: 120px;"><div class="el-scrollbar" style=""><div class="el-select-dropdown__wrap el-scrollbar__wrap" style="margin-bottom: -17px; margin-right: -17px;"><ul class="el-scrollbar__view el-select-dropdown__list" style="position: relative;"><!----><li class="el-select-dropdown__item selected hover"><span>全部分组</span></li><li class="el-select-dropdown__item"><span>没有分组</span></li><div class="resize-triggers"><div class="expand-trigger"><div style="width: 1px; height: 1px;"></div></div><div class="contract-trigger"></div></div></ul></div><div class="el-scrollbar__bar is-horizontal"><div class="el-scrollbar__thumb" style="transform: translateX(0%);"></div></div><div class="el-scrollbar__bar is-vertical"><div class="el-scrollbar__thumb" style="transform: translateY(0%);"></div></div></div><!----></div><div class="resize-triggers"><div class="expand-trigger"><div style="width: 121px; height: 35px;"></div></div><div class="contract-trigger"></div></div></div> <div class="el-dialog__wrapper" style="display: none;"><div class="el-dialog" style="width: 20%; margin-top: 15vh;"><div class="el-dialog__header"><span class="el-dialog__title">设置分组</span><button type="button" aria-label="Close" class="el-dialog__headerbtn"><i class="el-dialog__close el-icon el-icon-close"></i></button></div><!----><div class="el-dialog__footer"><div class="dialog-footer"><button type="button" class="el-button el-button--default"><!----><!----><span>取消</span></button> <button type="button" class="el-button el-button--primary"><!----><!----><span>确定</span></button></div></div></div></div></span>
 </div>
<input type="hidden" value="1">
<button type="submit" class="btn btn-primary" style="margin-bottom: 0px">查找</button>
</form>
</div>
</div>
<hr>
<div class="row">
<div class="col-lg-6  status-radio-div">
<span class="title">状态筛选:</span>
<ul>
<li>
<input type="radio" name="vi" value="all" checked="" id="radio-vi-all">
<label for="radio-vi-all">全部任务</label>
</li>
<li>
<input type="radio" name="vi" value="uncheck" id="radio-vi-0">
<label for="radio-vi-0">未审核</label>
</li>
<li>
<input type="radio" name="vi" value="doing" id="radio-vi-1">
<label for="radio-vi-1">进行中</label>
</li>
<li>
<input type="radio" name="vi" value="complete" id="radio-vi-2">
<label for="radio-vi-2">已完成</label>
</li>
<li>
<input type="radio" name="vi" value="paused" id="radio-vi-3">
<label for="radio-vi-3">手动暂停</label>
</li>
<li>
<input type="radio" name="vi" value="error" id="radio-vi-4">
<label for="radio-vi-4">失败过多</label>
</li>
</ul>
<ul class="tips">
<li style="font-size: 14px;">提示:</li>
<li>状态显示失败过多:找不到排名或排名结果不存在(包括临时性的找不到排名或者没有异地排名)</li>
</ul>
</div>
</div>
</div>
<div class="ibox-content" style="padding:15px">
<div class="table-responsive">
<div class="rc-handle-container" style="width: 1359px;"><div class="rc-handle" style="left: 159px; height: 153px;"></div><div class="rc-handle" style="left: 299px; height: 153px;"></div><div class="rc-handle" style="left: 398px; height: 153px;"></div><div class="rc-handle" style="left: 797px; height: 153px;"></div><div class="rc-handle" style="left: 967px; height: 153px;"></div><div class="rc-handle" style="left: 1124px; height: 153px;"></div></div><table class="table table-bordered " id="tasklist">
<thead>
<tr>
<th rowspan="2" style="vertical-align: middle; width: 11.63%;"><input type="checkbox" class="i-checks js-check-all" style="margin-right:10px "><a href="/1?o=1&amp;os=1&amp;page=&amp;tags=全部分组" class="sort sort-desc" data-noresize="">ID</a></th>
<th rowspan="2" style="vertical-align: middle; width: 10.23%;">
<a href="/1?o=2&amp;os=1&amp;page=&amp;tags=全部分组" class="sort ">标题</a>
</th>
<th rowspan="2" style="vertical-align: middle; width: 7.21%;" class="hidden-md hidden-sm  hidden-xs">URL</th>
<th colspan="3" style="vertical-align: middle; text-align: center; width: 29.51%;">次数</th>
<th rowspan="2" style="vertical-align: middle; text-align: center; width: 12.51%;" class="hidden-md hidden-sm  hidden-xs"><a href="/1?o=5&amp;os=1&amp;page=&amp;tags=全部分组" class="sort ">总分值</a></th>
<th rowspan="2" style="vertical-align: middle; text-align: center; width: 11.55%;" class="hidden-md hidden-sm  hidden-xs">
自动重启
</th>
<th rowspan="2" style="vertical-align: middle; width: 10.38%;"><a href="/1?o=4&amp;os=1&amp;page=&amp;tags=全部分组" class="sort ">状态</a></th>
<th rowspan="2" style="vertical-align: middle; width: 7.21%;" data-noresize="">操作</th>
</tr>
<tr style="font-size:9px">
<th style="text-align: center;">今日</th>
<th style="text-align: center;"><a href="/1?o=6&amp;os=1&amp;page=&amp;tags=全部分组" class="sort ">已完成</a></th>
<th style="text-align: center;"><a href="/1?o=7&amp;os=1&amp;page=&amp;tags=全部分组" class="sort ">总次数</a></th>
</tr>
</thead>
<tbody>
 <tr>
<td colspan="20" style="text-align: center;font-size: 20px;">没有数据</td>
</tr>
</tbody>
<tfoot>
<tr>
<td style="vertical-align:middle;"><input type="checkbox" class="i-checks js-check-all" style="margin-right:10px "><a href="/1?o=1&amp;os=1&amp;page=&amp;tags=全部分组" class="sort sort-desc" data-noresize="">ID</a></td>
<td style="vertical-align:middle;">
<a href="/1?o=2&amp;os=1&amp;page=&amp;tags=全部分组" class="sort ">标题</a>
</td>
<td style="vertical-align:middle;" class="hidden-md hidden-sm  hidden-xs">URL</td>
<td style="text-align: center;">今日</td>
<td style="text-align: center;"><a href="/1?o=6&amp;os=1&amp;page=&amp;tags=全部分组" class="sort ">已完成</a></td>
<td style="text-align: center;"><a href="/1?o=7&amp;os=1&amp;page=&amp;tags=全部分组" class="sort ">总次数</a></td>
<td style="vertical-align:middle;text-align: center;" class="hidden-md hidden-sm  hidden-xs"><a href="/1?o=5&amp;os=1&amp;page=&amp;tags=全部分组" class="sort ">总分值</a></td>
<td style="vertical-align:middle; text-align: center" class="hidden-md hidden-sm  hidden-xs">
自动重启
</td>
<td style="vertical-align:middle;"><a href="/1?o=4&amp;os=1&amp;page=&amp;tags=全部分组" class="sort ">状态</a></td>
<td style="vertical-align:middle;" data-noresize="">操作</td>
</tr>
</tfoot>
</table>
</div>
</div>
<div class="ibox-footer">
<button type="button" class="btn-rounded-xxs btn btn-info btn-sm btn-set-tag">
设置分组
</button>
<button class="btn-rounded-xxs btn btn-info btn-sm js-batch-set ladda-button" data-action="time-set" data-tips="设置智能时间控制" data-style="expand-right"><span class="ladda-label">
智能时间控制
</span><span class="ladda-spinner"></span></button>
<a class="btn-rounded-xxs btn btn-info btn-sm" href="/home/task/export">
导出任务数据
</a>
<div data-toggle="buttons" class="btn-group m-r">
<label class="ladda-button btn btn-sm btn-info js-batch-set" data-style="zoom-in" data-action="pause" data-tips="暂停"><span class="ladda-label"> <i class="fa fa-pause"></i> 暂停 </span><span class="ladda-spinner"></span></label>
<label class="ladda-button btn btn-sm btn-primary js-batch-set" data-style="zoom-in" data-action="recover" data-tips="恢复"><span class="ladda-label"> <i class="fa fa-play"></i> 恢复 </span><span class="ladda-spinner"></span></label>
<label class="ladda-button btn btn-sm btn-success js-batch-set" data-style="zoom-in" data-action="restart" data-tips="重启"><span class="ladda-label"> <i class="fa fa-refresh"></i> 重启 </span><span class="ladda-spinner"></span></label>
<label class="ladda-button btn btn-sm btn-danger js-batch-set" data-style="zoom-in" data-action="del" data-tips="删除"><span class="ladda-label"> <i class="fa fa-trash"></i> 删除 </span><span class="ladda-spinner"></span></label>
</div>
<div>
</div>
</div>
</div>
</div>
</div>
</div>
</template>

<script>
export default {
  name: 'rightContent',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App..........'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import '../../static/css/jquery.resizablecolumns.css';

td {
        white-space: nowrap;
        vertical-align: middle;

        overflow: hidden;
        text-overflow: ellipsis;
        word-break: keep-all;
    }
    th{
        white-space: nowrap;
        vertical-align:middle;
    }
    a.sort{
        color: #58666e;
        text-decoration: none;
        cursor: pointer;
        padding-right: 20px;
        background: url("../../static/images/sortable.png") no-repeat right;

    }
     a.sort-asc{
        padding-right: 20px;
        background: url("../../static/images/sort-asc.png") no-repeat right;
    }
     a.sort-desc{
        padding-right: 20px;
        background: url("../../static/images/sort-desc.png") no-repeat right;
    }
    div.status-radio-div{
        margin: 5px 0;
    }
    div.status-radio-div span.title{
        float: left;
        margin-right: 15px;
    }
    div.status-radio-div ul{
        float: left;
        padding: 0;
        list-style: none;
    }
    div.status-radio-div ul li{
        float: left;
        margin:0 12px 0 0;
    }
    div.status-radio-div label{
        font-size: 14px;
        font-weight: normal;
        color: #888888;
    }
    div.status-radio-div input:checked + label {
        color: #0099FF;
    }
    tfoot td {
        font-size: 9px;
    }


    ul.tips{
        color: red;font-size: 11px;
        list-style: none;
    }
    ul.tips li {
        float: left;
        margin-right: 10px;
    }

    .tags-select1 input.el-input__inner{
        width: 120px;
        border-radius: 5px;
        height: 34px;
    }
</style>
