const express = require('express')
const router = require('./src/Routes/routes.js')
const app = express()
const handlebars = require('express-handlebars')
const PORT = 8080
const datos = require('./src/Products/products.js').listOfProducts()


app.engine(
    "hbs",
    handlebars.engine({
        extname: "hbs",
        defaultLayout: "index",
        layoutsDir: __dirname + "/views/layouts",
        partialsDir: __dirname + "/views/partials"
    })
);

app.set('view engine', 'hbs');
app.set('views','./views');
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/productos', router)
app.get('/', (req, res) => {
    res.render('main');
})

const server = app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`))
server.on("error", (err) => {
    console.log( `Error: ${err}`)
})