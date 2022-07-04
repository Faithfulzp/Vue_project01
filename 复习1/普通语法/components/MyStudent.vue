<template>
  <div class="student">
      <h2>学生名字：{{name}}</h2>
      <h2>学生性别：{{sex}}</h2>
      <button @click="sendStudentName">点我获得学生名字</button>
      <button @click="over">点我销毁</button>
  </div>
</template>

<script>
import pubsub from 'pubsub-js';

export default {
  name: 'MyStudent',
  data() {
      return {
        name: 'fzp',
        sex:'男'
      }
  },
  methods: {
    sendStudentName() {
      this.$emit('getStudentName', this.name, 11, 11, 11);
      pubsub.publish('hello', 666);
    },
    getName(name) {
      console.log(name);
    },
    over() {
      this.$destroy();
    }
  },
  mounted() {
    this.$bus.$on('getName', this.getName);
  },
  beforeDestroy() {
    this.$bus.$off('getName');
  },
}
</script>
<style lang="css">
  
</style>
