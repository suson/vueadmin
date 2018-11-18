<template>
  <div id="page-wrapper" class="gray-bg">
    <navt :user_info="user_info" />
    <keep-alive>
    <component v-bind:is="currentRightComponent" :table_config="table_config"></component>
    </keep-alive>
    <!-- <table-list :table_config="table_config" /> -->
  </div>
</template>
<script>
import navt from './navt'
import tableList from './tableList'
export default {
  name: 'rightContent',
  components: { navt,tableList },
  props: ['user_info','table_config'],
  data() {
    return {
      msg: 'Welcome to Your Vue.js App..........',
      currentRightComponent:'table-list'
    }
  },
  methods:{
    
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

th {
  white-space: nowrap;
  vertical-align: middle;
}

a.sort {
  color: #58666e;
  text-decoration: none;
  cursor: pointer;
  padding-right: 20px;
  background: url("../../static/images/sortable.png") no-repeat right;

}

a.sort-asc {
  padding-right: 20px;
  background: url("../../static/images/sort-asc.png") no-repeat right;
}

a.sort-desc {
  padding-right: 20px;
  background: url("../../static/images/sort-desc.png") no-repeat right;
}

div.status-radio-div {
  margin: 5px 0;
}

div.status-radio-div span.title {
  float: left;
  margin-right: 15px;
}

div.status-radio-div ul {
  float: left;
  padding: 0;
  list-style: none;
}

div.status-radio-div ul li {
  float: left;
  margin: 0 12px 0 0;
}

div.status-radio-div label {
  font-size: 14px;
  font-weight: normal;
  color: #888888;
}

div.status-radio-div input:checked+label {
  color: #0099FF;
}

tfoot td {
  font-size: 9px;
}


ul.tips {
  color: red;
  font-size: 11px;
  list-style: none;
}

ul.tips li {
  float: left;
  margin-right: 10px;
}

.tags-select1 {
  width: 120px;
  border-radius: 5px;
  height: 34px;
}

.tags-select1 input.el-input__inner {
  width: 120px;
  border-radius: 5px;
  height: 34px;
}

</style>
