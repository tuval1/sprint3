<template>
<<<<<<< HEAD
    <div class="message">
        <div class="header">
            <button @click.stop="">X</button>
            <ul>
            <li><span class="prop">From: </span>{{email.from}}</li>
            <li><span class="prop">To: </span>{{email.to}}</li>
            <li><span class="prop">Received on: </span>{{email.date}}</li>
            </ul>
            </div>
=======
>>>>>>> 81b8fdde42febf1d0e69f24062a8aeff9de053e8
  <p>{{email.msg}}</p>
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
<<<<<<< HEAD
      deleteEmail(){
        console.log('request delete');
        this.$emit('delete');
      },         
    
=======
    closeMe() {
      if (this.isModalMode) this.$emit('close');
      else this.$router.push('/');
    },
    requestNextBook() {
      console.log('Requesting Next');
      if (this.isModalMode) this.$emit('next');
      else {
        this.bookToShow = bookService.getNext(this.bookToShow)
        this.$router.push(`/book/${this.bookToShow.id}`);
      }
    },
    getBook(bookId) {
      bookService.getBookById(bookId)
        .then(book => {
          this.bookToShow = book;
          console.log(book)
        })
    },
    foo() {
      console.log('foo');
    }
>>>>>>> 81b8fdde42febf1d0e69f24062a8aeff9de053e8
  }
}
</script>

<style scoped>


</style>
