<template>
    <div class="wrapper wrapper-content" style="padding:10px 5px">
      <div class=" ">
        <div class="ibox float-e-margins">
          <div class="ibox-title">
            <h5>任务列表 - {{table_config.title}}</h5>
          </div>
          <div class="ibox-heading" style="padding:15px">
            <div class="row">
              <div class="col-lg-6 col-md-12 col-sm-12">
                <a role="createTask" class="btn-rounded-xxs btn btn-info btn-sm" href="./task1.html">
创建新任务
</a>
                <div class="btn-group hide">
                  <button data-toggle="dropdown" class="btn btn-primary btn-sm dropdown-toggle"> 显示 {{pageCount}} 条 <span class="caret"></span></button>
                  <ul class="dropdown-menu">
                    <li><a @click="setPageView(20)">20</a></li>
                    <li><a @click="setPageView(30)">30</a></li>
                    <li><a @click="setPageView(40)">40</a></li>
                    <li><a @click="setPageView(50)">50</a></li>
                  </ul>
                </div>
              </div>
              <div class="col-lg-6 col-md-12 col-sm-12 text-right hide">
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
                    <span id="set-tags"><div class="el-select tags-select1"><!----><div class="el-input el-input--suffix"><!----><input autocomplete="off" placeholder="任务标签" size="" readonly="readonly" type="text" rows="2" class="el-input__inner"><!----><span class="el-input__suffix"><span class="el-input__suffix-inner"><i slot="suffix" class="el-select__caret el-input__icon el-icon-arrow-up"></i><!----></span>
                    <!----></span>
                    <!---->
                  </div>
                  <div class="el-select-dropdown el-popper" style="display: none; min-width: 120px;">
                    <div class="el-scrollbar" style="">
                      <div class="el-select-dropdown__wrap el-scrollbar__wrap" style="margin-bottom: -17px; margin-right: -17px;">
                        <ul class="el-scrollbar__view el-select-dropdown__list" style="position: relative;">
                          <!---->
                          <li class="el-select-dropdown__item selected hover"><span>全部分组</span></li>
                          <li class="el-select-dropdown__item"><span>没有分组</span></li>
                          <div class="resize-triggers">
                            <div class="expand-trigger">
                              <div style="width: 1px; height: 1px;"></div>
                            </div>
                            <div class="contract-trigger"></div>
                          </div>
                        </ul>
                      </div>
                      <div class="el-scrollbar__bar is-horizontal">
                        <div class="el-scrollbar__thumb" style="transform: translateX(0%);"></div>
                      </div>
                      <div class="el-scrollbar__bar is-vertical">
                        <div class="el-scrollbar__thumb" style="transform: translateY(0%);"></div>
                      </div>
                    </div>
                    <!---->
                  </div>
                  <div class="resize-triggers">
                    <div class="expand-trigger">
                      <div style="width: 121px; height: 35px;"></div>
                    </div>
                    <div class="contract-trigger"></div>
                  </div>
              </div>
              <div class="el-dialog__wrapper" style="display: none;">
                <div class="el-dialog" style="width: 20%; margin-top: 15vh;">
                  <div class="el-dialog__header"><span class="el-dialog__title">设置分组</span><button type="button" aria-label="Close" class="el-dialog__headerbtn"><i class="el-dialog__close el-icon el-icon-close"></i></button></div>
                  <!---->
                  <div class="el-dialog__footer">
                    <div class="dialog-footer"><button type="button" class="el-button el-button--default">
                        <!---->
                        <!----><span>取消</span></button> <button type="button" class="el-button el-button--primary">
                        <!---->
                        <!----><span>确定</span></button></div>
                  </div>
                </div>
              </div></span>
            </div>
            <input type="hidden" value="1">
            <button type="submit" class="btn btn-primary" style="margin-bottom: 0px">查找</button>
            </form>
          </div>
        </div>
        <hr class="hide">
        <div class="row hide">
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
          <!-- <div class="rc-handle-container" style="width: 1359px;">
            <div class="rc-handle" style="left: 159px; height: 153px;"></div>
            <div class="rc-handle" style="left: 299px; height: 153px;"></div>
            <div class="rc-handle" style="left: 398px; height: 153px;"></div>
            <div class="rc-handle" style="left: 797px; height: 153px;"></div>
            <div class="rc-handle" style="left: 967px; height: 153px;"></div>
            <div class="rc-handle" style="left: 1124px; height: 153px;"></div>
          </div> -->
          <table class="table table-bordered " id="tasklist">
            <thead>
              <tr>
                <th rowspan="2" style="vertical-align: middle; width: 11.63%;"><input type="checkbox" class="i-checks js-check-all" style="margin-right:10px " v-model="checkAll" @click="selectAll"><a href="javascript:void(0)" class="sort sort-asc" data-noresize="">ID</a></th>
                <th rowspan="2" style="vertical-align: middle; width: 10.23%;">
                  标题
                </th>
                <th rowspan="2" style="vertical-align: middle;" class="hidden-md hidden-sm  hidden-xs">URL</th>
                <!-- <th colspan="3" style="vertical-align: middle; text-align: center; width: 29.51%;" class="hide">次数</th> -->
                <th rowspan="2" style="vertical-align: middle; text-align: center; width: 9.51%;" class="hidden-md hidden-sm  hidden-xs">今日分享</th>
                <!-- <th rowspan="2" style="vertical-align: middle; text-align: center; width: 11.55%;" class="hide hidden-md hidden-sm  hidden-xs">
                  自动重启
                </th> -->
                <th rowspan="2" style="vertical-align: middle; width: 10.38%;">状态</th>
                <th rowspan="2" style="vertical-align: middle; width: 7.21%;" data-noresize="">操作</th>
              </tr>
              <!-- <tr style="font-size:9px" class="hide">
                <th style="text-align: center;">今日</th>
                <th style="text-align: center;">已完成</th>
                <th style="text-align: center;">总次数</th>
              </tr> -->
            </thead>
              <transition-group name="list" tag="tbody">
              <tr v-for="item in listData" v-bind:key="item.urlid">
                <td><input type="checkbox" @click="selectItem(item)" v-model="item.checked">{{item.urlid}}</td>
                <td :title="item.name">{{item.name}}</td>
                <td :title="item.turl">{{item.turl}}</td>
                <td>{{item.tdclick}}</td>
                <td>{{item.online | urlStatusName}}-{{item.free | shareStatusName}}</td>
                <td></td>
              </tr>
                </transition-group>
                <tbody  v-if="listData.length<1">
                  
                  <tr><td colspan="20" style="text-align: center;font-size: 20px;">没有数据</td></tr>
                </tbody>
            <tfoot>
              <tr>
                <td style="vertical-align:middle;"><input type="checkbox" class="i-checks js-check-all" style="margin-right:10px "  v-model="checkAll" @click="selectAll"><a href="javascript:void(0)" class="sort sort-desc" data-noresize="">ID</a></td>
                <td style="vertical-align:middle;">
                  标题
                  <!-- <a href="javascript:void(0);" class="sort ">标题</a> -->
                </td>
                <td style="vertical-align:middle;" class="hidden-md hidden-sm  hidden-xs">URL</td>
                <!-- <td style="text-align: center;" class="hide">今日</td>
                <td style="text-align: center;" class="hide">已完成</td>
                <td style="text-align: center;" class="hide">总次数</td> -->
                <td style="vertical-align:middle;text-align: center;" class="hidden-md hidden-sm  hidden-xs">今日分享</td>
                <!-- <td style="vertical-align:middle; text-align: center" class="hide hidden-md hidden-sm  hidden-xs">
                  自动重启
                </td> -->
                <td style="vertical-align:middle;">状态</td>
                <td style="vertical-align:middle;" data-noresize="">操作</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
      <div class="ibox-footer">
        <!-- <button type="button" class="btn-rounded-xxs btn btn-info btn-sm btn-set-tag">
          设置分组
        </button>
        <button class="btn-rounded-xxs btn btn-info btn-sm js-batch-set ladda-button" data-action="time-set" data-tips="设置智能时间控制" data-style="expand-right"><span class="ladda-label">
