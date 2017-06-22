<template>
  <section v-if="emails">

    <h2>num of mails: {{emails.length}}</h2>    
    <table>
      <tr>
      <th>Subject</th>
      <th>Form</th>
      <th>Date</th>
      <th>read</th>
        </tr>
      <email-preview v-for="email in emailsToShow" @click.native="selectEmail(email)"
      :email="email">
      </email-preview>
    </table>

    <email-details v-if="selectedEmail" :email="selectedEmail">
    </email-details>
  </section>
</template>

<script>
import emailService from './services/Semail.service.js'
import emailPreview from './emailPreview'
import emailDetails from './emailDetails'
export default {
  name: 'email-list',
  created() {
    this.emails = emailService.getEmails()
  },
  components: {
    emailPreview,
    emailDetails
  },
  data() {
    return {
      selectedEmail: null,
      emails: null
    }
  },
  computed: {
    emailsToShow() {
      return this.emails
    }
  },
  methods: {
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

</style>
