<template>
<section class="new-email">     
    <div class="modal-mask" v-if="showModal">
      <div class="modal-wrapper">
        <div class="modal-container">
<button class="modal-default-button" @click="showModal=false">
                X
              </button>
            <div class="modal-header">
            <slot name="header">
              
            </slot>
          </div>
          <div class="modal-body">
            <slot name="body">
              <h3>Create New Email</h3>  
                <div class="form-group">
     
            <input type="text" v-model="userEmail" class="form-control" disabled/>
            <input type="text" placeholder="to" autofocus v-model="emailTo" class="form-control"/>
            <input type="text" placeholder="subject" v-model="emailSubject" class="form-control"/>                 
            <textarea v-model="emailMessage" placeholder="" rows="11" cols="70"></textarea>
            </div>
            <button @click.stop="sendEmail" class="btn btn-primary">Send</button>
            </slot>
          </div>
          <div class="modal-footer">
            <slot name="footer">
              
              
            </slot>
          </div>
        </div>
      </div>
    </div>

    
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
            emailMessage: '',
            showModal: true
            
        }
    },
    methods: {
        sendEmail(){
            const emailFrom    = this.userEmail;
            const emailTo      = this.emailTo;
            const emailSubject = this.emailSubject;
            const emailMessage = this.emailMessage;
            const sendDate     = Date.now();
            
            this.$emit('compose',emailFrom,emailTo,emailSubject,emailMessage,sendDate);
            console.log('request compose',emailFrom,emailTo);

            this.emailFrom = '';
            this.emailTo = '';
            this.emailSubject = '';
            this.emailMessage = '';
            this.showModal = false;
        }
    }
}
</script>

<style>

.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 98%;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

</style>
