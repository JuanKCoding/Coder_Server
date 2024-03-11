class ProductManager {
  static #products = [];
  create(data) {
    const product = {
      id:
        ProductManager.#products.length === 0
          ? 1
          : ProductManager.#products[ProductManager.#products.length - 1].id + 1,
          title: data.title,
          photo: data.photo,
          category : data.category,
          price: data.price,
          stock: data.stock
    };
    ProductManager.#products.push(product);
    console.log("Producto Creado");
  }
  read(){
    return ProductManager.#products;
  }
}

const gestorDeProductos = new ProductManager()
gestorDeProductos.create({
  title: "Memoria Ram",
  photo : "Memoria_Ram.jpg" ,
    category: "Accesorio de computadora",
    price: 35000,
    stock: 200
})
gestorDeProductos.create({
  title: "GTX NVIDIA 1660 SUPER",
  photo : "NVIDIA_1660.jpg" ,
    category: "Accesorio de computadora",
    price: 150000,
    stock: 20
}) 
gestorDeProductos.create({
  title: "Ryzen 5 5600G",
  photo : "Ryzen5_5600G.jpg" ,
    category: "Accesorio de computadora",
    price: 187000,
    stock: 50
}) 
gestorDeProductos.create({
  title: "Fuente Sentey 650W Plus White",
  photo : "Sentey_650.jpg" ,
    category: "Accesorio de computadora",
    price: 57000,
    stock: 130
}) 
gestorDeProductos.create({
  title: "MotherBoard Asus Prime b520 ii",
  photo : "AsusPrime_b520.jpg" ,
    category: "Accesorio de computadora",
    price: 110000,
    stock: 150
}) 

console.log(gestorDeProductos.read())