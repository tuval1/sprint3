<template>
  <div class="cart">placesApp
      <gmap-map

          :center="{lat:10, lng:10}"
          :zoom="7"
          map-type-id="terrain"
          style="width: 500px; height: 300px"
  ></gmap-map>
  </div>
</template>

<script>
  import mapService from '../../services/map.service';
  import * as VueGoogleMaps from 'vue2-google-maps';
  import Vue from 'vue';
  
  Vue.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyB7MF1LTeWHcjtwhi3Rt7awvt1mmVHVSHc',
        libraries: 'places'
    }
});
  
  export default {
    created() {
    },
    data() {
        return {
            markers: null
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
