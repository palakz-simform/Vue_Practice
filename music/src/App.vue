<template>
  <app-header></app-header>

  <router-view></router-view>
  
  <AppPlayer/>

  <auth></auth>
</template>

<script>
import AppHeader from '@/components/Header.vue'
import Auth from '@/components/Auth.vue'
import { mapWritableState } from 'pinia';
import useUserStore from '@/stores/user';
import {auth} from './includes/firebase'
import AppPlayer from "@/components/Player.vue"
export default {
  name: 'App',
  components: {
    AppHeader,
    Auth,
    AppPlayer
  },
  computed:{
    ...mapWritableState(useUserStore,["userLoggedIn"]),
  },
  //this life cycle method is called when the function is created 
  created(){
    if(auth.currentUser){
      this.userLoggedIn = true;
    }
  }
}
</script>
