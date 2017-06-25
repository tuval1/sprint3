 <template>
    <section v-if="books">
        <header>
            <h2>We have {{books.length}} Books</h2>
            <div class= "pannel">
                <book-filter @set-filter="setFilter"></book-filter>
                <button class= "button-panel" @click="isCreateMode=true">add new book</button>
            </div>
        </header>
        <div class="clear"></div>
        <ul>
            <book-preview v-for="currBook in booksToShow" :key="currBook.id" @click.native="selectBook(currBook)" @edit="editBook(currBook)" @delete="deleteBook(currBook)" @add-to-cart="addToCart(currBook)" :book="currBook">
            </book-preview>
        </ul>
        <book-details v-if="selectedBook" @close="resetSelected" @next="selectNext" :book="selectedBook">
        </book-details>
    
        <book-edit v-if="editedBook || isCreateMode" :book="editedBook" @save="saveBook">
        </book-edit>
        
    
    </section>
</template>

<script>
import BookFilter from './BookFilter';
import booksApp from './booksApp';
import BookEdit from './BookEdit';
import BookDetails from './BookDetails';
import BookPreview from './BookPreview';
import bookService from '../../services/book.service';
import cartService from '../../services/cart.service'

export default {
    name: 'book-list',
    components: {
        bookService,
        BookFilter,
        BookDetails,
        BookEdit,
        BookPreview
    },
    created() {
        bookService.getBooks().then(books => {
            this.books = books
        })
    },
    data() {
        return {
            books: null,
            selectedBook: null,
            editedBook: null,
           isCreateMode: false,
            bookFilter: null
        }
    },
    computed: {
        booksToShow() {
            if (!this.bookFilter) return this.books;
            return this.books.filter(book => {
                return book.title.includes(this.bookFilter.byText)
            });
        }
    },
    methods: {
        selectBook(book) {
            this.selectedBook = book;
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
            if(book){
                bookService.saveBook(book);
            }
            this.editedBook = null;
            booksApp.isCreateMode = false;
        },
        // cancelEditing() {
        //     this.editedBook = null;
        //     this.isCreateMode = false;
        // },
        setFilter(newFilter) {
            console.log('newFilter', newFilter);
            this.bookFilter = newFilter;
        },
        addToCart(book) {
            console.log('add to cart /', book);
            cartService.addToCart(book);
        },

    }

}
</script>
<style scoped>
header{
    border:1px solid green;
}
.clear{
    clear:both;
}
.pannel{
    border:1px solid red;
    display: table;
    width: 100%;
}
.cart{
    width:90%;
    border:1px solid red;
}
section{
    /*width:90%;*/
    border:1px solid blue;
}
section ul{
    border:1px solid green;
    display:flex;
    justify-content: center;
    flex-wrap: wrap;
}
.button-panel{
    float:right;
}
book-filter{
    width:50%;
}

</style>
