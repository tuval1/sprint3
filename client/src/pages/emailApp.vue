<template>
  <div class="cart">
    emailApp
    <button @click="getEmails">Next > </button>
  </div>
</template>

<script>
/*eslint-disable */

import emailService from '../services/emailService'
export default {
  data() {
    return {emails: []
    }
  },
  methods: {
    getEmails() {
      var emails;
      emailService.getEmails('requestEmails')
        .then(res => { this.emails = res; console.log(this.emails) })
    }
  }
}
</script>

<style>
.cart {
  width: 600px;
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
