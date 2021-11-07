<template lang="pug">   
    section(class="app")  
      Top()
      vue-page-transition(v-show="!visRules" name="fade-in-left" class="transition")
        router-view
      Bottom()
</template>

<script>

import Top from './modules/Top/top.vue';
import Bottom from './modules/Bottom/bottom.vue';

export default {
  name: 'app',
  components: {
     Top, Bottom
  },
  data(){
    return {
      visModal: false,
      visRules: false
    }
  },
  mounted(){
    
  },
  update(){
   
  }
}
</script>