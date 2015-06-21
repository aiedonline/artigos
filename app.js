
/**
 * Module dependencies.
 */

var express = require('express'),
  routes = require('./routes'),
  user = require('./routes/user'),
  http = require('http'),
  path = require('path');

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(require('stylus').middleware(__dirname + '/public'));
  app.use(express.static(path.join(__dirname, 'public')));
  app.use("/images", express.static(__dirname + '/images'));
  //app.use(express.static(path.join(__dirname, 'images')));
  //app.use(express.static(path.join(__dirname, '/')));
  app.use(express.favicon(__dirname + '/images/letra.ico'));
});


app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/', function(req, res){
  res.render('index', {
    title: 'Home'
  });
});

app.get('/artigo', function(req, res){
  res.render('artigo', {
    title: 'Artigo'
  });
});

app.get('/about', function(req, res){
  res.render('about', {
    title: 'Sobre'
  });
});

app.get('/contact', function(req, res){
  res.render('contact', {
    title: 'Contato'
  });
});

app.get('/pessoa', function(req, res){
  res.render('pessoa', {
    title: 'Contato'
  });
});

// ROTAS LEGADAS QUANDO NAO HAVAI BANCO DE DADOS
app.get('/artigoNode', function(req, res){
  res.render('artigoNode', {
    title: 'Artigo Node'
  });
});

app.get('/artigoDocker', function(req, res){
  res.render('artigoDocker', {
    title: 'Artigo Docker'
  });
});

http.createServer(app).listen(app.get('port'), function(){
  console.log("Processo aguardando usuários na interface " + app.get('port'));
});

