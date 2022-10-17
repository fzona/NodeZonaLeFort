# ✨ Express.js Server with Socket.io, Mocks and Log-in

This project is a server made with Express.js and Socket.io.

You will see a form to add a product to the product's list, a chat where you can leave a message and it will be stored in a json file,
and a table that shows dynamically all the products. Additionally you can view a table with random products generated with [faker-js/faker](https://www.npmjs.com/package/@faker-js/faker) on "http://localhost:8080/api/productos-test"

## 🔧 Characteristics and commands

### 👨🏻‍💻 Installation

To run the project install all the dependencies using the following command:

`npm i`

Install [XAMPP](https://www.apachefriends.org/)

In [PHPMyAdmin](http://localhost/phpmyadmin/) create the database 'ecommerce'

Create an .env file with the variable MONGO_URL="Ruta de Mongo Atlas"

Execute

`node ./dataBase/create_products_table.js`

You can start the server with:

`nodemon server.js XXXX`
replace the 'XXXX' with the port number of your choice. The server will run on that port and by default you can see the main page on http://localhost:8080/

In '/info' the Info requested in the challenge is returned. In '/api/randoms' the random numbers are generated and they are returned with the number of times each one came out. If you want to specify a number of numbers to generate, place it as a query in the route, for example --> '/api/randoms?cant=5000000'

## 🚀 About Me

I am interested in continuing to learn and work with:

➡ Express.js

➡ Node.js

➡ React.js

➡ MongoDB

I’m interested in learning and working on improving people’s lives through blockchain technology. I’m constantly learning new things, and have a special affinity for new languages (both IT-related and spoken!).

## 🛠 Skills used on this project

- Express.js
- Node.js
- HTML & CSS
- [EJS](https://ejs.co/)
- [Socket.io](https://socket.io/)
- MySQL
- [SQLite](https://www.sqlite.org/index.html)
- [faker-js/faker](https://www.npmjs.com/package/@faker-js/faker)
