//Modulos a cargar en el servidor
var express = require('express'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    compression = require('compression'),
    path = require('path'),
    config = require('./server/config/config'),
    mongoose = require('mongoose'),
    middleware = require("./server/controllers/middleware"),
    users = require('./server/controllers/userController');
var app = express();

app.set('port', (process.env.PORT || config.port));

app.use(compression());
/*app.use(bodyParser({
    uploadDir: __dirname + '/uploads',
    keepExtensions: true
}));*/
app.use(methodOverride());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(express.static(path.join(__dirname, './public')));

app.set('dbUrl', process.env.BBDD || config.db.test);

 //...

app.use(function(err, req, res, next) {
    console.log(err.stack);
    res.send(500, err.message);
});
//Configuramos express
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// **************************************************************
//   API REST DE LA APP
// **************************************************************

//Zona pública
app.post("/api/registrar", users.registrar);
app.post("/api/login", users.login); 
app.get("/api/getUsers", users.getUsers);
app.post("/api/createProject", users.createProject);


//Zona privada
app.get("/api/private/getUsers", middleware.ensureAuthenticated, users.getUsers);

app.get('*', function(req, res){
  res.status(404).send('<h1>Tíííííííííííííííííííío no me toques la URL o te meto!!!!!!</h1>');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

