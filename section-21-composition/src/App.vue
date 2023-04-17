<template>
  <div>
    <p>{{ num }}</p>
    <button @click.prevent="increment">Click me</button>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  name: "App",
  setup() {
    let num = ref(0);
    // console.log(num)
    function increment() {
      num.value++;
    }

    return {
      num, increment
    }
  }
};
</script>
