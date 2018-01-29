<!-- 这里是路由的头部设置 -->
<template>
  <div class="header">

    <!-- 图片 -->
    <span class="indeximg">
      <router-link></router-link>
    </span>

    <!-- 头部路由导航 -->
      <ul>
        <li class="login">
          <router-link to="/reg1">登录校验页面</router-link>
        </li>
        <li class="mail">
          <router-link to="/reg2">邮箱校验页面</router-link>
        </li>
        <li class="regexper">
          <router-link to="/regexper">Regexper</router-link>
        </li>
      </ul>

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
.header{
  width: 700px;
  height: 150px;
  background-color: rgb(233, 231, 231);
  margin: 0 auto;
}

.indeximg{
  display: inline-block;
  width: 220px;
  height: 150px;
  background: url('../assets/pkq.jpg') center center no-repeat;
}


ul{
  float: right;
  width: 500px;
  height: 150px;
  margin-right: -20px;
}

ul li{
  display: inline-block;
  line-height: 150px;
  width: 160px;
  float: left;
  border: 0;
}

a{
  color: #fff;
  text-decoration: none;
  font-family: "Helvetica Neue",Helvetica,Arial,"Hiragino Sans GB","Hiragino Sans GB W3","Microsoft YaHei UI","Microsoft YaHei","WenQuanYi Micro Hei",sans-serif;
  font-size: 20px;
}

.login{
  background-color: rgb(79, 117, 243);
  opacity: 0.8;
}

.mail{
  background-color: rgb(16, 202, 187);
  opacity: 0.8;
}

.regexper{
  background-color: rgb(23, 231, 75);
  opacity: 0.8;
}

.login:hover{
  transition: 0.6s;
  transform: scale(1.005);
}

.mail:hover{
  transition: 0.6s;
  transform: scale(1.005);
}

.regexper:hover{
  transition: 0.6s;
  transform: scale(1.005);
}

</style>
