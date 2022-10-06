const chat = require("./utils/chat");

const session = require("express-session");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
dotenv.config();

//inicializo express
const express = require("express");
const app = express();

//inicializo el socket.io
const { Server: HttpServer } = require("http");
const { Server: IOServer } = require("socket.io");
const httpServer = new HttpServer(app);
const io = new IOServer(httpServer);

//inicializo MongoAtlas
const MongoStore = require("connect-mongo");
const advanceOptions = {
useNewUrlParser: true,
useUnifiedTopology: true,
};
app.use(cookieParser());
let mongoUrl = process.env.MONGO_URL;
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

//conexión
io.on('connection', async function(socket) {
  //mensaje en consola cuando se conecta un usuario
  console.log('Un cliente se ha conectado'); 
  
  const messages = await chat.list();  
  socket.emit('messages', messages);   
  
  io.sockets.emit('productos');

  //función para guardar un mensaje y emitirlo a todos los usuarios
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

//levantamos el servidor en el puerto 8080
httpServer.listen(8080, function() {
  console.log('Servidor corriendo en http://localhost:8080');
})






