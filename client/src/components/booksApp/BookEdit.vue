

    <template>
     <transition enter-class = "fade" >
        <section class="book-edit">
            <div class="popup-inner">
                <h1 v-if="book">Edit: {{book.title}}</h1>
                <h1 v-else>New Book</h1>

                <span class = "title">title <input type="text" v-model="bookToEdit.title" />             </span>
                <span class = "id">id:<input type="text" v-model="bookToEdit.id" />                 </span>
                <span class = "price">$<input type="text" v-model="bookToEdit.price" />             </span>
                <span class = "description"><textarea rows="10" cols="50" 
                                v-model="bookToEdit.description" />  </textarea></span>
                
                <button @click="save">Save</button>
                <button @click="cancel">Cancel</button>
            </div>
        </section>
    </transition>

    </template>

<script>
  export default {
        name:'book-edit' ,
        props: ['book'],
        data(){
                return {
                    bookToEdit: null
                }
            },
        created(){
                this.bookToEdit = Object.assign({}, this.book);
            },
        // beforeUpdate(){
        //         document.querySelector('.book-edit').classList.add('fade1');
        //     },
        // updated(){
        //         document.querySelector('.book-edit').classList.remove('fade1');
        //     },
         methods: {
                
                save() {
                    console.log('Saving', this.bookToEdit)
                    this.$emit('save', this.bookToEdit);
                },
                cancel() {
                    console.log('Cancel');
                    this.$emit('save');
                }
            },
  }
</script>
<style>
    .book-edit {
        background: lightgoldenrodyellow;
       position:fixed;
       top:0;
        display:flex;
        flex-direction: column;
        align-items: center;
        align-content: center;
        width:100%;
        height:100%;
        background: gray;
        padding: 10px;
        border-radius: 1em;
        left: 0;
        transition: .5s all;
        opacity:1;
    }
    .fade {
        opacity:.3;
        transition:opacity 1s ;
    }
    /*.fade-out {
        opacity:.7;
        transition:opacity 1s ;
    }*/
    
    .popup-inner {
       position:fixed;
        top:20%;
        opacity:1;
        display:flex;
        flex-direction: column;
        align-items: center;
        align-content: center;
        width:25em; 
        border : 1px solid black;
                transition: 1s all;

    }

</style>
