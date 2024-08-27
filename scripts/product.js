class Product {
  constructor(id, title, price, stock, images, onsale, supplier) {
    this.id = id;
    this.title = title;
    this.price = price;
    this.stock = stock;
    this.images = images;
    this.onsale = onsale;
    this.supplier = supplier;
  }

  get getSupplier() {
    return this.supplier;
  }

  set setSupplier(newName) {
    this.supplier = newName;
  }

  sellUnits(units) {
    if (this.stock >= units) {
      this.stock = this.stock - units;
    } else {
      console.log("Error, stock no disponible.");
    }
  }
}

const prod1 = new Product(
  "MAC-2024-1",
  "Mac Mini Intel",
  4200,
  12,
  [],
  true,
  "Lenin"
);

const prod2 = new Product(
  "MAC-2024-2",
  "Mac Mini Intel",
  2500,
  12,
  [],
  true,
  "Lenin"
);

const prod3 = new Product(
  "MAC-2024-3",
  "Mac Mini Intel",
  3500,
  12,
  [],
  true,
  "Lenin"
);

const prod4 = new Product(
  "MAC-2024-4",
  "Mac Mini Intel",
  4000,
  12,
  [],
  true,
  "Lenin"
);

const products = [prod1, prod2, prod3, prod4];

for(let i = 0; i < products.length; i++){
  console.log(products[i]);
}

const prod0 = new Product(
  "MAC-2024-0",
  "Mac Mini Intel",
  3500,
  12,
  [],
  true,
  "Lenin"
);

const prod5 = new Product(
  "MAC-2024-5",
  "Mac Mini Intel",
  4000,
  12,
  [],
  true,
  "Lenin"
);

products.unshift(prod0);
products.push(prod5);

for(let i = 0; i < products.length; i++){
  console.log(products[i]);
}