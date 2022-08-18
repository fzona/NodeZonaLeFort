const express = require('express')
const router = require('../Routes/routes.js')
const app = express()
const PORT = 8080
const datos = require('../Products/products.js').listOfProducts()


app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/productos', router)
app.get('/', (req, res) => {
    res.render('form', {datos});
})

const server = app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`))
server.on("error", (err) => {
    console.log( `Error: ${err}`)
})