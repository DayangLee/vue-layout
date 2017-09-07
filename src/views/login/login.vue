<template>
  <div class="login-container" :style="{backgroundImage:'url('+ bg +')'}">
    <img class="logo" src='../../assets/login/logo.png'>
    <el-form id="form" :model="loginForm" autoComplete="off" :rules="loginRules" ref="loginForm" label-position="left" label-width="0px" class="card-box login-form">
      <div class="title">
        <span style="font-weight:bold;">LOGIN</span>
        <span> SYSTEM</span>
      </div>
      <el-form-item prop="acount" class="item">
        <div class="icon-container">
          <img class="icon1" src="../../assets/login/user_icon.png">
        </div>
        <input type="text" name="acount" autoComplete="off" placeholder="请输入用户名" v-model="loginForm.acount">
      </el-form-item>
      <el-form-item prop="password" class="item">
        <div class="icon-container">
          <img class="icon1" src="../../assets/login/password_icon.png">
        </div>
        <input type="password" name="password" autoComplete="off" placeholder="请输入密码" v-model="loginForm.password">
      </el-form-item>
      <el-form-item class="item item1">
        <el-button class="login-button" :loading="loading" @click.native.prevent="handleLogin">
          登录
        </el-button>
      </el-form-item>
    </el-form>
    <div class="dcode-container">
      <div class="dcode">
        <div>
          <img src="../../assets/login/weixin_erweima.png" class="img1">
        </div>
        <div>
          <img src="../../assets/login/weixinlogo.png" class="img2">
          <p class="dcode-text">汉王蓝天</p>
        </div>
      </div>
      <div class="dcode">
        <div>
          <img src="../../assets/login/weibo_erweima.png" class="img1">
        </div>
        <div>
          <img src="../../assets/login/weibologo.png" class="img2">
          <p class="dcode-text">汉王蓝天</p>
        </div>
      </div>
    </div>
    <div class="copyright">
      Copyright &nbsp;&copy;&nbsp; 汉王蓝天科技有限公司
    </div>
  </div>
</template>
 
<script>
// import $ from 'jquery'
import bgPic from '../../assets/login/bj.jpg'
import { isChinese } from '@/utils/validate'
import { login } from '@/api/login'
import { getCookie, setCookie, removeCookie } from '@/utils/cookie'

export default {
  data() {
    var validateAcount = (rule, value, callback) => {
      if (!value) {
        callback(new Error('用户名不能为空'))
      } else {
        callback()
      }
    };
    var validatePass = (rule, value, callback) => {
      if (value.length < 6) {
        callback(new Error('密码不能小于6位'));
      } else {
        callback();
      }
    };
    return {
      bg: bgPic,
      loginForm: {
        acount: '13521347060',
        password: '123456'
      },
      loginRules: {
        acount: [
          {
            required: true,
            trigger: 'blur',
            validator: validateAcount
          }
        ],
        password: [
          {
            required: true,
            trigger: 'blur',
            validator: validatePass
          }
        ]
      },
      loading: false
    }
  },
  methods: {
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          if (isChinese(this.loginForm.acount)) {
            this.loginForm.acount = unescape(encodeURIComponent(this.loginForm.acount))
          }
          this.loading = true
          var username = this.loginForm.acount.trim();
          var password = this.loginForm.password.trim();
         // var auth = "Basic " + btoa(username + ":" + md5(password));

          return new Promise((resolve, reject) => {
            login(username, password).then(response => {
              console.log(response)
              //const data = response.data
              // window.sessionStorage.setItem('userInfo',JSON.stringify(data))
              if (response.data.roles.length !== 0 && response.data.roles[0] == 'ROLE_USER') {
                setCookie('userToken', 'user')
              }
              this.$router.push({ path: '/homepage' })
              resolve()
            }).catch(error => {
              reject(error)
              this.loading = false
            })
          })
        }
      })
    }
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}

.login-container {
  width: 100%;
  height: 100vh; //background-image: url(../../assets/login/bj.jpg);
  background-repeat: no-repeat;
  background-size: cover;
}

