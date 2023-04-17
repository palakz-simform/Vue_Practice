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
  </div>
</template>

<script>
import { ref, reactive, toRefs, watchEffect, watch, computed, onBeforeMount, onMounted } from 'vue'
import AppAlert from "./components/Alert.vue"
export default {
  name: "App",
  components: {
    AppAlert
  },
  setup() {
    onBeforeMount(() => {
      console.log("OnBeforeMount()")
    })
    onMounted(() => {
      console.log("OnMount()")
    })


    let num = ref(0);
    // console.log(num)
    function increment() {
      num.value++;
    }

    const double = computed(() => {
      return num.value * 2;
    });
    const user = reactive({
      name: 'John',
      age: 20,
    });
    setTimeout(() => {
      user.name = "Luis"
    }, 3000);
    const phrase = ref("")
    const reversedPhrase = ref("");

    watchEffect(() => {
      reversedPhrase.value = phrase.value.split("").reverse().join("");
    })
    // watch([phrase], ([nexVal, oldVal]) => {
    //   reversedPhrase.value = phrase.value.split("").reverse().join("");
    // })

    return {
      num, increment, ...toRefs(user), phrase, reversedPhrase, double, user
    }
  }
};
</script>
