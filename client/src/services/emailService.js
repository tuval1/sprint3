
/*eslint-disable */


const urlEmails = 'http://localhost:3000/emails';

import $ from 'jquery';

function getEmails() {
  console.log('requesting emails2'); 
      return fetch('http://localhost:3000/emails')
    .then( res => res.json())
  
}

export default {
  getEmails
}

