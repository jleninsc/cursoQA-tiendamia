const productSelector = document.getElementById("article-card");

const products = [
  { 
    title: "Apple watch Series 8 GPS", 
    description: "Smartwatch de última generación", 
    price: "$400.00", 
    discount: "10% Off", 
    linkTo: "pages/detallesProducto.html", 
    imgSrc: "/images/products/Apple-watch-Series-8-GPS.jpg" 
  },
  { 
    title: "MacBook Air 13 Chip M2", 
    description: "Laptop ultradelgada con chip M2", 
    price: "$1,200.00", 
    discount: "15% Off", 
    linkTo: "pages/detallesProducto.html", 
    imgSrc: "/images/products/MacBook-Air-13-Chip-M2.jpg" 
  },
  { 
    title: "iPad Pro 12.9 6ta Generación con Chip M2", 
    description: "Tablet avanzada con chip M2", 
    price: "$1,000.00", 
    discount: "20% Off", 
    linkTo: "pages/detallesProducto.html", 
    imgSrc: "/images/products/iPad-Pro-12.9-6ta-Generación-con-Chip-M2.jpg" 
  },
  { 
    title: "iPhone 15 Pro Max", 
    description: "Último modelo de iPhone", 
    price: "$1,500.00", 
    discount: "5% Off", 
    linkTo: "pages/detallesProducto.html", 
    imgSrc: "/images/products/iPhone-15-Pro-Max.jpg" 
  },
  { 
    title: "AirPods Pro", 
    description: "Auriculares inalámbricos", 
    price: "$250.00", 
    discount: "25% Off", 
    linkTo: "pages/detallesProducto.html", 
    imgSrc: "/images/products/AirPods-Pro.jpg" 
  },
];

for (let product of products) {
    const element = document.createElement("article");
    element.className = "product-card";

    const link = document.createElement("a");
    link.href = product.linkTo;

    const img = document.createElement("img");
    img.className = "product-img";
    img.src = product.imgSrc;
    img.alt = product.title;

    const infoDiv = document.createElement("div");
    infoDiv.className = "product-info";

    const titleSpan = document.createElement("span");
    titleSpan.className = "product-title";
    titleSpan.textContent = product.title;

    const descriptionSpan = document.createElement("span");
    descriptionSpan.className = "product-description";
    descriptionSpan.textContent = product.description;

    const priceBlockDiv = document.createElement("div");
    priceBlockDiv.className = "product-price-block";

    const priceSpan = document.createElement("span");
    priceSpan.className = "price";
    priceSpan.textContent = product.price;

    const discountSpan = document.createElement("span");
    discountSpan.className = "discount";
    discountSpan.textContent = product.discount;

    priceBlockDiv.appendChild(priceSpan);
    priceBlockDiv.appendChild(discountSpan);

    const taxPolicyDiv = document.createElement("div");
    taxPolicyDiv.className = "product-tax-policy";
    taxPolicyDiv.textContent = "Incluye impuestos";

    infoDiv.appendChild(titleSpan);
    infoDiv.appendChild(descriptionSpan);
    infoDiv.appendChild(priceBlockDiv);
    infoDiv.appendChild(taxPolicyDiv);

    link.appendChild(img);
    link.appendChild(infoDiv);

    element.appendChild(link);

    productSelector.appendChild(element);
}
