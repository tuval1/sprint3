<template>
  
</template>

<script>
import emailService from './services/Semail.service.js'

export default {
  name: 'email-details',
  props: ['email'],
  data() {
    return {
      bookToShow: null,
      isModalMode: this.book !== undefined
    }
  },
  created() {
    const bookId = +this.$route.params.bookId;
    if (bookId) {
      this.getBook(bookId);
    } else {
      this.bookToShow = this.book;
    }
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

<style>

</style>
