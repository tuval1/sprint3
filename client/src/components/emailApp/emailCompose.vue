<template>
<section class="modal new-email">     
    <h3>Create New Email</h3>       
            <input type="text" v-model="userEmail" disabled/>
            <input type="text" placeholder="to" autofocus v-model="emailTo"/>
            <input type="text" placeholder="subject" v-model="emailSubject"/>                 
            <textarea v-model="emailMessage" placeholder=""></textarea>
            <button @click="sendEmail">Send</button>
        </section>  
</template>

<script>
export default {
  name: 'email-compose',
    created(){
        
    },
    props: ['userEmail'],
    data(){
        return {
            emailFrom: '',
            emailTo: '',
            emailSubject: '',
            emailMessage: ''
            
        }
    },
    methods: {
        sendEmail(){
            const emailFrom    = this.emailFrom;
            const emailTo      = this.emailTo;
            const emailSubject = this.emailSubject;
            const emailMessage = this.emailMessage;
            const sendDate     = Date.now();
            
            console.log(emailFrom,emailTo,emailSubject,emailMessage,sendDate);
        }
    }
}
</script>

