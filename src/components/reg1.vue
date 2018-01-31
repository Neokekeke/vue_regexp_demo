<!--
import { Vue } from 'vue/types/vue';
import { Vue } from 'vue/types/vue';
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
            v-validate="'required|min:6'"
            name="password"
            />
    </div>
    <span class="warn"  v-show="errors.has('password')">{{ errors.first('password') }}</span>

    <div class="content">
      <button @click="login"
      :class="['button' , actived ? 'active' : 'button']">
      登录</button>
    </div>

    <div id="user"></div>

  </div>
</template>

<script>
import Vue from 'vue'
export default {
  data () {
    return {
      username : '',
      password : '',
    };
  },

  components: {},

  computed: {
      actived(){
        if(this.username != '' && this.password != '' && this.errors.items.length == 0){
          return true;
        }
        return false;
      }
  },

  //mounted: {},

  methods: {
    login(){
      const user = document.getElementById('user');
      if(this.username != '' && this.password != '' && this.errors.items.length == 0){
        user.innerHTML =`<span class="aa">
            Welcome &nbsp; <i>${this.username}</i> &nbsp; ~
          </span>`;

        // 把username的值传给index
        var globalBus = new Vue();
        globalBus.$emit('getUsername',this.username);
      }
      else if(this.username == '' && this.password == ''){
        user.innerHTML = `<span>
            用户名和密码不能同时为空哟~
          </span>`;
      }
      else if(this.username == '' || this.password == ''){
        user.innerHTML = `<span>
            用户名或密码为空哦~
          </span>`;
      }
      //return user.innerHTML = '';
    },

  }
}

</script>
<style scoped>

  .loginReg{
    width: 700px;
    margin: 10px auto;
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
    font-size: 25px;
    background-color: rgb(247, 242, 242);
    border-radius: 10px;
  }

  .content{
    margin: 30px 0 0 0;
    font-size: 25px;
    font-weight: 600;
    justify-content: center;
    align-items: center;
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
    font-size: 20px;
    font-weight: 500;
  }

  .content button{
    border: 0;
    width: 100px;
    height: 50px;
    font-size: 25px;
    border-radius: 20px;
    line-height: 50px;
  }

  .content button:hover{
    background-color: orangered;
    color: #fff;
    opacity: 1;
    cursor: pointer;
  }

  .active{
    background-color: orangered;
    color: #fff;
    opacity: 0.7;
  }

</style>
