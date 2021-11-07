<template lang="pug">
    section(class="lessons")        
      div(class="lessons__container")
        div(class="lessons__container--item" v-for="item in lessons" :key="item.id")
          div(class="lessons__container--item-title" v-html="item.title")
          div(class="lessons__container--item-description" v-html="item.description")
          img(class="lessons__container--item-img" :src="item.img")
          img(class="lessons__container--item-delete" src="assets/img/lessons/exit.png" @click="setDelete(item.id)")

      div(class="lessons__bottom")     
        div(class="lessons__bottom--pagination")   
          div(class="lessons__bottom--pagination-arrow prev") <
          div(class="lessons__bottom--pagination-item" v-for="pagItem in pagination.visCount" :class="pagItem==pagination.active && 'active'" v-html="pagItem")   
          div(class="lessons__bottom--pagination-arrow next") >
              
</template>


<script>
import { mapGetters } from "vuex";

export default {
  name: 'Lessons',
  data(){
    return{
      pagination: {
        length: 12,
        visCount: 5,
        maxVisCount: 5,
        active: 2
      }
    }
  },
  components: {
   
  },
  beforeMount(){ 
          
  },
  computed: {    
    ...mapGetters(["lessons"]),
    lessons: function() {
      return this.$store.getters.getAllLessons
    }
  },
  methods:{   
    setDelete(id){

    }
  },
  mounted(){

  }
}

</script>
