<template lang="pug">
    section(class="bottom")  Рандомный футер   
       
          
         
              
              
</template>


<script>
import vSelect from "vue-select";

import style from './style.scss';


export default {
  name: 'Bottom',
  data(){
    return {
      form: {
        email: null,
        password: null,
        checked: true
      },
      roles: [
        {title: 'Учитель'},
        {title: 'Ученик'}
      ]
    }
  },
  components: {
    vSelect
  },
  beforeMount(){ 
          
  },
  computed: {    
    
  },
  methods:{   
    login(){
      console.log('///авторизация');

      let email = this.form.email;
      let password = this.form.password;
        
      this.$store.dispatch('login', { email, password })
                  .then(() => this.$router.push('/'))
                  .catch(err => console.log(err));
      }
  },
  mounted(){
  }
}

</script>
