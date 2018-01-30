<!--
  这里写的是登录校验页面
 -->
<template>
  <div class="loginReg">

    <div class="text">
      <input
        type="text"
        autofocus="autofocus"
        v-model="username"
        v-validate="'required|min:3|alpha'"
        placeholder="用户名"
        name="username"
      />
    </div>
    <span class="warn"  v-show="errors.has('username')">{{ errors.first('username') }}</span>

    <div class="text">
      <input type="password"
            placeholder="密码"
            v-model="password"
            v-validate="'min:6'"
            name="pwd"
            />
    </div>
    <span class="warn"  v-show="errors.has('pwd')">{{ errors.first('pwd') }}</span>

    <div class="content">
      <button @click="login">登录</button>
    </div>

    <div id="user"></div>

  </div>
</template>

<script>

export default {
  data () {
    return {
      username : '',
      password : ''
    };
  },

  components: {},

  computed: {},

  //mounted: {},

  methods: {
    login(){
      if(this.errors){
        var user = document.getElementById('user');
        user.innerHTML =`<span class="user">
            Welcome &nbsp; ${this.username} &nbsp; ~
          </span>`;
      }
    },

  }
}

</script>
<style scoped>

  .loginReg{
    width: 700px;
    margin: 30px auto;
  }

  .text{
    width: 390px;
    height: 45px;
    margin: 0 auto;
  }

  input{
    display: block;
    margin: 10px 0 10px 0;
    width: 100%;
    height: 100%;
    font-size: 30px;
  }

  .content{
    margin: 30px 0 0 0;
    font-size: 25px;
    font-weight: 600;
  }

  .warn{
    display: block;
    color: red;
    font-weight: 600;
    font-size: 16px;
    margin: 15px 0 15px 0;
  }

  #user{
    width: 600px;
    height: 30px;
    margin: 20px auto;
    text-align: center;
  }

  .user{
    font-size: 30px;
    font-weight: 600;
  }

</style>
