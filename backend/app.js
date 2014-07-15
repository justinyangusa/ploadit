
/**
 * Module dependencies.
 */

var express = require('express.io');
var http = require('http');
var path = require('path');

var app = express();
//setup socket.io
app.http().io()

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(require('stylus').middleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

//BEGIN REAL-TIME ROUTES
// Setup the ready route, join room and broadcast to room.
app.io.route('ready', function (req) {

    console.log('Created an account for user: ' + req.data.username + ' with email: ' + req.data.email);
    //join this request to the specified room
    req.io.join(req.data.room);

    //now broadcast an 'announce' event to every client listening to the room
    req.io.room(req.data.room).broadcast('announce', {
        message: req.data.username + ' just uploaded a file' + req.data.filename,
        username: req.data.username
    });


});
app.io.route('sendMessage', function (req) {
    console.log('Admin: ' + req.data.username + ' just approved the notes ' + req.data.filename + ' from user ' + o.req.data.username);

    //join this request to the specified room
    req.io.join(req.data.archives);
    //now broadcast a 'newMessage' message to every client in this watch list
    req.io.watch(req.data.class).broadcast('newMessage', {
        message: req.data.message,
        username: req.data.username
    })
});
//END REAL-TIME ROUTES

//BEGIN REGULAR HTTP ROUTES

//render our default home page
app.get('/', function (req, res) {

    res.render('index', { title: 'Ploadit Alpha' });

});
app.get('/rooms/:id', function (req, res) {

    //render the room template with the name of the room for the underlying data model
    res.render('room', { title : req.params.id, username : req.query.username });

});
//END REGULAR HTTP ROUTES

app.listen(app.get('port'));
