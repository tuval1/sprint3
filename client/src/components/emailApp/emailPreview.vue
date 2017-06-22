<template>
    <tr>        
        <td>{{email.subject}}</td>
        <td>{{email.from}}</td> 
        <td>{{email.date}}</td>
        <td>{{email.read}}</td>
    </tr>
</template>

<script>
export default {
    name: 'email-preview',
    props: ['email'],
    methods: {
        editBook() {
            console.log('Request Edit');
            this.$emit('edit');
        },
        deleteBook() {
            console.log('Request Delete');
            this.$emit('delete');
        },
        addToCart() {
            console.log('adding to cart');
            this.$emit('addToCart');
        },
        substractFromCart() {
            this.$emit('substractFromCart');
        }
    }
}
</script>

<style>
table, td {
    padding: 5px;
}

</style>
