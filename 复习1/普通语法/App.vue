<template>
  <div>
    <h1>{{msg}}</h1>
    <MySchool :getSchoolName="getSchoolName">
      <h1>{{age}}</h1>
    </MySchool>
    <!-- 绑定自定义事件v-on方法 -->
    <!-- <MyStudent @getStudentName="getStudentName"/> -->
     <!-- 绑定自定义事件ref -->
     <!-- ref先设置一个类似id一样的名字,下面通过this.$refs.mystudent调用 -->
    <MyStudent ref="mystudent"/>
    <button @click="getStudent">点我获得学生数据</button>
    <button @click="getCar">点我获得汽车数据</button>

  </div>
</template>

<script>
import axios from 'axios';
import MySchool from './components/MySchool.vue';
import MyStudent from './components/MyStudent.vue'

export default {
  name: 'App',
  components: {
    MySchool,
    MyStudent
  },
  data() {
    return {
      msg: '你好啊！',
      age:22,
    }
  },
  methods: {
    getSchoolName(name) {
      console.log(name);
    },
    getStudentName(name,...params) {
      console.log(name,params);
    },
    getStudent() {
      axios.get('http://localhost:8080/cjlu/students').then(
        response => {
          console.log('请求成功',response.data);
        },
        error => {
          console.log('请求失败',error.massage);
        }
      )
    },
    getCar() {
      axios.get('http://localhost:8080/car/cars').then(
        response => {
          console.log('请求成功',response.data);
        },
        error => {
          console.log('请求失败',error.massage);
        }
      )
    }
  },
  mounted() {  //$on里绑定一个自定义事件，后面是当自定义事件触发时调用的函数
    this.$refs.mystudent.$on('getStudentName', this.getStudentName);
  },
}
</script>

<style scoped>
  h1 {
    font-size: 15px;
    font-weight: 400;
  }
</style>
