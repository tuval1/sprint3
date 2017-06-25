const express 		= require('express')  
const cors 			= require('cors');
const bodyParser 	= require('body-parser');

const app = express()  

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

const port = 3000


const emails =  [

	{id:1, from:'yos111@vs.com',to:'yos1@ggv.com',subject:'hy',msg:'how are you?',read: false},
	{id:3, from:'yos33@vs.com',to:'yos3@ggv.com',subject:'hy',msg:'how are you?',read: false},
	{id:2, from:'yos1111@vs.com',to:'yos@ggv.com',subject:'re: hy',msg:'fine thanks',read: false},
	{id:4, from:'yos111@vs.com',to:'yos1@ggv.com',subject:'hy',msg:'how are you?',read: false},
	{id:5, from:'yos33@vs.com',to:'yos3@ggv.com',subject:'hy',msg:'how are you?',read: false},
	{id:6, from:'yos1111@vs.com',to:'yos@ggv.com',subject:'re: hy',msg:'fine thanks',read: false},
	{id:7, from:'yos111@vs.com',to:'yos1@ggv.com',subject:'hy',msg:'how are you?',read: false},
	{id:8, from:'yos33@vs.com',to:'yos3@ggv.com',subject:'hy',msg:'how are you?',read: false},
	{id:9, from:'yos1111@vs.com',to:'yos@ggv.com',subject:'re: hy',msg:'fine thanks',read: false}
];



//==================================================================
app.get('/', (request, response) => {  
  response.send('Hello from tuval!')
})
//==================================================================
app.get('/emails', (request, response) => {  
	console.log(`Returning ${emails.length} mails` );
	console.log(emails);
	
	response.json(emails);
})
//==================================================================
//==================================================================
app.post('/user/:param', (request, response) => {  
			var params1 = request.params.param;
			//console.log(params1);h
			//var pin1 = JSON.parse(params1);

			const user = users.find(user => user.pin == params1);
			//console.log(`user before:${user}`);

			if (user && typeof user === 'undefined'){
				user = null;
				//response.json(false);
			}
			console.log(`user after:${user}`);
			if (user ){ 
				user.lastLogIn = Date.now();
			console.log(`user last log:${user.lastLogIn}`);
				response.json(user);
			}
			else{
				response.json(false);
			}

})
//==================================================================

//==================================================================

//==================================================================
app.delete('/emails/:emailId', (request, response) => { 
	const emailId = +request.params.prdId;
	console.log(`Server Requested to delete email with id: ${emailId}`);
	
	const idx = emails.findIndex(email => email.id === emailId);
	emails.splice(idx, 1);
	
	response.json(emails);
});
//==================================================================
app.post('/compose/:eFrom', (request, response) => { 
	const emailFrom = +request.params.eFrom;
	console.log(emailFrom);
	
	response.end();
});

//==================================================================
app.listen(port, (err) => {  
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}! //nodemon ./server.js localhost 8080`)
})
//==================================================================



