<template>
  <section v-if="emails">    
    
    <h2>num of mails: {{emails.length}}</h2>    
    <button @click="isComposeMode=!isComposeMode">Compose mail</button>
    <table>
      <tr>
      <th>id</th>
      <th>sbj</th>
      <th>to</th>
      <th>read</th>
      <th>message</th>
        </tr>
      

      <email-preview v-for="email in emails" @click.native="selectEmail(email)"
      :email="email" @delete="deleteEmail"></email-preview>
    </table>
<email-compose v-if="isComposeMode" :userEmail="userEmail" @compose="emailCompose">
      </email-compose>

    <email-details v-if="selectedEmail" :email="selectedEmail">
    </email-details>   
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
          .then(res => { this.emails = res; console.log('emails',this.emails) })
          

    //this.emails;

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
    emailsToShow(){        
      //return this.emailFilter();
    }
  },
  
  methods: {

    deleteEmail(email){
      console.log('deleting email',email);
      emailService.deleteEmail(email.id).then(res => this.emails = res);
      

      // var i = this.emails.indexOf(email);
      // this.emails.splice(i,1);
    },
    getEmails() {
          emailService.getEmails('requestEmails')
          .then(res => { this.emails = res; console.log(this.emails) })
    },
    selectEmail(email) {
      this.selectedEmail = email;
      email.read = true;
      console.log('selected email:',this.selectedEmail);
    },
    // emailFilter( str ){
    //   var txt = '';
    //   console.log('Executing Filter',txt);          
    //   return this.emails.filter(function( email ){
    //     return email.subject.includes(txt) || email.from.includes(txt) || email.msg.includes(txt);
    //   });
    // },
    emailCompose(emailFrom,emailTo,emailSubject,emailMessage,sendDate){
      console.log('composing',emailFrom,emailTo,emailSubject,emailMessage,sendDate);
      var id = 10;
      // this.emails.push(
      //   {id: id++, from:emailFrom ,to:emailTo ,subject:emailSubject ,msg:emailMessage ,read: false}
      // )
      emailService.composeEmail(emailFrom, emailTo);

    }
    
  }
}
</script>

<style scoped>
table{
  border:1px solid blue;
}
tr{
  border:1px solid red;
}
email-details{
  border:1px solid green;
}

</style>
