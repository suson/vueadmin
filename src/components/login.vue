<template>
  <div>

    <header class="am-topbar am-topbar-inverse">
      <div class="header-login">
        <div class="am-container">
          <div class="header-login-left"></div>
          <div class="am-topbar-right" style="margin-right: 43px;">
            <a href="http://www.seoyanfa.com/register.html"><span class="am-icon-pencil"></span> 注册</a>
          </div>
          <div class="am-topbar-right" style="margin-right: 50px;">
            <a href="http://www.seoyanfa.com/login.html"><span class="am-icon-user"></span> 登录</a>
          </div>
        </div>
      </div>
      <div class="header-nav">
        <div class="am-container">
          <div class="header-nav-left">
            <div class="header-nav-left am-topbar-left">
              <a href="http://www.seoyanfa.com/" alt="帮站网"><img src="../../static/images/login/logo.png" alt=""></a>
            </div>
            <div class="am-topbar-left logo-wz"><a href="http://www.seoyanfa.com/" alt="帮站网"><img src="../../static/images/login/logo1.png" alt=""></a></div>
            <div class="header-nav-right am-topbar-right">
              <ul class="am-nav am-nav-pills am-topbar-nav header-nav-ul">
                <li><a href="http://www.seoyanfa.com/">首页</a></li>
                <li><a href="http://www.seoyanfa.com/bbs/">问答</a></li>
                <li>
                  <a href="http://www.seoyanfa.com/tool.html">工具</a></li>
                <li>
                  <a href="http://www.seoyanfa.com/guide/">指南</a>
                </li>
                <li><a href="http://www.seoyanfa.com/share.html">赚积分</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
    <div class="am-g am-g-fixed am-margin-vertical-lg am-g-collapse am-container login">
      <div class="am-u-sm-8 login-leftimg"><a href="http://www.seoyanfa.com/wenti/">
<img src="../../static/images/login/3.jpg"></a></div>
      <div class="am-u-sm-4 login-rightform">
        <div class="am-form" id="UserProfile" data-am-validator="" novalidate="novalidate"><h6 class="login-formtext">欢迎回来</h6>
          <fieldset id="form-with-tooltip" novalidate="novalidate">
            <div class="am-form-group am-form-icon">
              <i class="am-icon-user"></i>
              <input type="email" id="inputEmail" class="am-form-field" placeholder="请输入注册时的邮箱" data-foolish-msg="请用邮箱登录" required="" >
            </div>
            <div class="am-form-group am-form-icon">
              <i class="am-icon-unlock-alt"></i>
              <input type="password" class="am-form-field" id="inputPassword" minlength="6" maxlength="16" placeholder="请输入登录密码" required="">
            </div>
            <div class="am-g am-form-group am-form-icon">
              <div class="am-u-sm-6">
                <i class="am-icon-link"></i>
                <input type="text" minlength="4" class="am-form-field" id="inputVerify" required="" placeholder="请输入右侧验证码" style="width: 120px;">
              </div>
              <div class="am-u-sm-6" id="verify">
                <!-- <img src="../../static/login/captcha"> -->
</div>
              </div>
              <div class="am-checkbox">
                <label>
                  <input type="checkbox" name="auto_login" checked=""> 自动登录
                </label>
              </div>
              <div class="am-g am-form-group am-form-icon">
                <button type="button" class="am-btn am-btn-primary am-btn-block" id="submit" data-am-loading="{spinner: &#39;circle-o-notch&#39;, loadingText: &#39;正在登录...&#39;, resetText: &#39;登录&#39;}">登录
                </button>
              </div>
              <a href="http://www.seoyanfa.com/newpwd.html" class="am-fr">忘记密码？</a>
          </fieldset>
        </div>
      </div>
    </div>
    <footer class="footer">
      <div style="background: #2d3e50;  text-align: center;">
        <a href="http://www.miitbeian.gov.cn/">鲁ICP备16022331号-1</a>
      </div>
    </footer>
    <div id="vld-tooltip">提示信息！</div>
  </div>
</template>
<script>
export default {
  name: 'login',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App..........'
    }
  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../../static/login/amazeui.min.css";
@import "../../static/login/style.css";
@import "../../static/login/image-picker.css";
@import "../../static/login/header.css";
@import "../../static/login/login.css";
@import "../../static/login/index-02.css";

.footer p {
  color: #7f8c8d;
  margin: 0;
  padding: 15px 0;
  text-align: center;
  background: #2d3e50;
}

li input {
  width: 100px;
}

.table-align-center td {
  text-align: center;
}

.table-align-center th {
  text-align: center;
}

#catchWebSort {
  color: red;
}

#vld-tooltip {
  position: absolute;
  z-index: 1000;
  padding: 5px 10px;
  background: #F37B1D;
  min-width: 150px;
  color: #fff;
  transition: all 0.15s;
  box-shadow: 0 0 5px rgba(0, 0, 0, .15);
  display: none;
}

#vld-tooltip:before {
  position: absolute;
  top: -8px;
  left: 50%;
  width: 0;
  height: 0;
  margin-left: -8px;
  content: "";
  border-width: 0 8px 8px;
  border-color: transparent transparent #F37B1D;
  border-style: none inset solid;
}

</style>
