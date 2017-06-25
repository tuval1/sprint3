<template>
<<<<<<< HEAD

  <section v-if="emails">    
    <email-filter @filter="emailFilter"></email-filter>
=======
  <section v-if="emails">
    <button @click="getEmails">Next > </button>
>>>>>>> 81b8fdde42febf1d0e69f24062a8aeff9de053e8
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
      <email-preview v-for="email in emailsToShow" @click.native="selectEmail(email)"
<<<<<<< HEAD
      :email="email" @delete="deleteEmail(email)">
=======

      <email-preview v-for="email in emails" @click.native="selectEmail(email)"

      :email="email">

>>>>>>> 81b8fdde42febf1d0e69f24062a8aeff9de053e8
      </email-preview>
    </table>

    <email-details v-if="selectedEmail" :email="selectedEmail">
    </email-details>

    <email-compose v-if="isComposeMode" :userEmail="userEmail" @compose="emailCompose">
    </email-compose>

    
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
<<<<<<< HEAD
    this.emails = emailService.getEmails('requestEmails')
          .then(res => { this.emails = res; console.log('emails',this.emails) })
          
=======
    this.emails = []
    //this.emails;
>>>>>>> 81b8fdde42febf1d0e69f24062a8aeff9de053e8
  },
  components: {
    emailPreview,
    emailDetails,
    emailCompose,
    emailFilter
  },  
  data() {
    return {
<<<<<<< HEAD
      userEmail: 'owner@email.com',
      selectedEmail: null,
      emails: null,
      isComposeMode: false,
      filter: null,
      emailService: null   
      
      
    }
  },
  computed: {    
    emailsToShow(){        
      return this.emailFilter();
=======
      emails: null,
      selectedEmail: null,
      isComposeMode: false
    }
  },
  computed: {
    emailsToShow() {
      return this.emails
          // this.emails= getEmails()
>>>>>>> 81b8fdde42febf1d0e69f24062a8aeff9de053e8
    }
  },  
  methods: {
<<<<<<< HEAD
    deleteEmail(email){
      console.log('deleting email',email);
      emailService.deleteEmail(email.id).then(res => this.emails = res);
      

      // var i = this.emails.indexOf(email);
      // this.emails.splice(i,1);
      
      
=======
    getEmails() {
          emailService.getEmails('requestEmails')
          .then(res => { this.emails = res; console.log(this.emails) })
>>>>>>> 81b8fdde42febf1d0e69f24062a8aeff9de053e8
    },
    selectEmail(email) {
      this.selectedEmail = email;
      email.read = true;
      console.log('selected email:',this.selectedEmail);
    },
    emailFilter( str ){
      var txt = '';
      console.log('Executing Filter',txt);          
      return this.emails.filter(function( email ){
        return email.subject.includes(txt) || email.from.includes(txt) || email.msg.includes(txt);
      });
    },
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
