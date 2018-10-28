<template>
  <div id="wrapper">
      <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
.panel-default > .panel-heading, .panel-default > .panel-footer {
        border: 1px solid #fff;
    }
    .wrapper {
        padding: 15px;
    }

    th[data-grid-column-sort] a {
        padding-right: 20px;
    }
    a {
        color: #58666e;
        text-decoration: none;
        cursor: pointer;
    }
    label {
        display: inline-block;
        max-width: 100%;
        margin-bottom: 5px;
    }
    .p-r {
            padding-right: 15px;
        }

        .b-r {
            border-right: 1px solid #dee5e7;
        }

        .panel {
            border-radius: inherit;
        }

        .navbar-left > li {
            border-left: 1px #e9e9e9 solid;
        }

        .footer {
            background: none;
            border: none;
        }

        a {
            color: #58666e;
            text-decoration: none;
            cursor: pointer;
        }

        a:hover {
            color: #58666e;
            text-decoration: underline;
            cursor: pointer;
        }

        .inmodal .modal-title {
            text-align: left;
            font-size: 24px;
        }

        .panel-body.list {
            padding: 0;
        }

        .panel-body.list .list-group-item {
            border-left: 0;
            border-right: 0;
            margin: 0;
            border-bottom: 0;
        }

        .panel-body.list .list-group {
            margin: 0;
        }

        .panel-body.list .list-group-item:first-child {
            border-top: 0;
        }

        .el-dialog {
            border-radius: 6px;
            text-align: left;
        }

        .el-dialog__header {
            border-bottom: 1px solid #efefef;
            padding-bottom: 10px;
        }

        .el-dialog__footer {
            border-top: 1px solid #efefef;
        }

        .el-dialog__body {
            padding: 10px;
        }

        .el-dialog__body table th,
        .el-dialog__body table td {
            font-size: 10px;
            padding: 2px 5px;
            /*  border: 1px solid #EFEFEF;*/
        }

        /*  .el-dialog__body table th{
              background: #e1f5fe;
          }*/
</style>
