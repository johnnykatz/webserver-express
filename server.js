const express = require('express');
const app = express();

const hbs = require('hbs');

require('./hbs/helpers.js');

const port=process.env.PORT || 3000;

app.use(express.static(__dirname+'/public'))

//Express HBS engine
hbs.registerPartials(__dirname + '/views/partials', function (err) {});

app.set('view engine', 'hbs');






app.get('/', function (req, res) {

	res.render('home.hbs',{
		nombre:'Cesar'
	});

});

app.get('/about', function (req, res) {

	res.render('about.hbs');

});

app.get('/data', function (req, res) {
	res.send('Hola data')

});


// se cambia el puerto para que heroku lo ponga
app.listen(port,()=>{
	console.log(`escuchando peticiones en el puerto ${port}`);
});