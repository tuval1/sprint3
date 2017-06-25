<template>
<div class="container">
  <div class="row">
  <section v-if="emails">   
    <div class="col-md-6">
      <div class="main-details">
    <h2>num of mails: {{emails.length}}</h2>    
      </div>
      <div class="btn-compose">
    <button @click.stop="isComposeMode=!isComposeMode" class="btn btn-primary">Compose mail</button>
    </div>
    <table class="table table-striped">
      <tr>
      
      <th>sbj</th>
      <th>from</th>
      
      <th>message</th>
        </tr>
      

      <email-preview v-for="email in emails" @click.native="selectEmail(email)"
      :email="email" @delete="deleteEmail" v-if="showEmailList"></email-preview>
    </table>
    
<email-compose v-if="isComposeMode" :userEmail="userEmail" @compose="emailCompose">
      </email-compose>
</div>
<div class="col-md-6 message-container">
    <email-details v-if="selectedEmail" :email="selectedEmail">
    </email-details> 
    </div>  
  </section>
  </div>
  </div>


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
      filter: null,
      showEmailList: true
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
      showEmailList = false;
      
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
      this.emails.push(
        {id: id++, from:emailFrom ,to:emailTo ,subject:emailSubject ,msg:emailMessage ,read: false}
      )
      emailService.composeEmail(emailFrom, emailTo);
    },
    showEmailList(){
      showEmailList = true;
    },
    hideEmailList(){
      showEmailList = false;
    }
    
  }
}
</script>

<style scoped>
.message-container {
  position:relative;
}
.btn-compose {
  float:right;
}
.main-details {
  float:left;
}
</style>
