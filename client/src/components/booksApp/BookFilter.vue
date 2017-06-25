    
    
    <template> 
        <div class="book-filter">
            <span>Books Filter</span>
            <input type="text" v-model="bookFilter.byText" placeholder="Filter By Name" >
        </div>
    </template> 


<script>
  
  
  export default {

name:'book-filter', 
    
    data() {
        return {
            bookFilter: { byText: '', byMaxPrice: 1000 }
        }
    },
    created() {
        this.$watch('bookFilter.byText', function (newVal, oldVal) {
            this.$emit('set-filter', this.bookFilter);
        })

    },
    methods: {

    }
}
</script>
<style>
    .book-filter {
    /*background-color: chocolate;*/
    padding: 10px;
    width:50%;
    float:left;
}

</style>
