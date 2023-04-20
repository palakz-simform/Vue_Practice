<template>
  <div>
    <p>{{ num }}</p>
    <p>{{ double }}</p>
    <button @click.prevent="increment">Click me</button>
    <!-- <p>{{ user.name }}</p> -->
    <p>{{ name }}</p>
    <p>
      <input type="text" v-model="phrase" />
    </p>
    <p>{{ reversedPhrase }}</p>

    <AppAlert :user="user" />

    <button type="button" ref="btn">Button</button>
  </div>
</template>

<script setup>
import { ref, reactive, toRefs, onBeforeMount, onMounted } from 'vue'
import AppAlert from "./components/Alert.vue"
import { useNumber } from './hooks/number'
import { usePhrase } from './hooks/phrase'


const btn = ref(null)
onBeforeMount(() => {
  console.log("OnBeforeMount()")
})
onMounted(() => {
  console.log("OnMount()")
  btn.value.addEventListener('click', () => {
    console.log("Clicked")
  })
})


const user = reactive({
  name: 'John',
  age: 20,
});
setTimeout(() => {
  user.name = "Luis"
}, 3000);
// const phrase = ref("")
// const reversedPhrase = ref("");

// watchEffect(() => {
//   reversedPhrase.value = phrase.value.split("").reverse().join("");
// })
// watch([phrase], ([nexVal, oldVal]) => {
//   reversedPhrase.value = phrase.value.split("").reverse().join("");
// })
const { num, increment, double } = useNumber();
const { phrase, reversedPhrase, num: phraseNum } = usePhrase();

const { name } = toRefs(user)

</script>
