<template>
<section>     
    <h3>Filter</h3>
    <input type="text" v-model="filter">
        </section>  
</template>

<script>
export default {
  name: 'email-filter',
  data() {
      return {
        filter: null
      }
    
  },
  watch: {
      filter: function(){
          console.log('filter watch');
          this.emailFilter();
      }
  },
  methods: {
      emailFilter(){
          this.$emit('filter');
          console.log('request filter');
      }
  }
}
</script>