智能时间控制
</span><span class="ladda-spinner"></span></button>
        <a class="btn-rounded-xxs btn btn-info btn-sm" href="/home/task/export">
导出任务数据
</a> -->
        <div data-toggle="buttons" class="btn-group m-r">
          <!-- <label class="ladda-button btn btn-sm btn-info js-batch-set" data-style="zoom-in" data-action="pause" data-tips="暂停"><span class="ladda-label"> <i class="fa fa-pause"></i> 暂停 </span><span class="ladda-spinner"></span></label> -->
          <label @click="operate(0)" class="ladda-button btn btn-sm btn-info js-batch-set" data-style="zoom-in" data-action="pause" data-tips="停止"><span class="ladda-label"> <i class="fa fa-stop"></i> 停止 </span><span class="ladda-spinner"></span></label>
          <label @click="operate(1)" class="ladda-button btn btn-sm btn-primary js-batch-set" data-style="zoom-in" data-action="recover" data-tips="开始"><span class="ladda-label"> <i class="fa fa-play"></i> 开始 </span><span class="ladda-spinner"></span></label>
          <!-- <label class="ladda-button btn btn-sm btn-success js-batch-set" data-style="zoom-in" data-action="restart" data-tips="重启"><span class="ladda-label"> <i class="fa fa-refresh"></i> 重启 </span><span class="ladda-spinner"></span></label> -->
          <label class="ladda-button btn btn-sm btn-danger js-batch-set" data-style="zoom-in" @click="del" data-action="del" data-tips="删除"><span class="ladda-label"> <i class="fa fa-trash"></i> 删除 </span><span class="ladda-spinner"></span></label>
        </div>
        <div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>
