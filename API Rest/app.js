import express from 'express';
import session from 'express-session';
import passport from 'passport';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
dotenv.config();


//para poder utilizar __dirname y obtener los archivos publicos
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//inicializa express
const app = express();

//inicioalizo MongoAtlas
import MongoStore from 'connect-mongo';
/* const MongoStore = require("connect-mongo"); */
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
    cookie: { maxAge: 60000000 }, //tiempo de expiración de la cookie
    //cookie: { maxAge: 60000 }, //tiempo de expiración de la cookie
  })

);


//middleware para inicializar passport y unir session con passport
app.use(passport.initialize());
app.use(passport.session());

//importo el router (index.js)
import {router} from './src/routes/index.js';

//seteo de plantilla
app.set('views', './views');
app.set('view engine', 'ejs');

//middlewares
app.use(express.static(__dirname + "/public"));
app.use(express.json()); //para poder recibir json
app.use(express.urlencoded({ extended: true })); //para poder recibir datos de formularios
app.use("/", router);

//importar socket.io e inicializar
import http from 'http';
import { Server } from 'socket.io';
const io = new Server(http);

//conexion a socket.io
const httpServer = http.createServer(app);
io.attach(httpServer);

//Funciones del chat --> pasar a controllers
import { getChat, sendMessage } from './src/controllers/chat.js';

io.on('connection', async function(socket) {
  //mensaje en consola cuando se conecta un usuario
  console.log('Un cliente se ha conectado'); 
  //primera conexion del usuario recibe los mensajes de la DB
  const messages = await getChat();  
  socket.emit('messages', messages);

  //cada vez que se agrega un producto, se le envia a todos los usuarios para renderizarlo
  io.sockets.emit('productos');

  //escucho el los mensajes del cliente, lo agrego a la db  y le paso a TODOS (io.sockets.emit) los clientes los mensajes
  socket.on ('new-message', async function (data){

    sendMessage(data)
    .then(async (newMessage) => {             
      const messages = await getChat();  
      io.sockets.emit('messages', messages);
    })


    /* try {
      sendMessage({data});                  
      const messages = await getChat(); 
      io.sockets.emit('messages', messages);        
    } catch (err) {      
      console.log(err);
    } */
    
  });

});


//levanto el servidor
const port = process.env.PORT || 8080;

httpServer.listen(port, () => {
  console.log(`Servidor http escuchando en el puerto ${port}`);
});































  