@media screen and (min-width:1920px) {
  .logo {
    width: 20%;
    margin-top: 50px;
    margin-left: 50px;
  }
  .login-form {
    position: absolute;
    top: 50%;
    margin-top: -350px;
    left: 50%;
    margin-left: -400px;
    width: 800px;
    height: 500px;
    padding-top: 40px;
    background-color: rgba(12, 26, 44, 0.12);
    border-radius: 8px;
  }
  .title {
    font-family: Helvetica;
    font-size: 48px;
    color: #fff;
    margin: 0px auto 40px auto;
    text-align: center;
    font-weight: 200;
  }
  .item {
    width: 480px;
    height: 120px;
    line-height: 150px;
    margin: 20px auto;
    color: white;
    vertical-align: middle;
    border-color: white;
    border-style: solid;
    border-top-width: 0px;
    border-right-width: 0px;
    border-bottom-width: 1px;
    border-left-width: 0px;
  }
  .icon-container {
    width: 80px;
    height: 100px;
    float: left;
    margin-top: 20px;
  }
  .icon1 {
    width: 100%;
    height: 80px;
  }
  input {
    width: 350px;
    height: 120px;
    margin-left: 50px;
    background-color: rgba(12, 26, 44, 0);
    border-color: white;
    border-style: solid;
    border-top-width: 0px;
    border-right-width: 0px;
    border-bottom-width: 0px;
    border-left-width: 0px;
    outline: none;
    font-size: 30px;
    color: white;
  }
  .dcode-container {
    position: absolute;
    right: 30px;
    bottom: 80px;
  }
  .dcode {
    float: left;
    width: 150px;
    margin-right: 10px;
  }
  .img1 {
    width: 140px;
  }
  .img2 {
    width: 50px;
  }
  .dcode-text {
    color: #fff;
    font-size: 20px;
    margin-top: 0px;
    margin-right: 8px;
    float: right;
  }
  .copyright {
    font-size: 26px;
    color: white;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 30px;
    margin: 0 auto;
    text-align: center;
  }
}

@media screen and (min-width:992px) and (max-width:1920px) {
  .logo {
    width: 20%;
    margin-top: 50px;
    margin-left: 50px;
  }
  .login-form {
    position: absolute;
    top: 50%;
    margin-top: -25vh;
    left: 50%;
    margin-left: -300px;
    width: 600px;
    height: 400px;
    padding-top: 20px;
    background-color: rgba(12, 26, 44, 0.12);
    border-radius: 8px;
  }
  .title {
    font-family: Helvetica;
    font-size: 48px;
    color: #fff;
    margin: 10px auto 10px auto;
    text-align: center;
    font-weight: 200;
  }
  .item {
    width: 400px;
    height: 100px;
    line-height: 120px;
    margin: 10px auto;
    color: white;
    vertical-align: middle;
    border-color: white;
    border-style: solid;
    border-top-width: 0px;
    border-right-width: 0px;
    border-bottom-width: 1px;
    border-left-width: 0px;
  }
  .icon-container {
    width: 45px;
    height: 45px;
    float: left;
    margin-top: 30px;
  }
  .icon1 {
    width: 100%;
    height: 45px;
  }
  input {
    width: 300px;
    height: 100px;
    margin-left: 40px;
    background-color: rgba(12, 26, 44, 0);
    border-color: white;
    border-style: solid;
    border-top-width: 0px;
    border-right-width: 0px;
    border-bottom-width: 0px;
    border-left-width: 0px;
    outline: none;
    font-size: 30px;
    color: white;
  }
  .dcode-container {
    position: absolute;
    right: 10px;
    bottom: 30px;
    width: 350px;
  }
  .dcode {
    float: left;
    width: 150px;
    margin-right: 20px;
  }
  .img1 {
    width: 150px;
  }
  .img2 {
    width: 40px;
  }
  .dcode-text {
    color: #fff;
    font-size: 20px;
    margin-top: 0px;
    margin-right: 10px;
    float: right;
  }
  .copyright {
    font-size: 24px;
    color: white;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 30px;
    margin: 0 auto;
    text-align: center;
  }
}



