<template>
  <div class="hello">

    <!-- <div class="indexInfo">
      {{ msg }} {{ getUsername }} ~
    </div> -->


  <keep-alive>
    <!-- 这里渲染是reg1子路由 -->
    <router-view></router-view>
  </keep-alive>

  </div>
</template>

<script>
import Vue from 'vue'
export default {
  name: 'index',
  data () {
    return {
      username : '',
      msg: '欢迎回到主界面'
    }
  },
  computed : {
    getUsername(){
        // 全局存储对象
        var globalBus = new Vue();
        globalBus.$on('getUsername',function(username){
          this.username = username;
        });
    }
  },
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.indexInfo{
  margin: 20px 0 0 0;
  font-size: 25px;
  padding: 10px 0 10px 0;
  font-weight: 600;
}

.hello{
  padding: 30px 0 0 0;
  /* background: url('../assets/pkq.gif') center center no-repeat;
  background-size: 300px 300px;
  background-position-y: 100px;
  height: 100%;
  transition: transfrom 0.5s linear; */
}

</style>
