class Product {
  constructor(id, title, price, color, description, stock, images, onsale, supplier) {
    this.id = id;
    this.title = title;
    this.price = price;
    this.color = color;
    this.description = description;
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