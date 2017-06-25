
/*eslint-disable */


const urlEmails = 'http://localhost:3000/emails';

import $ from 'jquery';

function getEmails() {
  console.log('requesting emails2');
  return fetch('http://localhost:3000/emails')
    .then(res => res.json())

}

function deleteEmail(id) {
  return new Promise((resolve, reject) => {
  let x = $.ajax({
      type: "DELETE",
      url: `${urlEmails}/${id}`,
      success: function (data) {
        return data
      }
    }).then(res => res)
    resolve(x)
  });

}

function composeEmail(from, to, subject, msg) {
  console.log('perform compose',from,to)
  $.ajax({
    type: "POST",
    url: `${urlEmails}/compose/:${from}`,
    // data: {
    //   from: from,
    //   to: to,
    //   subject: subject
    // },
    success: function (data) {

    }
  });

}
export default {
  getEmails,
  deleteEmail,
  composeEmail
}

