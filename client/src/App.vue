<template>
<div class="app">
  <div class="header">
  <header-bar></header-bar>
  </div>
  <div class="page">
    <router-view></router-view>
    <!--<div class="help-text">-->
    </div>
  </div>
</div>
</template>

<script>
import HeaderBar from '@/components/HeaderBar'
export default {
  components: {
    HeaderBar
  },
  name: 'app'
}
</script>

<style scoped>
body {
  font-family: "HelveticaNeue", "Helvetica Neue", Helvetica, Arial, sans-serif;
  color: #333;
}
.app {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.header {
  border-bottom: 1px solid #b3b3b3;
  width: 100%;
  padding: 30px 50px;
}

.page {
  width: 100%;
  padding: 30px 50px;
}

.help-text {
  margin-top: 20px;
  font-size: 12px;
}
</style>
