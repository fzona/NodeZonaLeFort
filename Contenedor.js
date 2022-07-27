const { promises: fs } = require("fs");

class Contenedor {
  constructor(ruta) {
    this.ruta = ruta;
  }

  async save(obj) {
    try {
      const products = await fs.readFile(this.ruta, "utf8");
      if (products.length === 0) {
        obj.id = "1";
      } else {
        obj.id = products[products.length - 1].id + 1;
      }
      const productsArray = JSON.parse(products);
      productsArray.push(obj);
      await fs.writeFile(this.ruta, JSON.stringify(productsArray));
    } catch (error) {
      console.log(error);
    }
  }

  async getById(id) {
    const products = await this.getAll();
    const productByID = products.find((product) => product.id === id);
    return productByID;
  }
  async getAll() {
    try {
      const products = await fs.readFile(this.ruta, "utf8");
      return JSON.parse(products);
    } catch (error) {
      return [];
    }
  }
  async deleteById(id) {
    try {
      let contenido = await fs.readFile(this.ruta, "utf-8");
      const obj = JSON.parse(contenido);
      const findProd = obj.find((item) => item.id === id);
      if (findProd) {
        obj.splice(obj.indexOf(findProd), 1);
        contenido = JSON.stringify(obj, null, 2);
        await fs.writeFile(this.ruta, contenido);
      }
    } catch (error) {
      console.log(error);
    }
  }
  async deleteAll() {
    try {
      const products = await fs.readFile(this.ruta, "utf8");
      await fs.writeFile(this.ruta, "[]");
    } catch (error) {
      return [];
    }
  }
}

module.exports = Contenedor;
