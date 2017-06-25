<template>

    <div class="panel panel-default message">
     
             <div class="header">            
              <ul>
              <li><span class="prop">From: </span>{{email.from}}</li>
              <li><span class="prop">To: </span>{{email.to}}</li>
              <li><span class="prop">Received on: </span>{{email.date}}</li>
              </ul>
            </div>
        
        <hr>
        <p>{{email.msg}}</p>
  </div>


</template>

<script>
import emailService from './services/Semail.service.js'

export default {
  name: 'email-details',
  props: ['email'],
  data() {
    return {
      
    }
  },
  created() {    
  },
  methods: {

      deleteEmail(){
        console.log('request delete');
        this.$emit('delete');
      },           
    

  }
}
</script>

<style scoped>
.message {
  
  padding:4px;
}
ul {
  list-style:none;

}
.message .header {
  
}
</style>
