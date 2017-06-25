<template>
  <section v-if="emails">
    <button @click="getEmails">Next > </button>
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

      <email-preview v-for="email in emails" @click.native="selectEmail(email)"

      :email="email">

      </email-preview>
    </table>

    <email-details v-if="selectedEmail" :email="selectedEmail">
    </email-details>

    <email-compose v-if="isComposeMode">
    </email-compose>
  </section>
</template>

<script>
import emailService from '../../services/emailService'
import emailPreview from './emailPreview'
import emailDetails from './emailDetails'
import emailCompose from './emailCompose'
export default {
  name: 'email-list',
  created() {    
    this.emails = []
    //this.emails;
  },
  components: {
    emailPreview,
    emailDetails,
    emailCompose
  },  
  data() {
    return {
      emails: null,
      selectedEmail: null,
      isComposeMode: false
    }
  },
  computed: {
    emailsToShow() {
      return this.emails
          // this.emails= getEmails()
    }
  },
  methods: {
    getEmails() {
          emailService.getEmails('requestEmails')
          .then(res => { this.emails = res; console.log(this.emails) })
    },
    selectEmail(email) {
      this.selectedEmail = email;
      email.read = true;
      console.log('selected email:',this.selectedEmail);
    },
    resetSelected() {
      this.selectedBook = null;
    },
    selectNext() {
      this.selectedBook = bookService.getNext(this.selectedBook);
    },
    editBook(book) {
      console.log('Editing the book', book)
      this.editedBook = book;
    },
    deleteBook(book) {
      bookService.deleteBook(book);
    },
    saveBook(book) {
      bookService.saveBook(book);
      this.editedBook = null;
      this.isCreateMode = false;
    },
    setFilter(newFilter) {
      console.log('newFilter', newFilter);
      this.bookFilter = newFilter;
    },
    addToCart(book) {
      cartService.addToCart(book);
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
