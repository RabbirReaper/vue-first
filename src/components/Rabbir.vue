<script setup>
  import { computed, ref, watch } from 'vue'
  import Rabbir from './components/Rabbir.vue'
  const data = "Hello data"
  const text = ref("aaa")
  const b = ref(0)
  const arr = ref([1,3,5,8,8])
  const f = (index) =>{
    b.value = index
    arr.value[1] = index
  }
  const click_number = ref(0)
  const com_x = ref(100)
  const com_y = ref(1000)
  const com_y_2 = ref(0)
  const computed_test1 = computed(() => {
    if(Number.isNaN(com_x.value*100)) return com_x.value
    return com_x.value*10
  })

  const computed_test2 = computed({
    get(){
      return com_y.value
    },
    set(input){
      com_y.value = input
      if(Number.isNaN(com_y.value)) com_y_2.value = com_y.value
      else com_y_2.value = com_y.value*87
    }
  })

  watch(b,(newdata , old) => {
    console.log(newdata , old)
  })
  
</script>

<template>
  <rabbir></rabbir>
  <h1>Make me dynamic!</h1>
  <button @click="f(1)">show text-1</button>
  <button v-on:click="f(2)">show text-2</button>
  <button @click="click_number++"> Count is: {{ click_number }} </button>
  <div class = "text-1" v-if="b === 1">
    <p>test</p> 
    <input type="text" v-model="com_x">
    <br/>
    <p> {{computed_test1}} </p>
    <input  type="text" v-model="computed_test2">
    <p>{{com_y_2}}</p>
  </div>
  
  <div class = "text-2" v-if="b === 2">
    <p>{{data}}</p>
    <input type="text" v-model="text"/>
    <p>{{ text }}</p>
  </div>

  <div v-for="(x,idx) in arr" :key="idx">
    {{x}}
  </div>

</template>

<style>

  .text-1{
    border: 2px red solid;
    animation: mymove 5s infinite;
  }
  .text-2{
    border: 2px rgba(128, 255, 0, 0.729) solid;
  }
  .shake {
    animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
    transform: translate3d(0, 0, 0);
  }

  @keyframes mymove { 
    0% {border-color: red;} 
    50% {border-color: blue;} 
    100% {border-color: red;} 
  }
  
</style>
