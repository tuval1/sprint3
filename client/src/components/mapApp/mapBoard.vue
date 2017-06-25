<template>
  <gmap-map
    :center="center"
    :zoom="7"
    style="width: 500px; height: 500px"
  >
    <gmap-marker
      :key="index"
      v-for="(m, index) in markers"
      :position="m.position"
      :clickable="true"
      :draggable="true"
      @click="center=m.position"
    ></gmap-marker>
  </gmap-map>
</template>
 
<script>
  ///////////////////////////////////////// 
  // New in 0.4.0 
  import * as VueGoogleMaps from 'vue2-google-maps';
  import Vue from 'vue';
 
  Vue.use(VueGoogleMaps, {
    load: {
      key: 'AIzaSyB7MF1LTeWHcjtwhi3Rt7awvt1mmVHVSHc',
      v: 'OPTIONAL VERSION NUMBER',
      // libraries: 'places', //// If you need to use place input 
    }
  });
 
  export default {
    props: ['center','markers'],
    data () {
      return {
      }
    }
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

/*
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
    name:'map-board',
*/
</style>
