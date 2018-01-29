<!--
  这里写的是登录校验页面
 -->
<template>
  <div class="loginReg">


    <div class="text">
      <input type="text" autofocus="autofocus" v-model="username"/>
    </div>

    <div class="text">
      <input type="password"/>
    </div>

    <div class="content">
      登录校验的内容
    </div>

  </div>
</template>

<script>
export default {
  data () {
    return {


    };
  },

  components: {},

  computed: {},

  //mounted: {},

  methods: {}
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

</style>
