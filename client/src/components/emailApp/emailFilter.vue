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
        filter: ''
      }
    
  },
  watch: {
      filter: function(){
          console.log('filter watch');
          this.emailFilter(this.filter);
      }
  },
  methods: {
      emailFilter(event){
          this.$emit('filter',this.filter);
          console.log('request filter',this.filter);
      }
  },
  foo(){
      this.$emit('foo');
  }
}
</script>

