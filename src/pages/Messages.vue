<template>
    <div>
        <ul>
            <li v-for="m in messageList" :key="m.id">
                <!-- 字符串写法传参 -->
                <!-- <router-link :to="`/home/messages/detail?id=${m.id}&title=${m.title}`">{{m.title}}</router-link>&nbsp;&nbsp; -->
                <!-- 对象写法传参 -->
                <router-link :to="{
                    name:'detail',
                    // path: '/home/messages/detail,'
                    query: {
                        id: m.id,
                        title:m.title
                    }
                }"
                >{{m.title}}</router-link>

            </li>
        </ul>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'Messages',
    data() {
        return {
            messageList: [
                {id:'001',title:'消息001'},
                {id:'002',title:'消息002'},
                {id:'003',title:'消息003'},
            ]
        }
    },
}
</script>

<style>

</style>