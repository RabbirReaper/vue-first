<script setup>
  import { computed, ref, watch } from 'vue'
  
  const disabled = ref(false)
  const sendMsg = () =>{
    
  }

  const msg =ref('undefine')
</script>

<template>
  <input type="text" v-model="msg">
  <button @click="sendMsg" class="shake">傳送資料</button>
  <br/>
  {{msg}}

</template>

<style>

  .shake {
    border: 2px red solid;
    animation: shake 5s infinite;
  }
  @keyframes shake {
    0% {border-color: red;} 
    50% {border-color: blue;} 
    100% {border-color: red;} 
  }
  
  
  
</style>
