<template>
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
  }
}
</script>

<style scoped>


</style>
