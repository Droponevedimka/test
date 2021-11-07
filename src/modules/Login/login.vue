<template lang="pug">
    section(class="login")        
        form(class="login__form" @submit.prevent="login")
          div(class="login__form--block")
            label(class="login__form--block-label") Роль
            v-select(class="login__form--block-select" :options="roles" label="title")
          
          div(class="login__form--block")
            label(class="login__form--block-label") Логин
            input(class="login__form--block-input" required v-model="form.email" type="email" placeholder="Введите свой email")

          div(class="login__form--block")
            label(class="login__form--block-label") Пароль
            input(class="login__form--block-input" required v-model="form.password" type="password" placeholder="Введите свой пароль")  
          
          div(class="login__form--checked")
            label(class="login__form--checked-checkbox")
              input(type="checkbox" v-modal="form.checked" name="scales" checked)
              span() Запомнить меня
          button(class="login__form-btn" type="submit" @click="login()") Войти
          
         
              
              
</template>


<script>
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";

import style from './style.scss';


export default {
  name: 'Login',
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
                  .then(() => this.$router.push('/lessons'))
                  .catch(err => console.log(err));
      }
  },
  mounted(){
  }
}

</script>
