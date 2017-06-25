
    <template>
        <div class="popup book-details">
            <div class="inner-div">
            <button @click="closeMe">x</button>
            
                <!--selectedBook || isEditMode) || isCreateMode"-->
                
                <div v-if="book && isEditMode">editing
                        <span class = "title">title <input type="text" v-model="selectedBook.title" />   </span>
                        <span class = "id">id:<input type="text" v-model="selectedBook.id" disabled/>   </span>
                        <span class = "price">$<input type="text" v-model="selectedBook.price" /> </span>
                        <span class = "description"><textarea rows="10" cols="50" 
                                        v-model="selectedBook.description" />  </textarea></span>
                                 
                </div>
                <div v-else-if="book && !isEditMode">vieu only
                        <span class = "title">title <input type="text" v-model="selectedBook.title" disabled/>   </span>
                        <span class = "id">id:<input type="text" v-model="selectedBook.id" disabled/>   </span>
                        <span class = "price">$<input type="text" v-model="selectedBook.price" disabled/> </span>
                        <span class = "description"><textarea rows="10" cols="50" 
                                        v-model="selectedBook.description" disabled/>  </textarea></span>
                                 
                </div>
                
                <div v-else>New Book
                        <span class = "title">title <input type="text" v-model="selectedBook.title" />   </span>
                        <span class = "id">id:<input type="text" v-model="selectedBook.id" disabled/>   </span>
                        <span class = "price">$<input type="text" v-model="selectedBook.price" /> </span>
                        <span class = "description"><textarea rows="10" cols="50" 
                                        v-model="selectedBook.description" />  </textarea></span>

                </div>
                        <button v-if="isCreateMode || isEditMode" @click="save">save</button>
                        <button @click="closeMe">x</button>
            </div>
        </div>
    </template>
<script>
  import bookService from '../../services/book.service'
  export default {

    name:'book-details', 
    props: ['book'],

    props: ['book','isCreateMode','isEditMode'],
        data(){
                return {
                    selectedBook: null
                    // isEditMode: false
        
                }
            },
        created(){
                this.selectedBook = Object.assign({}, this.book);
                console.log('isEditMode:', this.isEditMode);
                console.log('isCreateMode:', this.isCreateMode);
            },

    methods: {
        closeMe() {
            console.log('close me!');
            this.$emit('close');
        },
        save() {
            console.log('saving',this.selectedBook);
            this.$emit('save',this.selectedBook);
        },
        requestNextBook() {
            console.log('Requesting Next');
            this.$emit('next');
        }
    }
  }
</script>
<style scoped>
    .book-details{
        position:fixed;
        /*background: gold;*/
        left: 0;
        top: 0;
        width:100%;
        height:100%;
        background: gold;
        opacity:0.9;

        
    }
    .inner-div{
        position: absolute;
        top: 50%; left: 50%;
        transform: translate(-50%,-50%);
        background: gold;
        display:flex;
        flex-direction: column;
        align-items: center;
        align-content: center;
        width:25em; 

    }

</style>
