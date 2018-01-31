<!--
  这里是邮箱校验的页面
-->
<template>
  <div>
     <div class="email">
        <label for="email"></label>
        <input
          v-validate ="'required|email'"
          type="text"
          id="email"
          name="myEmail"
          placeholder="邮箱"
        >
    </div>
    <span v-show="errors.has('myEmail')">{{ errors.first('myEmail')}}</span>
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

  methods: {}
}

</script>
<style scoped>
.email{
  margin: 30px auto;
  width: 390px;
  height: 45px;
}

.email input{
  width: 100%;
  height: 100%;
  font-size: 27px;
}

</style>
