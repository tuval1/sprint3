<template>
  <div class="cart">placesApp
      <map-board :markers="markers" :center="center"></map-board>

  </div>
</template>

<script>
  import Vue from 'vue'
  import mapBoard from './mapBoard'
import mapService from '../../services/map.service';
  
  export default {
    
    components: {
        mapBoard
    },
    
    created() {
          this.markers= mapService.getMarkers();
          this.center= mapService.getCenter();
          
    },
    data() {
        return {
            markers: []
            ,
            location:{},
        }
    },
  }
</script>

<style scoped>

.cart {
  width: 90%;
}
.checkout-table {
  width: 100%;
}

.checkout-table th {
  text-align: left;
  padding: 15px 0px;
  border-bottom: 1px solid #aaa;
}

.checkout-table td {
  padding: 8px 0px;
}

.checkout-button {
  float: right;
  width: 120px;
  height: 40px;
  margin-top: 20px;
}

.total td {
  border-top: 1px solid #aaa;
  padding-top: 10px;
}
</style>
