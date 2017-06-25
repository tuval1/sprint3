<template>
    <tr v-bind:class="{unread: !email.read}">        
        
        <td>{{email.subject}}</td>
        <td>{{email.from}}</td> 
        
        
        <td>{{email.msg}}</td> 
        <td><button @click.stop="deleteEmail">x</button></td> 

    </tr>
</template>

<script>
export default {
    name: 'email-preview',
    props: ['email'],
    methods: {
        deleteEmail() {
            console.log('Request Delete',this.email);
            this.$emit('delete',this.email);
        },
       
    }
}
</script>

<style>
.unread {
    font-weight: bold;
}

</style>
