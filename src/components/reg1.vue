<!--
  这里写的是登录校验页面
 -->
<template>
  <div class="loginReg">


    <input type="text" autofocus="autofocus" v-model="username"/>
    <input type="password"/>

    登录校验的内容
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
    margin: 30px 0 0 0;
  }

</style>
