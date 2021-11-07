<template lang="pug">
    section(class="home")         
      div(class="home__body")         
        Login()

              
              
</template>


<script>
import Login from '../modules/Login/login.vue';

export default {
  name: 'Home',
  components: {
    Login
  },
  beforeMount(){ 
          
  },
  computed: {    
    
  },
  methods:{   
    
  },
  mounted(){
  }
}

</script>
