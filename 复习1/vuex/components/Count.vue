<template>
  <div>
    <h1>当前求和为：{{sum}}</h1>
    <h1>当前求和变大10倍为：{{bigSum}}</h1>
    <select v-model.number="n">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
    </select>
    <button @click="increment(n)">+</button>
    <button @click="decrement(n)">-</button>
    <button @click="addWait(n)">等会加</button>
    <button @click="addOdd(n)">奇数加</button>

  </div>
</template>

<script>
import { mapState , mapGetters, mapMutations, mapActions} from 'vuex';
export default {
    name: 'Count',
    data() {
        return {
            n: 1,
        }
    },
    methods: {
        /* increment() {
            this.$store.commit('ADD', this.n);
        },
        decrement() {
            this.$store.commit('SUB', this.n);
        },
        addWait() {
            this.$store.dispatch('addWait', this.n);
            
        },
        addOdd() {
            this.$store.dispatch('addOdd', this.n);
        } */
        ...mapMutations({ increment: 'ADD', decrement: 'SUB' }),//对象形式，数组形式就是方法命名和Mutation全部相同
        ...mapActions({addWait:'addWait',addOdd:'addOdd'})
    },
    computed: {
        /* sum() {
            return this.$store.state.sum;
        },
        bigSum() {
            return this.$store.getters.bigSum;
        }, */
        // ...mapState({ sum: 'sum', bigSum: 'bigSum' }),//对象形式
        ...mapState(['sum']),//数组形式
        // ...mapGetters({ bigSum: 'bigSum' }),//对象形式
        ...mapGetters(['bigSum']),//对象形式
    }
}
</script>

<style scoped>
    button{
        margin-left: 5px;
    }
</style>