@media screen and (min-width:768px) and (max-width:992px) {
  .logo {
    width: 20%;
    margin-top: 50px;
    margin-left: 50px;
  }
  .login-form {
    position: absolute;
    top: 50%;
    margin-top: -25vh;
    left: 50%;
    margin-left: -300px;
    width: 600px;
    height: 40vh;
    padding-top: 8vh;
    background-color: rgba(12, 26, 44, 0.12);
    border-radius: 8px;
  }
  .title {
    font-family: Helvetica;
    font-size: 48px;
    color: #fff;
    margin: 0px auto 40px auto;
    text-align: center;
    font-weight: 200;
  }
  .item {
    width: 60%;
    height: 8vh;
    line-height: 8vh;
    margin: 20px auto;
    color: white;
    vertical-align: middle;
    border-color: white;
    border-style: solid;
    border-top-width: 0px;
    border-right-width: 0px;
    border-bottom-width: 1px;
    border-left-width: 0px;
  }
  .icon-container {
    width: 14%;
    height: 5vh;
    float: left;
    margin-top: 1vh;
  }
  .icon1 {
    width: 100%;
    height: 5vh;
  }
  input {
    width: 72%;
    height: 8vh;
    margin-left: 10%;
    background-color: rgba(12, 26, 44, 0);
    border-color: white;
    border-style: solid;
    border-top-width: 0px;
    border-right-width: 0px;
    border-bottom-width: 0px;
    border-left-width: 0px;
    outline: none;
    font-size: 30px;
    color: white;
  }
  .dcode-container {
    position: absolute;
    right: 30px;
    bottom: 80px;
  }
  .dcode {
    float: left;
    width: 150px;
    margin-right: 10px;
  }
  .img1 {
    width: 140px;
  }
  .img2 {
    width: 50px;
  }
  .dcode-text {
    color: #fff;
    font-size: 20px;
    margin-top: 0px;
    margin-right: 8px;
    float: right;
  }
  .copyright {
    font-size: 26px;
    color: white;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 30px;
    margin: 0 auto;
    text-align: center;
  }
}

@media screen and (max-width:768px) {
  .logo {
    width: 50%;
    margin: 20px 25%;
  }
  .login-form {
    position: absolute;
    top: 50%;
    margin-top: -150px;
    left: 50%;
    margin-left: -150px;
    width: 300px;
    height: 300px;
    padding-top: 20px;
    background-color: rgba(12, 26, 44, 0.12);
    border-radius: 8px;
  }
  .title {
    font-family: Helvetica;
    font-size: 24px;
    color: #fff;
    margin: 0px auto 40px auto;
    text-align: center;
    font-weight: 200;
  }
  .item {
    width: 60%;
    height: 50px;
    line-height: 50px;
    margin: 20px auto;
    color: white;
    vertical-align: middle;
    border-color: white;
    border-style: solid;
    border-top-width: 0px;
    border-right-width: 0px;
    border-bottom-width: 1px;
    border-left-width: 0px;
  }
  .icon-container {
    width: 10%;
    height: 50px;
    float: left;
    margin-top: 10px;
  }
  .icon1 {
    width: 30px;
    height: 30px;
  }
  input {
    width: 72%;
    height: 50px;
    margin-left: 10%;
    background-color: rgba(12, 26, 44, 0);
    border-color: white;
    border-style: solid;
    border-top-width: 0px;
    border-right-width: 0px;
    border-bottom-width: 0px;
    border-left-width: 0px;
    outline: none;
    font-size: 14px;
    color: white;
  }
  .dcode-container {
    display: none;
  }
  .copyright {
    font-size: 16px;
    color: white;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 30px;
    margin: 0 auto;
    text-align: center;
  }
}

.item1 {
  border-bottom-width: 0;
}

.login-button {
  width: 100%;
  height: 45px;
  margin-top: 20px;
  background-color: rgb(40, 78, 123);
  outline: none;
  color: white;
  border: 0;
  font-size: 18px;
}

input::-webkit-input-placeholder {
  color: rgba(255, 255, 255, .6);
}

input:-moz-placeholder {
  color: rgba(255, 255, 255, .6);
}

input::-moz-placeholder {
  color: rgba(255, 255, 255, .6);
}

input:-ms-input-placeholder {
  color: rgba(255, 255, 255, .6);
}
</style>
