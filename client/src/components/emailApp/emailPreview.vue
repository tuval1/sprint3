<template>
    <tr>        
        <td>{{email.id}}</td>
        <td>{{email.subject}}</td>
        <td>{{email.from}}</td> 
        <td>{{email.date}}</td>
        <td>{{email.read}}</td>
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
table, td {
    padding: 5px;
}

</style>
