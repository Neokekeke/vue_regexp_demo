<!--
  这里是邮箱校验的页面
-->
<template>
  <div>
     <div>
        <label for="email">邮箱：</label>
        <input
          v-validate ="'required|email'"
          type="text"
          id="email"
          name="myEmail">
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
</style>
