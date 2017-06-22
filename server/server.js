const express 		= require('express')  
const cors 			= require('cors');
const bodyParser 	= require('body-parser');

const app = express()  

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

const port = 3000


const emails =  [
	{id:1, from:'yos@v.com',to:'yos1@ggv.com',sub:'hy',msg:'how are you?'},
	{id:2, from:'yos1@v.com',to:'yos@ggv.com',sub:'re: hy',msg:'fine thanks'},
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
app.post('/update/:item', (request, response) => {  
	var params1 = request.params.item;
	var params = JSON.parse(params1);
	const productId = params.id;
	
	const idx = products.findIndex(product => product.id === productId);
	products[idx] = params;
	console.log(`updating Product with id: ${productId}`);
	
	response.json(products[idx]);
  
})
//==================================================================
app.post('/newProduct', (request, response) => {  
	
	var newProduct = request.body;
	newProduct.id = products.length+1;
	console.log(`New Product with id ${newProduct.id} Added`);
	products.push(newProduct);
	response.json(newProduct);
  
})
//==================================================================
app.delete('/product/:prdId', (request, response) => { 
	const productId = +request.params.prdId;
	console.log(`Server Requested to delete Product with id: ${productId}`);
	
	const idx = products.findIndex(product => product.id === productId);
	products.splice(idx, 1);
	response.end();
});
//==================================================================
app.get('/product/:prdId', (request, response) => { 
	const productId = +request.params.prdId;
	console.log(`Server Requested to send Product with id: ${productId}`);
	
	const idx = products.findIndex(product => product.id === productId);
	response.json(product);
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


function generateProducts() {
  //const skills = ['JavaScript', 'CSS', 'SASS', 'Node', 'Angular 2', 'VUE'];
  const productsArr = [
				{id:1, title:'JavaScript',description: 'lorem  ipsum dkhd daklhd dakhdk dakhdk ',price:13},
  			{id:2, title:'css',description: 'lorem  bla bla bla ',price:33}
					];

  //return skills.map(generateProduct);
  return productsArr;
}
//==================================================================
function generateProduct(skill, i) {
  return {
    id: i + 1,
    title: `Mastering ${skill}`,
    description: `${skill} lorem  ipsum dkhd daklhd dakhdk dakhdk da`,
    price: (i + 1) * 10
  }
}
//==================================================================


