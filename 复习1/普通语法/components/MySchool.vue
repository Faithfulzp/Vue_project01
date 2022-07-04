<template>
  <div class="school">
      <h2>学校名字：{{name}}</h2>
      <h2>学校地址：{{address}}</h2>
      <button @click="sendSchoolName">点我获得学校名字</button>
      <button @click="sendName">点发送学校名字</button>
      <slot>默认值1</slot>
  </div>
</template>

<script>
import pubsub from 'pubsub-js';

export default {
  name: 'MySchool',
  props:['getSchoolName',],
  data() {
      return {
          name: 'cjlu',
          address: 'hangzhou'
      }
  },
  methods: {
    sendSchoolName() {
      this.getSchoolName(this.name);
    },
    sendName() {
      this.$bus.$emit('getName', this.name);
    }
  },
  mounted() {
    this.pubId = pubsub.subscribe('hello',(a,b)=>{
      console.log('有人订阅了hello消息',a,b);
    })
  },
  beforeDestroy() {
    pubsub.unsubscribe(this.pubId);
  },

}
</script>