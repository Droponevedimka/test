<template lang="pug">
    section(class="top")        
      div(v-if="isVis" class="top__container")
        div(class="top__container--left") 
          div(class="top__container--left-name") {{getNameUser.name}}
          div(class="top__container--left-role") {{getNameUser.role}}    
        div(class="top__container--right")  
          div(class="top__container--right-add" @click="setItem()") Добавить урок
          div(v-if="isLoggedIn" class="top__container--right-btn" @click="logIn()") Выйти
          div(v-else class="top__container--right-btn" @click="logOut()") Войти
              
              
</template>


<script>
import style from './style.scss';


export default {
  name: 'Top',
  data(){
    return {
    
    }
  },
  components: {
   
  },
  beforeMount(){ 
          
  },
  computed: {   
    isLoggedIn: function(){ return this.$store.getters.isLoggedIn},
    isVis: function(){      
      let path = this.$route.name
      return path !== 'home' && path !== 'login'
    },
    getNameUser: function(){
      return this.$store.getters.getInfoOfUser
    }
  },
  methods:{   
    logOut(){

    },
    logIn(){

    },
    setItem(){
      
      this.$store.commit('setNewItem', {title: 'Новый новый новый', description: 'Линейные уравнения', img: '/assets/img/lessons/img-1.jpg'});
    }
  },
  mounted(){
   
  }
}

</script>
