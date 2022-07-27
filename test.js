const Contenedor = require("./Contenedor");

async function main() {
  const product = new Contenedor("./productos.txt");

  /* const prod1 = {
    title: "Taza",
    price: 100,
    thumbnail: "https://producto1.com/123",
  };
  const prod2 = {
    title: "Plato",
    price: 200,
    thumbnail: "https://producto2.com/1234",
  };

  const prod3 = {
    title: "Cubiertos",
    price: 300,
    thumbnail: "https://producto3.com/12345",
  };

  await product.save(prod1);
  await product.save(prod2);
  await product.save(prod3); */

  console.log("Muestro todos los productos");
  let allProducts = await product.getAll();
  console.log(allProducts);

  const idToSearch = 1;
  console.log(`Muestro el producto con id ${idToSearch}`);
  let productById = await product.getById(idToSearch);
  console.log(productById);

  /* console.log("Elimino el producto con id 1");
  await product.deleteById(1);
  let allProductsAfterDelete = await product.getAll();
  console.log(allProductsAfterDelete); */
}

main();
