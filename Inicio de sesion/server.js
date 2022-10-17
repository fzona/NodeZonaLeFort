const session = require("express-session"); 
const passport = require("passport"); 
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
dotenv.config();

const chat = require("./utils/chat");
const express = require("express");
const app = express();

//socket.io
const { Server: HttpServer } = require("http");
const { Server: IOServer } = require("socket.io");
const httpServer = new HttpServer(app);
const io = new IOServer(httpServer);

// MongoAtlas
const MongoStore = require("connect-mongo");
const advanceOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

app.use(cookieParser());
let mongoUrl = process.env.MONGO_URL || 'mongodb://localhost:27017/test';

//middleware para manejar las sesiones
app.use(
  session({
    store: new MongoStore({ 
      mongoUrl: mongoUrl,
      mongoOptions: advanceOptions   
    }),     
    secret: "coderhouse",
    resave: true,
    saveUninitialized: true,
    rolling: true, //cada vez que se hace una petición se renueva el tiempo de expiración
    cookie: { maxAge: 60000 }, //tiempo de expiración de la cookie
  })
);

//middleware para manejar la autenticación
app.use(passport.initialize());
app.use(passport.session());

//importo el router (index.js)
const router = require("./routes")

//set de plantilla
app.set('views', './views');
app.set('view engine', 'ejs');

//middleware
app.use(express.static(__dirname + "/public"));
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));
app.use("/", router);

io.on('connection', async function(socket) {
  console.log('Un cliente se ha conectado'); 
  const messages = await chat.list();  
  socket.emit('messages', messages);

  io.sockets.emit('productos');

  socket.on ('new-message', async function (data){
    try {
      chat.save(data);
      const messages = await chat.list();      
      io.sockets.emit('messages', messages);
    } catch (err) {
      console.log(err);
    }
    
  });

});

httpServer.listen(8080, function() {
  console.log('Servidor corriendo en http://localhost:8080');
})





