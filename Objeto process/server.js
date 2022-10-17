const session = require("express-session"); 
const passport = require("passport"); 
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
//importo minimis 
const minimist = require("minimist");
const { fork } = require("child_process");
dotenv.config();

const chat = require("./utils/chat");

//inicializo express
const express = require("express");
const app = express();

//inicalizo el socket.io
const { Server: HttpServer } = require("http");
const { Server: IOServer } = require("socket.io");
const httpServer = new HttpServer(app);
const io = new IOServer(httpServer);

//inicioalizo MongoAtlas
const MongoStore = require("connect-mongo");
const advanceOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

//inicializo conexion a la base de datos para las sessiones
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

//seteo de plantilla
app.set('views', './views');
app.set('view engine', 'ejs');

//middlewares
app.use(express.static(__dirname + "/public"));
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));
app.use("/", router);

//conexion
io.on('connection', async function(socket) {
  //mensaje en consola cuando se conecta un usuario
  console.log('Un cliente se ha conectado'); 
  //primera conexion del usuario recibe los mensajes de la DB
  const messages = await chat.list();  
  socket.emit('messages', messages);

  //cada vez que se agrega un producto, se le envia a todos los usuarios para renderizarlo
  io.sockets.emit('productos');

  //escucho el los mensajes del cliente, lo agrego a la db  y le paso a TODOS (io.sockets.emit) los clientes los mensajes
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

//let puerto = minimist(["-p",process.argv.slice(2)]).p || 8080

let puerto = 8080
let data = minimist(["-p",process.argv.slice(2)])
if(typeof(data.p) === "number"){
  puerto = data.p
}

//levantamos el servidor en el puerto 8080
httpServer.listen(puerto, function() {
  console.log(`Servidor corriendo en puerto ${puerto}`);
})


