const productSelector = document.getElementById("article-card");

function createCard(product) {
  const formattedPrice = formatPrice(product.price);
  return `
      <article class="product-card">
          <a href="${product.linkToPage}"
            ><img
              class="product-img"
              src="${product.linkToImg}"
              alt="${product.title}"
            />
            <div class="product-info">
              <span class="product-title">${product.title}</span
              ><span class="product-description">${product.subTitle}</span>
              <div class="product-price-block">
                <span class="price">${formattedPrice}</span
                ><span class="discount">${product.discount}% Off</span>
              </div>
              <div class="product-tax-policy">${
                product.taxes ? "Incluye impuestos" : "No incluye impuestos"
              }</div>
            </div></a
          >
        </article>
   `;
}

function formatPrice(price) {
  return parseFloat(price).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
}

async function loadExcelFile() {
  try {
    const response = await fetch("/data/products.xlsx");
    const arrayBuffer = await response.arrayBuffer();
    const workbook = XLSX.read(arrayBuffer, { type: "array" });
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];
    const json = XLSX.utils.sheet_to_json(sheet);

    const products = json.map((row) => ({
      id: row.id,
      linkToPage: row.linkToPage,
      linkToImg: row.linkToImg,
      title: row.title,
      subTitle: row.subTitle,
      price: row.price,
      discount: row.discount,
      taxes: row.taxes,
    }));

    showProductCards(products);
  } catch (error) {
    console.error("Error loading or processing the Excel file", error);
  }
}

function showProductCards(products) {
  const productsTemplate = products.map(createCard).join("");
  productSelector.innerHTML = productsTemplate;
}

loadExcelFile();
