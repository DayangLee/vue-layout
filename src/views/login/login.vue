<template>
  <div class="login-container">
    
  </div>
</template>
 
<script>
export default {

};
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}

.login-container {
  width: 100%;
  height: 100vh;
  //background-image: url(../../assets/login/bj.jpg);
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

@media screen and (min-width:992px) and (max-width:2048px) {
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
    margin: 20px auto 20px auto;
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
    height: 150px;
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
