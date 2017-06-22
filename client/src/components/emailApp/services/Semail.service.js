
var emails = [
  {id:1, from: 'shula', to: 'mula', subject: 'subject1', msg: 'New message 1',date:'2017-06-06',read: false},
  {id:2, from: 'shula', to: 'mula', subject: 'subject2', msg: 'New message 2',date:'2017-06-06',read: false},
  {id:3, from: 'shula', to: 'mula', subject: 'subject2', msg: 'New message 3',date:'2017-06-06',read: false}
];

const getEmails = () => {
  return emails;
}


export default {
 getEmails
}
