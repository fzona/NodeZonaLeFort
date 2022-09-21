# ✨ Express.js Server

This project is a server made with Express.js. In "src\Routes\routes.js" there is a variable called "admin" that enables the functionality to add, update or delete products.

In the .env file (that is not usually uploaded) you can choose the method of persistance of data. The options are:

- "PERS=json": use a .json file to storage data.
- "PERS=firebase": use a Firebase DB to storage data.
- "PERS=mongodb": use a local MongoDb to storage data.
- "PERS=memoria": storage data in an array.

You can test it's functionality with [Postman](https://www.postman.com/)

## 🔧 Characteristics and commands

### 👨🏻‍💻 Characteristics

1.  The base router '/api/products' will implement four functionalities:

- GET: '/:id?' - Allows you to list all available products or a product by its id (available for users and administrators)
- POST: '/' - To add products to the list (available for administrators)
- PUT: '/:id' - Update a product by its id (available for admins)
- DELETE: '/:id' - Delete a product by its id (available for administrators)

2.  The base router '/api/cart' will implement three routes available for users and administrators:

- POST: '/' - Create a cart and return its id.
- DELETE: '/:id' - Empty a cart and delete it.
- GET: '/:id/products' - Allows me to list all the products saved in the cart
- POST: '/:id/products' - To add products to the cart by their product id
- DELETE: '/:id/products/:id_prod' - Remove a product from the cart by its cart and product id

### 💻 Install & run

To run the project install all the dependencies using the following command:

`npm i`

You can start the server with:

`npm run dev`

You can see the main page on http://localhost:8080/ or you can use the ".env" file and inside declare a variable called "PORT" in which you can specify the port of your choice.

## 🛠 Skills used on this project

- Express.js
- Node.js
- Firebase
- MongoDB
- Mongoose

## 🔗 Links

[![Github](https://img.shields.io/badge/github-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://github.com/MartinIglesias86)
[![LinkedIn](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/martin-iglesias86)
[![Twitter](https://img.shields.io/badge/twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/Martin_codes86)
