
           
    
    <template>
    <section class="cart ">
        <h1>Cart</h1>
        <ul>
            <li v-for="item in items" class="cart-item">
                <div> {{item.title}}  </div>
                 <div>amount:{{item.quantity}}</div>
                    <button @click.stop="addToCart(item)">+</button>
                    <button @click.stop="substractFromCart(item)">-</button>
                    <button @click.stop="spliceFromCart(item.id)">X</button>
                
                <!--<p> {{item.tag}}</p> spliceFromCart  -->
            </li>
        </ul>
        <p>Total: {{total}}</p>
    
    </section>
</template> 

<script>
  import cartService from '../../services/cart.service'

  export default {
        name: 'cart',
        components: {
            // bookService,
        },
        created(){
                    this.items= cartService.getCartItems(),
                    this.total= 0
                    
        }, 
        data() {
                return {
                    items: []
                    // total: cartService.getCartTotal()
                }
            },
        computed: {
                total() {
                this.items;
                return cartService.getCartTotal(); 
                }               
            },
        methods: {
                addToCart (book){
                    console.log(book);
                    cartService.addToCart(book);
                },
                substractFromCart (book){
                    console.log(book);
                    cartService.substractFromCart(book);
                },
                spliceFromCart (bookId){
                    console.log(bookId);
                    cartService.clearItem(bookId);
                }
            },
        }
</script>
 <style scoped>
 
  .cart {
    background-color: lightseagreen;
    padding: 10px;
    border-radius: 1em;
    margin-bottom: 30px;
    width:30%;
    display:flex;
    flex-direction: column;

    } 
    .cart ul{
        padding-left: 0;
        width:80%;
    }                
    .cart div{
        
        border:1px solid blue;
        border-radius: 5px;

    }                
    .cart-item{
    background-color: lightcyan;
    padding: 10px;
    border-radius: 1em;
    margin-bottom: 30px;
    list-style-type: none;
    }
</style>

