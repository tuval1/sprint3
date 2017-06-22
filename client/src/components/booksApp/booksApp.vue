<template>
  <div class="cart">
    <book-list></book-list>
    <cart></cart>
  </div>
</template>

<script>
  // import { mapActions, mapGetters } from 'vuex'
  import BookList from './BookList'
  import cart from './cart'
  import cartService from '../../services/cart.service'


  export default {
    components:{
              BookList,
              cart
            },
    computed: {

    },
    data(){
            isCreateMode: false
    },
    methods: {
      
    }
  }
</script>

<style scoped>
.cart{
  display:flex;
  flex-direction: row;
}
</style>
