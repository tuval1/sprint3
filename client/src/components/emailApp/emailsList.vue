<template>

  <section v-if="emails">    
    <email-filter @filter="emailFilter()"></email-filter>
    <h2>num of mails: {{emails.length}}</h2>    
    <button @click="isComposeMode=!isComposeMode">Compose mail</button>
    <table>

      <tr>
      <th>Subject</th>
      <th>Form</th>
      <th>Date</th>
      <th>read</th>
        </tr>
      <email-preview v-for="email in emails" @click.native="selectEmail(email)"
      :email="email" @delete="deleteEmail(email)">
      </email-preview>
    </table>

    <email-details v-if="selectedEmail" :email="selectedEmail">
    </email-details>

    <email-compose v-if="isComposeMode" :userEmail="userEmail">
    </email-compose>
<button @click="emailToShow()">filter</button>
    
  </section>
</template>

<script>
import emailService from '../../services/emailService'
import emailPreview from './emailPreview'
import emailDetails from './emailDetails'
import emailCompose from './emailCompose'
import emailFilter from './emailFilter'
export default {
  name: 'email-list',
  created() {    
    this.emails = emailService.getEmails('requestEmails')
          .then(res => { this.emails = res; console.log(this.emails) })    
  },
  components: {
    emailPreview,
    emailDetails,
    emailCompose,
    emailFilter
  },  
  data() {
    return {
      userEmail: 'owner@email.com',
      selectedEmail: null,
      emails: null,
      isComposeMode: false,
      filter: null
    }
  },
  computed: {
    emailsToShow() {
      return this.emails          
    }
  },
  methods: {
    deleteEmail(email){
      console.log('deleting email',email);
    },
    selectEmail(email) {
      this.selectedEmail = email;
      email.read = true;
      console.log('selected email:',this.selectedEmail);
    },
    emailFilter(){
      console.log('Executing Filter');
    }
    
  }
}
</script>

<style scoped>

</style>
