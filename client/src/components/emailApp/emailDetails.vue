<template>
    <div class="message">
        <div class="header">
            <button @click.stop="">X</button>
            <ul>
            <li><span class="prop">From: </span>{{email.from}}</li>
            <li><span class="prop">To: </span>{{email.to}}</li>
            <li><span class="prop">Received on: </span>{{email.date}}</li>
            </ul>
            </div>
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

<style>

</style>
