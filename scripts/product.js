class Product {
  constructor(
    id,
    linkToPage,
    linkToImg,
    title,
    subTitle,
    price,
    stock,
    discount,
    supplier,
    taxes
  ) {
    this.id = id;
    this.linkToPage = linkToPage;
    this.linkToImg = linkToImg;
    this.title = title;
    this.subTitle = subTitle;
    this.price = price;
    this.stock = stock;
    this.discount = discount;
    this.supplier = supplier;
    this.taxes = taxes;
  }
}