<script>
export default {
  name: 'tableList',
  props: ['table_config'],
  mounted: function () {
    this.$nextTick(function () {
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
      this.getList();
    })
  },
  created:function() {
    this.eventHub.$on('reloadList',this.getList);
  },
  updated:function() {

  },
  data() {
    return {
      msg: 'this is tableList',
      pageCount:20,
      sortType:0,
      listData:[],
      checkAll:false
    }
  },
  filters: {
    urlStatusName: function (value) {
      var name = '';
      switch(value.toString()) {
        case '0':
          name = '离线';
          break;
        case '1':
          name = '在线';
          break;

      }
      return name;
    },
    shareStatusName:function(value) {
      var name = '';
      switch(value.toString()) {
        case '0':
          name = '未分享';
          break;
        case '1':
          name = '分享中';
          break;

      }
      return name;
    }
  },
  methods:{
    del:function(){
      var url = this.HOST+'/service/urlcore/webreg.php';
      var ids=[];
      for (var i in this.listData) {
        if (this.listData[i].checked) {
          ids.push(this.listData[i].urlid);
        }
      }
      if (ids.length < 1) {
        toastr.error('请选择任务');
        return false;
      }
      var i = {
        "ids":ids
      }
      i = JSON.stringify(i);
      this.$http.post(url,{f:38,i:i},{emulateJSON:true,withCredentials:true}).then(response => {
        if (response.body && response.body.error > -1) {
          toastr.success('操作成功');
          for (var i in ids) {
            // console.log(ids[i])
            for (var j in this.listData) {
              if (ids[i] == this.listData[j].urlid) {
                this.listData.splice(j,1);
                break;
              }
            }
          }
        } else {
          toastr.error(response.body.msg);
        }
      }, response => {
        toastr.error('操作失败');
      });
    },
    setPageView : function(count) {
      this.pageCount=count;
    },
    getList : function() {
      var url = this.HOST+'/service/urlcore/webreg.php';
      var i = {
        "type":this.table_config.name
      }
      i = JSON.stringify(i);
      this.$http.post(url,{f:36,i:i},{emulateJSON:true,withCredentials:true}).then(response => {
        // success callback
        // this.$router.push('/')
        if (response.body && response.body.urls) {
          this.listData = response.body.urls;
          for (var i in this.listData) {
            if (typeof this.listData[i].checked == 'undefined') {
              this.$set(this.listData[i],'checked',false);
            }
          }
        }
      }, response => {
        // error callback
      });
    },
    // 单选
    selectItem : function(item) {
      item.checked = !item.checked;
      console.log(this.listData)
      var isAll = true;
      for (var i in this.listData) {
        if (this.listData[i].checked != true) {
          isAll = false;
          break;
        }
      }
      console.log(isAll);
      this.checkAll = isAll;
    },
    // 全选
    selectAll:function(){
      var selectedAll = !this.checkAll;
      for (var i in this.listData) {
        this.listData[i].checked = selectedAll
      }
    },
    operate:function(type) {
      var url = this.HOST+'/service/urlcore/webreg.php';
      var ids=[];
      for (var i in this.listData) {
        if (this.listData[i].checked) {
          ids.push(this.listData[i].urlid);
        }
      }
      if (ids.length < 1) {
        toastr.error('请选择任务');
        return false;
      }
      var i = {
        "free":type,
        "ids":ids
      }
      i = JSON.stringify(i);
      this.$http.post(url,{f:37,i:i},{emulateJSON:true,withCredentials:true}).then(response => {
        // success callback
        // this.$router.push('/')
        // console.log(response.body.error)
        if (response.body && response.body.error > -1) {
          toastr.success('操作成功');
          for (var i in ids) {
            // console.log(ids[i])
            for (var j in this.listData) {
              if (ids[i] == this.listData[j].urlid) {
                this.listData[j].free = type;
                break;
              }
            }
          }
        } else {
          toastr.error(response.body.msg);
        }
      }, response => {
        toastr.error('操作失败');
      });
    }

  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to
/* .list-leave-active for below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
</style>