    
    
    <template>
    <li class="book-preview">
        <h2>{{book.title}}</h2>
        <h5>id:{{book.id}}</h5>
        <img src="http://via.placeholder.com/250x150" />
        <h3>${{book.price}}</h3>
        <h3>{{book.description}}</h3>
        <button @click.stop="editBook">edit</button>
        <button @click.stop="deleteBook">x</button>
        <button @click.stop="addToCart">+</button>
        <button @click.stop="substractFromCart">-</button>
    </li>
</template> 


<script>

export default {
    name: 'book-preview',
    props: ['book'],
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
            this.$emit('add-to-cart');
        },
        substractFromCart() {
            this.$emit('sub-from-cart');
        }
    }
}
</script>

<style scoped>
    .book-preview img {
    width:100%;
    }
    .book-preview {
    list-style: none;
    display: inline-block;
    margin: 5px;
    padding: 10px;
    border: 1px solid gray;
    background: lightgray;
    text-align: center;
    width:250px;
}

</style>

